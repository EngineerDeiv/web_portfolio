import { useState } from 'react'
import cvModel from '../../models/cv_web'

export default function CVDownloader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = (language) => {
    const success = cvModel.downloadCV(language)
    if (success) {
      setIsOpen(false)
      // Opcional: mostrar notificación de éxito
      console.log(`Descargando CV en ${language}`)
    } else {
      // Opcional: mostrar notificación de error
      console.error('Error al descargar el CV')
    }
  }

  const languages = cvModel.getAvailableLanguages()

  return (
    <li 
      className="nav-item cv-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a className="nav-link cv-toggle" href="#">
        <i className="fas fa-file-pdf me-1"></i>
        Currículum
        <i className="fas fa-chevron-down ms-1"></i>
      </a>
      
      <div className={`cv-dropdown-menu ${isOpen ? 'show' : ''}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className="cv-dropdown-item"
            onClick={(e) => {
              e.preventDefault()
              handleDownload(lang.code)
            }}
          >
            <span className="flag-icon">{lang.flag}</span>
            <span className="lang-name">{lang.name}</span>
            <i className="fas fa-download ms-auto"></i>
          </button>
        ))}
      </div>
    </li>
  )
}
