(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();function h(e,t){return`
    <div class="container nav">
      <a href="#" class="brand">
        <img src="/logo/logo-micro-dark-v2.svg" alt="${e.header.brand}" height="50" class="logo-dark" />
      </a>
      <nav class="menu">
        <a href="#services">${e.header.services}</a>
        <a href="#process">${e.header.process}</a>
        <a href="#about">${e.header.about}</a>
        <a href="#faq">${e.header.engagements}</a>
        <a href="#documents">${e.header.documents}</a>
        <a href="#tarifs">${e.header.pricing}</a>
        
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
  `}function f(e){const t=new Date().getFullYear();return`
    <div class="container">
      <div class="cols">
        <div>
          <h3>${e.header.brand}</h3>
          <p class="muted">${e.footer.desc}</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul style="list-style:none;padding:0;margin-top:8px">
            <li><a href="#services">${e.footer.nav.services}</a></li>
            <li><a href="#process">${e.footer.nav.process}</a></li>
            <li><a href="#about">${e.footer.nav.about}</a></li>
            <li><a href="#faq">${e.footer.nav.faq}</a></li>
            <li><a href="#documents">${e.footer.nav.documents}</a></li>
            <li><a href="#tarifs">${e.footer.nav.pricing}</a></li>
            <li><a href="#contact">${e.footer.nav.contact}</a></li>
          </ul>
        </div>
        <div>
          <h4>Mentions</h4>
          <p class="muted" style="margin-top:8px">${e.footer.contactLines.join("<br/>")}</p>
          <p class="muted" style="margin-top:8px">${e.footer.disclaimer}</p>
          <div style="margin-top:12px"><a href="#contact" class="btn btn-primary" data-scroll="contact">${e.header.cta}</a></div>
        </div>
      </div>
      <div class="bottom">© ${t} Evia Services. Tous droits réservés.</div>
    </div>
  `}function b(e){return`
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:500px;height:500px;top:10%;left:5%"></div>
      <div class="orb orb-teal" style="width:450px;height:450px;top:50%;right:10%"></div>
      <div class="orb orb-orange" style="width:400px;height:400px;bottom:15%;left:30%"></div>
      <div class="orb orb-blue" style="width:350px;height:350px;top:30%;right:25%"></div>
      <div class="orb orb-teal" style="width:380px;height:380px;bottom:25%;right:15%"></div>
    </div>
    <div class="container">
      <div class="hero-content-grid">
        <div class="hero-text">
          <h1 style="margin-top:20px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.3s">${e.hero.title}</h1>
          <p style="margin-top:16px;font-size:18px;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.4s" class="muted">${e.hero.subtitle}</p>
          <div style="margin-top:32px;display:flex;gap:16px;flex-wrap:wrap;animation:fadeInUp 0.8s ease-out forwards;opacity:0;animation-delay:0.5s">
            <a href="#contact" class="btn btn-primary" data-scroll="contact">${e.hero.cta1}</a>
            <a href="#services" class="btn btn-secondary">${e.hero.cta2}</a>
          </div>
          <div class="kpis">
            <div class="kpi"><strong>+500</strong><span>professionnels accompagnés</span></div>
            <div class="kpi"><strong>3</strong><span>services spécialisés</span></div>
            <div class="kpi"><strong>100%</strong><span>RDV TLS gratuit</span></div>
          </div>
        </div>
        <div class="hero-image-section">
          <div class="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&q=80" 
              alt="Professional consultation - Evia Services helping professionals with visa services"
              loading="lazy"
              class="hero-image"
            />
          </div>
          <div class="card hero-card">
            <h3>Ce que nous faisons</h3>
            <ul>
              <li>Visa salarié & talent - RDV TLS gratuit inclus</li>
              <li>Coaching pour réussir vos entretiens professionnels</li>
              <li>Accompagnement spécialisé sur le domaine professionnel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function y(e){return`
    <div class="container">
      <div class="section-header">
        <h2>${e.services.title}</h2>
        <p class="muted">${e.services.subtitle}</p>
      </div>
      <div class="grid-3">
        <div class="card service-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <h3>${e.services.salariedTitle}</h3>
          <p>${e.services.salariedDesc}</p>
          <a href="#contact" class="link" data-scroll="contact">${e.services.link}</a>
        </div>
        <div class="card service-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l3 7h7l-5.5 4 2 7L12 17l-6.5 4 2-7L2 10h7z"/></svg>
          </div>
          <h3>${e.services.talentTitle}</h3>
          <p>${e.services.talentDesc}</p>
          <a href="#contact" class="link" data-scroll="contact">${e.services.link}</a>
        </div>
        <div class="card service-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01M12 10h.01M16 10h.01"></path></svg>
          </div>
          <h3>${e.services.touristTitle}</h3>
          <p>${e.services.touristDesc}</p>
          <a href="#contact" class="link" data-scroll="contact">${e.services.link}</a>
        </div>
      </div>
    </div>
  `}function x(e){const t=e.process.steps.map((i,o)=>`
    <div class="step">
      <div class="num">${o+1}</div>
      <div>
        <h3 style="color:var(--white)">${i.t}</h3>
        <p style="color:var(--neutral-300)">${i.d}</p>
      </div>
    </div>`).join("");return`
    <div class="animated-bg">
      <div class="orb orb-blue" style="width:600px;height:600px;top:-200px;left:10%"></div>
      <div class="orb orb-teal" style="width:500px;height:500px;bottom:-150px;right:5%"></div>
      <div class="orb orb-orange" style="width:450px;height:450px;top:50%;left:70%"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2>${e.process.title}</h2>
        <p class="muted">${e.process.subtitle}</p>
      </div>
      <div class="timeline">${t}</div>
    </div>
  `}function w(e){return`
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
  `}function T(e){return`
    <div class="animated-bg">
      <div class="orb orb-orange" style="width:550px;height:550px;top:-180px;left:-100px"></div>
      <div class="orb orb-blue" style="width:480px;height:480px;bottom:-100px;right:-80px"></div>
      <div class="orb orb-teal" style="width:420px;height:420px;top:40%;left:60%"></div>
    </div>
    <div class="container faq">
      <div class="section-header">
        <h2>${e.engagements.title}</h2>
        <p class="muted">${e.engagements.subtitle}</p>
      </div>
      <div style="max-width:900px;margin:0 auto;display:grid;gap:24px">
        <div class="card" style="padding:32px">
          <h3 style="margin-bottom:20px">Accompagnement et procédure</h3>
          <ul style="list-style:none;padding:0;display:grid;gap:14px">
            ${e.engagements.procedure.map(t=>`<li style="color:var(--neutral-300);display:flex;align-items:start;gap:12px"><span style="color:var(--logo-teal);font-size:20px">•</span><span>${t}</span></li>`).join("")}
          </ul>
        </div>
        <div class="card" style="padding:32px">
          <h3 style="margin-bottom:20px">Nos engagements qualité</h3>
          <ul style="list-style:none;padding:0;display:grid;gap:14px">
            ${e.engagements.quality.map(t=>`<li style="color:var(--neutral-300);display:flex;align-items:start;gap:12px"><span style="color:var(--logo-orange);font-size:20px">•</span><span>${t}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `}function $(e){return`
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
      <form class="card contact-form" action="https://formspree.io/f/your-id" method="POST">
        <div class="grid-2">
          <div>
            <label for="email">${e.contact.labels.email}</label>
            <input id="email" name="email" type="email" required placeholder="${e.contact.placeholders.email}" />
          </div>
          <div>
            <label for="phone">${e.contact.labels.phone}</label>
            <input id="phone" name="phone" type="tel" placeholder="${e.contact.placeholders.phone}" />
          </div>
        </div>
        <div style="margin-top:20px">
          <label for="type-0" style="display:block;margin-bottom:12px">${e.contact.labels.type}</label>
          <div class="service-toggle-group">
            ${e.contact.options.slice(0,3).map((i,o)=>`
              <input type="radio" id="type-${o}" name="type" value="${i}" ${o===0?"required":""} />
              <label for="type-${o}" class="toggle-btn">${i}</label>
            `).join("")}
            <input type="radio" id="type-other" name="type" value="${e.contact.options[4]||"Other"}" />
            <label for="type-other" class="toggle-btn">${e.contact.options[4]||"Other"}</label>
          </div>
        </div>
        <div style="margin-top:20px">
          <label for="message">${e.contact.labels.message}</label>
          <textarea id="message" name="message" rows="5" placeholder="${e.contact.placeholders.message}"></textarea>
        </div>
        <div style="margin-top:20px">
          <label class="modern-checkbox">
            <input type="checkbox" name="consent" required />
            <span class="checkbox-custom"></span>
            <span class="checkbox-label">${e.contact.consent} <a href="/politique-confidentialite.html" style="color:var(--logo-blue)">Privacy</a>.</span>
          </label>
        </div>
        <input type="text" name="_honeypot" style="display:none" tabindex="-1" autocomplete="off" />
        <button class="btn btn-primary" type="submit">${e.contact.submit}</button>
      </form>
    </div>
  `}const S={fr:{header:{brand:"Evia Services",services:"Services",process:"Processus",about:"Présentation",documents:"Documents",pricing:"Tarifs & délais",engagements:"Engagements",cta:"Nous contacter",switcher:"Langue"},hero:{badge:"✓ Procédure officielle TLS",title:"Votre partenaire pour réussir votre carrière en France",subtitle:"Evia Services accompagne les professionnels pour l'obtention de visas travail, visas talent et la réussite de leurs entretiens professionnels. Un service spécialisé, rigoureux et personnalisé pour votre projet professionnel.",cta1:"Nous contacter",cta2:"Découvrir nos services"},services:{badge:"Nos services",title:"Ce que nous proposons",subtitle:"Un accompagnement professionnel complet pour votre réussite en France",salariedTitle:"Visa salarié",salariedDesc:"Accompagnement complet pour professionnels et entreprises. Prise de RDV gratuite et officielle selon la procédure TLS. Dossiers conformes et cohérents.",talentTitle:"Visa talent",talentDesc:"Assistance pour profils qualifiés, chercheurs, entrepreneurs. Prise de RDV gratuite et officielle selon la procédure TLS. Visas longue durée (France).",touristTitle:"Coaching entretiens",touristDesc:"Préparation intensive pour réussir vos entretiens professionnels. Techniques de communication, mise en situation et stratégies pour convaincre les recruteurs.",link:"Nous contacter →"},process:{badge:"Processus",title:"Comment se déroule votre accompagnement",subtitle:"Étapes clés de la prise en charge de votre projet professionnel",steps:[{t:"Analyse du profil",d:"Compréhension de votre projet professionnel et de vos objectifs de carrière."},{t:"Liste personnalisée",d:"Documents requis adaptés à votre type de visa professionnel."},{t:"Formulaires officiels",d:"Remplissage et contrôle des formulaires nécessaires."},{t:"RDV TLS gratuit",d:"Prise de rendez-vous gratuite selon la procédure officielle TLS."},{t:"Dossier complet",d:"Vérification finale de cohérence et complétude."},{t:"Suivi & coaching",d:"Accompagnement jusqu'au résultat et préparation aux entretiens si nécessaire."}]},about:{badge:"Présentation",title:"Spécialiste de l'accompagnement professionnel en France",subtitle:"Evia Services accompagne les professionnels dans leur projet de carrière en France : visas travail et coaching.",paragraph:"Notre mission est de simplifier vos démarches professionnelles avec un service spécialisé, rigoureux et personnalisé. Nous nous concentrons exclusivement sur le domaine professionnel : obtention de visas salarié et talent avec prise de RDV gratuite TLS, et coaching pour réussir vos entretiens. Notre expertise maximise vos chances de succès tout en respectant les procédures officielles."},engagements:{badge:"Engagements & Procédure",title:"Notre accompagnement et nos engagements",subtitle:"Processus clair et engagements qualité pour votre réussite professionnelle",procedure:["Analyse de votre profil et de votre projet professionnel","Vérification et complétude des pièces justificatives","Remplissage des formulaires officiels","Prise de RDV gratuite selon la procédure officielle TLS","Suivi du dossier et coaching entretiens si nécessaire"],quality:["Accompagnement professionnel spécialisé et confidentiel","Focus exclusif sur les projets professionnels","Prise de RDV TLS gratuite pour visas salarié et talent","Coaching personnalisé pour entretiens professionnels"]},documents:{badge:"Documents à fournir",title:"Pièces selon votre type de visa professionnel",subtitle:"Liste indicative — peut varier selon votre situation professionnelle",bullets:["Passeport en cours de validité","Photo d'identité récente aux normes","Contrat de travail ou promesse d'embauche","Diplômes et certifications professionnelles","Justificatifs d'hébergement et de moyens financiers","Formulaire de demande rempli et signé"],helpTitle:"Besoin d'aide ?",helpText:"Nous personnalisons la liste selon votre profil professionnel et vérifions chaque pièce pour assurer la cohérence du dossier. Prise de RDV TLS gratuite incluse.",cta:"Nous contacter"},pricing:{badge:"Tarifs & délais estimés",title:"Des offres adaptées à votre projet professionnel",subtitle:"Les frais varient selon le type de service. Prise de RDV TLS gratuite pour visas salarié et talent. Devis personnalisé sur demande.",cards:[{title:"Forfait visa complet",desc:"Assistance globale: analyse, liste personnalisée, formulaires, prise de RDV TLS gratuite, vérification finale et suivi."},{title:"Coaching entretiens",desc:"Préparation intensive aux entretiens professionnels: techniques, mises en situation, stratégies de communication."},{title:"Accompagnement sur mesure",desc:"Intervention ciblée selon vos besoins: vérification de dossier, préparation spécifique, ou coaching personnalisé."}],cta:"Obtenir un devis"},contact:{badge:"Prise de rendez-vous & contact",title:"Contactez-nous pour votre projet professionnel",subtitle:"Remplissez le formulaire: nous revenons vers vous sous 24h. Prise de RDV TLS gratuite pour visas salarié et talent.",labels:{name:"Nom complet *",email:"Email *",phone:"Téléphone",city:"Ville",type:"Type de service *",message:"Message"},placeholders:{name:"Votre nom complet",email:"votre@email.com",phone:"+216 XX XXX XXX",city:"Tunis, Sfax, Sousse...",message:"Décrivez brièvement votre projet professionnel et vos besoins..."},options:["Visa salarié","Visa talent","Coaching entretiens","Accompagnement sur mesure","Autre"],consent:"J'accepte d'être contacté(e) par Evia Services et j'ai lu la politique de confidentialité.",submit:"Envoyer ma demande"},footer:{desc:"Spécialiste de l'accompagnement professionnel en France. Visas salarié et talent (RDV TLS gratuit) et coaching pour entretiens professionnels.",nav:{services:"Services",process:"Processus",about:"Présentation",documents:"Documents",pricing:"Tarifs & délais",faq:"Engagements",contact:"Contact"},contactLines:["Adresse: Tunis, Tunisie","Téléphone: +216 xx xxx xxx","Email: contact@eviaservices.com"],disclaimer:"Evia Services n'est ni une ambassade ni TLScontact. Aucune garantie d'obtention de visa."}},en:{header:{brand:"Evia Services",services:"Services",process:"Process",about:"About",documents:"Documents",pricing:"Pricing & timelines",engagements:"Commitments",cta:"Contact us",switcher:"Language"},hero:{badge:"✓ Official TLS procedure",title:"Your partner for career success in France",subtitle:"Evia Services helps professionals obtain work visas, talent visas and succeed in job interviews. A specialized, rigorous and personalized service for your professional project.",cta1:"Contact us",cta2:"See our services"},services:{badge:"Our services",title:"What we offer",subtitle:"Complete professional support for your success in France",salariedTitle:"Work visa",salariedDesc:"Complete support for professionals and companies. Free official TLS appointment booking. Compliant, consistent files.",talentTitle:"Talent visa",talentDesc:"Support for skilled profiles, researchers, entrepreneurs. Free official TLS appointment booking. Long-stay visas (France).",touristTitle:"Interview coaching",touristDesc:"Intensive preparation for job interviews. Communication techniques, simulations and strategies to convince recruiters.",link:"Contact us →"},process:{badge:"Process",title:"How we support you",subtitle:"Key steps of your professional project",steps:[{t:"Profile analysis",d:"Understanding your professional project and career goals."},{t:"Personalized list",d:"Required documents adapted to your professional visa type."},{t:"Official forms",d:"Fill in and validate required forms."},{t:"Free TLS appointment",d:"Free appointment booking according to official TLS procedure."},{t:"Complete dossier",d:"Final consistency and completeness check."},{t:"Follow-up & coaching",d:"Support until result and interview preparation if needed."}]},about:{badge:"About",title:"Professional support specialist in France",subtitle:"Evia Services supports professionals in their career project in France: work visas and coaching.",paragraph:"Our mission is to simplify your professional procedures with a specialized, rigorous and personalized service. We focus exclusively on the professional field: obtaining work and talent visas with free TLS appointment booking, and coaching to succeed in interviews. Our expertise maximizes your chances of success while respecting official procedures."},engagements:{badge:"Commitments & Process",title:"Our support and commitments",subtitle:"Clear process and quality commitments for your professional success",procedure:["Analysis of your profile and professional project","Check and complete supporting documents","Fill official forms","Free appointment booking according to official TLS procedure","File follow-up and interview coaching if needed"],quality:["Specialized professional and confidential support","Exclusive focus on professional projects","Free TLS appointment for work and talent visas","Personalized coaching for job interviews"]},documents:{badge:"Required documents",title:"Documents by professional visa type",subtitle:"Indicative list — may vary by professional situation",bullets:["Valid passport","Recent ID photo","Employment contract or job offer","Diplomas and professional certifications","Proof of accommodation and funds","Completed and signed application form"],helpTitle:"Need help?",helpText:"We tailor the list to your professional profile and verify each document for consistency. Free TLS appointment included.",cta:"Contact us"},pricing:{badge:"Pricing & timelines",title:"Offers tailored to your professional project",subtitle:"Fees vary by service type. Free TLS appointment for work and talent visas. Personalized quote on request.",cards:[{title:"Complete visa package",desc:"Full support: analysis, personalized list, forms, free TLS appointment booking, final check and follow-up."},{title:"Interview coaching",desc:"Intensive preparation for job interviews: techniques, simulations, communication strategies."},{title:"Customized support",desc:"Targeted intervention according to your needs: file check, specific preparation, or personalized coaching."}],cta:"Get a quote"},contact:{badge:"Appointment & contact",title:"Contact us for your professional project",subtitle:"Fill the form; we will reply within 24h. Free TLS appointment for work and talent visas.",labels:{name:"Full name *",email:"Email *",phone:"Phone",city:"City",type:"Service type *",message:"Message"},placeholders:{name:"Your full name",email:"you@email.com",phone:"+216 XX XXX XXX",city:"Tunis, Sfax, Sousse...",message:"Briefly describe your professional project and needs..."},options:["Work visa","Talent visa","Interview coaching","Customized support","Other"],consent:"I agree to be contacted by Evia Services and have read the privacy policy.",submit:"Send my request"},footer:{desc:"Professional support specialist in France. Work and talent visas (free TLS appointment) and coaching for job interviews.",nav:{services:"Services",process:"Process",about:"About",documents:"Documents",pricing:"Pricing",faq:"Commitments",contact:"Contact"},contactLines:["Address: Tunis, Tunisia","Phone: +216 xx xxx xxx","Email: contact@eviaservices.com"],disclaimer:"Evia Services is neither an embassy nor TLScontact. Visa issuance is never guaranteed."}},ar:{header:{brand:"إيفيا سيرفيسز",services:"الخدمات",process:"المنهجية",about:"نبذة",documents:"الوثائق",pricing:"الأسعار والآجال",engagements:"الالتزامات",cta:"اتصل بنا",switcher:"اللغة"},hero:{badge:"✓ إجراء TLS الرسمي",title:"شريكك لنجاح مسيرتك المهنية في فرنسا",subtitle:"إيفيا سيرفيسز ترافق المهنيين للحصول على تأشيرات العمل، تأشيرات المواهب والنجاح في المقابلات المهنية. خدمة متخصصة ودقيقة ومخصصة لمشروعك المهني.",cta1:"اتصل بنا",cta2:"اكتشف خدماتنا"},services:{badge:"خدماتنا",title:"ماذا نقدّم",subtitle:"مرافقة مهنية شاملة لنجاحك في فرنسا",salariedTitle:"تأشيرة عمل",salariedDesc:"مرافقة شاملة للمهنيين والشركات. حجز موعد TLS مجاني ورسمي. ملفات متوافقة ومتناسقة.",talentTitle:"تأشيرة موهبة",talentDesc:"مرافقة للكفاءات والباحثين ورواد الأعمال. حجز موعد TLS مجاني ورسمي. تأشيرات طويلة الأجل (فرنسا).",touristTitle:"تدريب للمقابلات",touristDesc:"تحضير مكثف للنجاح في مقابلاتك المهنية. تقنيات التواصل، محاكاة واستراتيجيات لإقناع القائمين بالتوظيف.",link:"اتصل بنا →"},process:{badge:"المنهجية",title:"كيف نرافقك",subtitle:"الخطوات الأساسية لمشروعك المهني",steps:[{t:"تحليل الملف",d:"فهم مشروعك المهني وأهداف مسيرتك."},{t:"قائمة مخصصة",d:"الوثائق المطلوبة حسب نوع التأشيرة المهنية."},{t:"الاستمارات الرسمية",d:"تعبئة ومراجعة الاستمارات اللازمة."},{t:"موعد TLS مجاني",d:"حجز موعد مجاني وفقًا للإجراء الرسمي TLS."},{t:"ملف مكتمل",d:"مراجعة نهائية للتناسق والاكتمال."},{t:"متابعة وتدريب",d:"مرافقة حتى النتيجة وتحضير للمقابلات إن لزم الأمر."}]},about:{badge:"نبذة",title:"متخصص في المرافقة المهنية في فرنسا",subtitle:"إيفيا سيرفيسز ترافق المهنيين في مشروع مسيرتهم في فرنسا: تأشيرات العمل والتدريب.",paragraph:"مهمتنا تبسيط إجراءاتك المهنية بخدمة متخصصة ودقيقة ومخصصة. نركز حصريًا على المجال المهني: الحصول على تأشيرات العمل والمواهب مع حجز موعد TLS مجاني، والتدريب للنجاح في مقابلاتك. خبرتنا تزيد من فرص نجاحك مع احترام الإجراءات الرسمية."},engagements:{badge:"الالتزامات والمنهجية",title:"مرافقتنا والتزاماتنا",subtitle:"منهجية واضحة والتزامات جودة لنجاحك المهني",procedure:["تحليل ملفك ومشروعك المهني","مراجعة وإكمال الوثائق الداعمة","تعبئة الاستمارات الرسمية","حجز موعد مجاني وفق الإجراء الرسمي TLS","متابعة الملف وتدريب للمقابلات إن لزم"],quality:["مرافقة مهنية متخصصة وسرية","تركيز حصري على المشاريع المهنية","حجز موعد TLS مجاني لتأشيرات العمل والمواهب","تدريب مخصص للمقابلات المهنية"]},documents:{badge:"الوثائق المطلوبة",title:"الوثائق حسب نوع التأشيرة المهنية",subtitle:"قائمة استرشادية — قد تختلف حسب وضعك المهني",bullets:["جواز سفر ساري المفعول","صورة شخصية حديثة مطابقة للمعايير","عقد عمل أو وعد بالتوظيف","الشهادات والمؤهلات المهنية","إثبات السكن والموارد المالية","استمارة الطلب معبأة وموقعة"],helpTitle:"بحاجة لمساعدة؟",helpText:"نخصّص القائمة حسب ملفك المهني ونراجع كل وثيقة لضمان التناسق. حجز موعد TLS مجاني مشمول.",cta:"اتصل بنا"},pricing:{badge:"الأسعار والآجال",title:"عروض مكيّفة لمشروعك المهني",subtitle:"الرسوم تختلف حسب نوع الخدمة. حجز موعد TLS مجاني لتأشيرات العمل والمواهب. عرض سعر مخصص عند الطلب.",cards:[{title:"باقة تأشيرة كاملة",desc:"مرافقة شاملة: تحليل، قائمة مخصصة، استمارات، حجز موعد TLS مجاني، مراجعة نهائية ومتابعة."},{title:"تدريب للمقابلات",desc:"تحضير مكثف للمقابلات المهنية: تقنيات، محاكاة، استراتيجيات التواصل."},{title:"مرافقة حسب الطلب",desc:"تدخل موجه حسب احتياجاتك: مراجعة الملف، تحضير محدد، أو تدريب مخصص."}],cta:"احصل على عرض سعر"},contact:{badge:"حجز موعد واتصال",title:"اتصل بنا لمشروعك المهني",subtitle:"املأ الاستمارة — سنرد خلال 24 ساعة. حجز موعد TLS مجاني لتأشيرات العمل والمواهب.",labels:{name:"الاسم الكامل *",email:"البريد الإلكتروني *",phone:"الهاتف",city:"المدينة",type:"نوع الخدمة *",message:"الرسالة"},placeholders:{name:"اسمك الكامل",email:"you@email.com",phone:"+216 XX XXX XXX",city:"تونس، صفاقس، سوسة...",message:"اشرح بإيجاز مشروعك المهني واحتياجاتك..."},options:["تأشيرة عمل","تأشيرة موهبة","تدريب للمقابلات","مرافقة حسب الطلب","أخرى"],consent:"أوافق على الاتصال بي من طرف إيفيا سيرفيسز وقد قرأت سياسة الخصوصية.",submit:"إرسال الطلب"},footer:{desc:"متخصص في المرافقة المهنية في فرنسا. تأشيرات العمل والمواهب (موعد TLS مجاني) وتدريب للمقابلات المهنية.",nav:{services:"الخدمات",process:"المنهجية",about:"نبذة",documents:"الوثائق",pricing:"الأسعار",faq:"الالتزامات",contact:"اتصال"},contactLines:["العنوان: تونس، تونس","الهاتف: +216 xx xxx xxx","البريد: contact@eviaservices.com"],disclaimer:"لسنا سفارة ولا TLScontact. لا يمكن ضمان الحصول على التأشيرة."}}};function L(){const e=(localStorage.getItem("locale")||"").toLowerCase();if(e==="fr"||e==="en"||e==="ar")return e;const t=(navigator.language||"fr").toLowerCase();return t.startsWith("ar")?"ar":t.startsWith("en")?"en":"fr"}function k(e){const t=e==="ar"?"rtl":"ltr";document.documentElement.setAttribute("dir",t),document.documentElement.setAttribute("lang",e)}function P(e){return`
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
  `}function D(e){return`
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
        ${e.pricing.cards.map((t,i)=>`
          <div class="card" style="padding:32px;text-align:center">
            <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,${i===0?"var(--logo-blue),var(--logo-teal)":i===1?"var(--logo-teal),var(--logo-orange)":"var(--logo-orange),var(--logo-blue)"});display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 8px 24px rgba(30,102,245,.3)">
              <span style="font-size:24px;font-weight:700;color:white">${i+1}</span>
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
  `}let n=L();function q(){return S[n]}function m(){var u;k(n);const e=q(),t=document.getElementById("header");t&&(t.innerHTML=h(e,n));const i=document.getElementById("footer");i&&(i.innerHTML=f(e));const o=document.getElementById("hero-root");o&&(o.innerHTML=b(e));const s=document.getElementById("services-root");s&&(s.innerHTML=y(e));const a=document.getElementById("process-root");a&&(a.innerHTML=x(e));const r=document.getElementById("about-root");r&&(r.innerHTML=w(e));const l=document.getElementById("faq-root");l&&(l.innerHTML=T(e));const c=document.getElementById("contact-root");c&&(c.innerHTML=$(e));const d=document.getElementById("documents-root");d&&(d.innerHTML=P(e));const p=document.getElementById("pricing-root");p&&(p.innerHTML=D(e)),(u=document.getElementById("lang-switch"))==null||u.addEventListener("change",g=>{const v=g.target.value;n=v,localStorage.setItem("locale",v),m()})}m();document.addEventListener("click",e=>{var i;const t=e.target;if(t.matches("[data-scroll]")){const o=t.getAttribute("data-scroll");o&&(e.preventDefault(),(i=document.getElementById(o))==null||i.scrollIntoView({behavior:"smooth",block:"start"}))}});window.addEventListener("scroll",()=>{const e=window.pageYOffset,t=document.querySelector("header.site-header");e>50?t==null||t.classList.add("scrolled"):t==null||t.classList.remove("scrolled")});
