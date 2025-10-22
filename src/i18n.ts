export type Locale = 'fr' | 'en' | 'ar'

export type Translations = Record<string, any>

export const i18n: Record<Locale, Translations> = {
  fr: {
    header: {
      brand: 'Evia Services',
      services: 'Services',
      process: 'Processus',
      documents: 'Documents',
      pricing: 'Tarifs & délais',
      engagements: 'Engagements',
      cta: 'Demander un diagnostic',
      switcher: 'Langue'
    },
    hero: {
      badge: '✓ Procédure officielle TLS',
      title: 'Agence de traitement des dossiers visa à Tunis',
      subtitle: 'Evia Services accompagne particuliers et professionnels pour la préparation, la constitution et le suivi de dossiers de visa, avec un service rapide, rigoureux et personnalisé.',
      cta1: 'Demander un diagnostic gratuit',
      cta2: 'Découvrir nos services'
    },
    services: {
      badge: 'Nos services',
      title: 'Ce que nous proposons',
      subtitle: 'Accompagnement complet pour la préparation, la constitution et le suivi de votre dossier',
      salariedTitle: 'Visa salarié',
      salariedDesc: 'Accompagnement pour travailleurs étrangers, entreprises et candidats mobilité/talent. Dossiers conformes et cohérents.',
      talentTitle: 'Visa talent',
      talentDesc: 'Assistance pour profils qualifiés, chercheurs, artistes, entrepreneurs — visas longue durée (France).',
      touristTitle: 'Visa touristique',
      touristDesc: 'Préparation et vérification pour séjours de courte durée; conformité aux exigences consulaires.',
      link: 'Nous contacter →'
    },
    process: {
      badge: 'Processus',
      title: 'Comment se déroule votre accompagnement',
      subtitle: 'Étapes clés de la prise en charge de votre dossier',
      steps: [
        { t: 'Analyse du profil', d: 'Compréhension de votre projet (tourisme, professionnel, longue durée).' },
        { t: 'Liste personnalisée', d: 'Documents requis adaptés à votre type de visa.' },
        { t: 'Formulaires officiels', d: 'Remplissage et contrôle des formulaires nécessaires.' },
        { t: 'RDV centre de visa', d: 'Assistance à la prise de rendez-vous (procédure officielle).' },
        { t: 'Dossier complet', d: 'Vérification finale de cohérence et complétude.' },
        { t: 'Suivi jusqu’à décision', d: 'Accompagnement jusqu’au résultat final.' }
      ]
    },
    about: {
      badge: 'Présentation',
      title: 'Agence de traitement des dossiers visa à Tunis',
      subtitle: 'Evia Services accompagne particuliers et professionnels dans la préparation, la constitution et le suivi des dossiers de visa.',
      paragraph: 'Notre mission est de simplifier vos démarches consulaires avec un service rapide, rigoureux et personnalisé. Nous mettons notre expertise au service de vos objectifs (tourisme, professionnel, longue durée) pour maximiser vos chances d’obtention, tout en respectant les procédures officielles.'
    },
    engagements: {
      badge: 'Engagements & Procédure',
      title: 'Notre accompagnement et nos engagements',
      subtitle: 'Processus clair et engagements qualité pour chaque dossier',
      procedure: [
        'Analyse de votre profil et de votre projet',
        'Vérification et complétude des pièces justificatives',
        'Remplissage des formulaires officiels',
        'Assistance à la prise de rendez-vous auprès du centre de demande de visa',
        'Suivi du dossier jusqu’à la décision finale'
      ],
      quality: [
        'Accompagnement professionnel et confidentiel',
        'Information claire et actualisée sur les procédures',
        'Traitement rapide et transparent',
        'Écoute attentive et suivi personnalisé'
      ]
    },
    documents: {
      badge: 'Documents à fournir',
      title: 'Pièces selon votre type de visa',
      subtitle: 'Liste indicative — peut varier selon le consulat et votre situation',
      bullets: [
        'Passeport en cours de validité',
        'Photo d’identité récente',
        'Justificatifs d’hébergement et de moyens financiers',
        'Contrat de travail ou lettre d’invitation (salarié/talent)',
        'Assurance voyage couvrant la durée du séjour',
        'Formulaire de demande rempli et signé'
      ],
      helpTitle: 'Besoin d’aide ?',
      helpText: 'Nous personnalisons la liste selon votre profil et vérifions chaque pièce pour assurer la cohérence du dossier.',
      cta: 'Demander un diagnostic'
    },
    pricing: {
      badge: 'Tarifs & délais estimés',
      title: 'Des offres adaptées à votre situation',
      subtitle: 'Les frais varient selon le type de visa et la complexité du dossier. Pas d’affichage de prix fixe: nous proposons un devis sur demande.',
      cards: [
        { title: 'Forfait complet', desc: 'Assistance globale: analyse, liste personnalisée, formulaires, prise de RDV, vérification finale et suivi.' },
        { title: 'Formule express', desc: 'Pour les demandes urgentes, priorisation du traitement et rappels des étapes critiques.' },
        { title: 'Accompagnement ciblé', desc: 'Intervention sur un point précis (ex: vérification pièces, formulaires, stratégie dossier).' }
      ],
      cta: 'Obtenir un devis & délais'
    },
    contact: {
      badge: 'Prise de rendez-vous & contact',
      title: 'Demandez votre diagnostic gratuit',
      subtitle: 'Remplissez le formulaire: nous revenons vers vous sous 24h avec les étapes et les délais estimés.',
      labels: {
        name: 'Nom complet *',
        email: 'Email *',
        phone: 'Téléphone',
        city: 'Ville',
        type: 'Type de visa *',
        message: 'Message'
      },
      placeholders: {
        name: 'Votre nom complet',
        email: 'votre@email.com',
        phone: '+216 XX XXX XXX',
        city: 'Tunis, Sfax, Sousse...',
        message: 'Décrivez brièvement votre situation et vos besoins...'
      },
      options: ['Tourisme','Affaires','Études','Visite familiale','Autre'],
      consent: 'J’accepte d’être contacté(e) par Evia Services et j’ai lu la politique de confidentialité.',
      submit: 'Envoyer ma demande'
    },
    footer: {
      desc: 'Agence de traitement des dossiers visa à Tunis. Préparation, constitution et suivi de dossiers pour particuliers et professionnels.',
      nav: { services: 'Services', process: 'Processus', documents: 'Documents', pricing: 'Tarifs & délais', faq: 'Engagements', contact: 'Contact' },
      contactLines: ['Adresse: Tunis, Tunisie','Téléphone: +216 xx xxx xxx','Email: contact@eviaservices.com'],
      disclaimer: 'Evia Services n’est ni une ambassade ni TLScontact. Aucune garantie d’obtention de visa.'
    }
  },
  en: {
    header: { brand: 'Evia Services', services: 'Services', process: 'Process', documents: 'Documents', pricing: 'Pricing & timelines', engagements: 'Commitments', cta: 'Request a consultation', switcher: 'Language' },
    hero: { badge: '✓ Official TLS procedure', title: 'Visa application support agency in Tunis', subtitle: 'We help individuals and professionals prepare, compile, and track visa applications with a fast, rigorous and tailored service.', cta1: 'Request a free assessment', cta2: 'See our services' },
    services: { badge: 'Our services', title: 'What we offer', subtitle: 'End‑to‑end support to prepare and track your application', salariedTitle: 'Work visa', salariedDesc: 'Support for foreign workers, companies and mobility/talent applicants. Compliant, consistent files.', talentTitle: 'Talent visa', talentDesc: 'Support for skilled profiles, researchers, artists and entrepreneurs — long‑stay visas (France).', touristTitle: 'Tourist visa', touristDesc: 'Preparation and verification for short stays; compliant with consular requirements.', link: 'Contact us →' },
    process: { badge: 'Process', title: 'How we support you', subtitle: 'Key steps of our handling', steps: [ { t:'Profile analysis', d:'Understand your goal (tourism, business, long stay).'}, { t:'Personalized list', d:'Required documents adapted to your visa type.'}, { t:'Official forms', d:'Fill in and validate required forms.'}, { t:'Visa center appointment', d:'Assistance with booking (official procedure).'}, { t:'Complete dossier', d:'Final consistency and completeness check.'}, { t:'Follow‑up until decision', d:'Support until final result.'} ] },
    about: { badge: 'About', title: 'Visa application support agency in Tunis', subtitle: 'Evia Services supports individuals and professionals with visa applications.', paragraph: 'Our mission is to simplify consular procedures with a fast, rigorous and personalized service. We help maximize your chances while strictly following official procedures.' },
    engagements: { badge:'Commitments & Process', title:'Our support and commitments', subtitle:'Clear process and quality commitments', procedure:['Profile and project analysis','Check and complete supporting documents','Fill official forms','Appointment booking assistance','Follow‑up until decision'], quality:['Professional and confidential support','Clear and up‑to‑date information','Fast and transparent processing','Attentive listening and personalized follow‑up'] },
    documents: { badge:'Required documents', title:'Documents by visa type', subtitle:'Indicative list — may vary by consulate and situation', bullets:['Valid passport','Recent ID photo','Proof of accommodation and funds','Employment contract or invitation letter (work/talent)','Travel insurance covering the stay','Completed and signed application form'], helpTitle:'Need help?', helpText:'We tailor the list to your profile and verify each document for consistency.', cta:'Request a consultation' },
    pricing: { badge:'Pricing & timelines', title:'Offers tailored to your case', subtitle:'Fees vary by visa type and dossier complexity. No fixed price; we provide a quote on request.', cards:[ {title:'Complete package', desc:'Full support: analysis, personalized list, forms, booking, final check and follow‑up.'}, {title:'Express', desc:'For urgent cases, prioritized handling and reminders of critical steps.'}, {title:'Targeted support', desc:'Help on a specific point (e.g., document check, forms, dossier strategy).'} ], cta:'Get a quote & timelines' },
    contact: { badge:'Appointment & contact', title:'Request your free assessment', subtitle:'Fill the form; we will reply within 24h with steps and estimated timelines.', labels:{name:'Full name *', email:'Email *', phone:'Phone', city:'City', type:'Visa type *', message:'Message'}, placeholders:{name:'Your full name', email:'you@email.com', phone:'+216 XX XXX XXX', city:'Tunis, Sfax, Sousse...', message:'Briefly describe your situation and needs...'}, options:['Tourism','Business','Studies','Family visit','Other'], consent:'I agree to be contacted by Evia Services and have read the privacy policy.', submit:'Send my request' },
    footer: { desc:'Visa application support agency in Tunis. Preparation, compilation and follow‑up for individuals and professionals.', nav:{services:'Services', process:'Process', documents:'Documents', pricing:'Pricing', faq:'Commitments', contact:'Contact'}, contactLines:['Address: Tunis, Tunisia','Phone: +216 xx xxx xxx','Email: contact@eviaservices.com'], disclaimer:'Evia Services is neither an embassy nor TLScontact. Visa issuance is never guaranteed.' }
  },
  ar: {
    header: { brand:'إيفيا سيرفيسز', services:'الخدمات', process:'المنهجية', documents:'الوثائق', pricing:'الأسعار والآجال', engagements:'الالتزامات', cta:'طلب تشخيص', switcher:'اللغة' },
    hero: { badge:'✓ إجراء TLS الرسمي', title:'وكالة دعم ملفات التأشيرة بتونس', subtitle:'نرافق الأفراد والمهنيين في إعداد وتجميع ومتابعة ملفات التأشيرة بخدمة سريعة ودقيقة ومخصصة.', cta1:'اطلب تشخيصًا مجانيًا', cta2:'اكتشف خدماتنا' },
    services: { badge:'خدماتنا', title:'ماذا نقدّم', subtitle:'مرافقة شاملة لإعداد ومتابعة ملفّك', salariedTitle:'تأشيرة عمل', salariedDesc:'مرافقة للعمال الأجانب والشركات وبرامج المواهب/التنقل. ملفات متوافقة ومتناسقة.', talentTitle:'تأشيرة موهبة', talentDesc:'مرافقة للكفاءات والباحثين والفنانين ورواد الأعمال — تأشيرات طويلة الأجل (فرنسا).', touristTitle:'تأشيرة سياحية', touristDesc:'إعداد ومراجعة لرحلات قصيرة مع احترام المتطلبات القنصلية.', link:'اتصل بنا →' },
    process: { badge:'المنهجية', title:'كيف نرافقك', subtitle:'الخطوات الأساسية لمعالجة ملفك', steps:[ {t:'تحليل الملف', d:'فهم هدفك (سياحة، عمل، إقامة طويلة).'}, {t:'قائمة مخصصة', d:'الوثائق المطلوبة حسب نوع التأشيرة.'}, {t:'الاستمارات الرسمية', d:'تعبئة ومراجعة الاستمارات اللازمة.'}, {t:'حجز موعد مركز التأشيرات', d:'مساعدة في الحجز وفقًا للإجراءات الرسمية.'}, {t:'ملف مكتمل', d:'مراجعة نهائية للتناسق والاكتفاظ.'}, {t:'متابعة حتى القرار', d:'مرافقة إلى غاية النتيجة النهائية.'} ] },
    about: { badge:'نبذة', title:'وكالة دعم ملفات التأشيرة بتونس', subtitle:'نرافق الأفراد والمهنيين في معالجة ملفات التأشيرة.', paragraph:'مهمتنا تبسيط الإجراءات القنصلية بخدمة سريعة ودقيقة ومخصصة، مع احترام الإجراءات الرسمية.' },
    engagements: { badge:'الالتزامات والمنهجية', title:'مرافقتنا والتزاماتنا', subtitle:'منهجية واضحة وجودة مضمونة', procedure:['تحليل الملف والمشروع','مراجعة وإكمال الوثائق','تعبئة الاستمارات الرسمية','المساعدة في حجز الموعد','متابعة حتى القرار'], quality:['مرافقة مهنية وسرية','معلومات واضحة ومحدّثة','معالجة سريعة وشفافة','إنصات ومتابعة مخصصة'] },
    documents: { badge:'الوثائق المطلوبة', title:'الوثائق حسب نوع التأشيرة', subtitle:'قائمة استرشادية — قد تختلف حسب القنصلية ووضعك', bullets:['جواز سفر ساري المفعول','صورة شخصية حديثة','إثبات السكن والموارد المالية','عقد عمل أو رسالة دعوة (عمل/موهبة)','تأمين سفر يغطي مدة الإقامة','استمارة طلب معبأة وموقعة'], helpTitle:'بحاجة لمساعدة؟', helpText:'نخصّص القائمة حسب ملفك ونراجع كل وثيقة لضمان التناسق.', cta:'طلب تشخيص' },
    pricing: { badge:'الأسعار والآجال', title:'عروض وفقًا لوضعك', subtitle:'الرسوم تختلف حسب نوع التأشيرة وتعقيد الملف. لا أسعار ثابتة — نقدّم عرض سعر عند الطلب.', cards:[ {title:'باقة كاملة', desc:'تحليل، قائمة مخصصة، استمارات، حجز موعد، مراجعة نهائية ومتابعة.'}, {title:'خدمة مستعجلة', desc:'للملفات العاجلة، أولوية في المعالجة وتذكير بالخطوات المهمة.'}, {title:'مرافقة موجهة', desc:'مساعدة في نقطة محددة (مراجعة الوثائق، الاستمارات، استراتيجية الملف).'} ], cta:'احصل على عرض وسُلم زمني' },
    contact: { badge:'حجز موعد واتصال', title:'اطلب تشخيصًا مجانيًا', subtitle:'املأ الاستمارة — سنرد خلال 24 ساعة بخطوات وآجال تقديرية.', labels:{name:'الاسم الكامل *', email:'البريد الإلكتروني *', phone:'الهاتف', city:'المدينة', type:'نوع التأشيرة *', message:'الرسالة'}, placeholders:{name:'اسمك الكامل', email:'you@email.com', phone:'+216 XX XXX XXX', city:'تونس، صفاقس، سوسة...', message:'اشرح بإيجاز وضعك واحتياجاتك...'}, options:['سياحة','أعمال','دراسة','زيارة عائلية','أخرى'], consent:'أوافق على الاتصال بي من طرف إيفيا سيرفيسز وقد قرأت سياسة الخصوصية.', submit:'إرسال الطلب' },
    footer: { desc:'وكالة دعم ملفات التأشيرة بتونس. إعداد وتجميع ومتابعة الملفات للأفراد والمهنيين.', nav:{services:'الخدمات', process:'المنهجية', documents:'الوثائق', pricing:'الأسعار', faq:'الالتزامات', contact:'اتصال'}, contactLines:['العنوان: تونس، تونس','الهاتف: +216 xx xxx xxx','البريد: contact@eviaservices.com'], disclaimer:'لسنا سفارة ولا TLScontact. لا يمكن ضمان الحصول على التأشيرة.' }
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


