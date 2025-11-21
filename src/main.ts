import { renderHeader } from './components/Header'
import { renderFooter } from './components/Footer'
import { renderHero } from './components/Hero'
import { renderServiceCards } from './components/ServiceCards'

import { renderAbout } from './components/AboutFaq'
import { renderContactForm } from './components/ContactForm'
import { i18n, detectLocale, setDocumentDirection, type Locale, type Translations } from './i18n'
import { renderDocuments } from './components/Documents'
import { renderPricing } from './components/Pricing'

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



  const contactRoot = document.getElementById('contact-root')
  if (contactRoot) contactRoot.innerHTML = renderContactForm(t)

  const documentsRoot = document.getElementById('documents-root')
  if (documentsRoot) documentsRoot.innerHTML = renderDocuments(t)

  const pricingRoot = document.getElementById('pricing-root')
  if (pricingRoot) pricingRoot.innerHTML = renderPricing(t)

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
      const bulletsJson = card.querySelector('.data-bullets')?.textContent
      const footer = card.querySelector('.data-footer')?.textContent
      const iconHtml = card.querySelector('.icon')?.innerHTML

      let bulletsHtml = ''
      if (bulletsJson) {
        try {
          const bullets = JSON.parse(bulletsJson)
          bulletsHtml = bullets.map((b: string) => `<li>${b}</li>`).join('')
        } catch (e) {
          bulletsHtml = ''
        }
      }

      const colorVar = btn.getAttribute('data-color-var') || '--logo-blue'

      container.innerHTML = `
        <div class="service-details-card">
          <div class="blobs" style="border-radius: var(--radius-lg);">
            <div class="blob one" style="background: radial-gradient(circle at 30% 30%, var(${colorVar}), transparent 70%); opacity: 0.15;"></div>
            <div class="blob two" style="background: radial-gradient(circle at 70% 40%, var(${colorVar}), transparent 70%); opacity: 0.15; animation-delay: 2s;"></div>
            <div class="blob three" style="background: radial-gradient(circle at 50% 50%, var(${colorVar}), transparent 70%); opacity: 0.1; animation-delay: 4s;"></div>
          </div>
          
          <div class="service-details-header" style="position: relative; z-index: 1;">
            <div class="service-details-icon" style="border-color: var(${colorVar}); background: rgba(255,255,255,0.5);">
              ${iconHtml}
            </div>
            <div class="service-details-title">
              <h3 style="color: var(${colorVar});">${title}</h3>
              <p>${intro}</p>
            </div>
          </div>
          
          <div class="service-details-content" style="position: relative; z-index: 1;">
            <div class="service-details-bullets">
              <ul>${bulletsHtml}</ul>
              ${footer ? `<p class="muted small" style="margin-top: 20px;">${footer}</p>` : ''}
            </div>
            
            <div class="service-details-actions">
              <h4 style="color: #111; font-weight: 800; font-size: 1.2rem;">${getT().serviceDetails.interested}</h4>
              <p>${getT().serviceDetails.contactText}</p>
              <a href="#contact" class="btn btn-primary" data-scroll="contact" style="width: 100%; justify-content: center;">
                ${getT().serviceDetails.contactBtn}
              </a>
            </div>
          </div>
        </div>
      `

      container.classList.add('active')

      // Smooth scroll to details
      setTimeout(() => {
        container.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }
})

// (Removed dynamic PDF extraction; content is static per user brief)

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


