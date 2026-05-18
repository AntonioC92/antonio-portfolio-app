import styled from "styled-components";
import { colors } from "../../styles/variables";
import { device } from "../../styles/mediaQueries";

/* ============================= */
/* HEADERS */
/* ============================= */

export const StyledHeader = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 50px;
  color: ${colors.light};

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

export const StyledsubHeader = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
  color: ${colors.light};

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

/* ============================= */
/* SECTION */
/* ============================= */

export const StyledLeadGenSection = styled.section`
  padding: 80px 100px;

  @media ${device.tablet} {
    padding: 60px 60px;
  }

  @media ${device.mobile} {
    padding: 40px 24px;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 40px;
  align-items: start;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

/* ============================= */
/* HUBSPOT WRAPPER */
/* ============================= */

/*
  IMPORTANT:
  HubSpot form renders inside an iframe.
  We CANNOT safely style inside it.
  We only control wrapper + iframe sizing.
*/

export const HubspotOverrides = styled.div`
  width: 100%;
`;

export const StyledFormWrap = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 28px;
  border-radius: 16px;
  background: rgba(8, 16, 30, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);

  @media ${device.mobile} {
    padding: 20px;
  }

  .contact-form {
    display: grid;
    gap: 18px;
    width: 100%;
  }

  .field-row {
    width: 100%;
  }

  .field-row-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  @media ${device.mobile} {
    .field-row-two {
      grid-template-columns: 1fr;
    }
  }

  .field-group {
    display: grid;
    gap: 8px;
    width: 100%;
  }

  label {
    color: ${colors.light};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    color: ${colors.light};
    font-size: 16px;
    line-height: 1.4;
    padding: 12px 14px;
  }

  input {
    min-height: 44px;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #ff7a59;
    box-shadow: 0 0 0 2px rgba(255, 122, 89, 0.2);
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  .hp-field {
    display: none;
  }

  .turnstile-wrap {
    min-height: 65px;
  }

  button {
    justify-self: end;
    width: auto;
    min-width: 180px;
    min-height: 46px;
  }

  button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  .form-message {
    margin: 0 0 14px;
    padding: 12px 14px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
  }

  .form-message-success {
    background: rgba(20, 130, 70, 0.18);
    border: 1px solid rgba(20, 170, 90, 0.5);
    color: #9ef1bc;
  }

  .form-message-error {
    background: rgba(150, 35, 35, 0.2);
    border: 1px solid rgba(220, 70, 70, 0.55);
    color: #ffc2c2;
  }
`;

/* ============================= */
/* POLICY NOTE */
/* ============================= */

export const StyledPolicyNote = styled.p`
  font-size: 0.9rem;
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.75);

  a {
    color: #ff7a59;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

/* ============================= */
/* CALENDLY BOX */
/* ============================= */

export const StyledCalendlyBox = styled.div`
  background-color: white;
  border-radius: 16px;
  text-align: center;
  overflow: hidden;

  img {
    width: 100%;
    display: block;
  }

  p {
    font-size: 16px;
    color: ${colors.text};
  }
`;
