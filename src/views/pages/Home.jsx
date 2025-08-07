import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from '../componets/ThemeToggle'
import LanguageSelector from '../componets/LanguageSelector'
import CVDownloader from '../componets/CVDownloader'
import '../componets/styles/portfolio.css'

export default function Home() {
  const { t } = useTranslation()
  
  useEffect(() => {
    // Efecto de desvanecimiento para elementos
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    }, observerOptions)

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll')
    elementsToAnimate.forEach(el => observer.observe(el))

    return () => {
      elementsToAnimate.forEach(el => observer.unobserve(el))
    }
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fas fa-code me-2"></i>
            Holy Services S.A.S
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">{t('nav.home')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre-mi" onClick={() => scrollToSection('sobre-mi')}>{t('nav.about')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos" onClick={() => scrollToSection('proyectos')}>{t('nav.projects')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto" onClick={() => scrollToSection('contacto')}>{t('nav.contact')}</a>
              </li>
              <CVDownloader />
            </ul>
            
            <div className="controls-wrapper">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  {t('hero.title')}
                  <br />
                  {t('hero.subtitle')} <span style={{color: '#E8FFF6'}}>{t('hero.dataEngineering')}</span>
                </h1>
                <h2 className="hero-subtitle">{t('hero.role')}</h2>
                <p className="hero-description">
                  {t('hero.description')}
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">{t('hero.stats.experience')}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">{t('hero.stats.projects')}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">99%</span>
                    <span className="stat-label">{t('hero.stats.satisfaction')}</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <a href="#proyectos" className="btn-primary-custom" onClick={() => scrollToSection('proyectos')}>
                    <i className="fas fa-rocket me-2"></i>
                    {t('hero.buttons.viewProjects')}
                  </a>
                  <a href="#contacto" className="btn-secondary-custom" onClick={() => scrollToSection('contacto')}>
                    <i className="fas fa-envelope me-2"></i>
                    {t('hero.buttons.contact')}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <i className="fas fa-database" style={{fontSize: '4rem', marginBottom: '1rem', opacity: 0.8}}></i>
                  <div style={{fontSize: '1.1rem', opacity: 0.9}}>
                    <div className="mb-2">
                      <i className="fas fa-database me-2"></i> SQL Server
                      <span className="float-end">95%</span>
                    </div>
                    <div className="mb-2">
                      <i className="fab fa-python me-2"></i> Python
                      <span className="float-end">85%</span>
                    </div>
                    <div className="mb-2">
                      <i className="fab fa-docker me-2"></i> Docker
                      <span className="float-end">80%</span>
                    </div>
                    <div>
                      <i className="fas fa-project-diagram me-2"></i> DevOps
                      <span className="float-end">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="about-section">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="skill-card animate-on-scroll">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="skill-title">{t('about.skills.database.title')}</h3>
                <p className="skill-description">
                  {t('about.skills.database.description')}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card animate-on-scroll">
                <div className="skill-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="skill-title">{t('about.skills.devops.title')}</h3>
                <p className="skill-description">
                  {t('about.skills.devops.description')}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card animate-on-scroll">
                <div className="skill-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="skill-title">{t('about.skills.analysis.title')}</h3>
                <p className="skill-description">
                  {t('about.skills.analysis.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="projects-section">
        <div className="container">
          <div className="animate-on-scroll">
            <h2 className="section-title">{t('projects.title')}</h2>
            <p className="section-subtitle">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="project-card animate-on-scroll">
                <div className="project-image">
                  <i className="fas fa-server"></i>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{t('projects.items.backup.title')}</h3>
                  <p className="project-description">
                    {t('projects.items.backup.description')}
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">SQL Server</span>
                    <span className="project-tag">PowerShell</span>
                    <span className="project-tag">Azure</span>
                    <span className="project-tag">Monitoring</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <i className="fab fa-github me-1"></i> {t('projects.links.code')}
                    </a>
                    <a href="#" className="project-link">
                      <i className="fas fa-external-link-alt me-1"></i> {t('projects.links.demo')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card animate-on-scroll">
                <div className="project-image">
                  <i className="fab fa-docker"></i>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{t('projects.items.containerization.title')}</h3>
                  <p className="project-description">
                    {t('projects.items.containerization.description')}
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">Docker</span>
                    <span className="project-tag">Kubernetes</span>
                    <span className="project-tag">Jenkins</span>
                    <span className="project-tag">GitLab CI</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <i className="fab fa-github me-1"></i> {t('projects.links.code')}
                    </a>
                    <a href="#" className="project-link">
                      <i className="fas fa-external-link-alt me-1"></i> {t('projects.links.demo')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card animate-on-scroll">
                <div className="project-image">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{t('projects.items.dashboard.title')}</h3>
                  <p className="project-description">
                    {t('projects.items.dashboard.description')}
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">Grafana</span>
                    <span className="project-tag">InfluxDB</span>
                    <span className="project-tag">Telegraf</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <i className="fab fa-github me-1"></i> {t('projects.links.code')}
                    </a>
                    <a href="#" className="project-link">
                      <i className="fas fa-external-link-alt me-1"></i> {t('projects.links.demo')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="text-center">
            <h3 style={{marginBottom: '1rem', color: 'white'}}>{t('footer.title')}</h3>
            <p style={{color: '#9CA3AF', marginBottom: '2rem'}}>
              {t('footer.subtitle')}
            </p>
            <div className="social-links">
              <a href="mailto:brandon.gonzalez@ejemplo.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-text">
            <p>&copy; 2025 Brandon Gonzalez. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
