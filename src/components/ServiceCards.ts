import type { Translations } from '../i18n'

type ServiceCard = {
  title: string
  intro?: string
  bullets?: string[]
  footer?: string
}

function getIcon(title: string, colorVar: string): string {
  const lower = title.toLowerCase()
  let iconPath = ''

  if (lower.includes('visa') || lower.includes('tls')) {
    iconPath = `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>`
  } else if (lower.includes('coaching') || lower.includes('entretien')) {
    iconPath = `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`
  } else if (lower.includes('business') || lower.includes('affaire')) {
    iconPath = `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>`
  } else {
    iconPath = `<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>`
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(${colorVar})">${iconPath}</svg>`
}

export function renderServiceCards(t: Translations): string {
  const cards: ServiceCard[] = (t.services.cards || []) as ServiceCard[]
  const colors = ['--logo-blue', '--logo-teal', '--logo-orange']

  return `
    <div class="container">
      <div class="section-header">
        <h2>${t.services.title}</h2>
        <p class="muted">${t.services.subtitle}</p>
      </div>
      <div class="grid-3" style="align-items: stretch;">
        ${cards
      .map(
        (card, index) => {
          const colorVar = colors[index % colors.length]
          return `
          <article class="card service-card" id="service-card-${index}" style="height: 100%; display: flex; flex-direction: column;">
            <div class="icon" style="background: rgba(255,255,255,0.05); box-shadow: none; border: 1px solid var(${colorVar});">
              ${getIcon(card.title, colorVar)}
            </div>
            <h3 style="color: var(${colorVar}); text-shadow: none;">${card.title}</h3>
            ${card.intro ? `<p>${card.intro}</p>` : ''}
            
            <div style="margin-top: auto; padding-top: 20px;">
              <button class="btn btn-primary service-details-btn" data-index="${index}" data-color-var="${colorVar}" style="width: 100%; justify-content: center;">
                ${t.common.learnMore}
              </button>
            </div>
            
            <!-- Hidden data for modal -->
            <div class="service-data" style="display: none;">
              <div class="data-title">${card.title}</div>
              <div class="data-intro">${card.intro || ''}</div>
              <div class="data-bullets">${JSON.stringify(card.bullets || [])}</div>
              <div class="data-footer">${card.footer || ''}</div>
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
