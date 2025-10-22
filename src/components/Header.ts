import type { Locale, Translations } from '../i18n'

export function renderHeader(t: Translations, locale: Locale): string {
  return `
    <div class="container nav">
      <a href="#" class="brand">
        <img src="/logo/logo-micro-light-v2.svg" alt="${t.header.brand}" height="32" class="logo-light" />
      </a>
      <nav class="menu">
        <a href="#services">${t.header.services}</a>
        <a href="#process">${t.header.process}</a>
        <a href="#documents">${t.header.documents}</a>
        <a href="#tarifs">${t.header.pricing}</a>
        <a href="#faq">${t.header.engagements}</a>
        <a href="#contact" class="btn btn-primary cta" data-scroll="contact">${t.header.cta}</a>
        <label style="display:inline-flex;align-items:center;gap:8px">
          <span class="sr-only">${t.header.switcher}</span>
          <select id="lang-switch" style="padding:8px;border-radius:8px;border:1px solid var(--neutral-300)">
            <option value="fr" ${locale==='fr'?'selected':''}>FR</option>
            <option value="en" ${locale==='en'?'selected':''}>EN</option>
            <option value="ar" ${locale==='ar'?'selected':''}>AR</option>
          </select>
        </label>
      </nav>
    </div>
  `
}


