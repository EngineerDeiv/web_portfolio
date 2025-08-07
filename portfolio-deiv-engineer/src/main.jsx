import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routers/AppRouter.jsx'
import { ThemeProvider } from './views/componets/contexts/ThemeContext.jsx'
import './views/componets/styles/portfolio.css'
import './views/componets/i18n/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)
