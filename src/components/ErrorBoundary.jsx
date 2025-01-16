import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ой, щось пішло не так</h1>
          <p>{this.state.error?.message}</p>
          <pre>{this.state.errorInfo?.componentStack}</pre>
          <button onClick={() => window.location.reload()}>Перезавантажити</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
