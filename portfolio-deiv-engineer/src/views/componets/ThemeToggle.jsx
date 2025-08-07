import { useTheme } from './hooks/useTheme'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  )
}

export default ThemeToggle
