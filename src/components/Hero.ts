import type { Translations } from '../i18n'

export function renderHero(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:500px;height:500px;top:10%;left:5%"></div>
      <div class="orb orb-teal" style="width:450px;height:450px;top:50%;right:10%"></div>
      <div class="orb orb-orange" style="width:400px;height:400px;bottom:15%;left:30%"></div>
      <div class="orb orb-blue" style="width:350px;height:350px;top:30%;right:25%"></div>
      <div class="orb orb-teal" style="width:380px;height:380px;bottom:25%;right:15%"></div>
    </div>
    <div class="container">
      <div class="content">
        <div>
          <h1 style="margin-top:20px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.3s">${t.hero.title}</h1>
          <p style="margin-top:16px;font-size:18px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.4s" class="muted">${t.hero.subtitle}</p>
          <div style="margin-top:32px;display:flex;gap:16px;flex-wrap:wrap;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.5s">
            <a href="#contact" class="btn btn-primary" data-scroll="contact">${t.hero.cta1}</a>
            <a href="#services" class="btn btn-secondary">${t.hero.cta2}</a>
          </div>
          <div class="kpis">
            <div class="kpi"><strong>+500</strong><span>professionnels accompagnés</span></div>
            <div class="kpi"><strong>3</strong><span>services spécialisés</span></div>
            <div class="kpi"><strong>100%</strong><span>RDV TLS gratuit</span></div>
          </div>
        </div>
        <div class="card hero-card">
          <h3>Ce que nous faisons</h3>
          <ul>
            <li>Visa salarié & talent - RDV TLS gratuit inclus</li>
            <li>Coaching pour réussir vos entretiens professionnels</li>
            <li>Accompagnement spécialisé sur le domaine professionnel</li>
          </ul>
        </div>
      </div>
    </div>
  `
}


