import type { Translations } from '../i18n'

export function renderDocuments(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-teal" style="width:560px;height:560px;top:-175px;left:-115px"></div>
      <div class="orb orb-orange" style="width:510px;height:510px;bottom:-155px;right:-95px"></div>
      <div class="orb orb-blue" style="width:440px;height:440px;top:44%;left:62%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${t.documents.title}</h2>
        <p class="muted">${t.documents.subtitle}</p>
      </div>
      <div class="grid-2">
        <ul class="card" style="padding:32px;list-style:none;display:grid;gap:14px">
          ${t.documents.bullets.map((s:string)=>`<li style="color:#4a5568;display:flex;align-items:start;gap:12px"><span style="color:var(--logo-blue);font-size:20px;line-height:1">✓</span><span>${s}</span></li>`).join('')}
        </ul>
        <div class="card" style="padding:32px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <h3 style="margin-bottom:16px">${t.documents.helpTitle}</h3>
            <p style="color:#4a5568;line-height:1.7;margin-bottom:24px">${t.documents.helpText}</p>
          </div>
          <a href="#contact" class="btn btn-primary" data-scroll="contact" style="align-self:flex-start">${t.documents.cta}</a>
        </div>
      </div>
    </div>
  `
}


