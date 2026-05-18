import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  StyledCalendlyBox,
  StyledContainer,
  StyledHeader,
  StyledLeadGenSection,
  StyledsubHeader,
  StyledFormWrap,
  StyledPolicyNote,
  HubspotOverrides,
} from "./styles";

import calendarIcon from "../../assets/icons/calendly.png";
import { Button } from "../../components/Button";

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  getResponse: (widgetId?: string) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function Contact(): JSX.Element {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const turnstileMountRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const cfSiteKey = import.meta.env.VITE_CF_SITEKEY?.trim() ?? "";
  const isSubmitting = status === "loading";

  useEffect(() => {
    if (!cfSiteKey || !turnstileMountRef.current) return;

    const renderWidget = () => {
      if (!window.turnstile || !turnstileMountRef.current || turnstileWidgetIdRef.current) return;

      turnstileWidgetIdRef.current = window.turnstile.render(turnstileMountRef.current, {
        sitekey: cfSiteKey,
        theme: "dark",
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit']"
    );

    if (existingScript) {
      existingScript.addEventListener("load", renderWidget);
      renderWidget();
      return () => {
        existingScript.removeEventListener("load", renderWidget);
      };
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderWidget);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", renderWidget);
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [cfSiteKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!cfSiteKey) {
      setStatus("error");
      setErrorMsg("Captcha is not configured. Please try again later.");
      return;
    }

    const widgetId = turnstileWidgetIdRef.current ?? undefined;
    const token = window.turnstile?.getResponse(widgetId) ?? "";
    if (!token) {
      setStatus("error");
      setErrorMsg("Please complete the captcha challenge.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstname") ?? "");
    const lastName = String(formData.get("lastname") ?? "");
    const company = String(formData.get("company") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const payload = {
      firstName,
      lastName,
      company,
      email,
      phone,
      message,
      firstname: firstName,
      lastname: lastName,
      consent: true,
      pageUri: window.location.href,
      pageName: "Contact",
      companyWebsite: "",
      turnstileToken: token,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || result.ok !== true) {
        setStatus("error");
        setErrorMsg(result.error || "Failed to submit form");
        if (window.turnstile) window.turnstile.reset(widgetId);
        return;
      }

      setStatus("success");
      form.reset();
      if (window.turnstile) window.turnstile.reset(widgetId);
    } catch {
      setStatus("error");
      const message = "Something went wrong. Please try again.";
      setErrorMsg(message);
      if (window.turnstile) window.turnstile.reset(widgetId);
    }
  };

  return (
    <StyledLeadGenSection id="contact">
      <StyledHeader>Not sure where to start?</StyledHeader>
      <StyledsubHeader>Let's talk. I'll help you shape your marketing journey</StyledsubHeader>

      <StyledContainer>
        {/* CONTACT FORM */}
        <div>
          <HubspotOverrides>
            <StyledFormWrap>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-row field-row-two">
                  <div className="field-group">
                    <label htmlFor="firstname">First Name*</label>
                    <input id="firstname" type="text" name="firstname" required />
                  </div>
                  <div className="field-group">
                    <label htmlFor="lastname">Last Name*</label>
                    <input id="lastname" type="text" name="lastname" required />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="company">Company Name*</label>
                  <input id="company" type="text" name="company" required />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email*</label>
                  <input id="email" type="email" name="email" required />
                </div>

                <div className="field-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" name="phone" />
                </div>

                <div className="field-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} />
                </div>

                <input
                  className="hp-field"
                  type="text"
                  name="companyWebsite"
                  value=""
                  readOnly
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="turnstile-wrap" ref={turnstileMountRef} />

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {status === "success" ? (
                <p className="form-message form-message-success" role="status" aria-live="polite">
                  Thanks for your message. I’ll get back to you within 24 hours.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="form-message form-message-error" role="alert">
                  {errorMsg}
                </p>
              ) : null}
            </StyledFormWrap>
          </HubspotOverrides>

          <StyledPolicyNote>
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </StyledPolicyNote>
        </div>

        {/* CALENDLY */}
        <StyledCalendlyBox>
          <img src={calendarIcon} alt="Calendar Icon" />
          <div style={{ padding: 30 }}>
            <p>
              Want to chat about a project?
              <br />
              Use the Calendly link to book a meeting with me.
            </p>
            <a
              href="https://calendly.com/caruso-martech/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="button">Book</Button>
            </a>
          </div>
        </StyledCalendlyBox>
      </StyledContainer>
    </StyledLeadGenSection>
  );
}
