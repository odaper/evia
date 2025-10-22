import type { Translations } from '../i18n'

export function renderPricing(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:580px;height:580px;top:-190px;left:-110px"></div>
      <div class="orb orb-teal" style="width:520px;height:520px;bottom:-160px;right:-100px"></div>
      <div class="orb orb-orange" style="width:460px;height:460px;top:48%;left:55%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${t.pricing.title}</h2>
        <p class="muted">${t.pricing.subtitle}</p>
      </div>
      <div class="grid-3">
        ${t.pricing.cards.map((c:{title:string,desc:string},i:number)=>`
          <div class="card" style="padding:32px;text-align:center">
            <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,${i===0?'var(--logo-blue),var(--logo-teal)':i===1?'var(--logo-teal),var(--logo-orange)':'var(--logo-orange),var(--logo-blue)'});display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 8px 24px rgba(30,102,245,.3)">
              <span style="font-size:24px;font-weight:700;color:white">${i+1}</span>
            </div>
            <h3 style="margin-bottom:12px">${c.title}</h3>
            <p style="color:var(--neutral-300);line-height:1.7">${c.desc}</p>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:24px">
        <a href="#contact" class="btn btn-primary" data-scroll="contact">${t.pricing.cta}</a>
      </div>
    </div>
  `
}


