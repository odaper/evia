export type Locale = 'fr' | 'en' | 'ar'

export type Translations = Record<string, any>

export const i18n: Record<Locale, Translations> = {
  fr: {
    header: {
      brand: 'Evia Services',
      services: 'Services',
      process: 'Processus',
      about: 'Présentation',
      documents: 'Documents',
      pricing: 'Tarifs & délais',
      engagements: 'Engagements',
      cta: 'Nous contacter',
      switcher: 'Langue'
    },
    hero: {
      badge: '✓ Procédure officielle TLS',
      title: 'Votre partenaire pour réussir votre carrière en France',
      subtitle: 'Evia Services accompagne les professionnels pour l\'obtention de visas travail, visas talent et la réussite de leurs entretiens professionnels. Un service spécialisé, rigoureux et personnalisé pour votre projet professionnel.',
      cta1: 'Nous contacter',
      cta2: 'Découvrir nos services'
    },
    services: {
      badge: 'Nos services',
      title: 'Ce que nous proposons',
      subtitle: 'Un accompagnement professionnel complet pour votre réussite en France',
      salariedTitle: 'Visa salarié',
      salariedDesc: 'Accompagnement complet pour professionnels et entreprises. Prise de RDV gratuite et officielle selon la procédure TLS. Dossiers conformes et cohérents.',
      talentTitle: 'Visa talent',
      talentDesc: 'Assistance pour profils qualifiés, chercheurs, entrepreneurs. Prise de RDV gratuite et officielle selon la procédure TLS. Visas longue durée (France).',
      touristTitle: 'Coaching entretiens',
      touristDesc: 'Préparation intensive pour réussir vos entretiens professionnels. Techniques de communication, mise en situation et stratégies pour convaincre les recruteurs.',
      link: 'Nous contacter →'
    },
    process: {
      badge: 'Processus',
      title: 'Comment se déroule votre accompagnement',
      subtitle: 'Étapes clés de la prise en charge de votre projet professionnel',
      steps: [
        { t: 'Analyse du profil', d: 'Compréhension de votre projet professionnel et de vos objectifs de carrière.' },
        { t: 'Liste personnalisée', d: 'Documents requis adaptés à votre type de visa professionnel.' },
        { t: 'Formulaires officiels', d: 'Remplissage et contrôle des formulaires nécessaires.' },
        { t: 'RDV TLS gratuit', d: 'Prise de rendez-vous gratuite selon la procédure officielle TLS.' },
        { t: 'Dossier complet', d: 'Vérification finale de cohérence et complétude.' },
        { t: 'Suivi & coaching', d: 'Accompagnement jusqu\'au résultat et préparation aux entretiens si nécessaire.' }
      ]
    },
    about: {
      badge: 'Présentation',
      title: 'Spécialiste de l\'accompagnement professionnel en France',
      subtitle: 'Evia Services accompagne les professionnels dans leur projet de carrière en France : visas travail et coaching.',
      paragraph: 'Notre mission est de simplifier vos démarches professionnelles avec un service spécialisé, rigoureux et personnalisé. Nous nous concentrons exclusivement sur le domaine professionnel : obtention de visas salarié et talent avec prise de RDV gratuite TLS, et coaching pour réussir vos entretiens. Notre expertise maximise vos chances de succès tout en respectant les procédures officielles.'
    },
    engagements: {
      badge: 'Engagements & Procédure',
      title: 'Notre accompagnement et nos engagements',
      subtitle: 'Processus clair et engagements qualité pour votre réussite professionnelle',
      procedure: [
        'Analyse de votre profil et de votre projet professionnel',
        'Vérification et complétude des pièces justificatives',
        'Remplissage des formulaires officiels',
        'Prise de RDV gratuite selon la procédure officielle TLS',
        'Suivi du dossier et coaching entretiens si nécessaire'
      ],
      quality: [
        'Accompagnement professionnel spécialisé et confidentiel',
        'Focus exclusif sur les projets professionnels',
        'Prise de RDV TLS gratuite pour visas salarié et talent',
        'Coaching personnalisé pour entretiens professionnels'
      ]
    },
    documents: {
      badge: 'Documents à fournir',
      title: 'Pièces selon votre type de visa professionnel',
      subtitle: 'Liste indicative — peut varier selon votre situation professionnelle',
      bullets: [
        'Passeport en cours de validité',
        'Photo d\'identité récente aux normes',
        'Contrat de travail ou promesse d\'embauche',
        'Diplômes et certifications professionnelles',
        'Justificatifs d\'hébergement et de moyens financiers',
        'Formulaire de demande rempli et signé'
      ],
      helpTitle: 'Besoin d\'aide ?',
      helpText: 'Nous personnalisons la liste selon votre profil professionnel et vérifions chaque pièce pour assurer la cohérence du dossier. Prise de RDV TLS gratuite incluse.',
      cta: 'Nous contacter'
    },
    pricing: {
      badge: 'Tarifs & délais estimés',
      title: 'Des offres adaptées à votre projet professionnel',
      subtitle: 'Les frais varient selon le type de service. Prise de RDV TLS gratuite pour visas salarié et talent. Devis personnalisé sur demande.',
      cards: [
        { title: 'Forfait visa complet', desc: 'Assistance globale: analyse, liste personnalisée, formulaires, prise de RDV TLS gratuite, vérification finale et suivi.' },
        { title: 'Coaching entretiens', desc: 'Préparation intensive aux entretiens professionnels: techniques, mises en situation, stratégies de communication.' },
        { title: 'Accompagnement sur mesure', desc: 'Intervention ciblée selon vos besoins: vérification de dossier, préparation spécifique, ou coaching personnalisé.' }
      ],
      cta: 'Obtenir un devis'
    },
    contact: {
      badge: 'Prise de rendez-vous & contact',
      title: 'Contactez-nous pour votre projet professionnel',
      subtitle: 'Remplissez le formulaire: nous revenons vers vous sous 24h. Prise de RDV TLS gratuite pour visas salarié et talent.',
      labels: {
        name: 'Nom complet *',
        email: 'Email *',
        phone: 'Téléphone',
        city: 'Ville',
        type: 'Type de service *',
        message: 'Message'
      },
      placeholders: {
        name: 'Votre nom complet',
        email: 'votre@email.com',
        phone: '+216 XX XXX XXX',
        city: 'Tunis, Sfax, Sousse...',
        message: 'Décrivez brièvement votre projet professionnel et vos besoins...'
      },
      options: ['Visa salarié','Visa talent','Coaching entretiens','Accompagnement sur mesure','Autre'],
      consent: 'J\'accepte d\'être contacté(e) par Evia Services et j\'ai lu la politique de confidentialité.',
      submit: 'Envoyer ma demande'
    },
    footer: {
      desc: 'Spécialiste de l\'accompagnement professionnel en France. Visas salarié et talent (RDV TLS gratuit) et coaching pour entretiens professionnels.',
      nav: { services: 'Services', process: 'Processus', about: 'Présentation', documents: 'Documents', pricing: 'Tarifs & délais', faq: 'Engagements', contact: 'Contact' },
      contactLines: ['Adresse: Tunis, Tunisie','Téléphone: +216 xx xxx xxx','Email: contact@eviaservices.com'],
      disclaimer: 'Evia Services n\'est ni une ambassade ni TLScontact. Aucune garantie d\'obtention de visa.'
    }
  },
  en: {
    header: { brand: 'Evia Services', services: 'Services', process: 'Process', about: 'About', documents: 'Documents', pricing: 'Pricing & timelines', engagements: 'Commitments', cta: 'Contact us', switcher: 'Language' },
    hero: { badge: '✓ Official TLS procedure', title: 'Your partner for career success in France', subtitle: 'Evia Services helps professionals obtain work visas, talent visas and succeed in job interviews. A specialized, rigorous and personalized service for your professional project.', cta1: 'Contact us', cta2: 'See our services' },
    services: { badge: 'Our services', title: 'What we offer', subtitle: 'Complete professional support for your success in France', salariedTitle: 'Work visa', salariedDesc: 'Complete support for professionals and companies. Free official TLS appointment booking. Compliant, consistent files.', talentTitle: 'Talent visa', talentDesc: 'Support for skilled profiles, researchers, entrepreneurs. Free official TLS appointment booking. Long-stay visas (France).', touristTitle: 'Interview coaching', touristDesc: 'Intensive preparation for job interviews. Communication techniques, simulations and strategies to convince recruiters.', link: 'Contact us →' },
    process: { badge: 'Process', title: 'How we support you', subtitle: 'Key steps of your professional project', steps: [ { t:'Profile analysis', d:'Understanding your professional project and career goals.'}, { t:'Personalized list', d:'Required documents adapted to your professional visa type.'}, { t:'Official forms', d:'Fill in and validate required forms.'}, { t:'Free TLS appointment', d:'Free appointment booking according to official TLS procedure.'}, { t:'Complete dossier', d:'Final consistency and completeness check.'}, { t:'Follow-up & coaching', d:'Support until result and interview preparation if needed.'} ] },
    about: { badge: 'About', title: 'Professional support specialist in France', subtitle: 'Evia Services supports professionals in their career project in France: work visas and coaching.', paragraph: 'Our mission is to simplify your professional procedures with a specialized, rigorous and personalized service. We focus exclusively on the professional field: obtaining work and talent visas with free TLS appointment booking, and coaching to succeed in interviews. Our expertise maximizes your chances of success while respecting official procedures.' },
    engagements: { badge:'Commitments & Process', title:'Our support and commitments', subtitle:'Clear process and quality commitments for your professional success', procedure:['Analysis of your profile and professional project','Check and complete supporting documents','Fill official forms','Free appointment booking according to official TLS procedure','File follow-up and interview coaching if needed'], quality:['Specialized professional and confidential support','Exclusive focus on professional projects','Free TLS appointment for work and talent visas','Personalized coaching for job interviews'] },
    documents: { badge:'Required documents', title:'Documents by professional visa type', subtitle:'Indicative list — may vary by professional situation', bullets:['Valid passport','Recent ID photo','Employment contract or job offer','Diplomas and professional certifications','Proof of accommodation and funds','Completed and signed application form'], helpTitle:'Need help?', helpText:'We tailor the list to your professional profile and verify each document for consistency. Free TLS appointment included.', cta:'Contact us' },
    pricing: { badge:'Pricing & timelines', title:'Offers tailored to your professional project', subtitle:'Fees vary by service type. Free TLS appointment for work and talent visas. Personalized quote on request.', cards:[ {title:'Complete visa package', desc:'Full support: analysis, personalized list, forms, free TLS appointment booking, final check and follow-up.'}, {title:'Interview coaching', desc:'Intensive preparation for job interviews: techniques, simulations, communication strategies.'}, {title:'Customized support', desc:'Targeted intervention according to your needs: file check, specific preparation, or personalized coaching.'} ], cta:'Get a quote' },
    contact: { badge:'Appointment & contact', title:'Contact us for your professional project', subtitle:'Fill the form; we will reply within 24h. Free TLS appointment for work and talent visas.', labels:{name:'Full name *', email:'Email *', phone:'Phone', city:'City', type:'Service type *', message:'Message'}, placeholders:{name:'Your full name', email:'you@email.com', phone:'+216 XX XXX XXX', city:'Tunis, Sfax, Sousse...', message:'Briefly describe your professional project and needs...'}, options:['Work visa','Talent visa','Interview coaching','Customized support','Other'], consent:'I agree to be contacted by Evia Services and have read the privacy policy.', submit:'Send my request' },
    footer: { desc:'Professional support specialist in France. Work and talent visas (free TLS appointment) and coaching for job interviews.', nav:{services:'Services', process:'Process', about:'About', documents:'Documents', pricing:'Pricing', faq:'Commitments', contact:'Contact'}, contactLines:['Address: Tunis, Tunisia','Phone: +216 xx xxx xxx','Email: contact@eviaservices.com'], disclaimer:'Evia Services is neither an embassy nor TLScontact. Visa issuance is never guaranteed.' }
  },
  ar: {
    header: { brand:'إيفيا سيرفيسز', services:'الخدمات', process:'المنهجية', about:'نبذة', documents:'الوثائق', pricing:'الأسعار والآجال', engagements:'الالتزامات', cta:'اتصل بنا', switcher:'اللغة' },
    hero: { badge:'✓ إجراء TLS الرسمي', title:'شريكك لنجاح مسيرتك المهنية في فرنسا', subtitle:'إيفيا سيرفيسز ترافق المهنيين للحصول على تأشيرات العمل، تأشيرات المواهب والنجاح في المقابلات المهنية. خدمة متخصصة ودقيقة ومخصصة لمشروعك المهني.', cta1:'اتصل بنا', cta2:'اكتشف خدماتنا' },
    services: { badge:'خدماتنا', title:'ماذا نقدّم', subtitle:'مرافقة مهنية شاملة لنجاحك في فرنسا', salariedTitle:'تأشيرة عمل', salariedDesc:'مرافقة شاملة للمهنيين والشركات. حجز موعد TLS مجاني ورسمي. ملفات متوافقة ومتناسقة.', talentTitle:'تأشيرة موهبة', talentDesc:'مرافقة للكفاءات والباحثين ورواد الأعمال. حجز موعد TLS مجاني ورسمي. تأشيرات طويلة الأجل (فرنسا).', touristTitle:'تدريب للمقابلات', touristDesc:'تحضير مكثف للنجاح في مقابلاتك المهنية. تقنيات التواصل، محاكاة واستراتيجيات لإقناع القائمين بالتوظيف.', link:'اتصل بنا →' },
    process: { badge:'المنهجية', title:'كيف نرافقك', subtitle:'الخطوات الأساسية لمشروعك المهني', steps:[ {t:'تحليل الملف', d:'فهم مشروعك المهني وأهداف مسيرتك.'}, {t:'قائمة مخصصة', d:'الوثائق المطلوبة حسب نوع التأشيرة المهنية.'}, {t:'الاستمارات الرسمية', d:'تعبئة ومراجعة الاستمارات اللازمة.'}, {t:'موعد TLS مجاني', d:'حجز موعد مجاني وفقًا للإجراء الرسمي TLS.'}, {t:'ملف مكتمل', d:'مراجعة نهائية للتناسق والاكتمال.'}, {t:'متابعة وتدريب', d:'مرافقة حتى النتيجة وتحضير للمقابلات إن لزم الأمر.'} ] },
    about: { badge:'نبذة', title:'متخصص في المرافقة المهنية في فرنسا', subtitle:'إيفيا سيرفيسز ترافق المهنيين في مشروع مسيرتهم في فرنسا: تأشيرات العمل والتدريب.', paragraph:'مهمتنا تبسيط إجراءاتك المهنية بخدمة متخصصة ودقيقة ومخصصة. نركز حصريًا على المجال المهني: الحصول على تأشيرات العمل والمواهب مع حجز موعد TLS مجاني، والتدريب للنجاح في مقابلاتك. خبرتنا تزيد من فرص نجاحك مع احترام الإجراءات الرسمية.' },
    engagements: { badge:'الالتزامات والمنهجية', title:'مرافقتنا والتزاماتنا', subtitle:'منهجية واضحة والتزامات جودة لنجاحك المهني', procedure:['تحليل ملفك ومشروعك المهني','مراجعة وإكمال الوثائق الداعمة','تعبئة الاستمارات الرسمية','حجز موعد مجاني وفق الإجراء الرسمي TLS','متابعة الملف وتدريب للمقابلات إن لزم'], quality:['مرافقة مهنية متخصصة وسرية','تركيز حصري على المشاريع المهنية','حجز موعد TLS مجاني لتأشيرات العمل والمواهب','تدريب مخصص للمقابلات المهنية'] },
    documents: { badge:'الوثائق المطلوبة', title:'الوثائق حسب نوع التأشيرة المهنية', subtitle:'قائمة استرشادية — قد تختلف حسب وضعك المهني', bullets:['جواز سفر ساري المفعول','صورة شخصية حديثة مطابقة للمعايير','عقد عمل أو وعد بالتوظيف','الشهادات والمؤهلات المهنية','إثبات السكن والموارد المالية','استمارة الطلب معبأة وموقعة'], helpTitle:'بحاجة لمساعدة؟', helpText:'نخصّص القائمة حسب ملفك المهني ونراجع كل وثيقة لضمان التناسق. حجز موعد TLS مجاني مشمول.', cta:'اتصل بنا' },
    pricing: { badge:'الأسعار والآجال', title:'عروض مكيّفة لمشروعك المهني', subtitle:'الرسوم تختلف حسب نوع الخدمة. حجز موعد TLS مجاني لتأشيرات العمل والمواهب. عرض سعر مخصص عند الطلب.', cards:[ {title:'باقة تأشيرة كاملة', desc:'مرافقة شاملة: تحليل، قائمة مخصصة، استمارات، حجز موعد TLS مجاني، مراجعة نهائية ومتابعة.'}, {title:'تدريب للمقابلات', desc:'تحضير مكثف للمقابلات المهنية: تقنيات، محاكاة، استراتيجيات التواصل.'}, {title:'مرافقة حسب الطلب', desc:'تدخل موجه حسب احتياجاتك: مراجعة الملف، تحضير محدد، أو تدريب مخصص.'} ], cta:'احصل على عرض سعر' },
    contact: { badge:'حجز موعد واتصال', title:'اتصل بنا لمشروعك المهني', subtitle:'املأ الاستمارة — سنرد خلال 24 ساعة. حجز موعد TLS مجاني لتأشيرات العمل والمواهب.', labels:{name:'الاسم الكامل *', email:'البريد الإلكتروني *', phone:'الهاتف', city:'المدينة', type:'نوع الخدمة *', message:'الرسالة'}, placeholders:{name:'اسمك الكامل', email:'you@email.com', phone:'+216 XX XXX XXX', city:'تونس، صفاقس، سوسة...', message:'اشرح بإيجاز مشروعك المهني واحتياجاتك...'}, options:['تأشيرة عمل','تأشيرة موهبة','تدريب للمقابلات','مرافقة حسب الطلب','أخرى'], consent:'أوافق على الاتصال بي من طرف إيفيا سيرفيسز وقد قرأت سياسة الخصوصية.', submit:'إرسال الطلب' },
    footer: { desc:'متخصص في المرافقة المهنية في فرنسا. تأشيرات العمل والمواهب (موعد TLS مجاني) وتدريب للمقابلات المهنية.', nav:{services:'الخدمات', process:'المنهجية', about:'نبذة', documents:'الوثائق', pricing:'الأسعار', faq:'الالتزامات', contact:'اتصال'}, contactLines:['العنوان: تونس، تونس','الهاتف: +216 xx xxx xxx','البريد: contact@eviaservices.com'], disclaimer:'لسنا سفارة ولا TLScontact. لا يمكن ضمان الحصول على التأشيرة.' }
  }
}

export function detectLocale(): Locale {
  const fromStorage = (localStorage.getItem('locale') || '').toLowerCase()
  if (fromStorage === 'fr' || fromStorage === 'en' || fromStorage === 'ar') return fromStorage as Locale
  const nav = (navigator.language || 'fr').toLowerCase()
  if (nav.startsWith('ar')) return 'ar'
  if (nav.startsWith('en')) return 'en'
  return 'fr'
}

export function setDocumentDirection(locale: Locale) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', locale)
}


