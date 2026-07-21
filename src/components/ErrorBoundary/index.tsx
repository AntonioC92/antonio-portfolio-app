import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Top-level error boundary. Catches any unhandled render error and shows a
 * plain fallback instead of leaving the page blank.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#111',
            color: '#fff',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Something went wrong.</h2>
          <p style={{ opacity: 0.6, marginBottom: '1.5rem' }}>
            Try refreshing the page. If it keeps happening, contact us.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.75rem',
              background: '#ff8164',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
