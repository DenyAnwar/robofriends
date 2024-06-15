import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // lifecycle method khusus di React yang dipanggil ketika komponen anak melemparkan error.
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
