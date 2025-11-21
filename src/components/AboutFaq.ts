import type { Translations } from '../i18n'

export function renderAbout(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-teal" style="width:520px;height:520px;top:-160px;right:-120px"></div>
      <div class="orb orb-orange" style="width:470px;height:470px;bottom:-140px;left:-90px"></div>
      <div class="orb orb-blue" style="width:400px;height:400px;top:35%;right:65%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${t.about.title}</h2>
        <p class="muted">${t.about.subtitle}</p>
      </div>
      <div class="card" style="padding:40px;max-width:900px;margin:0 auto">
        <p style="color:#4a5568;font-size:17px;line-height:1.8">${t.about.paragraph}</p>
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


