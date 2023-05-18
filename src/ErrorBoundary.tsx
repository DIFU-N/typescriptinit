import React from "react";

export class ErrorBoundary extends React.Component {
    hasError: boolean;
    constructor(props: Function) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: string) {
      // Update state to display fallback UI
      console.log(error);
      
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any): void  {
      // Log the error to an error reporting service
      console.error(error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        // Display fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }
  