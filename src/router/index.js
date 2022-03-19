import React, { } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../utils/GlobalStyles';
import Router from './Router';
import { ToastContainer } from "react-toastify";
import BaseContext from '../context/BaseContext';
import { ErrorBoundary } from 'react-error-boundary';

export default function App() {
  function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload()
        }}
      >
        <BaseContext>
          <GlobalStyles />
          <Router />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
        </BaseContext>
      </ErrorBoundary>
    </BrowserRouter>
  )
}