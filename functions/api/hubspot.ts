interface HubSpotField {
  name: string;
  value: string;
}

interface HubSpotSubmission {
  fields: HubSpotField[];
  context: {
    pageUri: string;
    pageName: string;
  };
}

interface RequestBody {
  name: string;
  email: string;
  message?: string;
}

export async function onRequestPost(context: {
  request: Request;
  env: Record<string, string>;
}) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://carusomartech.com',
    'content-type': 'application/json',
    'cache-control': 'no-store',
  };

  try {
    const body: RequestBody = await request.json();
    const { name, email, message } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const portalId = env.HUBSPOT_PORTAL_ID;
    // Use a dedicated chat form if configured, fall back to the main contact form
    const formId = env.HUBSPOT_CHAT_FORM_ID ?? env.HUBSPOT_FORM_ID;

    if (!portalId || !formId) {
      return new Response(JSON.stringify({ error: 'CRM not configured.' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const fields: HubSpotField[] = [
      { name: 'firstname', value: name },
      { name: 'email', value: email },
    ];

    if (message?.trim()) {
      fields.push({ name: 'message', value: message.trim() });
    }

    const submission: HubSpotSubmission = {
      fields,
      context: {
        pageUri: 'https://carusomartech.com',
        pageName: 'Chat Widget',
      },
    };

    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(submission),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error('HubSpot error:', res.status, errText);
      return new Response(
        JSON.stringify({ error: 'Failed to submit. Please try again.' }),
        { status: 502, headers: corsHeaders }
      );
    }

    return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
  } catch (err) {
    console.error('HubSpot function error:', err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: corsHeaders }
    );
  }
}
