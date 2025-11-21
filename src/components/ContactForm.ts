import type { Translations } from '../i18n'

export function renderContactForm(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-orange" style="width:540px;height:540px;top:-170px;right:-130px"></div>
      <div class="orb orb-blue" style="width:490px;height:490px;bottom:-140px;left:-110px"></div>
      <div class="orb orb-teal" style="width:430px;height:430px;top:42%;right:58%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${t.contact.title}</h2>
        <p class="muted">${t.contact.subtitle}</p>
      </div>
      
      <div class="grid-3" style="margin-top: 48px;">
        <!-- Phone -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(30,102,245,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-blue);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">${t.contact.labels.phone || 'Téléphone'}</h3>
          <a href="tel:+21655555555" style="font-size: 1.1rem; font-weight: 600; color: var(--text);">+216 55 555 555</a>
          <p class="muted small">${t.contactInfo.hours}</p>
        </div>

        <!-- Email -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(15,163,177,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-teal);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">${t.contact.labels.email || 'Email'}</h3>
          <a href="mailto:contact@evia.tn" style="font-size: 1.1rem; font-weight: 600; color: var(--text);">contact@evia.tn</a>
          <p class="muted small">${t.contactInfo.response}</p>
        </div>

        <!-- Address -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(236,164,0,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-orange);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">${t.contactInfo.addressTitle}</h3>
          <p style="font-size: 1.1rem; font-weight: 600; color: var(--text); margin: 0;">${t.contactInfo.address}</p>
          <a href="https://maps.google.com" target="_blank" class="link" style="color: var(--logo-orange);">${t.contactInfo.mapLink}</a>
        </div>
      </div>
    </div>
  `
}


