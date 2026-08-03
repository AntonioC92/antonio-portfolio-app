export const colors = {
  primary: '#ff8164',
  // White text on the raw brand orange (#ff8164) only hits a 2.45:1 contrast
  // ratio, well under the WCAG AA 4.5:1 minimum for normal text. Use this
  // darker shade (contrast 4.80:1 with white text) for any button/badge
  // background that carries white text; keep `primary` for text/accent use
  // on dark backgrounds, where it already passes on its own. Added 2026-08-03
  // per a PageSpeed Insights accessibility audit.
  primaryButtonBg: '#c94618',
  primaryButtonBgHover: '#a83a13',
  tertiary: '#611440',
  text: '#58595b',
  light: '#fff',
};

export const fonts = {
  large: '40px',
  medium: '24px',
  regular: '16px',
  small: '14px',
  tiny: '12px',
};

export const spacing = {
  small: '8px',
  medium: '16px',
  large: '32px',
  extraLarge: '64px',
  section: '128px',
};

export const display = {
  flex: 'flex',
  grid: 'grid',
};

export const position = {
  absolute: 'absolute',
  relative: 'relative',
};

export const roleStyles = {
  system: {
    'margin-right': 'auto',
  },
  human: {
    'border-radius': '18px 18px 0 18px',
    background: '#44c3c32b',
    'margin-left': 'auto',
  },
  ai: {
    'border-radius': '18px 18px 18px 0',
    background: '#9d9dae26',
    'margin-right': 'auto',
  },
  default: {
    border: '1px solid #414146',
  },
};
