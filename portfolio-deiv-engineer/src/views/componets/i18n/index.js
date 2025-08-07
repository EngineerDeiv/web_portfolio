import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  es: {
    translation: {
      // Navigation
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        contact: "Contacto"
      },
      
      // Hero Section
      hero: {
        title: "Listo para lanzar",
        subtitle: "tu carrera en",
        dataEngineering: "Data Engineering",
        role: "Administrador de BD & DevOps Jr",
        description: "Servicios premium de análisis de datos que necesitas para construir soluciones rápidas y exitosas. Comienza con pipelines de datos en minutos.",
        stats: {
          experience: "Años experiencia",
          projects: "Proyectos completados",
          satisfaction: "Satisfacción cliente"
        },
        buttons: {
          viewProjects: "Ver mis proyectos",
          contact: "Contáctame"
        }
      },

      // About Section
      about: {
        title: "Sobre mí",
        subtitle: "Especialista en administración de bases de datos y DevOps, enfocado en crear infraestructuras escalables y eficientes.",
        skills: {
          database: {
            title: "Database Administration",
            description: "Gestión avanzada de bases de datos SQL Server, MySQL y PostgreSQL. Optimización de consultas, backup strategies y alta disponibilidad."
          },
          devops: {
            title: "DevOps & Automation",
            description: "Implementación de CI/CD pipelines, containerización con Docker, infraestructura como código y monitoreo de sistemas."
          },
          analysis: {
            title: "Data Analysis",
            description: "Análisis de datos con Python y SQL, creación de reportes automáticos y dashboards para toma de decisiones empresariales."
          }
        }
      },

      // Projects Section
      projects: {
        title: "Proyectos Destacados",
        subtitle: "Una selección de proyectos que demuestran mi experiencia en administración de datos y DevOps.",
        items: {
          backup: {
            title: "Sistema de Backup Automatizado",
            description: "Implementación de un sistema completo de backup y recovery para bases de datos críticas con monitoreo 24/7."
          },
          containerization: {
            title: "Containerización de Aplicaciones",
            description: "Migración de aplicaciones legacy a contenedores Docker con orchestración Kubernetes y CI/CD automatizado."
          },
          dashboard: {
            title: "Dashboard de Métricas",
            description: "Dashboard interactivo para monitoreo de performance de bases de datos y métricas de infraestructura en tiempo real."
          }
        },
        links: {
          code: "Código",
          demo: "Demo"
        }
      },

      // Footer
      footer: {
        title: "¡Trabajemos juntos!",
        subtitle: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.",
        copyright: "Todos los derechos reservados."
      }
    }
  },

  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      
      // Hero Section
      hero: {
        title: "Ready to launch",
        subtitle: "your career in",
        dataEngineering: "Data Engineering",
        role: "DB Administrator & DevOps Jr",
        description: "Premium data analysis services you need to build fast and successful solutions. Start with data pipelines in minutes.",
        stats: {
          experience: "Years experience",
          projects: "Completed projects",
          satisfaction: "Client satisfaction"
        },
        buttons: {
          viewProjects: "View my projects",
          contact: "Contact me"
        }
      },

      // About Section
      about: {
        title: "About me",
        subtitle: "Database administration and DevOps specialist, focused on creating scalable and efficient infrastructures.",
        skills: {
          database: {
            title: "Database Administration",
            description: "Advanced management of SQL Server, MySQL and PostgreSQL databases. Query optimization, backup strategies and high availability."
          },
          devops: {
            title: "DevOps & Automation",
            description: "Implementation of CI/CD pipelines, Docker containerization, infrastructure as code and system monitoring."
          },
          analysis: {
            title: "Data Analysis",
            description: "Data analysis with Python and SQL, creation of automated reports and dashboards for business decision making."
          }
        }
      },

      // Projects Section
      projects: {
        title: "Featured Projects",
        subtitle: "A selection of projects that demonstrate my experience in data administration and DevOps.",
        items: {
          backup: {
            title: "Automated Backup System",
            description: "Implementation of a complete backup and recovery system for critical databases with 24/7 monitoring."
          },
          containerization: {
            title: "Application Containerization",
            description: "Migration of legacy applications to Docker containers with Kubernetes orchestration and automated CI/CD."
          },
          dashboard: {
            title: "Metrics Dashboard",
            description: "Interactive dashboard for real-time database performance monitoring and infrastructure metrics."
          }
        },
        links: {
          code: "Code",
          demo: "Demo"
        }
      },

      // Footer
      footer: {
        title: "Let's work together!",
        subtitle: "Do you have a project in mind? I'd love to hear about it.",
        copyright: "All rights reserved."
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
