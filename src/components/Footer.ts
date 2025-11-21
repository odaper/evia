import type { Translations } from '../i18n'

export function renderFooter(t: Translations): string {
  const year = new Date().getFullYear()
  return `
    <div class="container">
      <div class="cols">
        <div>
          <h3>${t.header.brand}</h3>
          <p class="muted">${t.footer.desc}</p>
          <h4 style="margin-top: 24px;">${t.footer.mentions}</h4>
          <p class="muted" style="margin-top:8px">${t.footer.contactLines.join('<br/>')}</p>
          <p class="muted" style="margin-top:8px">${t.footer.disclaimer}</p>
          <div style="margin-top:12px"><a href="#contact" class="btn btn-primary" data-scroll="contact">${t.header.cta}</a></div>
        </div>
        <div>
          <h4>${t.footer.navigation}</h4>
          <ul style="list-style:none;padding:0;margin-top:8px">
            <li><a href="#services">${t.footer.nav.services}</a></li>
            <li><a href="#about">${t.footer.nav.about}</a></li>
            <li><a href="#tarifs">${t.footer.nav.pricing}</a></li>
            <li><a href="#documents">${t.footer.nav.documents}</a></li>
            <li><a href="#contact">${t.footer.nav.contact}</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom">${t.footer.rights.replace('{year}', year.toString())}</div>
    </div>
  `
}


