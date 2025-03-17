import { Component, ErrorInfo, ReactNode } from 'react';

// This component is used to catch uncontrolled errors globally

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:Error): ErrorBoundaryState {
    console.log('Derived error', error)
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Error:', error);
    console.log('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! There was an error.</h1>;
    }

    return this.props.children;
  }
}
