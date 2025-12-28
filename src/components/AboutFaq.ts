import type { Translations } from '../i18n'

export function renderAbout(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-teal" style="width:520px;height:520px;top:-160px;right:-120px"></div>
      <div class="orb orb-orange" style="width:470px;height:470px;bottom:-140px;left:-90px"></div>
      <div class="orb orb-blue" style="width:400px;height:400px;top:35%;right:65%"></div>
    </div>
    <div class="container" style="padding:60px 20px">
      <div class="section-header" style="margin-bottom:40px">
        <h2>${t.about.title}</h2>
        <p class="muted">${t.about.subtitle}</p>
      </div>
      
      <div style="max-width:1100px;margin:0 auto;display:grid;gap:24px">
        <!-- Expertise and Mission in 2 columns -->
        <div class="about-cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px">
          ${t.hero.description ? `
          <div class="card about-card-hover" style="padding:32px; transition: all 0.3s ease;">
            <h3 style="font-size:1.3rem;margin-bottom:16px;color:var(--logo-blue);font-weight:700;display:flex;align-items:center;gap:10px">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>${t.about.expertiseTitle || 'Notre expertise'}</span>
            </h3>
            <p style="color:#4a5568;font-size:1rem;line-height:1.7;margin:0">${t.hero.description}</p>
          </div>
          ` : ''}
          
          ${t.hero.mission ? `
          <div class="card about-card-hover" style="padding:32px; transition: all 0.3s ease;">
            <h3 style="font-size:1.3rem;margin-bottom:16px;color:var(--logo-teal);font-weight:700;display:flex;align-items:center;gap:10px">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>${t.about.missionTitle || 'Notre mission'}</span>
            </h3>
            <p style="color:#4a5568;font-size:1rem;line-height:1.7;margin:0">${t.hero.mission}</p>
          </div>
          ` : ''}
        </div>
        
        <!-- Important disclaimers -->
        ${t.hero.disclaimer1 || t.hero.disclaimer2 ? `
        <div class="card" style="padding:32px; border-left: 6px solid var(--logo-orange); background: rgba(236,164,0,0.02);">
          <h3 style="font-size:1.3rem;margin-bottom:20px;color:var(--logo-orange);font-weight:700;display:flex;align-items:center;gap:10px">
            <span style="font-size:1.6rem">⚠️</span>
            <span>${t.about.importantTitle || 'Points importants'}</span>
          </h3>
          <div class="about-disclaimers-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:16px">
            ${t.hero.disclaimer1 ? `
            <div style="background:rgba(236,164,0,0.08);padding:20px;border-radius:10px; border: 1px solid rgba(236,164,0,0.15);">
              <p style="color:#2d3748;font-size:0.95rem;line-height:1.6;margin:0;font-weight:500">${t.hero.disclaimer1}</p>
            </div>
            ` : ''}
            ${t.hero.disclaimer2 ? `
            <div style="background:rgba(236,164,0,0.08);padding:20px;border-radius:10px; border: 1px solid rgba(236,164,0,0.15);">
              <p style="color:#2d3748;font-size:0.95rem;line-height:1.6;margin:0;font-weight:500">${t.hero.disclaimer2}</p>
            </div>
            ` : ''}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `
}

export function renderFaq(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-orange" style="width:550px;height:550px;top:-180px;left:-100px"></div>
      <div class="orb orb-blue" style="width:480px;height:480px;bottom:-100px;right:-80px"></div>
      <div class="orb orb-teal" style="width:420px;height:420px;top:40%;left:60%"></div>
    </div>
    <div class="container faq">
      <div class="section-header">
        <h2>${t.engagements.title}</h2>
        <p class="muted">${t.engagements.subtitle}</p>
      </div>
      <div style="max-width:900px;margin:0 auto;display:grid;gap:24px">
        <div class="card" style="padding:32px">
          <h3 style="margin-bottom:20px">${t.faq.procedureTitle}</h3>
          <ul style="list-style:none;padding:0;display:grid;gap:14px">
            ${t.engagements.procedure.map((s: string) => `<li style="color:var(--neutral-300);display:flex;align-items:start;gap:12px"><span style="color:var(--logo-teal);font-size:20px">•</span><span>${s}</span></li>`).join('')}
          </ul>
        </div>
        <div class="card" style="padding:32px">
          <h3 style="margin-bottom:20px">${t.faq.qualityTitle}</h3>
          <ul style="list-style:none;padding:0;display:grid;gap:14px">
            ${t.engagements.quality.map((s: string) => `<li style="color:var(--neutral-300);display:flex;align-items:start;gap:12px"><span style="color:var(--logo-orange);font-size:20px">•</span><span>${s}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `
}


