import type { Translations } from '../i18n'

export function renderReferences(t: Translations): string {
  return `
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:580px;height:580px;top:-190px;left:-110px"></div>
      <div class="orb orb-teal" style="width:520px;height:520px;bottom:-160px;right:-100px"></div>
      <div class="orb orb-orange" style="width:460px;height:460px;top:48%;left:55%"></div>
    </div>
    <div class="container">
      <div class="section-header" style="margin-bottom: 50px;">
        <h2 style="font-size: 2.5rem; color: var(--white);">${t.references.title}</h2>
        <p class="muted" style="color: var(--neutral-300);">${t.references.subtitle}</p>
      </div>
      
      <div class="references-grid" style="display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap;">
        ${t.references.companies.map((company: { name: string, desc: string }) => `
          <div class="reference-item" style="text-align: center; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); flex: 1; min-width: 280px; max-width: 320px;" onmouseover="this.style.transform='translateY(-10px) scale(1.05)'" onmouseout="this.style.transform='translateY(0) scale(1)'">
            <div class="card reference-logo-box" style="height: 160px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border-radius: 20px; backdrop-filter: blur(10px); margin-bottom: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
              <span style="font-weight: 800; font-size: 1.5rem; color: var(--white); letter-spacing: -0.5px; text-shadow: 0 4px 12px rgba(0,0,0,0.3);">${company.name}</span>
            </div>
            <p style="font-size: 1rem; color: var(--logo-teal); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${company.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
}
