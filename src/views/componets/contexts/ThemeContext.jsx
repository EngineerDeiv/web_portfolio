import { useState, useEffect } from 'react'
import { ThemeContext } from './themeContext'

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Verificar si hay preferencia guardada en localStorage
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
    // Si no hay preferencia, usar la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Guardar preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    
    // Aplicar clase al documento
    if (isDark) {
      document.documentElement.classList.add('dark-theme')
      document.documentElement.classList.remove('light-theme')
    } else {
      document.documentElement.classList.add('light-theme')
      document.documentElement.classList.remove('dark-theme')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
