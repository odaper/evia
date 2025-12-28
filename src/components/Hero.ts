import type { Translations } from '../i18n'

export function renderHero(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:600px;height:600px;top:-10%;left:-10%;opacity:0.5"></div>
      <div class="orb orb-teal" style="width:500px;height:500px;top:40%;right:-5%;opacity:0.4"></div>
      <div class="orb orb-orange" style="width:400px;height:400px;bottom:-10%;left:20%;opacity:0.4"></div>
      
      <div class="particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <!-- Modern Wavy Background Lines -->
      <div class="hero-waves">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 600C200 500 400 750 720 600C1040 450 1240 700 1540 600" stroke="url(#gradient1)" stroke-width="2" opacity="0.4">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M-100 600C200 500 400 750 720 600C1040 450 1240 700 1540 600; M-100 650C250 550 450 800 720 650C990 500 1190 750 1540 650; M-100 600C200 500 400 750 720 600C1040 450 1240 700 1540 600" />
          </path>
          <path d="M-100 500C250 400 450 650 720 500C990 350 1190 600 1540 500" stroke="url(#gradient2)" stroke-width="2" opacity="0.3">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M-100 500C250 400 450 650 720 500C990 350 1190 600 1540 500; M-100 550C300 450 500 700 720 550C940 400 1140 650 1540 550; M-100 500C250 400 450 650 720 500C990 350 1190 600 1540 500" />
          </path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--logo-blue)" />
              <stop offset="50%" stop-color="var(--logo-teal)" />
              <stop offset="100%" stop-color="var(--logo-blue)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--logo-teal)" />
              <stop offset="50%" stop-color="var(--logo-orange)" />
              <stop offset="100%" stop-color="var(--logo-teal)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div class="hero-grid-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content-centered">
        <!-- Trust Badge -->
        <div class="hero-trust-badge" style="animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
          <div class="avatar-group">
            <div class="avatar" style="background: var(--logo-blue)"></div>
            <div class="avatar" style="background: var(--logo-teal)"></div>
            <div class="avatar" style="background: var(--logo-orange)"></div>
          </div>
          <div class="rating-info">
            <span class="stars">★★★★★</span>
            <span class="rating-text">4.9/5 par nos clients</span>
          </div>
        </div>

        <div class="hero-text-center">
          <h1 class="hero-title-main">${t.hero.title}</h1>
          <p class="hero-subtitle-main">${t.hero.subtitle}</p>
          
          <div class="hero-actions" style="margin-top: 48px; animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.5s;">
            <a href="#services" class="btn btn-primary btn-lg btn-glow" data-scroll="services">
              ${t.hero.cta2}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>

          <!-- Trust Stats Section -->
          <div class="hero-stats-minimal" style="display: flex; justify-content: center; gap: 60px; margin-top: 80px; animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.6s;">
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Accompagnements</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">98%</span>
              <span class="stat-label">Satisfaction</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Support Expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

