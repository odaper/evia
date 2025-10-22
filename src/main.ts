import { renderHeader } from './components/Header'
import { renderFooter } from './components/Footer'
import { renderHero } from './components/Hero'
import { renderServiceCards } from './components/ServiceCards'
import { renderProcessTimeline } from './components/ProcessTimeline'
import { renderAbout, renderFaq } from './components/AboutFaq'
import { renderContactForm } from './components/ContactForm'
import { i18n, detectLocale, setDocumentDirection, type Locale, type Translations } from './i18n'
import { renderDocuments } from './components/Documents'
import { renderPricing } from './components/Pricing'

let currentLocale: Locale = detectLocale()
function getT(): Translations { return i18n[currentLocale] }

function renderAll(){
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

  const processRoot = document.getElementById('process-root')
  if (processRoot) processRoot.innerHTML = renderProcessTimeline(t)

  const aboutRoot = document.getElementById('about-root')
  if (aboutRoot) aboutRoot.innerHTML = renderAbout(t)

  const faqRoot = document.getElementById('faq-root')
  if (faqRoot) faqRoot.innerHTML = renderFaq(t)

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
}

renderAll()

// (Removed dynamic PDF extraction; content is static per user brief)

// Placeholder anchors for progressive enhancement
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (target.matches('[data-scroll]')){
    const id = target.getAttribute('data-scroll')
    if (id){
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


