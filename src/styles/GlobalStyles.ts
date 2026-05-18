import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: transform 0.3s ease-in-out;
  }

  .grecaptcha-badge { visibility: hidden; }

  body {
    font-family: "Montserrat Variable", sans-serif;
    background: #212121;
    font-size: 14px;
  }
    
  body a {
    color: #1199FA;
  }

  a {
      color: #007bff;
      text-decoration: none;
      background-color: transparent;
  }

  p {
    line-height: 1.5em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  .Toastify__toast--error {
    background-color: #2b2c31 !important;
    color: #d9d9e3 !important;
  }

  .Toastify__toast--error .Toastify__toast-icon svg {
    filter: hue-rotate(340deg) brightness(1.2);
  }

  .Toastify__progress-bar--error {
    background: #d95169 !important;
  }

  .Toastify__toast--success {
    background-color: #2b2c31 !important;
    color: #d9d9e3 !important; 
  }

  .Toastify__toast--success .Toastify__toast-icon svg {
    filter: hue-rotate(71deg) brightness(1.2)
  }

  .Toastify__progress-bar--success {
    background: #44c3c3 !important;
  }

`;

export default GlobalStyles;
