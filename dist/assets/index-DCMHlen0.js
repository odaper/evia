(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function R(e,t){return`
    <div class="container nav">
      <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      
      <a href="#" class="brand">
        <img src="/logo/logo-light.svg" alt="${e.header.brand}" height="50" class="logo-dark" />
      </a>
      
      <nav class="menu" id="main-menu">
        <div class="sidebar-logo">
          <img src="/logo/logo-light.svg" alt="${e.header.brand}" height="40" />
        </div>
        <a href="#about">${e.header.about}</a>
        <a href="#services">${e.header.services}</a>
        <a href="#references">${e.references.title}</a>
        <a href="#documents">${e.header.documents}</a>
        <a href="#contact">${e.header.cta}</a>
      <label class="lang-selector">
          <span class="sr-only">${e.header.switcher}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lang-icon"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          <select id="lang-switch" class="lang-dropdown">
            <option value="fr" ${t==="fr"?"selected":""}>FR</option>
            <option value="en" ${t==="en"?"selected":""}>EN</option>
            <option value="ar" ${t==="ar"?"selected":""}>AR</option>
          </select>
        </label>
    </div>
  `}function j(e){const t=new Date().getFullYear();return`
    <div class="container">
      <div class="cols">
        <div>
          <h3>${e.header.brand}</h3>
          <p class="muted">${e.footer.desc}</p>
          <h4 style="margin-top: 24px;">${e.footer.mentions}</h4>
          <p class="muted" style="margin-top:8px">${e.footer.contactLines.join("<br/>")}</p>
          <p class="muted" style="margin-top:8px">${e.footer.disclaimer}</p>
          <div style="margin-top:12px"><a href="#contact" class="btn btn-primary" data-scroll="contact">${e.header.cta}</a></div>
        </div>
        <div>
          <h4>${e.footer.navigation}</h4>
          <ul style="list-style:none;padding:0;margin-top:8px">
            <li><a href="#services">${e.footer.nav.services}</a></li>
            <li><a href="#about">${e.footer.nav.about}</a></li>
            <li><a href="#tarifs">${e.footer.nav.pricing}</a></li>
            <li><a href="#documents">${e.footer.nav.documents}</a></li>
            <li><a href="#contact">${e.footer.nav.contact}</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom">${e.footer.rights.replace("{year}",t.toString())}</div>
    </div>
  `}function M(e){return`
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:600px;height:600px;top:-10%;left:-10%;opacity:0.5"></div>
      <div class="orb orb-teal" style="width:500px;height:500px;top:40%;right:-5%;opacity:0.4"></div>
      <div class="orb orb-orange" style="width:400px;height:400px;bottom:-10%;left:20%;opacity:0.4"></div>
      
      <div class="particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <!-- Modern Wavy Background Lines -->
      <div class="hero-waves">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 600C200 500 400 750 720 600C1040 450 1240 700 1540 600" stroke="url(#gradient1)" stroke-width="2" opacity="0.4">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M-100 600C200 500 400 750 720 600C1040 450 1240 700 1540 600; M-100 650C250 550 450 800 720 650C990 500 1190 750 1540 650; M-100 600C200 500 400 750 720 600C1040 450 1240 700 1540 600" />
          </path>
          <path d="M-100 500C250 400 450 650 720 500C990 350 1190 600 1540 500" stroke="url(#gradient2)" stroke-width="2" opacity="0.3">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M-100 500C250 400 450 650 720 500C990 350 1190 600 1540 500; M-100 550C300 450 500 700 720 550C940 400 1140 650 1540 550; M-100 500C250 400 450 650 720 500C990 350 1190 600 1540 500" />
          </path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--logo-blue)" />
              <stop offset="50%" stop-color="var(--logo-teal)" />
              <stop offset="100%" stop-color="var(--logo-blue)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--logo-teal)" />
              <stop offset="50%" stop-color="var(--logo-orange)" />
              <stop offset="100%" stop-color="var(--logo-teal)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div class="hero-grid-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content-centered">
        <!-- Trust Badge -->
        <div class="hero-trust-badge" style="animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s;">
          <div class="avatar-group">
            <div class="avatar" style="background: var(--logo-blue)"></div>
            <div class="avatar" style="background: var(--logo-teal)"></div>
            <div class="avatar" style="background: var(--logo-orange)"></div>
          </div>
          <div class="rating-info">
            <span class="stars">★★★★★</span>
            <span class="rating-text">4.9/5 par nos clients</span>
          </div>
        </div>

        <div class="hero-text-center">
          <h1 class="hero-title-main">${e.hero.title}</h1>
          <p class="hero-subtitle-main">${e.hero.subtitle}</p>
          
          <div class="hero-actions" style="margin-top: 48px; animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.5s;">
            <a href="#services" class="btn btn-primary btn-lg btn-glow" data-scroll="services">
              ${e.hero.cta2}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>

          <!-- Trust Stats Section -->
          <div class="hero-stats-minimal" style="display: flex; justify-content: center; gap: 60px; margin-top: 80px; animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.6s;">
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Accompagnements</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">98%</span>
              <span class="stat-label">Satisfaction</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Support Expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function B(e,t){const n=e.toLowerCase();let i="";return n.includes("visa")?i='<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>':n.includes("coaching")?i='<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>':n.includes("portage")?i='<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path>':n.includes("remote")||n.includes("recrutement")?i='<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>':n.includes("paie")?i='<rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="7" y1="8" x2="17" y2="8"></line><line x1="7" y1="12" x2="17" y2="12"></line><line x1="7" y1="16" x2="12" y2="16"></line>':i='<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(${t})">${i}</svg>`}function z(e){const t=e.services.cards||[],n=["--logo-blue","--logo-teal","--logo-orange","--logo-blue","--logo-teal"];return`
    <div class="container">
      <div class="section-header">
        <div class="section-title-wrapper">
          <h2 style="position: relative; display: inline-block;">
            ${e.services.title}
            <span class="title-underline" style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 60px; height: 4px; background: linear-gradient(90deg, var(--logo-blue), var(--logo-teal), var(--logo-orange)); border-radius: 2px;"></span>
          </h2>
        </div>
        <p class="muted" style="margin-top: 25px;">${e.services.subtitle}</p>
      </div>
      <div class="services-grid-main five-items">
        ${t.map((i,s)=>{const a=n[s%n.length];return`
          <article class="card service-card scroll-animate" id="service-card-${s}" style="height: 100%; display: flex; flex-direction: column; border-top: 4px solid var(${a});">
            <div class="icon" style="background: rgba(255,255,255,0.05); box-shadow: none; border: 1px solid var(${a});">
              ${B(i.title,a)}
            </div>
            <h3 style="color: var(${a}); text-shadow: none; margin-bottom: 15px;">${i.title}</h3>
            <p style="color: var(--neutral-400); line-height: 1.6;">${i.shortDesc}</p>
            
            <div style="margin-top: auto; padding-top: 24px;">
              <button class="btn btn-primary service-details-btn" data-index="${s}" data-color-var="${a}" style="width: 100%; justify-content: center; background: var(${a}); border-color: var(${a});">
                ${e.common.learnMore}
              </button>
            </div>
            
            <!-- Hidden data for modal/details -->
            <div class="service-data" style="display: none;">
              <div class="data-title">${i.title}</div>
              <div class="data-intro">${i.intro}</div>
              <div class="data-warning">${i.warning||""}</div>
              <div class="data-target">${JSON.stringify(i.target)}</div>
              <div class="data-offer">${JSON.stringify(i.offer)}</div>
              <div class="data-process">${JSON.stringify(i.process)}</div>
              <div class="data-not-done">${JSON.stringify(i.notDone)}</div>
              <div class="data-benefits">${JSON.stringify(i.benefits)}</div>
              <div class="data-cta">${i.cta}</div>
            </div>
          </article>
        `}).join("")}
      </div>
    </div>

    <!-- Service Details Section Container -->
    <div id="service-details-container" class="service-details-container container">
      <!-- Content will be injected here by JS -->
    </div>
  `}function H(e){return`
    <div class="animated-bg">
      <div class="orb orb-teal" style="width:520px;height:520px;top:-160px;right:-120px"></div>
      <div class="orb orb-orange" style="width:470px;height:470px;bottom:-140px;left:-90px"></div>
      <div class="orb orb-blue" style="width:400px;height:400px;top:35%;right:65%"></div>
    </div>
    <div class="container" style="padding:60px 20px">
      <div class="section-header" style="margin-bottom:40px">
        <h2>${e.about.title}</h2>
        <p class="muted">${e.about.subtitle}</p>
      </div>
      
      <div style="max-width:1100px;margin:0 auto;display:grid;gap:24px">
        <!-- Expertise and Mission in 2 columns -->
        <div class="about-cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px">
          ${e.hero.description?`
          <div class="card about-card-hover" style="padding:32px; transition: all 0.3s ease;">
            <h3 style="font-size:1.3rem;margin-bottom:16px;color:var(--logo-blue);font-weight:700;display:flex;align-items:center;gap:10px">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>${e.about.expertiseTitle||"Notre expertise"}</span>
            </h3>
            <p style="color:#4a5568;font-size:1rem;line-height:1.7;margin:0">${e.hero.description}</p>
          </div>
          `:""}
          
          ${e.hero.mission?`
          <div class="card about-card-hover" style="padding:32px; transition: all 0.3s ease;">
            <h3 style="font-size:1.3rem;margin-bottom:16px;color:var(--logo-teal);font-weight:700;display:flex;align-items:center;gap:10px">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>${e.about.missionTitle||"Notre mission"}</span>
            </h3>
            <p style="color:#4a5568;font-size:1rem;line-height:1.7;margin:0">${e.hero.mission}</p>
          </div>
          `:""}
        </div>
        
        <!-- Important disclaimers -->
        ${e.hero.disclaimer1||e.hero.disclaimer2?`
        <div class="card" style="padding:32px; border-left: 6px solid var(--logo-orange); background: rgba(236,164,0,0.02);">
          <h3 style="font-size:1.3rem;margin-bottom:20px;color:var(--logo-orange);font-weight:700;display:flex;align-items:center;gap:10px">
            <span style="font-size:1.6rem">⚠️</span>
            <span>${e.about.importantTitle||"Points importants"}</span>
          </h3>
          <div class="about-disclaimers-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:16px">
            ${e.hero.disclaimer1?`
            <div style="background:rgba(236,164,0,0.08);padding:20px;border-radius:10px; border: 1px solid rgba(236,164,0,0.15);">
              <p style="color:#2d3748;font-size:0.95rem;line-height:1.6;margin:0;font-weight:500">${e.hero.disclaimer1}</p>
            </div>
            `:""}
            ${e.hero.disclaimer2?`
            <div style="background:rgba(236,164,0,0.08);padding:20px;border-radius:10px; border: 1px solid rgba(236,164,0,0.15);">
              <p style="color:#2d3748;font-size:0.95rem;line-height:1.6;margin:0;font-weight:500">${e.hero.disclaimer2}</p>
            </div>
            `:""}
          </div>
        </div>
        `:""}
      </div>
    </div>
  `}function W(e){return`
    <div class="animated-bg">
      <div class="orb orb-orange" style="width:540px;height:540px;top:-170px;right:-130px"></div>
      <div class="orb orb-blue" style="width:490px;height:490px;bottom:-140px;left:-110px"></div>
      <div class="orb orb-teal" style="width:430px;height:430px;top:42%;right:58%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${e.contact.title}</h2>
        <p class="muted">${e.contact.subtitle}</p>
      </div>
      
      <div class="grid-3" style="margin-top: 48px;">
        <!-- Phone -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(30,102,245,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-blue);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">${e.contact.labels.phone||"Téléphone"}</h3>
          <a href="tel:+21655555555" style="font-size: 1.1rem; font-weight: 600; color: var(--text);">+216 55 555 555</a>
          <p class="muted small">${e.contactInfo.hours}</p>
        </div>

        <!-- Email -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(15,163,177,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-teal);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">${e.contact.labels.email||"Email"}</h3>
          <a href="mailto:contact@evia.tn" style="font-size: 1.1rem; font-weight: 600; color: var(--text);">contact@evia.tn</a>
          <p class="muted small">${e.contactInfo.response}</p>
        </div>

        <!-- Address -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(236,164,0,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-orange);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">${e.contactInfo.addressTitle}</h3>
          <p style="font-size: 1.1rem; font-weight: 600; color: var(--text); margin: 0;">${e.contactInfo.address}</p>
          <a href="https://maps.google.com" target="_blank" class="link" style="color: var(--logo-orange);">${e.contactInfo.mapLink}</a>
        </div>
      </div>
    </div>
  `}const G={fr:{header:{brand:"NOVISA",services:"Services",about:"Présentation",documents:"Documents",pricing:"Tarifs & délais",engagements:"Engagements",cta:"Nous contacter",switcher:"Langue"},hero:{badge:"Portage salarial & accompagnement administratif international",title:"NOVISA — Propulsez votre carrière en France",subtitle:"L'expertise complète en portage salarial, visas professionnels et accompagnement RH pour sécuriser votre projet de mobilité internationale.",cta1:"Nous contacter",cta2:"Découvrir nos services",servicesTitle:"Notre expertise au service de votre mobilité",servicesSubtitle:"Solutions conformes au droit français pour profils internationaux",discoverBtn:"En savoir plus",description:"NOVISA est spécialisée dans la mise en place de solutions de portage salarial conformes au droit français à destination de profils internationaux, ainsi que dans l'instruction et la préparation des dossiers de visas professionnels pour la France.",mission:"Nous accompagnons les candidats internationaux, freelances et entreprises basées à l'international dans leurs démarches administratives afin de sécuriser leurs projets professionnels en France.",disclaimer1:"⚠️ NOVISA intervient exclusivement sur les aspects administratifs, contractuels et réglementaires.",disclaimer2:"⚠️ NOVISA ne propose pas d'offres d'emploi et n'intervient pas dans la décision des autorités françaises.",servicesSummary:["Accompagnement complet pour tous types de visas professionnels (Talent, Salarié, Affaires)","Solutions de portage salarial sécurisées et conformes au droit français","Coaching personnalisé pour réussir vos entretiens et valoriser votre profil","Recrutement et gestion de talents internationaux pour missions en full remote","Externalisation complète de la paie et administration du personnel (ADP)"]},services:{badge:"Nos domaines d’accompagnement",title:"Visas et services NOVISA",subtitle:"Accompagnement professionnel pour vos projets de mobilité et missions IT",link:"Nous contacter →",cards:[{title:"Visas Professionnels",shortDesc:"Instruction et accompagnement des dossiers de visas pour travailler légalement en France.",intro:"NOVISA accompagne les entreprises internationales et candidats professionnels dans l’instruction et la constitution de dossiers de visas pour travailler légalement en France.",warning:"Nous ne fournissons pas d’emploi et ne garantissons pas l’obtention du visa. Nous intervenons exclusivement sur l’aspect administratif et réglementaire.",target:["Entreprises étrangères : envoyer des collaborateurs en France","Candidats qualifiés : cadres, experts, talents internationaux","Profils nécessitant un visa salarié, talent ou affaires"],offer:["Visa salarié : pour collaborateur avec contrat français","Visa talent : pour profils qualifiés et experts","Visa d’affaires : pour missions ponctuelles ou prospection"],process:["Analyse du profil et type de visa adapté","Préparation complète du dossier administratif","Vérification de conformité des documents","Coordination avec l’employeur ou société de portage","Suivi jusqu’au dépôt auprès des autorités"],notDone:["Nous ne fournissons pas d’emploi","Nous ne décidons pas de l’issue du visa","Nous ne faisons pas de promesse de placement"],benefits:["Process clair et sécurisé","Gain de temps considérable","Sécurité juridique et conformité","Accompagnement international personnalisé"],cta:"Demander une étude personnalisée"},{title:"Portage Salarial",shortDesc:"Solution sécurisée pour employer ou facturer en France sans créer de société.",intro:"NOVISA accompagne les entreprises internationales et consultants professionnels dans la mise en place de solutions de portage salarial conformes au droit français.",target:["Entreprises étrangères : recruter en France sans entité locale","Consultants internationaux : travailler pour des clients français","Salariés expatriés : statut salarié avec couverture complète"],offer:["Conformité légale : Contrat de travail français (CDI/CDD)","Sécurité sociale et couverture santé complète","Facturation simplifiée et gestion des charges","Interface unique : Portage + Administratif + Visas","Rapidité et efficacité des process B2B"],process:["Analyse du besoin (entreprise ou consultant)","Élaboration du contrat de portage adapté","Mise en place administrative et déclarations","Facturation client et transformation en salaire","Suivi continu, assistance et reporting"],notDone:["Nous ne fournissons pas d’emploi ni de missions","Nous ne remplaçons pas le management stratégique","Le portage ne garantit pas d’office l’obtention d’un visa"],benefits:["Flexibilité : recruter sans créer de filiale","Réduction des risques administratifs","Suivi complet du salarié porté","Optimisation des coûts et délais"],cta:"Sécuriser mes missions"},{title:"Coaching Candidats",shortDesc:"Optimisation de profil et préparation aux entretiens pour le marché français.",intro:"NOVISA accompagne les candidats internationaux qui rencontrent des difficultés pour décrocher des entretiens ou valoriser leur profil auprès des entreprises françaises.",target:["Candidats souhaitant travailler légalement en France","Professionnels qualifiés cherchant à optimiser leur impact","Personnes en portage voulant maximiser leurs chances"],offer:["Analyse et optimisation du CV et profil LinkedIn","Préparation ciblée pour entretiens d’embauche","Techniques pour valoriser l’expérience internationale","Conseils sur la communication professionnelle"],notDone:["Nous ne fournissons pas d’emploi","Nous ne garantissons pas une embauche","Nous ne faisons pas de recrutement direct"],benefits:["Coaching ciblé et concret","Approche pratique des entretiens","Gain de confiance immédiat","Complément idéal aux démarches visa/portage"],cta:"Booster ma candidature"},{title:"Recrutement Full Remote",shortDesc:"Sourcing et gestion de talents internationaux pour missions à distance.",intro:"NOVISA accompagne les entreprises internationales dans le recrutement et la gestion de talents à distance pour des missions en France.",target:["Entreprises souhaitant recruter des talents en France","Startups et PME cherchant des profils qualifiés en remote","Entreprises ayant besoin d’une solution clé en main"],offer:["Sourcing et sélection de candidats qualifiés","Évaluation des compétences et adéquation mission","Mise en place de contrats via portage salarial","Gestion administrative complète (paie, social)","Suivi et reporting régulier pour l’entreprise"],notDone:["Nous ne fournissons pas de salariés en interne","Nous ne garantissons pas les performances individuelles","Nous ne remplaçons pas le management interne"],benefits:["Accès rapide à des talents qualifiés","Conformité légale et administrative assurée","Flexibilité et réduction des risques RH","Solution intégrée : Recrutement + Portage"],cta:"Recruter en full remote"},{title:"Externalisation Paie",shortDesc:"Gestion complète de la paie et administration du personnel en France.",intro:"NOVISA accompagne les entreprises opérant en France dans la gestion complète de la paie et de l’administration du personnel (ADP).",target:["Entreprises basées en France ou activité locale","Startups, PME et filiales internationales","Entreprises cherchant la conformité sociale"],offer:["Bulletins de paie conformes (Isapaye, Syntec...)","Déclarations sociales (URSSAF, retraite, mutuelle)","Gestion administrative (contrats, congés, absences)","Assistance en cas de contrôle administratif","Reporting RH complet et suivi précis"],notDone:["Ne remplace pas les décisions RH stratégiques","Ne gère pas les aspects financiers hors paie","Ne gère pas les salariés hors territoire français"],benefits:["Sécurité juridique et conformité totale","Gain de temps et productivité accrue","Adaptabilité aux conventions collectives","Expertise technique (logiciel Isapaye)"],cta:"Externaliser ma paie"}]},about:{badge:"Présentation",title:"NOVISA, spécialiste de la mobilité professionnelle",subtitle:"Mobilité internationale, coaching, portage salarial, recrutement remote et externalisation paie.",paragraph:"NOVISA accompagne les professionnels et les entreprises internationales dans tous les aspects de la mobilité professionnelle et des services RH : préparation des visas (Talent, Salarié, Affaire), coaching aux entretiens, portage salarial, recrutement de talents en full remote et externalisation de la paie. Notre mission est d’offrir une visibilité claire sur vos projets, de sécuriser vos démarches administratives et de valoriser vos compétences pour réussir votre intégration sur le marché français.",expertiseTitle:"Notre expertise",missionTitle:"Notre mission",importantTitle:"Points importants"},engagements:{badge:"Rôle & engagements",title:"Notre rôle dans votre dossier visa",subtitle:"Structurer, clarifier et sécuriser votre projet de mobilité",procedure:["Intervention après la fixation du rendez-vous TLS/consulat, idéalement au moins une semaine avant le dépôt.","Analyse de votre projet global et de votre situation professionnelle.","Structuration d’un dossier professionnel, cohérent et adapté à votre profil.","Mise en valeur de vos compétences, de vos expériences et de la cohérence de votre parcours.","Vérification de la cohérence globale du dossier avant dépôt auprès de TLS/du consulat.","Explication des grandes étapes administratives liées à votre projet (OFII, etc.), sans se substituer aux autorités officielles."],quality:["Accompagnement strictement professionnel et indépendant des consulats et de TLS.","Aucune fourniture de documents officiels ni promesse d’obtention de visa.","Confidentialité totale des informations et documents transmis.","Conseils personnalisés, clarté et cohérence sur l’ensemble de votre projet de mobilité.","Suivi sérieux et communication professionnelle pendant toute la préparation du dossier."]},documents:{badge:"Documents à fournir",title:"Pièces selon votre type de visa",subtitle:"Liste indicative — peut varier selon votre situation, votre type de visa et votre projet professionnel",bullets:["Passeport en cours de validité","Photo d'identité récente aux normes","Justificatifs selon le type de visa (travail, tourisme, talent)","Documents spécifiques à votre projet","Justificatifs d'hébergement et de moyens financiers","Formulaire de demande rempli et signé"],helpTitle:"Besoin d'aide ?",helpText:"Nous personnalisons la liste selon votre type de visa et vérifions chaque pièce justificative pour assurer la cohérence et la complétude de votre dossier.",cta:"Nous contacter"},pricing:{badge:"Tarifs & délais estimés",title:"Des offres adaptées à vos besoins",subtitle:"Les honoraires varient selon le type de visa, le niveau de coaching et les services de portage/full remote IT. Devis personnalisé sur demande.",cards:[{title:"Visas Professionnels",desc:"Analyse de projet, structuration complète du dossier et vérification de conformité pour visas Talent, Salarié ou Affaires."},{title:"Portage Salarial",desc:"Gestion administrative complète, contrats de travail français, facturation et couverture sociale pour consultants et entreprises."},{title:"Coaching Candidats",desc:"Optimisation de CV/LinkedIn et préparation intensive aux entretiens pour maximiser vos chances de recrutement."},{title:"Recrutement Full Remote",desc:"Sourcing de talents qualifiés et mise en place de solutions de travail à distance sécurisées et conformes."},{title:"Externalisation Paie",desc:"Gestion complète de la paie, administration du personnel (ADP) et conformité sociale pour entreprises en France."}],cta:"Obtenir un devis"},contact:{badge:"Contact NOVISA",title:"Parler de votre projet avec NOVISA",subtitle:"Décrivez votre projet (Visas, Portage, Coaching, Recrutement ou Paie) et nous revenons vers vous rapidement.",labels:{name:"Nom complet *",email:"Email *",phone:"Téléphone",city:"Ville",type:"Type de visa *",message:"Message"},placeholders:{name:"Votre nom complet",email:"votre@email.com",phone:"+216 XX XXX XXX",city:"Tunis, Sfax, Sousse...",message:"Décrivez brièvement votre projet et vos besoins..."},options:["Visas Professionnels","Portage Salarial","Coaching Candidats","Recrutement Full Remote","Externalisation Paie","Autre"],consent:"J'accepte d'être contacté(e) par NOVISA et j'ai lu la politique de confidentialité.",submit:"Envoyer ma demande"},footer:{desc:"Expert en mobilité internationale : Visas, Portage salarial, Coaching, Recrutement remote et Externalisation paie.",nav:{about:"Présentation",services:"Services",faq:"Engagements",documents:"Documents",pricing:"Tarifs & délais",contact:"Contact"},contactLines:["Adresse : B21, Immeuble Titanium, Rue de l’île de Djerba, Les Berges du Lac 2 – 1053 Tunis","Tél. : 29 466 456"],disclaimer:"NOVISA n’est ni une ambassade ni un organisme officiel et n’est pas affiliée aux consulats ni à TLS. Aucune garantie d’obtention de visa ne peut être donnée.",mentions:"Mentions",navigation:"Navigation",rights:"© {year} NOVISA. Tous droits réservés."},serviceDetails:{interested:"Intéressé par ce service ?",contactText:"Contactez-nous dès maintenant pour commencer votre procédure.",contactBtn:"Contactez-nous",targetTitle:"Public cible",offerTitle:"Ce que nous proposons",notDoneTitle:"Ce que nous ne faisons pas",benefitsTitle:"Vos avantages",processTitle:"Processus d'accompagnement"},references:{title:"Ils nous font confiance",subtitle:"Des entreprises qui s’appuient sur notre expertise RH et mobilité.",companies:[{name:"CAS International",desc:"Consulting & Advisory Services"},{name:"SAFARI TECHNOLOGIES",desc:"Solutions Technologiques"},{name:"INNOYA SERVICES",desc:"Services Innovants"}]},faq:{procedureTitle:"Accompagnement et procédure",qualityTitle:"Nos engagements qualité"},contactInfo:{hours:"Lundi - Vendredi, 9h - 18h",response:"Réponse sous 24h",addressTitle:"Adresse",address:"Les Berges du Lac 1<br>Tunis, Tunisie",mapLink:"Voir sur la carte →"},common:{learnMore:"En savoir plus"}},en:{header:{brand:"NOVISA",services:"Services",about:"About",documents:"Documents",pricing:"Pricing & timelines",engagements:"Commitments",cta:"Contact us",switcher:"Language"},hero:{badge:"Payroll portage & international administrative support",title:"NOVISA — Power your career in France",subtitle:"Complete expertise in payroll portage, professional visas, and HR support to secure your international mobility project.",cta1:"Contact us",cta2:"See our services",servicesTitle:"Our expertise serving your mobility",servicesSubtitle:"Solutions compliant with French law for international profiles",discoverBtn:"Learn more",description:"NOVISA specializes in implementing payroll portage solutions compliant with French law for international profiles, as well as in processing and preparing professional visa applications for France.",mission:"We support international candidates, freelancers and internationally-based companies in their administrative procedures to secure their professional projects in France.",disclaimer1:"⚠️ NOVISA operates exclusively on administrative, contractual and regulatory aspects.",disclaimer2:"⚠️ NOVISA does not offer job positions and does not intervene in French authorities' decisions.",servicesSummary:["Complete support for all types of professional visas (Talent, Salaried, Business)","Secure payroll portage solutions compliant with French law","Personalized coaching to succeed in interviews and highlight your profile","Recruitment and management of international talents for full remote missions","Complete payroll outsourcing and personnel administration (ADP)"]},services:{badge:"Our areas of support",title:"NOVISA visas and services",subtitle:"Professional support for your mobility and IT projects",link:"Contact us →",cards:[{title:"Professional Visas",shortDesc:"Instruction and support for visa applications to work legally in France.",intro:"NOVISA supports international companies and professional candidates in the instruction and constitution of visa files to work legally in France.",warning:"We do not provide employment and do not guarantee visa issuance. We operate exclusively on administrative and regulatory aspects.",target:["Foreign companies: sending employees to France","Qualified candidates: managers, experts, international talents","Profiles requiring a salaried, talent, or business visa"],offer:["Salaried visa: for employees with a French contract","Talent visa: for qualified profiles and experts","Business visa: for one-off missions or prospecting"],process:["Profile analysis and suitable visa type identification","Complete preparation of the administrative file","Document compliance verification","Coordination with employer or portage company","Follow-up until submission to authorities"],notDone:["We do not provide employment","We do not decide on the visa outcome","We do not make placement promises"],benefits:["Clear and secure process","Significant time saving","Legal security and compliance","Personalized international support"],cta:"Request a personalized study"},{title:"Payroll Portage",shortDesc:"Secure solution to employ or invoice in France without creating a company.",intro:"NOVISA supports international companies and professional consultants in setting up payroll portage solutions compliant with French law.",target:["Foreign companies: recruiting in France without a local entity","International consultants: working for French clients","Expatriate employees: salaried status with full coverage"],offer:["Legal compliance: French employment contract (CDI/CDD)","Social security and full health coverage","Simplified invoicing and expense management","Single interface: Portage + Admin + Visas","Fast and efficient B2B processes"],process:["Need analysis (company or consultant)","Development of the appropriate portage contract","Administrative setup and declarations","Client invoicing and salary transformation","Continuous follow-up, assistance, and reporting"],notDone:["We do not provide employment or missions","We do not replace strategic management","Portage does not automatically guarantee a visa"],benefits:["Flexibility: recruit without creating a subsidiary","Reduction of administrative risks","Full follow-up of the ported employee","Cost and timeline optimization"],cta:"Secure my missions"},{title:"Candidate Coaching",shortDesc:"Profile optimization and interview preparation for the French market.",intro:"NOVISA supports international candidates facing difficulties in landing interviews or highlighting their profile to French companies.",target:["Candidates wishing to work legally in France","Qualified professionals seeking to optimize their impact","People in portage wanting to maximize their chances"],offer:["CV and LinkedIn profile analysis and optimization","Targeted preparation for job interviews","Techniques to highlight international experience","Advice on professional communication"],notDone:["We do not provide employment","We do not guarantee hiring","We do not do direct recruitment"],benefits:["Targeted and concrete coaching","Practical approach to interviews","Immediate confidence gain","Ideal complement to visa/portage steps"],cta:"Boost my application"},{title:"Full Remote Recruitment",shortDesc:"Sourcing and management of international talents for remote missions.",intro:"NOVISA supports international companies in the recruitment and management of remote talents for missions in France.",target:["Companies wishing to recruit talents in France","Startups and SMEs looking for qualified remote profiles","Companies needing a turnkey solution"],offer:["Sourcing and selection of qualified candidates","Skills assessment and mission fit","Setting up contracts via payroll portage","Full administrative management (payroll, social)","Regular follow-up and reporting for the company"],notDone:["We do not provide internal employees","We do not guarantee individual performance","We do not replace internal management"],benefits:["Fast access to qualified talents","Ensured legal and administrative compliance","Flexibility and reduction of HR risks","Integrated solution: Recruitment + Portage"],cta:"Recruit in full remote"},{title:"Payroll Outsourcing",shortDesc:"Complete payroll management and personnel administration in France.",intro:"NOVISA supports companies operating in France in the complete management of payroll and personnel administration (ADP).",target:["Companies based in France or with local activity","Startups, SMEs, and international subsidiaries","Companies seeking social compliance"],offer:["Compliant payslips (Isapaye, Syntec...)","Social declarations (URSSAF, pension, health)","Administrative management (contracts, leave, absences)","Assistance in case of administrative audits","Complete HR reporting and precise follow-up"],notDone:["Does not replace strategic HR decisions","Does not manage non-payroll financial aspects","Does not manage employees outside French territory"],benefits:["Legal security and total compliance","Time saving and increased productivity","Adaptability to collective agreements","Technical expertise (Isapaye software)"],cta:"Outsource my payroll"}]},about:{badge:"About",title:"NOVISA, specialist in professional mobility",subtitle:"International mobility, coaching, payroll portage, remote recruitment, and payroll outsourcing.",paragraph:"NOVISA supports professionals and international companies in all aspects of professional mobility and HR services: visa preparation (Talent, Employee, Business), interview coaching, payroll portage, full remote talent recruitment, and payroll outsourcing. Our mission is to provide clear visibility on your projects, secure your administrative procedures, and highlight your skills to succeed in your integration into the French market.",expertiseTitle:"Our expertise",missionTitle:"Our mission",importantTitle:"Important points"},engagements:{badge:"Commitments & role",title:"Our role in your visa application",subtitle:"Structuring, clarifying and securing your mobility project",procedure:["Intervention after the TLS/consulate appointment is booked, ideally at least one week before submission.","Analysis of your overall project and professional situation.","Structuring a professional, coherent file adapted to your profile.","Highlighting your skills, experience and the consistency of your background.","Checking overall coherence before submission to TLS/the consulate.","Explaining the main administrative steps related to your project (OFII, etc.) without replacing official authorities."],quality:["Strictly professional support, independent from consulates and TLS.","No provision of official documents and no guarantee of visa issuance.","Full confidentiality of shared information and documents.","Personalised advice, clarity and coherence on your mobility project.","Serious follow-up and professional communication throughout the preparation."]},documents:{badge:"Required documents",title:"Documents by visa type",subtitle:"Indicative list — may vary by situation and visa type",bullets:["Valid passport","Recent ID photo","Documents according to visa type (work, tourist, talent)","Specific documents for your project","Proof of accommodation and funds","Completed and signed application form"],helpTitle:"Need help?",helpText:"We tailor the list to your visa type and verify each supporting document to ensure consistency and completeness of your file.",cta:"Contact us"},pricing:{badge:"Pricing & timelines",title:"Offers tailored to your needs",subtitle:"Fees depend on visa type, coaching level and payroll/full remote IT services. Personalised quote on request.",cards:[{title:"Professional Visas",desc:"Project analysis, full file structuring, and compliance check for Talent, Salaried, or Business visas."},{title:"Payroll Portage",desc:"Full administrative management, French employment contracts, invoicing, and social coverage for consultants and companies."},{title:"Candidate Coaching",desc:"CV/LinkedIn optimization and intensive interview preparation to maximize your recruitment chances."},{title:"Full Remote Recruitment",desc:"Sourcing of qualified talents and implementation of secure and compliant remote work solutions."},{title:"Payroll Outsourcing",desc:"Complete payroll management, personnel administration (ADP), and social compliance for companies in France."}],cta:"Get a quote"},contact:{badge:"NOVISA contact",title:"Discuss your project with NOVISA",subtitle:"Describe your project (Visas, Portage, Coaching, Recruitment, or Payroll) and we will get back to you shortly.",labels:{name:"Full name *",email:"Email *",phone:"Phone",city:"City",type:"Service type *",message:"Message"},placeholders:{name:"Your full name",email:"you@email.com",phone:"+216 29 466 456",city:"Tunis, Sfax, Sousse...",message:"Briefly describe your project and needs..."},options:["Professional Visas","Payroll Portage","Candidate Coaching","Full Remote Recruitment","Payroll Outsourcing","Other"],consent:"I agree to be contacted by NOVISA and have read the privacy policy.",submit:"Send my request"},footer:{desc:"International mobility expert: Visas, Payroll portage, Coaching, Remote recruitment, and Payroll outsourcing.",nav:{about:"About",services:"Services",faq:"Commitments",documents:"Documents",pricing:"Pricing",contact:"Contact"},contactLines:["Address: B21, Immeuble Titanium, Rue de l’île de Djerba, Les Berges du Lac 2 – 1053 Tunis","Phone: +216 29 466 456"],disclaimer:"NOVISA is neither an embassy nor an official organization and is not affiliated with consulates or TLS. Visa issuance can never be guaranteed.",mentions:"Legal Mentions",navigation:"Navigation",rights:"© {year} NOVISA. All rights reserved."},serviceDetails:{interested:"Interested in this service?",contactText:"Contact us now to start your procedure.",contactBtn:"Contact us",targetTitle:"Target Audience",offerTitle:"What we offer",notDoneTitle:"What we do not do",benefitsTitle:"Your benefits",processTitle:"Support Process"},references:{title:"They trust us",subtitle:"Companies that rely on our HR and mobility expertise.",companies:[{name:"CAS International",desc:"Consulting & Advisory Services"},{name:"SAFARI TECHNOLOGIES",desc:"Technological Solutions"},{name:"INNOYA SERVICES",desc:"Innovative Services"}]},faq:{procedureTitle:"Support and procedure",qualityTitle:"Our quality commitments"},contactInfo:{hours:"Monday - Friday, 9am - 6pm",response:"Response within 24h",addressTitle:"Address",address:"Les Berges du Lac 1<br>Tunis, Tunisia",mapLink:"View on map →"},common:{learnMore:"Learn more"}},ar:{header:{brand:"NOVISA",services:"الخدمات",about:"نبذة",documents:"الوثائق",pricing:"الأسعار والآجال",engagements:"الالتزامات",cta:"اتصل بنا",switcher:"اللغة"},hero:{badge:"بورتاج سالاريال ومرافقة إدارية دولية",title:"NOVISA — انطلق بمسيرتك المهنية في فرنسا",subtitle:"خبرة شاملة في البورتاج سالاريال، التأشيرات المهنية، والمرافقة في الموارد البشرية لتأمين مشروع تنقلك الدولي.",cta1:"اتصل بنا",cta2:"اكتشف خدماتنا",servicesTitle:"خبرتنا في خدمة تنقلكم",servicesSubtitle:"حلول متوافقة مع القانون الفرنسي للملفات الدولية",discoverBtn:"اعرف المزيد",description:"تتخصص NOVISA في إنشاء حلول بورتاج سالاريال متوافقة مع القانون الفرنسي للملفات الدولية، بالإضافة إلى معالجة وإعداد ملفات التأشيرات المهنية لفرنسا.",mission:"نرافق المرشحين الدوليين والفريلانسرز والشركات الدولية في إجراءاتهم الإدارية لتأمين مشاريعهم المهنية في فرنسا.",disclaimer1:"⚠️ تتدخل NOVISA حصريًا في الجوانب الإدارية والتعاقدية والتنظيمية.",disclaimer2:"⚠️ لا تقدم NOVISA عروض عمل ولا تتدخل في قرارات السلطات الفرنسية.",servicesSummary:["مرافقة كاملة لجميع أنواع التأشيرات المهنية (موهبة، عمل، أعمال)","حلول بورتاج سالاريال آمنة ومتوافقة مع القانون الفرنسي","تدريب مخصص للنجاح في المقابلات وإبراز ملفكم الشخصي","توظيف وإدارة المواهب الدولية للمهمات عن بعد بالكامل","تعهيد كامل للرواتب وإدارة شؤون الموظفين (ADP)"]},services:{badge:"مجالات مرافقتنا",title:"تأشيرات وخدمات NOVISA",subtitle:"مرافقة مهنية لمشاريع التنقل والمهام المعلوماتية",link:"اتصل بنا →",cards:[{title:"التأشيرات المهنية",shortDesc:"إرشاد ومرافقة ملفات التأشيرة للعمل بشكل قانوني في فرنسا.",intro:"ترافق NOVISA الشركات الدولية والمترشحين المهنيين في إرشاد وتكوين ملفات التأشيرة للعمل بشكل قانوني في فرنسا.",warning:"نحن لا نوفر وظائف ولا نضمن الحصول على التأشيرة. نتدخل حصرياً في الجوانب الإدارية والتنظيمية.",target:["الشركات الأجنبية: إرسال موظفين إلى فرنسا","المترشحون المؤهلون: إطارات، خبراء، مواهب دولية","الملفات التي تتطلب تأشيرة عمل أو موهبة أو أعمال"],offer:["تأشيرة عمل: للموظفين بعقد فرنسي","تأشيرة موهبة: للملفات المؤهلة والخبراء","تأشيرة أعمال: للمهمات المؤقتة أو التنقيب"],process:["تحليل الملف وتحديد نوع التأشيرة المناسب","إعداد كامل للملف الإداري","التحقق من مطابقة الوثائق","التنسيق مع صاحب العمل أو شركة البورتاج","المتابعة حتى الإيداع لدى السلطات"],notDone:["نحن لا نوفر وظائف","نحن لا نقرر في نتيجة التأشيرة","نحن لا نقدم وعوداً بالتوظيف"],benefits:["مسار واضح وآمن","ربح كبير للوقت","أمان قانوني ومطابقة تامة","مرافقة دولية مخصصة"],cta:"طلب دراسة مخصصة"},{title:"بورتاج سالاريال",shortDesc:"حل آمن لتوظيف أو فوترة الخدمات في فرنسا دون إنشاء شركة.",intro:"ترافق NOVISA الشركات الدولية والمستشارين المهنيين في وضع حلول بورتاج سالاريال متوافقة مع القانون الفرنسي.",target:["الشركات الأجنبية: التوظيف في فرنسا دون كيان محلي","المستشارون الدوليون: العمل لصالح عملاء فرنسيين","الموظفون المغتربون: وضعية موظف مع تغطية كاملة"],offer:["المطابقة القانونية: عقد عمل فرنسي (CDI/CDD)","الضمان الاجتماعي وتغطية صحية كاملة","فوترة مبسطة وإدارة الأعباء","واجهة موحدة: بورتاج + إداري + تأشيرات","سرعة وفعالية في مسارات B2B"],process:["تحليل الاحتياجات (شركة أو مستشار)","إعداد عقد البورتاج المناسب","الإعداد الإداري والتصاريح","فوترة العميل وتحويلها إلى راتب","متابعة مستمرة، مساعدة وتقارير"],notDone:["نحن لا نوفر وظائف أو مهمات","نحن لا نعوض الإدارة الاستراتيجية","البورتاج لا يضمن تلقائياً الحصول على تأشيرة"],benefits:["مرونة: التوظيف دون إنشاء فرع","تقليل المخاطر الإدارية","متابعة كاملة للموظف","تحسين التكاليف والآجال"],cta:"تأمين مهماتي"},{title:"تدريب المترشحين",shortDesc:"تحسين الملف الشخصي والتحضير للمقابلات في السوق الفرنسية.",intro:"ترافق NOVISA المترشحين الدوليين الذين يواجهون صعوبات في الحصول على مقابلات أو إبراز ملفاتهم لدى الشركات الفرنسية.",target:["المترشحون الراغبون في العمل قانونياً في فرنسا","المهنيون المؤهلون الساعون لتحسين تأثيرهم","الأشخاص في وضعية بورتاج الراغبون في تعزيز فرصهم"],offer:["تحليل وتحسين السيرة الذاتية وملف LinkedIn","تحضير موجه لمقابلات العمل","تقنيات لإبراز الخبرة الدولية","نصائح حول التواصل المهني"],notDone:["نحن لا نوفر وظائف","نحن لا نضمن التوظيف","نحن لا نقوم بالتوظيف المباشر"],benefits:["تدريب موجه وملموس","نهج عملي للمقابلات","اكتساب ثقة فورية","تكملة مثالية لإجراءات التأشيرة والبورتاج"],cta:"تعزيز ترشحي"},{title:"التوظيف عن بعد",shortDesc:"استقطاب وإدارة المواهب الدولية للمهمات عن بعد.",intro:"ترافق NOVISA الشركات الدولية في توظيف وإدارة المواهب عن بعد للمهمات في فرنسا.",target:["الشركات الراغبة في توظيف مواهب في فرنسا","الشركات الناشئة والمتوسطة الباحثة عن ملفات عن بعد","الشركات التي تحتاج إلى حل متكامل"],offer:["استقطاب واختيار المترشحين المؤهلين","تقييم المهارات ومدى ملاءمتها للمهمة","وضع العقود عبر البورتاج سالاريال","إدارة إدارية كاملة (رواتب، ضمان اجتماعي)","متابعة وتقارير دورية للشركة"],notDone:["نحن لا نوفر موظفين داخليين","نحن لا نضمن الأداء الفردي","نحن لا نعوض الإدارة الداخلية"],benefits:["وصول سريع لمواهب مؤهلة","ضمان المطابقة القانونية والإدارية","مرونة وتقليل مخاطر الموارد البشرية","حل متكامل: توظيف + بورتاج"],cta:"التوظيف عن بعد"},{title:"تعهيد الرواتب",shortDesc:"إدارة كاملة للرواتب وشؤون الموظفين في فرنسا.",intro:"ترافق NOVISA الشركات العاملة في فرنسا في الإدارة الكاملة للرواتب وإدارة شؤون الموظفين (ADP).",target:["الشركات المقيمة في فرنسا أو ذات نشاط محلي","الشركات الناشئة والمتوسطة وفروع الشركات الدولية","الشركات التي تسعى للمطابقة الاجتماعية"],offer:["قسائم رواتب مطابقة (Isapaye, Syntec...)","التصاريح الاجتماعية (URSSAF، التقاعد، التأمين)","الإدارة الإدارية (عقود، إجازات، غيابات)","المساعدة في حالة التدقيق الإداري","تقارير موارد بشرية كاملة ومتابعة دقيقة"],notDone:["لا يعوض قرارات الموارد البشرية الاستراتيجية","لا يدير الجوانب المالية خارج الرواتب","لا يدير الموظفين خارج الأراضي الفرنسية"],benefits:["أمان قانوني ومطابقة كاملة","ربح الوقت وزيادة الإنتاجية","التكيف مع الاتفاقيات الجماعية","خبرة تقنية (برنامج Isapaye)"],cta:"تعهيد رواتبي"}]},about:{badge:"نبذة",title:"NOVISA، متخصصة في التنقل المهني",subtitle:"تنقل دولي، كوتشينغ، بورتاج سالاريال، توظيف عن بعد وتعهيد الرواتب.",paragraph:"ترافق NOVISA المهنيين والشركات الدولية في جميع جوانب التنقل المهني وخدمات الموارد البشرية: إعداد ملفات التأشيرة (موهبة، عمل، أعمال)، تدريب على المقابلات، بورتاج سالاريال، توظيف المواهب عن بعد وتعهيد الرواتب. مهمتنا هي توفير رؤية واضحة لمشاريعكم، تأمين إجراءاتكم الإدارية وإبراز مهاراتكم للنجاح في اندماجكم في السوق الفرنسية.",expertiseTitle:"خبرتنا",missionTitle:"مهمتنا",importantTitle:"نقاط مهمة"},engagements:{badge:"الالتزامات والدور",title:"دورنا في ملف التأشيرة",subtitle:"هيكلة المشروع وتوضيحه وتأمينه",procedure:["نتدخل بعد حجز موعد TLS / القنصلية، ويفضل قبل أسبوع على الأقل من الإيداع.","تحليل مشروعكم العام ووضعكم المهني.","هيكلة ملف مهني ومتناسق يتناسب مع ملفكم.","إبراز المهارات والخبرات وتناسق المسار.","التحقق من التناسق العام قبل الإيداع لدى TLS / القنصلية.","شرح المراحل الإدارية الرئيسية المرتبطة بالمشروع (OFII...) دون تعويض السلطات الرسمية."],quality:["مرافقة مهنية مستقلة تمامًا عن القنصليات و TLS.","لا يتم توفير وثائق رسمية ولا ضمان بالحصول على التأشيرة.","سرية تامة للمعلومات والوثائق المتبادلة.","نصائح مخصصة ووضوح وتناسق في مشروع التنقل.","متابعة جدية وتواصل مهني طوال مرحلة الإعداد."]},documents:{badge:"الوثائق المطلوبة",title:"الوثائق حسب نوع التأشيرة",subtitle:"قائمة استرشادية — قد تختلف حسب وضعكم، نوع التأشيرة ومشروعكم المهني",bullets:["جواز سفر ساري المفعول","صورة شخصية حديثة مطابقة للمعايير","وثائق حسب نوع التأشيرة (عمل، موهبة، أعمال)","وثائق خاصة بالمهمة أو المشروع","إثبات السكن والموارد المالية","استمارة الطلب معبأة وموقعة"],helpTitle:"بحاجة لمساعدة؟",helpText:"نساعدكم في تكييف قائمة الوثائق حسب نوع التأشيرة ونتحقق من تناسق واكتمال الملف قبل الإيداع.",cta:"اتصل بنا"},pricing:{badge:"الأسعار والآجال",title:"عروض مكيّفة لاحتياجاتكم",subtitle:"الرسوم تختلف حسب نوع التأشيرة، مستوى الكوتشينغ وخدمات البورتاج / Full Remote IT. عرض سعر مخصص عند الطلب.",cards:[{title:"التأشيرات المهنية",desc:"تحليل المشروع، هيكلة شاملة للملف والتحقق من المطابقة لتأشيرات الموهبة، العمل أو الأعمال."},{title:"بورتاج سالاريال",desc:"إدارة إدارية كاملة، عقود عمل فرنسية، فوترة وتغطية اجتماعية للمستشارين والشركات."},{title:"تدريب المترشحين",desc:"تحسين السيرة الذاتية/LinkedIn وتحضير مكثف للمقابلات لزيادة فرص التوظيف."},{title:"التوظيف عن بعد",desc:"استقطاب المواهب المؤهلة ووضع حلول عمل عن بعد آمنة ومتوافقة."},{title:"تعهيد الرواتب",desc:"إدارة كاملة للرواتب، شؤون الموظفين (ADP) والمطابقة الاجتماعية للشركات في فرنسا."}],cta:"احصل على عرض سعر"},contact:{badge:"اتصال NOVISA",title:"تحدث عن مشروعك مع NOVISA",subtitle:"صف مشروعك (تأشيرات، بورتاج، تدريب، توظيف أو رواتب) وسنعود إليك في أقرب وقت.",labels:{name:"الاسم الكامل *",email:"البريد الإلكتروني *",phone:"الهاتف",city:"المدينة",type:"نوع الخدمة *",message:"الرسالة"},placeholders:{name:"اسمك الكامل",email:"you@email.com",phone:"+216 29 466 456",city:"تونس، صفاقس، سوسة...",message:"اشرح بإيجاز مشروعك واحتياجاتك..."},options:["التأشيرات المهنية","بورتاج سالاريال","تدريب المترشحين","التوظيف عن بعد","تعهيد الرواتب","أخرى"],consent:"أوافق على الاتصال بي من طرف NOVISA وقد قرأت سياسة الخصوصية.",submit:"إرسال الطلب"},footer:{desc:"خبير في التنقل الدولي: تأشيرات، بورتاج سالاريال، كوتشينغ، توظيف عن بعد وتعهيد الرواتب.",nav:{about:"نبذة",services:"الخدمات",faq:"الالتزامات",documents:"الوثائق",pricing:"الأسعار",contact:"اتصال"},contactLines:["العنوان: B21، عمارة تيتانيوم، نهج جزيرة جربة، ضفاف البحيرة 2 – 1053 تونس","الهاتف: +216 29 466 456"],disclaimer:"NOVISA ليست سفارة ولا مؤسسة رسمية وليست تابعة للقنصليات أو TLS. لا يمكن بأي حال ضمان الحصول على التأشيرة.",mentions:"إشعارات قانونية",navigation:"تصفح",rights:"© {year} NOVISA. جميع الحقوق محفوظة."},serviceDetails:{interested:"هل أنت مهتم بهذه الخدمة؟",contactText:"اتصل بنا الآن لبدء إجراءاتك.",contactBtn:"اتصل بنا",targetTitle:"الجمهور المستهدف",offerTitle:"ما نقدمه",notDoneTitle:"ما لا نقوم به",benefitsTitle:"مميزاتك",processTitle:"مسار المرافقة"},references:{title:"شركاؤنا",subtitle:"شركات تعتمد على خبرتنا في الموارد البشرية والتنقل.",companies:[{name:"CAS International",desc:"خدمات الاستشارة والتوجيه"},{name:"SAFARI TECHNOLOGIES",desc:"الحلول التكنولوجية"},{name:"INNOYA SERVICES",desc:"الخدمات المبتكرة"}]},faq:{procedureTitle:"المرافقة والإجراءات",qualityTitle:"التزامات الجودة لدينا"},contactInfo:{hours:"الاثنين - الجمعة، 9 صباحاً - 6 مساءً",response:"الرد خلال 24 ساعة",addressTitle:"العنوان",address:"ضفاف البحيرة 1<br>تونس، تونس",mapLink:"عرض على الخريطة ←"},common:{learnMore:"اعرف المزيد"}}};function J(){const e=(localStorage.getItem("locale")||"").toLowerCase();if(e==="fr"||e==="en"||e==="ar")return e;const t=(navigator.language||"fr").toLowerCase();return t.startsWith("ar")?"ar":t.startsWith("en")?"en":"fr"}function X(e){const t=e==="ar"?"rtl":"ltr";document.documentElement.setAttribute("dir",t),document.documentElement.setAttribute("lang",e)}function Y(e){return`
    <div class="animated-bg">
      <div class="orb orb-teal" style="width:560px;height:560px;top:-175px;left:-115px"></div>
      <div class="orb orb-orange" style="width:510px;height:510px;bottom:-155px;right:-95px"></div>
      <div class="orb orb-blue" style="width:440px;height:440px;top:44%;left:62%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${e.documents.title}</h2>
        <p class="muted">${e.documents.subtitle}</p>
      </div>
      <div class="grid-2">
        <ul class="card" style="padding:32px;list-style:none;display:grid;gap:14px">
          ${e.documents.bullets.map(t=>`<li style="color:#4a5568;display:flex;align-items:start;gap:12px"><span style="color:var(--logo-blue);font-size:20px;line-height:1">✓</span><span>${t}</span></li>`).join("")}
        </ul>
        <div class="card" style="padding:32px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <h3 style="margin-bottom:16px">${e.documents.helpTitle}</h3>
            <p style="color:#4a5568;line-height:1.7;margin-bottom:24px">${e.documents.helpText}</p>
          </div>
          <a href="#contact" class="btn btn-primary" data-scroll="contact" style="align-self:flex-start">${e.documents.cta}</a>
        </div>
      </div>
    </div>
  `}function U(e){return`
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:580px;height:580px;top:-190px;left:-110px"></div>
      <div class="orb orb-teal" style="width:520px;height:520px;bottom:-160px;right:-100px"></div>
      <div class="orb orb-orange" style="width:460px;height:460px;top:48%;left:55%"></div>
    </div>
    <div class="container">
      <div class="section-header" style="margin-bottom: 50px;">
        <h2 style="font-size: 2.5rem; color: var(--white);">${e.references.title}</h2>
        <p class="muted" style="color: var(--neutral-300);">${e.references.subtitle}</p>
      </div>
      
      <div class="references-grid" style="display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap;">
        ${e.references.companies.map(t=>`
          <div class="reference-item" style="text-align: center; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); flex: 1; min-width: 280px; max-width: 320px;" onmouseover="this.style.transform='translateY(-10px) scale(1.05)'" onmouseout="this.style.transform='translateY(0) scale(1)'">
            <div class="card reference-logo-box" style="height: 160px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border-radius: 20px; backdrop-filter: blur(10px); margin-bottom: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
              <span style="font-weight: 800; font-size: 1.5rem; color: var(--white); letter-spacing: -0.5px; text-shadow: 0 4px 12px rgba(0,0,0,0.3);">${t.name}</span>
            </div>
            <p style="font-size: 1rem; color: var(--logo-teal); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${t.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}let y=J();function d(){return G[y]}function S(){var m;X(y);const e=d(),t=document.getElementById("header");t&&(t.innerHTML=R(e,y));const n=document.getElementById("footer");n&&(n.innerHTML=j(e));const i=document.getElementById("hero-root");i&&(i.innerHTML=M(e));const s=document.getElementById("services-root");s&&(s.innerHTML=z(e));const a=document.getElementById("about-root");a&&(a.innerHTML=H(e));const c=document.getElementById("references-root");c&&(c.innerHTML=U(e));const p=document.getElementById("contact-root");p&&(p.innerHTML=W(e));const u=document.getElementById("documents-root");u&&(u.innerHTML=Y(e)),(m=document.getElementById("lang-switch"))==null||m.addEventListener("change",f=>{const g=f.target.value;y=g,localStorage.setItem("locale",g),S()}),Q()}function Q(){const e=document.getElementById("mobile-menu-toggle"),t=document.getElementById("main-menu"),n=()=>{e==null||e.classList.toggle("active"),t==null||t.classList.toggle("active"),t!=null&&t.classList.contains("active")?document.body.style.overflow="hidden":document.body.style.overflow=""},i=()=>{e==null||e.classList.remove("active"),t==null||t.classList.remove("active"),document.body.style.overflow=""};e==null||e.addEventListener("click",n),t==null||t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",i)})}S();document.addEventListener("click",e=>{var i,s,a,c,p,u,m,f,g,b;const n=e.target.closest(".service-details-btn");if(n){const I=n.getAttribute("data-index"),l=document.getElementById(`service-card-${I}`),h=document.getElementById("service-details-container");if(l&&h){const C=(i=l.querySelector(".data-title"))==null?void 0:i.textContent,A=(s=l.querySelector(".data-intro"))==null?void 0:s.textContent,x=(a=l.querySelector(".data-warning"))==null?void 0:a.textContent,T=(c=l.querySelector(".data-target"))==null?void 0:c.textContent,$=(p=l.querySelector(".data-offer"))==null?void 0:p.textContent,k=(u=l.querySelector(".data-process"))==null?void 0:u.textContent,N=(m=l.querySelector(".data-not-done"))==null?void 0:m.textContent,O=(f=l.querySelector(".data-benefits"))==null?void 0:f.textContent,D=(g=l.querySelector(".data-cta"))==null?void 0:g.textContent,V=(b=l.querySelector(".icon"))==null?void 0:b.innerHTML,v=r=>{try{return r?JSON.parse(r):[]}catch{return[]}},L=v(T),P=v($),w=v(k),F=v(N),E=v(O),o=n.getAttribute("data-color-var")||"--logo-blue";h.innerHTML=`
        <div class="service-details-card scroll-animate-scale animate-in">
          <div class="blobs" style="border-radius: var(--radius-lg);">
            <div class="blob one" style="background: radial-gradient(circle at 30% 30%, var(${o}), transparent 70%); opacity: 0.1;"></div>
            <div class="blob two" style="background: radial-gradient(circle at 70% 40%, var(${o}), transparent 70%); opacity: 0.1; animation-delay: 2s;"></div>
          </div>

          <div style="position: relative; z-index: 1;">
            <!-- Top Header Row -->
            <header class="service-details-header-row" style="display: flex; justify-content: space-between; align-items: center; gap: 30px; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid rgba(0,0,0,0.05);">
              <div style="display: flex; align-items: center; gap: 24px;">
                <div class="service-details-icon" style="border-color: var(${o}); width: 64px; height: 64px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid; background: white;">
                  ${V}
                </div>
                <h3 style="color: var(${o}); margin: 0; font-size: 2rem; font-weight: 800;">${C}</h3>
              </div>
              <div class="service-details-header-cta" style="display: flex; align-items: center; gap: 20px;">
                <span class="cta-label" style="color: #666; font-weight: 600; font-size: 1rem;">${D}</span>
                <a href="#contact" class="btn btn-primary" data-scroll="contact" style="padding: 12px 32px; white-space: nowrap;">
                  ${d().serviceDetails.contactBtn}
                </a>
              </div>
            </header>

            <!-- Main Content Area -->
            <div class="service-details-content">
              <p class="intro-text" style="font-size: 1.1rem; line-height: 1.6; color: #444; margin-bottom: 24px;">${A}</p>
              ${x?`<div class="warning-box" style="border-left: 4px solid var(--logo-orange); background: rgba(236, 164, 0, 0.05); padding: 16px 24px; border-radius: 8px; margin-bottom: 40px; font-size: 1rem; color: #555;">${x}</div>`:""}
              
              <div class="service-details-grid-modern" style="display: grid; gap: 40px;">
                <div class="details-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${o}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      ${d().serviceDetails.targetTitle}
                    </h4>
                    <ul class="modern-list">
                      ${L.map(r=>`<li>${r}</li>`).join("")}
                    </ul>
                  </div>

                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${o}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      ${d().serviceDetails.offerTitle}
                    </h4>
                    <ul class="modern-list">
                      ${P.map(r=>`<li>${r}</li>`).join("")}
                    </ul>
                  </div>
                </div>

                <div class="details-row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${o}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                      ${d().serviceDetails.notDoneTitle}
                    </h4>
                    <ul class="modern-list not-done">
                      ${F.map(r=>`<li>${r}</li>`).join("")}
                    </ul>
                  </div>

                  <div class="details-section">
                    <h4 style="display: flex; align-items: center; gap: 12px; color: var(${o}); margin-bottom: 20px; font-size: 1.2rem; font-weight: 700;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      ${d().serviceDetails.benefitsTitle}
                    </h4>
                    <ul class="modern-list">
                      ${E.map(r=>`<li>${r}</li>`).join("")}
                    </ul>
                  </div>
                </div>
              </div>

              ${w.length>0?`
                <div class="process-timeline-section" style="margin-top: 60px; padding-top: 40px; border-top: 1px solid rgba(0,0,0,0.05);">
                  <h4 style="color: var(${o}); margin-bottom: 32px; font-size: 1.4rem; font-weight: 800; text-align: center;">${d().serviceDetails.processTitle}</h4>
                  <div class="timeline-horizontal">
                    ${w.map((r,q)=>`
                        <div class="timeline-step">
                          <div class="step-number" style="background: linear-gradient(135deg, var(${o}), var(${o==="--logo-blue"?"--logo-teal":o==="--logo-teal"?"--logo-orange":"--logo-blue"}));">${q+1}</div>
                          <div class="step-text">${r}</div>
                        </div>
                      `).join("")}
                  </div>
                </div>
              `:""}
            </div>
          </div>
        </div>
      `,h.classList.add("active"),setTimeout(()=>{h.scrollIntoView({behavior:"smooth",block:"start"})},100)}}});document.addEventListener("click",e=>{var i;const n=e.target.closest("[data-scroll]");if(n){const s=n.getAttribute("data-scroll");s&&(e.preventDefault(),(i=document.getElementById(s))==null||i.scrollIntoView({behavior:"smooth",block:"start"}))}});window.addEventListener("scroll",()=>{const e=window.pageYOffset,t=document.querySelector("header.site-header");e>50?t==null||t.classList.add("scrolled"):t==null||t.classList.remove("scrolled")});function K(){const e={root:null,rootMargin:"0px",threshold:.1},t=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("animate-in"),t.unobserve(s.target))})},e);document.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .card").forEach(i=>{i.classList.contains("card")&&!i.classList.contains("scroll-animate")&&!i.classList.contains("scroll-animate-left")&&!i.classList.contains("scroll-animate-right")&&!i.classList.contains("scroll-animate-scale")&&i.classList.add("scroll-animate"),t.observe(i)})}setTimeout(K,100);
