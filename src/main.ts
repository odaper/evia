import { renderHeader } from './components/Header'
import { renderFooter } from './components/Footer'
import { renderHero } from './components/Hero'
import { renderServiceCards } from './components/ServiceCards'

import { renderAbout } from './components/AboutFaq'
import { renderContactForm } from './components/ContactForm'
import { i18n, detectLocale, setDocumentDirection, type Locale, type Translations } from './i18n'
import { renderDocuments } from './components/Documents'


import { renderReferences } from './components/References'

let currentLocale: Locale = detectLocale()
function getT(): Translations { return i18n[currentLocale] }

function renderAll() {
  setDocumentDirection(currentLocale)
  const t = getT()
  const headerEl = document.getElementById('header')
  if (headerEl) headerEl.innerHTML = renderHeader(t, currentLocale)

  const footerEl = document.getElementById('footer')
  if (footerEl) footerEl.innerHTML = renderFooter(t)

  const heroRoot = document.getElementById('hero-root')
  if (heroRoot) heroRoot.innerHTML = renderHero(t)

  const servicesRoot = document.getElementById('services-root')
  if (servicesRoot) servicesRoot.innerHTML = renderServiceCards(t)

  const aboutRoot = document.getElementById('about-root')
  if (aboutRoot) aboutRoot.innerHTML = renderAbout(t)

  const referencesRoot = document.getElementById('references-root')
  if (referencesRoot) referencesRoot.innerHTML = renderReferences(t)

  const contactRoot = document.getElementById('contact-root')
  if (contactRoot) contactRoot.innerHTML = renderContactForm(t)

  const documentsRoot = document.getElementById('documents-root')
  if (documentsRoot) documentsRoot.innerHTML = renderDocuments(t)

  // bind lang switch
  document.getElementById('lang-switch')?.addEventListener('change', (e) => {
    const value = (e.target as HTMLSelectElement).value as Locale
    currentLocale = value
    localStorage.setItem('locale', value)
    renderAll()
  })

  // Mobile menu toggle functionality
  setupMobileMenu()
}

function setupMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle')
  const menu = document.getElementById('main-menu')

  // Toggle menu function
  const toggleMenu = () => {
    menuToggle?.classList.toggle('active')
    menu?.classList.toggle('active')

    // Prevent body scroll when menu is open
    if (menu?.classList.contains('active')) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  // Close menu function
  const closeMenu = () => {
    menuToggle?.classList.remove('active')
    menu?.classList.remove('active')
    document.body.style.overflow = ''
  }

  // Toggle button click
  menuToggle?.addEventListener('click', toggleMenu)

  // Close menu when clicking on menu links
  menu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu)
  })
}

renderAll()

// Service Details Logic
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  const btn = target.closest('.service-details-btn') as HTMLElement

  if (btn) {
    const index = btn.getAttribute('data-index')
    const card = document.getElementById(`service-card-${index}`)
    const container = document.getElementById('service-details-container')

    if (card && container) {
      const title = card.querySelector('.data-title')?.textContent
      const intro = card.querySelector('.data-intro')?.textContent
      const warning = card.querySelector('.data-warning')?.textContent
      const targetJson = card.querySelector('.data-target')?.textContent
      const offerJson = card.querySelector('.data-offer')?.textContent
      const processJson = card.querySelector('.data-process')?.textContent
      const notDoneJson = card.querySelector('.data-not-done')?.textContent
      const benefitsJson = card.querySelector('.data-benefits')?.textContent
      const ctaText = card.querySelector('.data-cta')?.textContent
      const iconHtml = card.querySelector('.icon')?.innerHTML

      const parse = (json: string | undefined) => {
        try { return json ? JSON.parse(json) : [] } catch { return [] }
      }

      const targets = parse(targetJson)
      const offers = parse(offerJson)
      const processes = parse(processJson)
      const notDones = parse(notDoneJson)
      const benefits = parse(benefitsJson)

      const colorVar = btn.getAttribute('data-color-var') || '--logo-blue'

      container.innerHTML = `
        <div class="service-details-card scroll-animate-scale animate-in">
          <div class="blobs" style="border-radius: var(--radius-lg);">
            <div class="blob one" style="background: radial-gradient(circle at 30% 30%, var(${colorVar}), transparent 70%); opacity: 0.1;"></div>
            <div class="blob two" style="background: radial-gradient(circle at 70% 40%, var(${colorVar}), transparent 70%); opacity: 0.1; animation-delay: 2s;"></div>
          </div>

          <div style="position: relative; z-index: 1;">
            <!-- Top Header Row -->
            <header class="service-details-header-row" style="display: flex; justify-content: space-between; align-items: center; gap: 30px; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid rgba(0,0,0,0.05);">
              <div style="display: flex; align-items: center; gap: 24px;">
                <div class="service-details-icon" style="border-color: var(${colorVar}); width: 64px; height: 64px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid; background: white;">
                  ${iconHtml}
                </div>
                <h3 style="color: var(${colorVar}); margin: 0; font-size: 2rem; font-weight: 800;">${title}</h3>
              </div>
              <div class="service-details-header-cta" style="display: flex; align-items: center; gap: 20px;">
                <span class="cta-label" style="color: #666; font-weight: 600; font-size: 1rem;">${ctaText}</span>
                <a href="#contact" class="btn btn-primary" data-scroll="contact" style="padding: 12px 32px; white-space: nowrap;">
                  ${getT().serviceDetails.contactBtn}
                </a>
              </div>
            </header>

            <!-- Main Content Area -->
            <div class="service-details-content">
              <p class="intro-text" style="font-size: 1.1rem; line-height: 1.6; color: #444; margin-bottom: 24px;">${intro}</p>
              ${warning ? `<div class="warning-box" style="border-left: 4px solid var(--logo-orange); background: rgba(236, 164, 0, 0.05); padding: 16px 24px; border-radius: 8px; margin-bottom: 40px; font-size: 1rem; color: #555;">${warning}</div>` : ''}
              
              <div class="service-details-grid-modern" style="display: grid; gap: 40px;">
                <div class="details-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${colorVar}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      ${getT().serviceDetails.targetTitle}
                    </h4>
                    <ul class="modern-list">
                      ${targets.map((t: string) => `<li>${t}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${colorVar}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      ${getT().serviceDetails.offerTitle}
                    </h4>
                    <ul class="modern-list">
                      ${offers.map((o: string) => `<li>${o}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <div class="details-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${colorVar}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                      ${getT().serviceDetails.notDoneTitle}
                    </h4>
                    <ul class="modern-list not-done">
                      ${notDones.map((n: string) => `<li>${n}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${colorVar}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      ${getT().serviceDetails.benefitsTitle}
                    </h4>
                    <ul class="modern-list">
                      ${benefits.map((b: string) => `<li>${b}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>

              ${processes.length > 0 ? `
                <div class="process-timeline-section" style="margin-top: 60px; padding-top: 40px; border-top: 1px solid rgba(0,0,0,0.05);">
                  <h4 style="color: var(${colorVar}); margin-bottom: 32px; font-size: 1.4rem; font-weight: 800; text-align: center;">${getT().serviceDetails.processTitle}</h4>
                  <div class="timeline-horizontal">
                    ${processes.map((p: string, i: number) => {
        const nextColor = colorVar === '--logo-blue' ? '--logo-teal' : colorVar === '--logo-teal' ? '--logo-orange' : '--logo-blue';
        return `
                        <div class="timeline-step">
                          <div class="step-number" style="background: linear-gradient(135deg, var(${colorVar}), var(${nextColor}));">${i + 1}</div>
                          <div class="step-text">${p}</div>
                        </div>
                      `
      }).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `

      container.classList.add('active')

      // Smooth scroll to details
      setTimeout(() => {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }
})

// Placeholder anchors for progressive enhancement
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  // Check if the target or any parent has data-scroll attribute
  const scrollElement = target.closest('[data-scroll]') as HTMLElement
  if (scrollElement) {
    const id = scrollElement.getAttribute('data-scroll')
    if (id) {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
})

// Header scroll effect
let lastScroll = 0
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  const header = document.querySelector('header.site-header')

  if (currentScroll > 50) {
    header?.classList.add('scrolled')
  } else {
    header?.classList.remove('scrolled')
  }

  lastScroll = currentScroll
})

// Scroll Animation Observer
function setupScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        // Optionally unobserve after animation to improve performance
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .card')
  animatedElements.forEach(el => {
    // Add scroll-animate class to cards if they don't have an animation class
    if (el.classList.contains('card') && !el.classList.contains('scroll-animate') && !el.classList.contains('scroll-animate-left') && !el.classList.contains('scroll-animate-right') && !el.classList.contains('scroll-animate-scale')) {
      el.classList.add('scroll-animate')
    }
    observer.observe(el)
  })
}

// Initialize scroll animations after a short delay to ensure DOM is ready
setTimeout(setupScrollAnimations, 100)
