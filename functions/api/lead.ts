type Env = {
  HUBSPOT_PORTAL_ID?: string;
  HUBSPOT_FORM_ID?: string;
  VITE_CF_SECRET?: string;
};

type JsonRecord = Record<string, unknown>;
type RateLimitEntry = { count: number; windowStart: number };
type TurnstileVerificationResponse = {
  success?: boolean;
  "error-codes"?: string[];
};

const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ipRequestCounts = new Map<string, RateLimitEntry>();

function buildCorsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get("Origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(
  request: Request,
  body: JsonRecord,
  status = 200,
  extraHeaders: HeadersInit = {}
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...buildCorsHeaders(request),
      ...extraHeaders,
    },
  });
}

function getString(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

function getClientIp(request: Request): string {
  const cfIp = request.headers.get("CF-Connecting-IP");
  if (cfIp) return cfIp.trim();

  const xForwardedFor = request.headers.get("X-Forwarded-For");
  if (!xForwardedFor) return "unknown";

  const [firstIp] = xForwardedFor.split(",");
  return (firstIp || "unknown").trim();
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = ipRequestCounts.get(ip);

  if (!existing || now - existing.windowStart >= RATE_LIMIT_WINDOW_MS) {
    ipRequestCounts.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  ipRequestCounts.set(ip, existing);
  return false;
}

export const onRequest = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) => {
  if (request.method === "OPTIONS") {
    return json(request, { ok: true });
  }

  if (request.method !== "POST") {
    return json(request, { ok: false, reason: "method_not_allowed", error: "Method not allowed" }, 405, {
      Allow: "POST, OPTIONS",
    });
  }

  let payload: JsonRecord;
  try {
    const parsed = await request.json();
    payload = parsed && typeof parsed === "object" ? (parsed as JsonRecord) : {};
  } catch {
    return json(request, { ok: false, reason: "invalid_json_body", error: "Invalid JSON body" }, 400);
  }

  const companyWebsite = getString(payload.companyWebsite);
  const website = getString(payload.website);
  if (companyWebsite || website) {
    return json(request, { ok: true });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return json(request, { ok: false, reason: "rate_limited" }, 429);
  }

  const turnstileSecret = getString(env.VITE_CF_SECRET);
  if (!turnstileSecret) {
    return json(
      request,
      {
        ok: false,
        reason: "missing_turnstile_config",
        error: "Missing VITE_CF_SECRET",
      },
      500
    );
  }

  const turnstileToken = getString(payload.turnstileToken);
  if (!turnstileToken) {
    return json(
      request,
      {
        ok: false,
        reason: "missing_turnstile_token",
        error: "Captcha token is required",
      },
      400
    );
  }

  let turnstileVerification: Response;
  try {
    turnstileVerification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: clientIp,
      }).toString(),
    });
  } catch (error) {
    return json(
      request,
      {
        ok: false,
        reason: "turnstile_request_failed",
        error: "Captcha verification request failed",
        details: String(error).slice(0, 300),
      },
      502
    );
  }

  if (!turnstileVerification.ok) {
    return json(
      request,
      {
        ok: false,
        reason: "turnstile_request_failed",
        error: "Captcha verification failed",
      },
      502
    );
  }

  const turnstileResult = (await turnstileVerification.json()) as TurnstileVerificationResponse;
  if (turnstileResult.success !== true) {
    return json(
      request,
      {
        ok: false,
        reason: "turnstile_verification_failed",
        error: "Captcha verification failed",
        details: (turnstileResult["error-codes"] || []).slice(0, 3).join(", "),
      },
      400
    );
  }

  const firstname = getString(payload.firstname);
  const lastname = getString(payload.lastname);
  const company = getString(payload.company);
  const email = getString(payload.email);
  const consent = payload.consent === true;

  const missingFields: string[] = [];
  if (!firstname) missingFields.push("firstname");
  if (!lastname) missingFields.push("lastname");
  if (!company) missingFields.push("company");
  if (!email) missingFields.push("email");
  if (missingFields.length > 0) {
    return json(
      request,
      {
        ok: false,
        reason: "missing_required_fields",
        error: `Missing required fields: ${missingFields.join(", ")}`,
      },
      400
    );
  }

  if (!consent) {
    return json(request, { ok: false, reason: "consent_required", error: "Consent is required" }, 400);
  }

  if (!email.includes("@")) {
    return json(request, { ok: false, reason: "invalid_email", error: "Valid email is required" }, 400);
  }

  const portalId = env.HUBSPOT_PORTAL_ID;
  const formId = env.HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    return json(
      request,
      {
        ok: false,
        reason: "missing_hubspot_config",
        error: "Missing HUBSPOT_PORTAL_ID or HUBSPOT_FORM_ID",
      },
      500
    );
  }

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
  const body = {
    fields: [
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "company", value: company },
      { name: "email", value: email },
      { name: "phone", value: getString(payload.phone) },
      { name: "message", value: getString(payload.message) },
    ],
    context: {
      pageUri: getString(payload.pageUri),
      pageName: getString(payload.pageName),
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow this website to store and process my personal data.",
      },
    },
  };

  let hubspotResponse: Response;
  try {
    hubspotResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    return json(
      request,
      {
        ok: false,
        reason: "hubspot_request_failed",
        error: "HubSpot request failed",
        details: String(error).slice(0, 500),
      },
      502
    );
  }

  if (!hubspotResponse.ok) {
    const details = (await hubspotResponse.text()).slice(0, 500);
    return json(
      request,
      {
        ok: false,
        reason: "hubspot_request_failed",
        error: "HubSpot request failed",
        details,
      },
      502
    );
  }

  return json(request, { ok: true });
};
