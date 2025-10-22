import type { Translations } from '../i18n'

export function renderHero(t: Translations): string {
  return `
    <div class="particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle" style="left:15%;top:60%;width:6px;height:6px"></div>
      <div class="particle" style="left:85%;top:45%;width:5px;height:5px"></div>
      <div class="particle" style="left:50%;top:90%;width:7px;height:7px"></div>
    </div>
    <div class="content">
      <div>
        <h1 style="margin-top:20px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.3s">${t.hero.title}</h1>
        <p style="margin-top:16px;font-size:18px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.4s" class="muted">${t.hero.subtitle}</p>
        <div style="margin-top:32px;display:flex;gap:16px;flex-wrap:wrap;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.5s">
          <a href="#contact" class="btn btn-primary" data-scroll="contact">${t.hero.cta1}</a>
          <a href="#services" class="btn btn-secondary">${t.hero.cta2}</a>
        </div>
        <div class="kpis">
          <div class="kpi"><strong>+500</strong><span>dossiers accompagnés</span></div>
          <div class="kpi"><strong>3</strong><span>services essentiels</span></div>
          <div class="kpi"><strong>100%</strong><span>procédure officielle</span></div>
        </div>
      </div>
      <div class="card hero-card">
        <h3>Ce que nous faisons</h3>
        <ul>
          <li>Prise de RDV TLS selon la procédure officielle</li>
          <li>Préparation et vérification complète du dossier</li>
          <li>Conseil personnalisé selon votre situation</li>
        </ul>
      </div>
    </div>
  `
}


