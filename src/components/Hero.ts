import type { Translations } from '../i18n'

function getServiceIcon(index: number, colorVar: string): string {
  const icons = [
    // Visa Support - Calendar/Document
    `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>`,
    // Talent Visa - Award/Star
    `<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>`,
    // Employee Visa - Briefcase
    `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>`,
    // Business Visa - Globe
    `<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>`,
    // Coaching - Users/People
    `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`,
    // Portage Salarial - Layers/Stack
    `<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>`
  ]

  const iconPath = icons[index] || icons[0]
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(${colorVar})"><${iconPath}</svg>`
}

export function renderHero(t: Translations): string {
  const colors = ['--logo-blue', '--logo-teal', '--logo-orange']
  const servicesSummary = t.hero.servicesSummary || []
  const serviceTitles = [
    t.services.cards[0]?.title || 'Accompagnement visa',
    t.services.cards[1]?.title || 'Visa Talent',
    t.services.cards[2]?.title || 'Visa Salarié',
    t.services.cards[3]?.title || 'Visa d\'affaire',
    t.services.cards[4]?.title || 'Coaching',
    t.services.cards[5]?.title || 'Portage salarial'
  ]

  return `
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:600px;height:600px;top:-10%;left:-10%;opacity:0.5"></div>
      <div class="orb orb-teal" style="width:500px;height:500px;top:40%;right:-5%;opacity:0.4"></div>
      <div class="orb orb-orange" style="width:400px;height:400px;bottom:-10%;left:20%;opacity:0.4"></div>
      <div class="orb orb-blue" style="width:400px;height:400px;top:20%;right:30%;opacity:0.3"></div>
      <div class="orb orb-teal" style="width:300px;height:300px;bottom:30%;right:10%;opacity:0.3"></div>
      
      <div class="particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      
      <div class="hero-grid-overlay"></div>
    </div>
    <div class="container">
      <div class="hero-content-centered">
        <div class="hero-text-center">
          <h1 style="margin-top:20px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.3s">${t.hero.title}</h1>
          <p style="margin-top:16px;font-size:18px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.4s" class="muted">${t.hero.subtitle}</p>
        </div>
        
        <div class="hero-services-section" style="animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.5s">
          <div class="hero-services-header">
            <h2>${t.hero.servicesTitle}</h2>
            <p class="muted">${t.hero.servicesSubtitle}</p>
          </div>
          
          <div class="hero-services-grid">
            ${servicesSummary.map((summary: string, index: number) => {
    const colorVar = colors[index % colors.length]
    return `
                <article class="hero-service-card hero-service-card-compact" style="animation-delay: ${0.6 + index * 0.1}s;" data-scroll="services">
                  <div class="hero-service-icon" style="border-color: var(${colorVar});">
                    ${getServiceIcon(index, colorVar)}
                  </div>
                  <h3 style="color: var(${colorVar});">${serviceTitles[index]}</h3>
                </article>
              `
  }).join('')}
          </div>
        </div>
      </div>
    </div>
  `
}
