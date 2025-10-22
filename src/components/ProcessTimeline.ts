import type { Translations } from '../i18n'

export function renderProcessTimeline(t: Translations): string {
  const items = (t.process.steps as {t:string,d:string}[]).map((s, i) => `
    <div class="step">
      <div class="num">${i+1}</div>
      <div>
        <h3 style="color:var(--white)">${s.t}</h3>
        <p style="color:var(--neutral-300)">${s.d}</p>
      </div>
    </div>`).join('')
  return `
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:600px;height:600px;top:-200px;left:10%"></div>
      <div class="orb orb-teal" style="width:500px;height:500px;bottom:-150px;right:5%"></div>
      <div class="orb orb-orange" style="width:450px;height:450px;top:50%;left:70%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${t.process.title}</h2>
        <p class="muted">${t.process.subtitle}</p>
      </div>
      <div class="timeline">${items}</div>
    </div>
  `
}


