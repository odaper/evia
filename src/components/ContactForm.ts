import type { Translations } from '../i18n'

export function renderContactForm(t: Translations): string {
  // Replace action with your Formspree/Formspark endpoint
  const action = 'https://formspree.io/f/your-id'
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
      <form class="card contact-form" action="${action}" method="POST">
        <div class="grid-2">
          <div>
            <label for="email">${t.contact.labels.email}</label>
            <input id="email" name="email" type="email" required placeholder="${t.contact.placeholders.email}" />
          </div>
          <div>
            <label for="phone">${t.contact.labels.phone}</label>
            <input id="phone" name="phone" type="tel" placeholder="${t.contact.placeholders.phone}" />
          </div>
        </div>
        <div style="margin-top:20px">
          <label for="type-0" style="display:block;margin-bottom:12px">${t.contact.labels.type}</label>
          <div class="service-toggle-group">
            ${t.contact.options.slice(0, 3).map((o:string, i:number)=>`
              <input type="radio" id="type-${i}" name="type" value="${o}" ${i===0?'required':''} />
              <label for="type-${i}" class="toggle-btn">${o}</label>
            `).join('')}
            <input type="radio" id="type-other" name="type" value="${t.contact.options[4] || 'Other'}" />
            <label for="type-other" class="toggle-btn">${t.contact.options[4] || 'Other'}</label>
          </div>
        </div>
        <div style="margin-top:20px">
          <label for="message">${t.contact.labels.message}</label>
          <textarea id="message" name="message" rows="5" placeholder="${t.contact.placeholders.message}"></textarea>
        </div>
        <div style="margin-top:20px">
          <label class="modern-checkbox">
            <input type="checkbox" name="consent" required />
            <span class="checkbox-custom"></span>
            <span class="checkbox-label">${t.contact.consent} <a href="/politique-confidentialite.html" style="color:var(--logo-blue)">Privacy</a>.</span>
          </label>
        </div>
        <input type="text" name="_honeypot" style="display:none" tabindex="-1" autocomplete="off" />
        <button class="btn btn-primary" type="submit">${t.contact.submit}</button>
      </form>
    </div>
  `
}


