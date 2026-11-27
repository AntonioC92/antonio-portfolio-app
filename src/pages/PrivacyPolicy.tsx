import { Seo } from '../components/Seo';

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Caruso Martech"
        description="Privacy policy for Caruso Martech, including how personal data is collected, used, and protected."
        canonical="https://carusomartech.com/privacy-policy/"
        ogUrl="https://carusomartech.com/privacy-policy/"
        ogImage="https://carusomartech.com/preview.png"
        twitterImage="https://carusomartech.com/preview.png"
      />
      <section
        style={{
          background: "#121212",
          color: "#f5f5f5",
          minHeight: "100vh",
          paddingTop: "180px",
          paddingBottom: "120px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 1.5rem",
            lineHeight: 1.9,
            fontSize: "1.15rem",
          }}
        >
        <h1
          style={{
            fontSize: "3.6rem",
            color: "#ff7a59",
            textAlign: "center",
            marginBottom: "1.5rem",
            fontWeight: 700,
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: 0.75,
            fontSize: "1rem",
          }}
        >
          Last updated: 28 November 2026
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          Caruso Martech operates
          https://carusomartech.com. This Privacy Policy explains how Caruso
          Martech collects, uses, and protects personal data.
        </p>

        <h2 style={{ marginTop: "3rem", color: "#ff7a59" }}>
          1. Information Collected
        </h2>

        <p style={{ marginBottom: "1.5rem" }}>
          Caruso Martech may collect personal information that you voluntarily provide,
          including your name, email address, company details, and any
          information submitted through contact forms.
        </p>

        <p style={{ marginBottom: "2rem" }}>
          Technical and usage data may also be collected, such as IP address,
          browser type, device information, and interaction data through
          analytics and advertising technologies.
        </p>

        <h2 style={{ marginTop: "3rem", color: "#ff7a59" }}>
          2. How Personal Data Is Used
        </h2>

        <p style={{ marginBottom: "1.5rem" }}>
          Personal data is used to:
        </p>

        <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem" }}>
          <li>Respond to enquiries and provide services</li>
          <li>Improve website functionality and performance</li>
          <li>Measure and optimise marketing and advertising efforts</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 style={{ marginTop: "3rem", color: "#ff7a59" }}>
          3. Third-Party Service Providers
        </h2>

        <p style={{ marginBottom: "2rem" }}>
          Caruso Martech may engage trusted third-party service providers to support
          the operation of this website and its services, including hosting,
          security, analytics, communication, and advertising performance
          measurement. These providers process personal data on behalf of Caruso Martech
          and are required to protect it in accordance with applicable data
          protection laws.
        </p>

        <p style={{ marginBottom: "2rem" }}>
          Booking a call: the booking page at /book uses HubSpot Meetings, a
          scheduling service provided by HubSpot, Inc. The calendar loads only
          after you select &quot;Show available times&quot;. From that point
          HubSpot loads its scheduling page and its own scripts in an embedded
          frame, may set cookies and collect technical data such as IP address
          and browser details, and receives the details you enter to book a call,
          such as your name and email address. Booking details are used to
          arrange and hold the call. HubSpot&apos;s own handling of data is
          described in its{" "}
          <a
            href="https://legal.hubspot.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff7a59" }}
          >
            privacy policy
          </a>
          . To arrange a call without the calendar, email info@carusomartech.com.
        </p>

        <h2 style={{ marginTop: "3rem", color: "#ff7a59" }}>
          4. Legal Basis
        </h2>

        <p style={{ marginBottom: "2rem" }}>
          Personal data is processed based on your consent, the legitimate
          business interests of Caruso Martech, or where required to comply with legal
          obligations.
        </p>

        <h2 style={{ marginTop: "3rem", color: "#ff7a59" }}>
          5. Data Retention
        </h2>

        <p style={{ marginBottom: "2rem" }}>
          Personal data is retained only for as long as necessary to fulfil
          the purposes outlined in this policy or to comply with legal
          requirements.
        </p>

        <h2 style={{ marginTop: "3rem", color: "#ff7a59" }}>
          6. Your Rights
        </h2>

        <p style={{ marginBottom: "1.5rem" }}>
          Under applicable data protection laws, you may have the right to
          request access, correction, deletion, restriction of processing,
          or data portability.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          To exercise your rights, contact:
          <br />
          <strong>info@carusomartech.com</strong>
        </p>

        <h2 style={{ marginTop: "3rem", color: "#ff7a59" }}>
          7. Contact
        </h2>

        <p style={{ marginBottom: "1.5rem" }}>
          The data controller is Antonio Caruso, trading as Caruso Martech.
        </p>

        <p>
          Antonio Caruso<br />
          Caruso Martech<br />
          info@carusomartech.com
        </p>
        </div>
      </section>
    </>
  );
}
