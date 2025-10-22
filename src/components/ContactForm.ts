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
            <label for="name">${t.contact.labels.name}</label>
            <input id="name" name="name" type="text" required placeholder="${t.contact.placeholders.name}" />
          </div>
          <div>
            <label for="email">${t.contact.labels.email}</label>
            <input id="email" name="email" type="email" required placeholder="${t.contact.placeholders.email}" />
          </div>
        </div>
        <div class="grid-2" style="margin-top:16px">
          <div>
            <label for="phone">${t.contact.labels.phone}</label>
            <input id="phone" name="phone" type="tel" placeholder="${t.contact.placeholders.phone}" />
          </div>
          <div>
            <label for="city">${t.contact.labels.city}</label>
            <input id="city" name="city" type="text" placeholder="${t.contact.placeholders.city}" />
          </div>
        </div>
        <div style="margin-top:16px">
          <label for="type">${t.contact.labels.type}</label>
          <select id="type" name="type" required>
            <option value="">—</option>
            ${t.contact.options.map((o:string)=>`<option>${o}</option>`).join('')}
          </select>
        </div>
        <div style="margin-top:16px">
          <label for="message">${t.contact.labels.message}</label>
          <textarea id="message" name="message" rows="4" placeholder="${t.contact.placeholders.message}"></textarea>
        </div>
        <div style="margin-top:16px">
          <label style="display:flex;gap:10px;align-items:start;cursor:pointer">
            <input type="checkbox" name="consent" required style="margin-top:4px" />
            <span style="font-size:14px;color:#6b7280">${t.contact.consent} <a href="/politique-confidentialite.html" style="color:var(--logo-blue)">Privacy</a>.</span>
          </label>
        </div>
        <input type="text" name="_honeypot" style="display:none" tabindex="-1" autocomplete="off" />
        <button class="btn btn-primary" type="submit">${t.contact.submit}</button>
      </form>
    </div>
  `
}


