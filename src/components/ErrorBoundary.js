import { Component } from 'react';

class ErrorBoundary extends Component {
  comonentDidCatch(error, info) {
    console.log('error', error);
    console.log('info', info);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
