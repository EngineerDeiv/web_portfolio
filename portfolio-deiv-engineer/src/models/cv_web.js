/**
 * Modelo para el manejo de descargas de CV
 * Contiene la lógica para descargar currículums en diferentes idiomas
 */

class CVModel {
  constructor() {
    this.cvFiles = {
      spanish: '/assets/cv_esp.pdf',
      english: '/assets/cv_eng/CV_SoftwareEngineer.pdf'
    };
  }

  /**
   * Descarga el CV en el idioma especificado
   * @param {string} language - 'spanish' o 'english'
   */
  downloadCV(language) {
    try {
      const filePath = this.cvFiles[language];
      if (!filePath) {
        throw new Error(`Idioma no válido: ${language}`);
      }

      // Crear un enlace temporal para la descarga
      const link = document.createElement('a');
      link.href = filePath;
      link.download = language === 'spanish' ? 'CV_Brandon_Gonzalez_ES.pdf' : 'CV_Brandon_Gonzalez_EN.pdf';
      link.target = '_blank';
      
      // Agregar al DOM, hacer clic y remover
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Log para seguimiento
      console.log(`CV descargado: ${language}`);
      
      return true;
    } catch (error) {
      console.error('Error al descargar CV:', error);
      return false;
    }
  }

  /**
   * Obtiene la lista de idiomas disponibles para el CV
   */
  getAvailableLanguages() {
    return [
      { code: 'spanish', name: 'Español', flag: '🇪🇸' },
      { code: 'english', name: 'English', flag: '🇺🇸' }
    ];
  }

  /**
   * Verifica si existe un CV para el idioma especificado
   * @param {string} language 
   */
  hasCV(language) {
    return Object.prototype.hasOwnProperty.call(this.cvFiles, language);
  }

  /**
   * Obtiene la ruta del CV para un idioma específico
   * @param {string} language 
   */
  getCVPath(language) {
    return this.cvFiles[language] || null;
  }
}

// Exportar una instancia singleton
const cvModel = new CVModel();
export default cvModel;
