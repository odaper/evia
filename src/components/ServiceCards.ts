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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7v10m-5-5h10"/></svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7h18v10H3zM8 17V7m8 10V7"/></svg>
          </div>
          <h3>${t.services.touristTitle}</h3>
          <p>${t.services.touristDesc}</p>
          <a href="#contact" class="link" data-scroll="contact">${t.services.link}</a>
        </div>
      </div>
    </div>
  `
}


