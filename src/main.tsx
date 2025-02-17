import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './Components/ErrorBoundarie.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
