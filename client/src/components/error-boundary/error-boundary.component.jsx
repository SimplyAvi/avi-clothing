import React from 'react'
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'
 
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
    componentDidCatch(error, info) {
        console.log(error)
    }


  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
        return (
            <ErrorImageOverlay >
                <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
                <ErrorImageText > "A Dog Ate this Page" </ErrorImageText>
            </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}


export default ErrorBoundary