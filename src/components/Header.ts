import type { Locale, Translations } from '../i18n'

export function renderHeader(t: Translations, locale: Locale): string {
  return `
    <div class="container nav">
      <a href="#" class="brand">
        <img src="/logo/logo-micro-dark-v2.svg" alt="${t.header.brand}" height="50" class="logo-dark" />
      </a>
      <nav class="menu">
        <a href="#services">${t.header.services}</a>
        <a href="#process">${t.header.process}</a>
        <a href="#about">${t.header.about}</a>
        <a href="#faq">${t.header.engagements}</a>
        <a href="#documents">${t.header.documents}</a>
        <a href="#tarifs">${t.header.pricing}</a>
        
      </nav>
      <label class="lang-selector">
          <span class="sr-only">${t.header.switcher}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lang-icon"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          <select id="lang-switch" class="lang-dropdown">
            <option value="fr" ${locale==='fr'?'selected':''}>FR</option>
            <option value="en" ${locale==='en'?'selected':''}>EN</option>
            <option value="ar" ${locale==='ar'?'selected':''}>AR</option>
          </select>
        </label>
    </div>
  `
}


