import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selector de idioma"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
        <i className={`fas fa-chevron-down ${isOpen ? 'rotate-180' : ''}`} 
           style={{ transition: 'transform 0.3s ease' }}></i>
      </button>
      
      <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
        {languages.map(language => (
          <div
            key={language.code}
            className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(language.code)}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelector
