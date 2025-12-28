import type { Translations } from '../i18n'

type ServiceCard = {
  title: string
  shortDesc: string
  intro: string
  warning?: string
  target: string[]
  offer: string[]
  process: string[]
  notDone: string[]
  benefits: string[]
  cta: string
}

function getIcon(title: string, colorVar: string): string {
  const lower = title.toLowerCase()
  let iconPath = ''

  if (lower.includes('visa')) {
    iconPath = `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>`
  } else if (lower.includes('coaching')) {
    iconPath = `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`
  } else if (lower.includes('portage')) {
    iconPath = `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path>`
  } else if (lower.includes('remote') || lower.includes('recrutement')) {
    iconPath = `<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>`
  } else if (lower.includes('paie')) {
    iconPath = `<rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="7" y1="8" x2="17" y2="8"></line><line x1="7" y1="12" x2="17" y2="12"></line><line x1="7" y1="16" x2="12" y2="16"></line>`
  } else {
    iconPath = `<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>`
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(${colorVar})">${iconPath}</svg>`
}

export function renderServiceCards(t: Translations): string {
  const cards: ServiceCard[] = (t.services.cards || []) as ServiceCard[]
  const colors = ['--logo-blue', '--logo-teal', '--logo-orange', '--logo-blue', '--logo-teal']

  return `
    <div class="container">
      <div class="section-header">
        <div class="section-title-wrapper">
          <h2 style="position: relative; display: inline-block;">
            ${t.services.title}
            <span class="title-underline" style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 60px; height: 4px; background: linear-gradient(90deg, var(--logo-blue), var(--logo-teal), var(--logo-orange)); border-radius: 2px;"></span>
          </h2>
        </div>
        <p class="muted" style="margin-top: 25px;">${t.services.subtitle}</p>
      </div>
      <div class="services-grid-main five-items">
        ${cards
      .map(
        (card, index) => {
          const colorVar = colors[index % colors.length]
          return `
          <article class="card service-card scroll-animate" id="service-card-${index}" style="height: 100%; display: flex; flex-direction: column; border-top: 4px solid var(${colorVar});">
            <div class="icon" style="background: rgba(255,255,255,0.05); box-shadow: none; border: 1px solid var(${colorVar});">
              ${getIcon(card.title, colorVar)}
            </div>
            <h3 style="color: var(${colorVar}); text-shadow: none; margin-bottom: 15px;">${card.title}</h3>
            <p style="color: var(--neutral-400); line-height: 1.6;">${card.shortDesc}</p>
            
            <div style="margin-top: auto; padding-top: 24px;">
              <button class="btn btn-primary service-details-btn" data-index="${index}" data-color-var="${colorVar}" style="width: 100%; justify-content: center; background: var(${colorVar}); border-color: var(${colorVar});">
                ${t.common.learnMore}
              </button>
            </div>
            
            <!-- Hidden data for modal/details -->
            <div class="service-data" style="display: none;">
              <div class="data-title">${card.title}</div>
              <div class="data-intro">${card.intro}</div>
              <div class="data-warning">${card.warning || ''}</div>
              <div class="data-target">${JSON.stringify(card.target)}</div>
              <div class="data-offer">${JSON.stringify(card.offer)}</div>
              <div class="data-process">${JSON.stringify(card.process)}</div>
              <div class="data-not-done">${JSON.stringify(card.notDone)}</div>
              <div class="data-benefits">${JSON.stringify(card.benefits)}</div>
              <div class="data-cta">${card.cta}</div>
            </div>
          </article>
        `
        },
      )
      .join('')}
      </div>
    </div>

    <!-- Service Details Section Container -->
    <div id="service-details-container" class="service-details-container container">
      <!-- Content will be injected here by JS -->
    </div>
  `
}

