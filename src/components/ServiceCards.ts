import type { Translations } from '../i18n'

export function renderServiceCards(t: Translations): string {
  return `
    <div class="container">
      <div class="section-header">
        <h2>${t.services.title}</h2>
        <p class="muted">${t.services.subtitle}</p>
      </div>
      <div class="grid-3">
        <div class="card service-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <h3>${t.services.salariedTitle}</h3>
          <p>${t.services.salariedDesc}</p>
          <a href="#contact" class="link" data-scroll="contact">${t.services.link}</a>
        </div>
        <div class="card service-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l3 7h7l-5.5 4 2 7L12 17l-6.5 4 2-7L2 10h7z"/></svg>
          </div>
          <h3>${t.services.talentTitle}</h3>
          <p>${t.services.talentDesc}</p>
          <a href="#contact" class="link" data-scroll="contact">${t.services.link}</a>
        </div>
        <div class="card service-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01M12 10h.01M16 10h.01"></path></svg>
          </div>
          <h3>${t.services.touristTitle}</h3>
          <p>${t.services.touristDesc}</p>
          <a href="#contact" class="link" data-scroll="contact">${t.services.link}</a>
        </div>
      </div>
    </div>
  `
}


