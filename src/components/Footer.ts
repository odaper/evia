import type { Translations } from '../i18n'

export function renderFooter(t: Translations): string {
  const year = new Date().getFullYear()
  return `
    <div class="container">
      <div class="cols">
        <div>
          <h3>${t.header.brand}</h3>
          <p class="muted">${t.footer.desc}</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul style="list-style:none;padding:0;margin-top:8px">
            <li><a href="#services">${t.footer.nav.services}</a></li>
            <li><a href="#process">${t.footer.nav.process}</a></li>
            <li><a href="#about">${t.footer.nav.about}</a></li>
            <li><a href="#faq">${t.footer.nav.faq}</a></li>
            <li><a href="#documents">${t.footer.nav.documents}</a></li>
            <li><a href="#tarifs">${t.footer.nav.pricing}</a></li>
            <li><a href="#contact">${t.footer.nav.contact}</a></li>
          </ul>
        </div>
        <div>
          <h4>Mentions</h4>
          <p class="muted" style="margin-top:8px">${t.footer.contactLines.join('<br/>')}</p>
          <p class="muted" style="margin-top:8px">${t.footer.disclaimer}</p>
          <div style="margin-top:12px"><a href="#contact" class="btn btn-primary" data-scroll="contact">${t.header.cta}</a></div>
        </div>
      </div>
      <div class="bottom">© ${year} Evia Services. Tous droits réservés.</div>
    </div>
  `
}


