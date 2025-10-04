"use client";
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Windows 95 Portfolio Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen bg-[#008080] flex items-center justify-center font-win95">
          <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-4 max-w-md">
            <div className="bg-[#000080] text-white px-2 py-1 mb-3 flex items-center">
              <span className="text-sm font-bold">Application Error</span>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                !
              </div>
              <div className="flex-1">
                <p className="text-sm mb-3">
                  The Windows 95 Portfolio has encountered an error and needs to restart.
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  Error: {this.state.error?.message || 'Unknown error occurred'}
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-xs hover:bg-[#dfdfdf] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
                  >
                    Restart
                  </button>
                  <button
                    onClick={() => this.setState({ hasError: false })}
                    className="px-4 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-xs hover:bg-[#dfdfdf] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;