(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();function I(e,t){return`
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
        <a href="#tarifs">${e.header.pricing}</a>
        <a href="#documents">${e.header.documents}</a>
        
      </nav>
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
  `}function w(e){const t=new Date().getFullYear();return`
    <div class="container">
      <div class="cols">
        <div>
          <h3>${e.header.brand}</h3>
          <p class="muted">${e.footer.desc}</p>
          <h4 style="margin-top: 24px;">Mentions</h4>
          <p class="muted" style="margin-top:8px">${e.footer.contactLines.join("<br/>")}</p>
          <p class="muted" style="margin-top:8px">${e.footer.disclaimer}</p>
          <div style="margin-top:12px"><a href="#contact" class="btn btn-primary" data-scroll="contact">${e.header.cta}</a></div>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul style="list-style:none;padding:0;margin-top:8px">
            <li><a href="#services">${e.footer.nav.services}</a></li>
            <li><a href="#about">${e.footer.nav.about}</a></li>
            <li><a href="#tarifs">${e.footer.nav.pricing}</a></li>
            <li><a href="#documents">${e.footer.nav.documents}</a></li>
            <li><a href="#contact">${e.footer.nav.contact}</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom">© ${t} NOVISA. Tous droits réservés.</div>
    </div>
  `}function T(e,t){const o=['<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>','<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>','<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>','<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>','<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>','<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>'],i=o[e]||o[0];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(${t})"><${i}</svg>`}function $(e){var s,a,n,c,d,r;const t=["--logo-blue","--logo-teal","--logo-orange"],o=e.hero.servicesSummary||[],i=[((s=e.services.cards[0])==null?void 0:s.title)||"Accompagnement visa",((a=e.services.cards[1])==null?void 0:a.title)||"Visa Talent",((n=e.services.cards[2])==null?void 0:n.title)||"Visa Salarié",((c=e.services.cards[3])==null?void 0:c.title)||"Visa d'affaire",((d=e.services.cards[4])==null?void 0:d.title)||"Coaching",((r=e.services.cards[5])==null?void 0:r.title)||"Portage salarial"];return`
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:500px;height:500px;top:10%;left:5%"></div>
      <div class="orb orb-teal" style="width:450px;height:450px;top:50%;right:10%"></div>
      <div class="orb orb-orange" style="width:400px;height:400px;bottom:15%;left:30%"></div>
      <div class="orb orb-blue" style="width:350px;height:350px;top:30%;right:25%"></div>
      <div class="orb orb-teal" style="width:380px;height:380px;bottom:25%;right:15%"></div>
    </div>
    <div class="container">
      <div class="hero-content-centered">
        <div class="hero-text-center">
          <h1 style="margin-top:20px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.3s">${e.hero.title}</h1>
          <p style="margin-top:16px;font-size:18px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.4s" class="muted">${e.hero.subtitle}</p>
        </div>
        
        <div class="hero-services-section" style="animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.5s">
          <div class="hero-services-header">
            <h2>${e.hero.servicesTitle}</h2>
            <p class="muted">${e.hero.servicesSubtitle}</p>
          </div>
          
          <div class="hero-services-grid">
            ${o.map((u,l)=>{const p=t[l%t.length];return`
                <article class="hero-service-card hero-service-card-compact" style="animation-delay: ${.6+l*.1}s;" data-scroll="services">
                  <div class="hero-service-icon" style="border-color: var(${p});">
                    ${T(l,p)}
                  </div>
                  <h3 style="color: var(${p});">${i[l]}</h3>
                </article>
              `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function L(e,t){const o=e.toLowerCase();let i="";return o.includes("visa")||o.includes("tls")?i='<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>':o.includes("coaching")||o.includes("entretien")?i='<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>':o.includes("business")||o.includes("affaire")?i='<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>':i='<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(${t})">${i}</svg>`}function A(e){const t=e.services.cards||[],o=["--logo-blue","--logo-teal","--logo-orange"];return`
    <div class="container">
      <div class="section-header">
        <h2>${e.services.title}</h2>
        <p class="muted">${e.services.subtitle}</p>
      </div>
      <div class="grid-3" style="align-items: stretch;">
        ${t.map((i,s)=>{const a=o[s%o.length];return`
          <article class="card service-card" id="service-card-${s}" style="height: 100%; display: flex; flex-direction: column;">
            <div class="icon" style="background: rgba(255,255,255,0.05); box-shadow: none; border: 1px solid var(${a});">
              ${L(i.title,a)}
            </div>
            <h3 style="color: var(${a}); text-shadow: none;">${i.title}</h3>
            ${i.intro?`<p>${i.intro}</p>`:""}
            
            <div style="margin-top: auto; padding-top: 20px;">
              <button class="btn btn-primary service-details-btn" data-index="${s}" data-color-var="${a}" style="width: 100%; justify-content: center;">
                En savoir plus
              </button>
            </div>
            
            <!-- Hidden data for modal -->
            <div class="service-data" style="display: none;">
              <div class="data-title">${i.title}</div>
              <div class="data-intro">${i.intro||""}</div>
              <div class="data-bullets">${JSON.stringify(i.bullets||[])}</div>
              <div class="data-footer">${i.footer||""}</div>
            </div>
          </article>
        `}).join("")}
      </div>
    </div>

    <!-- Service Details Section Container -->
    <div id="service-details-container" class="service-details-container container">
      <!-- Content will be injected here by JS -->
    </div>
  `}function N(e){return`
    <div class="animated-bg">
      <div class="orb orb-teal" style="width:520px;height:520px;top:-160px;right:-120px"></div>
      <div class="orb orb-orange" style="width:470px;height:470px;bottom:-140px;left:-90px"></div>
      <div class="orb orb-blue" style="width:400px;height:400px;top:35%;right:65%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${e.about.title}</h2>
        <p class="muted">${e.about.subtitle}</p>
      </div>
      <div class="card" style="padding:40px;max-width:900px;margin:0 auto">
        <p style="color:#4a5568;font-size:17px;line-height:1.8">${e.about.paragraph}</p>
      </div>
    </div>
  `}function O(e){return`
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
          <p class="muted small">Lundi - Vendredi, 9h - 18h</p>
        </div>

        <!-- Email -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(15,163,177,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-teal);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">${e.contact.labels.email||"Email"}</h3>
          <a href="mailto:contact@evia.tn" style="font-size: 1.1rem; font-weight: 600; color: var(--text);">contact@evia.tn</a>
          <p class="muted small">Réponse sous 24h</p>
        </div>

        <!-- Address -->
        <div class="card" style="text-align: center; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(236,164,0,0.1); display: flex; align-items: center; justify-content: center; color: var(--logo-orange);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">Adresse</h3>
          <p style="font-size: 1.1rem; font-weight: 600; color: var(--text); margin: 0;">Les Berges du Lac 1<br>Tunis, Tunisie</p>
          <a href="https://maps.google.com" target="_blank" class="link" style="color: var(--logo-orange);">Voir sur la carte →</a>
        </div>
      </div>
    </div>
  `}const E={fr:{header:{brand:"NOVISA",services:"Services",about:"Présentation",documents:"Documents",pricing:"Tarifs & délais",engagements:"Engagements",cta:"Nous contacter",switcher:"Langue"},hero:{badge:"Mobilité internationale – Coaching – Portage salarial – Full Remote IT",title:"NOVISA, partenaire de vos projets de mobilité et missions IT",subtitle:"Accompagnement professionnel pour vos visas, coaching, portage salarial et missions IT en full remote",cta1:"Nous contacter",cta2:"Découvrir nos services",servicesTitle:"Nos 6 domaines d'expertise",servicesSubtitle:"Des solutions complètes pour votre mobilité professionnelle et vos projets IT",discoverBtn:"En savoir plus",servicesSummary:["Structuration professionnelle de votre dossier visa après rendez-vous TLS","Accompagnement complet pour tous types de Visa Talent (CBE, salarié qualifié, entrepreneur)","Préparation de dossier visa salarié avec cohérence OFII et projet professionnel","Structuration de dossier pour missions professionnelles à l'étranger","Préparation complète aux entretiens ESN et clients finaux avec simulations","Gestion administrative complète pour freelances et mise à disposition IT"]},services:{badge:"Nos domaines d’accompagnement",title:"Visas et services NOVISA",subtitle:"Accompagnement professionnel pour vos projets de mobilité et missions IT",link:"Nous contacter →",cards:[{title:"Accompagnement visa – Notre rôle",intro:"NOVISA intervient après la fixation du rendez-vous TLS/consulat ; il est essentiel de nous contacter au moins une semaine avant, une fois que tous les éléments préalables sont disponibles.",bullets:["Structurer un dossier professionnel et cohérent","Mettre en valeur compétences et expériences","Clarifier le projet global","Vérifier la cohérence avant dépôt"],footer:"Nous ne fournissons aucun document officiel."},{title:"Visa Talent – Accompagnement",intro:"NOVISA accompagne tous les types de Visa Talent :",bullets:["Salarié qualifié","Carte Bleue Européenne (CBE)","Salarié en mission","Chercheur","Porteur de projet / Entrepreneur","Mandataire social","Profession artistique"],footer:"Notre rôle : donner visibilité et cohérence aux projets et candidatures."},{title:"Visa Salarié",intro:"Nous guidons les salariés après autorisation et rendez-vous TLS/consulat, en structurant leur dossier pour assurer cohérence et conformité avec le projet professionnel et les démarches administratives (OFII) :",bullets:["Structurer le dossier","Clarifier la cohérence contrat / projet / parcours","Expliquer les grandes étapes (OFII…)","Préparer une présentation professionnelle"]},{title:"Visa d’affaire",intro:"Pour les salariés envoyés en mission à l’étranger avec un client ou une filiale, NOVISA accompagne la préparation du dossier afin de :",bullets:["Structurer le dossier","Clarifier l’objet de la mission","Présenter la candidature de façon claire et cohérente"]},{title:"Coaching – Entretiens",intro:"Nous préparons les candidats à réussir leurs entretiens avec les ESN et les clients finaux en travaillant sur les aspects RH, la présentation et la communication professionnelle :",bullets:["Préparation RH","Simulation d’entretien","Mise en valeur du parcours et des compétences","Gestion du stress et communication professionnelle"]},{title:"Portage salarial",intro:"Nous accompagnons les freelances sans patente en prenant en charge l’administration complète pour sécuriser la relation avec le client :",bullets:["Contrat avec le client","Facturation et versement des revenus","Paiement des cotisations CNSS","Gestion administrative complète"]}]},about:{badge:"Présentation",title:"NOVISA, spécialiste de la mobilité professionnelle",subtitle:"Mobilité internationale, coaching, portage salarial et full remote IT.",paragraph:"NOVISA accompagne les professionnels et les entreprises internationales dans tous les aspects de la mobilité professionnelle et des missions IT : préparation des visas (Talent, Salarié, Affaire), coaching aux entretiens, portage salarial et mise à disposition de talents IT en full remote. Notre mission est d’offrir une visibilité claire sur vos projets de mobilité, de structurer vos dossiers de candidature, de valoriser vos compétences et de vous accompagner de façon professionnelle et cohérente à chaque étape. NOVISA n’est pas affiliée aux consulats ni à TLS et ne fournit aucun document officiel ; notre rôle se concentre sur la structuration et la cohérence de votre dossier."},engagements:{badge:"Rôle & engagements",title:"Notre rôle dans votre dossier visa",subtitle:"Structurer, clarifier et sécuriser votre projet de mobilité",procedure:["Intervention après la fixation du rendez-vous TLS/consulat, idéalement au moins une semaine avant le dépôt.","Analyse de votre projet global et de votre situation professionnelle.","Structuration d’un dossier professionnel, cohérent et adapté à votre profil.","Mise en valeur de vos compétences, de vos expériences et de la cohérence de votre parcours.","Vérification de la cohérence globale du dossier avant dépôt auprès de TLS/du consulat.","Explication des grandes étapes administratives liées à votre projet (OFII, etc.), sans se substituer aux autorités officielles."],quality:["Accompagnement strictement professionnel et indépendant des consulats et de TLS.","Aucune fourniture de documents officiels ni promesse d’obtention de visa.","Confidentialité totale des informations et documents transmis.","Conseils personnalisés, clarté et cohérence sur l’ensemble de votre projet de mobilité.","Suivi sérieux et communication professionnelle pendant toute la préparation du dossier."]},documents:{badge:"Documents à fournir",title:"Pièces selon votre type de visa",subtitle:"Liste indicative — peut varier selon votre situation, votre type de visa et votre projet professionnel",bullets:["Passeport en cours de validité","Photo d'identité récente aux normes","Justificatifs selon le type de visa (travail, tourisme, talent)","Documents spécifiques à votre projet","Justificatifs d'hébergement et de moyens financiers","Formulaire de demande rempli et signé"],helpTitle:"Besoin d'aide ?",helpText:"Nous personnalisons la liste selon votre type de visa et vérifions chaque pièce justificative pour assurer la cohérence et la complétude de votre dossier.",cta:"Nous contacter"},pricing:{badge:"Tarifs & délais estimés",title:"Des offres adaptées à vos besoins",subtitle:"Les honoraires varient selon le type de visa, le niveau de coaching et les services de portage/full remote IT. Devis personnalisé sur demande.",cards:[{title:"Accompagnement visa Talent / Salarié / Affaire",desc:"Analyse de votre projet, structuration complète du dossier, mise en valeur du parcours et vérification de la cohérence avant dépôt TLS/consulat."},{title:"Coaching entretiens ESN & clients finaux",desc:"Préparation RH, simulations d’entretien, mise en valeur du profil, gestion du stress et amélioration de la communication professionnelle."},{title:"Portage salarial & Full Remote IT",desc:"Prise en charge administrative complète pour freelances (contrat avec le client, facturation, paiement des cotisations CNSS) et mise à disposition de développeurs tunisiens en full remote avec TJM compétitif."}],cta:"Obtenir un devis"},contact:{badge:"Contact NOVISA",title:"Parler de votre projet avec NOVISA",subtitle:"Décrivez votre projet de mobilité, de portage salarial ou de mission IT en full remote et nous revenons vers vous rapidement.",labels:{name:"Nom complet *",email:"Email *",phone:"Téléphone",city:"Ville",type:"Type de visa *",message:"Message"},placeholders:{name:"Votre nom complet",email:"votre@email.com",phone:"+216 XX XXX XXX",city:"Tunis, Sfax, Sousse...",message:"Décrivez brièvement votre projet et vos besoins..."},options:["Visa Talent / Salarié / Affaire","Coaching entretiens","Portage salarial / Full Remote IT","Autre accompagnement","Autre"],consent:"J'accepte d'être contacté(e) par NOVISA et j'ai lu la politique de confidentialité.",submit:"Envoyer ma demande"},footer:{desc:"Accompagnement visa, coaching professionnel, portage salarial et mise à disposition de talents IT en full remote.",nav:{about:"Présentation",services:"Services",faq:"Engagements",documents:"Documents",pricing:"Tarifs & délais",contact:"Contact"},contactLines:["Adresse : B21, Immeuble Titanium, Rue de l’île de Djerba, Les Berges du Lac 2 – 1053 Tunis","Tél. : 29 466 456"],disclaimer:"NOVISA n’est ni une ambassade ni un organisme officiel et n’est pas affiliée aux consulats ni à TLS. Aucune garantie d’obtention de visa ne peut être donnée."}},en:{header:{brand:"NOVISA",services:"Services",about:"About",documents:"Documents",pricing:"Pricing & timelines",engagements:"Commitments",cta:"Contact us",switcher:"Language"},hero:{badge:"International mobility – Coaching – Payroll portage – Full Remote IT",title:"NOVISA, your partner for mobility and IT assignments",subtitle:"Professional support for your visas, coaching, payroll portage and full remote IT assignments",cta1:"Contact us",cta2:"See our services",servicesTitle:"Our 6 areas of expertise",servicesSubtitle:"Complete solutions for your professional mobility and IT projects",discoverBtn:"Learn more",servicesSummary:["Professional structuring of your visa file after TLS appointment","Complete support for all Talent Visa types (EU Blue Card, qualified employee, entrepreneur)","Employee visa file preparation with OFII consistency and professional project alignment","File structuring for professional assignments abroad","Complete interview preparation for ESNs and final clients with simulations","Full administrative management for freelancers and IT talent provision"]},services:{badge:"Our areas of support",title:"NOVISA visas and services",subtitle:"Professional support for your mobility and IT projects",link:"Contact us →",cards:[{title:"Visa support – Our role",intro:"NOVISA intervenes after the TLS/consulate appointment has been booked; it is essential to contact us at least one week before, once all preliminary elements are available.",bullets:["Structure a professional and coherent file","Highlight skills and experience","Clarify the overall project","Check overall consistency before submission"],footer:"We do not provide any official documents."},{title:"Talent visa – Support",intro:"NOVISA supports all Talent visa categories:",bullets:["Qualified employee","EU Blue Card (CBE)","Employee on assignment","Researcher","Project holder / Entrepreneur","Company officer","Artistic professions"],footer:"Our role: bring visibility and coherence to projects and applications."},{title:"Employee visa",intro:"We guide employees after authorization and TLS/consulate appointment, structuring their file to ensure consistency with the professional project and administrative steps (OFII):",bullets:["Structure the file","Clarify consistency between contract, project and background","Explain the main steps (OFII, etc.)","Prepare a professional presentation"]},{title:"Business visa",intro:"For employees sent on assignment abroad with a client or subsidiary, NOVISA helps prepare the file in order to:",bullets:["Structure the file","Clarify the purpose of the assignment","Present the application in a clear and coherent way"]},{title:"Coaching – Interviews",intro:"We prepare candidates to succeed in their interviews with ESNs and final clients, working on HR aspects, presentation and professional communication:",bullets:["HR preparation","Mock interviews","Highlighting background and skills","Stress management and professional communication"]},{title:"Payroll portage",intro:"We support freelancers without a legal entity by taking care of the full administration to secure the relationship with the client:",bullets:["Contract with the client","Invoicing and payment of income","Payment of social contributions","Full administrative management"]}]},about:{badge:"About",title:"NOVISA, specialist in professional mobility",subtitle:"International mobility, coaching, payroll portage and full remote IT.",paragraph:"NOVISA supports professionals and international companies in all aspects of professional mobility and IT assignments: visa preparation (Talent, Employee, Business), interview coaching, payroll portage and the provision of fully remote IT talents. Our mission is to offer clear visibility on your mobility projects, structure your applications, highlight your skills and support you professionally and consistently at each step. NOVISA is not affiliated with consulates or TLS and does not provide official documents; our role is to structure and ensure the coherence of your file."},engagements:{badge:"Commitments & role",title:"Our role in your visa application",subtitle:"Structuring, clarifying and securing your mobility project",procedure:["Intervention after the TLS/consulate appointment is booked, ideally at least one week before submission.","Analysis of your overall project and professional situation.","Structuring a professional, coherent file adapted to your profile.","Highlighting your skills, experience and the consistency of your background.","Checking overall coherence before submission to TLS/the consulate.","Explaining the main administrative steps related to your project (OFII, etc.) without replacing official authorities."],quality:["Strictly professional support, independent from consulates and TLS.","No provision of official documents and no guarantee of visa issuance.","Full confidentiality of shared information and documents.","Personalised advice, clarity and coherence on your mobility project.","Serious follow-up and professional communication throughout the preparation."]},documents:{badge:"Required documents",title:"Documents by visa type",subtitle:"Indicative list — may vary by situation and visa type",bullets:["Valid passport","Recent ID photo","Documents according to visa type (work, tourist, talent)","Specific documents for your project","Proof of accommodation and funds","Completed and signed application form"],helpTitle:"Need help?",helpText:"We tailor the list to your visa type and verify each supporting document to ensure consistency and completeness of your file.",cta:"Contact us"},pricing:{badge:"Pricing & timelines",title:"Offers tailored to your needs",subtitle:"Fees depend on visa type, coaching level and payroll/full remote IT services. Personalised quote on request.",cards:[{title:"Talent / Employee / Business visa support",desc:"Project analysis, full file structuring, profile enhancement and coherence check before TLS/consulate submission."},{title:"Interview coaching (ESN & final clients)",desc:"HR preparation, mock interviews, profile enhancement, stress management and professional communication."},{title:"Payroll portage & Full Remote IT",desc:"Full administrative handling for freelancers (client contract, invoicing, social contributions) and provision of Tunisian remote developers with competitive daily rates."}],cta:"Get a quote"},contact:{badge:"NOVISA contact",title:"Discuss your project with NOVISA",subtitle:"Describe your mobility, payroll portage or full remote IT project and we will get back to you shortly.",labels:{name:"Full name *",email:"Email *",phone:"Phone",city:"City",type:"Service type *",message:"Message"},placeholders:{name:"Your full name",email:"you@email.com",phone:"+216 29 466 456",city:"Tunis, Sfax, Sousse...",message:"Briefly describe your project and needs..."},options:["Talent / Employee / Business visa","Interview coaching","Payroll portage / Full Remote IT","Other support","Other"],consent:"I agree to be contacted by NOVISA and have read the privacy policy.",submit:"Send my request"},footer:{desc:"Visa support, professional coaching, payroll portage and provision of full remote IT talents.",nav:{about:"About",services:"Services",faq:"Commitments",documents:"Documents",pricing:"Pricing",contact:"Contact"},contactLines:["Address: B21, Immeuble Titanium, Rue de l’île de Djerba, Les Berges du Lac 2 – 1053 Tunis","Phone: +216 29 466 456"],disclaimer:"NOVISA is neither an embassy nor an official organization and is not affiliated with consulates or TLS. Visa issuance can never be guaranteed."}},ar:{header:{brand:"NOVISA",services:"الخدمات",about:"نبذة",documents:"الوثائق",pricing:"الأسعار والآجال",engagements:"الالتزامات",cta:"اتصل بنا",switcher:"اللغة"},hero:{badge:"تنقل دولي – كوتشينغ مهني – بورتاج سالاريال – Full Remote IT",title:"NOVISA شريككم في مشاريع التنقل والمهام المعلوماتية",subtitle:"مرافقة مهنية لتأشيراتكم، كوتشينغ، بورتاج سالاريال ومهام IT عن بعد",cta1:"اتصل بنا",cta2:"اكتشف خدماتنا",servicesTitle:"مجالات خبرتنا الستة",servicesSubtitle:"حلول شاملة لتنقلكم المهني ومشاريعكم المعلوماتية",discoverBtn:"اعرف المزيد",servicesSummary:["هيكلة مهنية لملف التأشيرة بعد موعد TLS","مرافقة كاملة لجميع أنواع تأشيرة الموهبة (البطاقة الزرقاء، موظف مؤهل، رائد أعمال)","إعداد ملف تأشيرة العمل مع تناسق OFII والمشروع المهني","هيكلة الملف للمهام المهنية في الخارج","تحضير كامل للمقابلات مع ESN والعملاء النهائيين مع محاكاة","إدارة إدارية كاملة للفريلانس وتوفير مواهب IT"]},services:{badge:"مجالات مرافقتنا",title:"تأشيرات وخدمات NOVISA",subtitle:"مرافقة مهنية لمشاريع التنقل والمهام المعلوماتية",link:"اتصل بنا →",cards:[{title:"مرافقة التأشيرة – دورنا",intro:"تتدخل NOVISA بعد حجز موعد TLS / القنصلية، ومن الضروري الاتصال بنا قبل أسبوع على الأقل عندما تكون كل العناصر الأولية متوفرة.",bullets:["هيكلة ملف مهني ومتناسق","إبراز المهارات والخبرات","توضيح المشروع ككل","التحقق من التناسق قبل الإيداع"],footer:"لا نقدّم أي وثائق رسمية."},{title:"تأشيرة موهبة – مرافقة",intro:"تواكب NOVISA جميع أنواع تأشيرة الموهبة:",bullets:["موظف مؤهل","البطاقة الزرقاء الأوروبية (CBE)","موظف في مهمة","باحث","حامل مشروع / رائد أعمال","ممثل قانوني","مهن فنية"],footer:"دورنا هو إعطاء رؤية وتناسق للمشاريع وملفات الترشح."},{title:"تأشيرة عمل",intro:"نرشد الأجراء بعد الحصول على الترخيص وتحديد موعد TLS / القنصلية، من خلال هيكلة الملف لضمان التناسق مع المشروع المهني والإجراءات الإدارية (OFII):",bullets:["هيكلة الملف","توضيح التناسق بين العقد / المشروع / المسار المهني","شرح المراحل الرئيسية (OFII...)","التحضير لتقديم مهني"]},{title:"تأشيرة أعمال",intro:"بالنسبة للأجراء الموفدين في مهمة إلى الخارج لدى عميل أو فرع، تواكب NOVISA إعداد الملف من أجل:",bullets:["هيكلة الملف","توضيح موضوع المهمة","تقديم مترشح بطريقة واضحة ومتناسقة"]},{title:"كوتشينغ – مقابلات",intro:"نحضّر المترشحين للنجاح في مقابلاتهم مع شركات الخدمات الرقمية (ESN) والعملاء النهائيين من خلال العمل على الجوانب الموارد البشرية والعرض والتواصل المهني:",bullets:["تحضير الموارد البشرية","محاكاة مقابلة","إبراز المسار والمهارات","إدارة الضغط والتواصل المهني"]},{title:"بورتاج سالاريال",intro:"نرافق الفريلانس بدون شركة قانونية عبر التكفّل الكامل بالإدارة لتأمين العلاقة مع العميل:",bullets:["عقد مع العميل","الفوترة وتحويل العائدات","دفع مساهمات CNSS","تسيير إداري كامل"]}]},about:{badge:"نبذة",title:"NOVISA، متخصصة في التنقل المهني",subtitle:"تنقل دولي، كوتشينغ، بورتاج سالاريال و Full Remote IT.",paragraph:"ترافق NOVISA المهنيين والشركات الدولية في جميع جوانب التنقل المهني والمهام المعلوماتية: إعداد ملفات التأشيرة (موهبة، عمل، أعمال)، تدريب على المقابلات، بورتاج سالاريال وتوفير مطوري IT تونسيين عن بعد بالكامل. مهمتنا هي توفير رؤية واضحة لمشاريعكم، هيكلة ملفات الترشح، إبراز مهاراتكم ومرافقتكم بشكل مهني ومتناسق في كل مرحلة. NOVISA ليست تابعة للقنصليات ولا لـ TLS ولا تقدّم وثائق رسمية؛ يقتصر دورنا على هيكلة الملف وضمان تناسقه."},engagements:{badge:"الالتزامات والدور",title:"دورنا في ملف التأشيرة",subtitle:"هيكلة المشروع وتوضيحه وتأمينه",procedure:["نتدخل بعد حجز موعد TLS / القنصلية، ويفضل قبل أسبوع على الأقل من الإيداع.","تحليل مشروعكم العام ووضعكم المهني.","هيكلة ملف مهني ومتناسق يتناسب مع ملفكم.","إبراز المهارات والخبرات وتناسق المسار.","التحقق من التناسق العام قبل الإيداع لدى TLS / القنصلية.","شرح المراحل الإدارية الرئيسية المرتبطة بالمشروع (OFII...) دون تعويض السلطات الرسمية."],quality:["مرافقة مهنية مستقلة تمامًا عن القنصليات و TLS.","لا يتم توفير وثائق رسمية ولا ضمان بالحصول على التأشيرة.","سرية تامة للمعلومات والوثائق المتبادلة.","نصائح مخصصة ووضوح وتناسق في مشروع التنقل.","متابعة جدية وتواصل مهني طوال مرحلة الإعداد."]},documents:{badge:"الوثائق المطلوبة",title:"الوثائق حسب نوع التأشيرة",subtitle:"قائمة استرشادية — قد تختلف حسب وضعكم، نوع التأشيرة ومشروعكم المهني",bullets:["جواز سفر ساري المفعول","صورة شخصية حديثة مطابقة للمعايير","وثائق حسب نوع التأشيرة (عمل، موهبة، أعمال)","وثائق خاصة بالمهمة أو المشروع","إثبات السكن والموارد المالية","استمارة الطلب معبأة وموقعة"],helpTitle:"بحاجة لمساعدة؟",helpText:"نساعدكم في تكييف قائمة الوثائق حسب نوع التأشيرة ونتحقق من تناسق واكتمال الملف قبل الإيداع.",cta:"اتصل بنا"},pricing:{badge:"الأسعار والآجال",title:"عروض مكيّفة لاحتياجاتكم",subtitle:"الرسوم تختلف حسب نوع التأشيرة، مستوى الكوتشينغ وخدمات البورتاج / Full Remote IT. عرض سعر مخصص عند الطلب.",cards:[{title:"مرافقة تأشيرة موهبة / عمل / أعمال",desc:"تحليل المشروع، هيكلة شاملة للملف، إبراز المسار ومراجعة التناسق قبل الإيداع لدى TLS / القنصلية."},{title:"تدريب على المقابلات (ESN والعملاء النهائيين)",desc:"تحضير موارد بشرية، محاكاة مقابلات، إبراز الملف، إدارة الضغط والتواصل المهني."},{title:"بورتاج سالاريال و Full Remote IT",desc:"تكفّل إداري كامل بالنسبة للفريلانس (عقد مع العميل، الفوترة، دفع الاشتراكات الاجتماعية) وتوفير مطوري IT تونسيين عن بعد مع معدل يومي تنافسي."}],cta:"احصل على عرض سعر"},contact:{badge:"اتصال NOVISA",title:"تحدث عن مشروعك مع NOVISA",subtitle:"صف مشروع التنقل أو البورتاج سالاريال أو Full Remote IT وسنعود إليك في أقرب وقت.",labels:{name:"الاسم الكامل *",email:"البريد الإلكتروني *",phone:"الهاتف",city:"المدينة",type:"نوع الخدمة *",message:"الرسالة"},placeholders:{name:"اسمك الكامل",email:"you@email.com",phone:"+216 29 466 456",city:"تونس، صفاقس، سوسة...",message:"اشرح بإيجاز مشروعك واحتياجاتك..."},options:["تأشيرة موهبة / عمل / أعمال","تدريب على المقابلات","بورتاج سالاريال / Full Remote IT","مرافقة أخرى","أخرى"],consent:"أوافق على الاتصال بي من طرف NOVISA وقد قرأت سياسة الخصوصية.",submit:"إرسال الطلب"},footer:{desc:"مرافقة للتأشيرات، كوتشينغ مهني، بورتاج سالاريال وتوفير مطوري IT تونسيين عن بعد بالكامل.",nav:{about:"نبذة",services:"الخدمات",faq:"الالتزامات",documents:"الوثائق",pricing:"الأسعار",contact:"اتصال"},contactLines:["العنوان: B21، عمارة تيتانيوم، نهج جزيرة جربة، ضفاف البحيرة 2 – 1053 تونس","الهاتف: +216 29 466 456"],disclaimer:"NOVISA ليست سفارة ولا مؤسسة رسمية وليست تابعة للقنصليات أو TLS. لا يمكن بأي حال ضمان الحصول على التأشيرة."}}};function V(){const e=(localStorage.getItem("locale")||"").toLowerCase();if(e==="fr"||e==="en"||e==="ar")return e;const t=(navigator.language||"fr").toLowerCase();return t.startsWith("ar")?"ar":t.startsWith("en")?"en":"fr"}function C(e){const t=e==="ar"?"rtl":"ltr";document.documentElement.setAttribute("dir",t),document.documentElement.setAttribute("lang",e)}function j(e){return`
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
  `}function k(e){return`
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:580px;height:580px;top:-190px;left:-110px"></div>
      <div class="orb orb-teal" style="width:520px;height:520px;bottom:-160px;right:-100px"></div>
      <div class="orb orb-orange" style="width:460px;height:460px;top:48%;left:55%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${e.pricing.title}</h2>
        <p class="muted">${e.pricing.subtitle}</p>
      </div>
      <div class="grid-3">
        ${e.pricing.cards.map((t,o)=>`
          <div class="card" style="padding:32px;text-align:center">
            <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,${o===0?"var(--logo-blue),var(--logo-teal)":o===1?"var(--logo-teal),var(--logo-orange)":"var(--logo-orange),var(--logo-blue)"});display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 8px 24px rgba(30,102,245,.3)">
              <span style="font-size:24px;font-weight:700;color:white">${o+1}</span>
            </div>
            <h3 style="margin-bottom:12px">${t.title}</h3>
            <p style="color:var(--neutral-300);line-height:1.7">${t.desc}</p>
          </div>
        `).join("")}
      </div>
      <div style="text-align:center;margin-top:24px">
        <a href="#contact" class="btn btn-primary" data-scroll="contact">${e.pricing.cta}</a>
      </div>
    </div>
  `}let v=V();function P(){return E[v]}function b(){var r;C(v);const e=P(),t=document.getElementById("header");t&&(t.innerHTML=I(e,v));const o=document.getElementById("footer");o&&(o.innerHTML=w(e));const i=document.getElementById("hero-root");i&&(i.innerHTML=$(e));const s=document.getElementById("services-root");s&&(s.innerHTML=A(e));const a=document.getElementById("about-root");a&&(a.innerHTML=N(e));const n=document.getElementById("contact-root");n&&(n.innerHTML=O(e));const c=document.getElementById("documents-root");c&&(c.innerHTML=j(e));const d=document.getElementById("pricing-root");d&&(d.innerHTML=k(e)),(r=document.getElementById("lang-switch"))==null||r.addEventListener("change",u=>{const l=u.target.value;v=l,localStorage.setItem("locale",l),b()}),B()}function B(){const e=document.getElementById("mobile-menu-toggle"),t=document.getElementById("main-menu"),o=()=>{e==null||e.classList.toggle("active"),t==null||t.classList.toggle("active"),t!=null&&t.classList.contains("active")?document.body.style.overflow="hidden":document.body.style.overflow=""},i=()=>{e==null||e.classList.remove("active"),t==null||t.classList.remove("active"),document.body.style.overflow=""};e==null||e.addEventListener("click",o),t==null||t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",i)})}b();document.addEventListener("click",e=>{var i,s,a,n,c;const o=e.target.closest(".service-details-btn");if(o){const d=o.getAttribute("data-index"),r=document.getElementById(`service-card-${d}`),u=document.getElementById("service-details-container");if(r&&u){const l=(i=r.querySelector(".data-title"))==null?void 0:i.textContent,p=(s=r.querySelector(".data-intro"))==null?void 0:s.textContent,h=(a=r.querySelector(".data-bullets"))==null?void 0:a.textContent,f=(n=r.querySelector(".data-footer"))==null?void 0:n.textContent,y=(c=r.querySelector(".icon"))==null?void 0:c.innerHTML;let g="";if(h)try{g=JSON.parse(h).map(S=>`<li>${S}</li>`).join("")}catch{g=""}const m=o.getAttribute("data-color-var")||"--logo-blue";u.innerHTML=`
        <div class="service-details-card">
          <div class="blobs" style="border-radius: var(--radius-lg);">
            <div class="blob one" style="background: radial-gradient(circle at 30% 30%, var(${m}), transparent 70%); opacity: 0.15;"></div>
            <div class="blob two" style="background: radial-gradient(circle at 70% 40%, var(${m}), transparent 70%); opacity: 0.15; animation-delay: 2s;"></div>
            <div class="blob three" style="background: radial-gradient(circle at 50% 50%, var(${m}), transparent 70%); opacity: 0.1; animation-delay: 4s;"></div>
          </div>
          
          <div class="service-details-header" style="position: relative; z-index: 1;">
            <div class="service-details-icon" style="border-color: var(${m}); background: rgba(255,255,255,0.5);">
              ${y}
            </div>
            <div class="service-details-title">
              <h3 style="color: var(${m});">${l}</h3>
              <p>${p}</p>
            </div>
          </div>
          
          <div class="service-details-content" style="position: relative; z-index: 1;">
            <div class="service-details-bullets">
              <ul>${g}</ul>
              ${f?`<p class="muted small" style="margin-top: 20px;">${f}</p>`:""}
            </div>
            
            <div class="service-details-actions">
              <h4 style="color: #111; font-weight: 800; font-size: 1.2rem;">Intéressé par ce service ?</h4>
              <p>Contactez-nous dès maintenant pour commencer votre procédure.</p>
              <a href="#contact" class="btn btn-primary" data-scroll="contact" style="width: 100%; justify-content: center;">
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      `,u.classList.add("active"),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"center"})},100)}}});document.addEventListener("click",e=>{var i;const o=e.target.closest("[data-scroll]");if(o){const s=o.getAttribute("data-scroll");s&&(e.preventDefault(),(i=document.getElementById(s))==null||i.scrollIntoView({behavior:"smooth",block:"start"}))}});window.addEventListener("scroll",()=>{const e=window.pageYOffset,t=document.querySelector("header.site-header");e>50?t==null||t.classList.add("scrolled"):t==null||t.classList.remove("scrolled")});function M(){const e={root:null,rootMargin:"0px",threshold:.1},t=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("animate-in"),t.unobserve(s.target))})},e);document.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .card").forEach(i=>{i.classList.contains("card")&&!i.classList.contains("scroll-animate")&&!i.classList.contains("scroll-animate-left")&&!i.classList.contains("scroll-animate-right")&&!i.classList.contains("scroll-animate-scale")&&i.classList.add("scroll-animate"),t.observe(i)})}setTimeout(M,100);
