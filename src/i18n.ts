export type Locale = 'fr' | 'en' | 'ar'

export type Translations = Record<string, any>

export const i18n: Record<Locale, Translations> = {
  fr: {
    header: {
      brand: 'NOVISA',
      services: 'Services',

      about: 'Présentation',
      documents: 'Documents',
      pricing: 'Tarifs & délais',
      engagements: 'Engagements',
      cta: 'Nous contacter',
      switcher: 'Langue'
    },
    hero: {
      badge: 'Mobilité internationale – Coaching – Portage salarial – Full Remote IT',
      title: 'NOVISA, partenaire de vos projets de mobilité et missions IT',
      subtitle: 'Accompagnement professionnel pour vos visas, coaching, portage salarial et missions IT en full remote',
      cta1: 'Nous contacter',
      cta2: 'Découvrir nos services',
      servicesTitle: 'Nos 6 domaines d\'expertise',
      servicesSubtitle: 'Des solutions complètes pour votre mobilité professionnelle et vos projets IT',
      discoverBtn: 'En savoir plus',
      servicesSummary: [
        'Structuration professionnelle de votre dossier visa après rendez-vous TLS',
        'Accompagnement complet pour tous types de Visa Talent (CBE, salarié qualifié, entrepreneur)',
        'Préparation de dossier visa salarié avec cohérence OFII et projet professionnel',
        'Structuration de dossier pour missions professionnelles à l\'étranger',
        'Préparation complète aux entretiens ESN et clients finaux avec simulations',
        'Gestion administrative complète pour freelances et mise à disposition IT'
      ]
    },
    services: {
      badge: 'Nos domaines d’accompagnement',
      title: 'Visas et services NOVISA',
      subtitle: 'Accompagnement professionnel pour vos projets de mobilité et missions IT',
      link: 'Nous contacter →',
      cards: [
        {
          title: 'Accompagnement visa – Notre rôle',
          intro:
            'NOVISA intervient après la fixation du rendez-vous TLS/consulat ; il est essentiel de nous contacter au moins une semaine avant, une fois que tous les éléments préalables sont disponibles.',
          bullets: [
            'Structurer un dossier professionnel et cohérent',
            'Mettre en valeur compétences et expériences',
            'Clarifier le projet global',
            'Vérifier la cohérence avant dépôt',
          ],
          footer: 'Nous ne fournissons aucun document officiel.',
        },
        {
          title: 'Visa Talent – Accompagnement',
          intro: 'NOVISA accompagne tous les types de Visa Talent :',
          bullets: [
            'Salarié qualifié',
            'Carte Bleue Européenne (CBE)',
            'Salarié en mission',
            'Chercheur',
            'Porteur de projet / Entrepreneur',
            'Mandataire social',
            'Profession artistique',
          ],
          footer: 'Notre rôle : donner visibilité et cohérence aux projets et candidatures.',
        },
        {
          title: 'Visa Salarié',
          intro:
            'Nous guidons les salariés après autorisation et rendez-vous TLS/consulat, en structurant leur dossier pour assurer cohérence et conformité avec le projet professionnel et les démarches administratives (OFII) :',
          bullets: [
            'Structurer le dossier',
            'Clarifier la cohérence contrat / projet / parcours',
            'Expliquer les grandes étapes (OFII…)',
            'Préparer une présentation professionnelle',
          ],
        },
        {
          title: 'Visa d’affaire',
          intro:
            'Pour les salariés envoyés en mission à l’étranger avec un client ou une filiale, NOVISA accompagne la préparation du dossier afin de :',
          bullets: [
            'Structurer le dossier',
            'Clarifier l’objet de la mission',
            'Présenter la candidature de façon claire et cohérente',
          ],
        },
        {
          title: 'Coaching – Entretiens',
          intro:
            'Nous préparons les candidats à réussir leurs entretiens avec les ESN et les clients finaux en travaillant sur les aspects RH, la présentation et la communication professionnelle :',
          bullets: [
            'Préparation RH',
            'Simulation d’entretien',
            'Mise en valeur du parcours et des compétences',
            'Gestion du stress et communication professionnelle',
          ],
        },
        {
          title: 'Portage salarial',
          intro:
            'Nous accompagnons les freelances sans patente en prenant en charge l’administration complète pour sécuriser la relation avec le client :',
          bullets: [
            'Contrat avec le client',
            'Facturation et versement des revenus',
            'Paiement des cotisations CNSS',
            'Gestion administrative complète',
          ],
        },
      ]
    },

    about: {
      badge: 'Présentation',
      title: 'NOVISA, spécialiste de la mobilité professionnelle',
      subtitle: 'Mobilité internationale, coaching, portage salarial et full remote IT.',
      paragraph: 'NOVISA accompagne les professionnels et les entreprises internationales dans tous les aspects de la mobilité professionnelle et des missions IT : préparation des visas (Talent, Salarié, Affaire), coaching aux entretiens, portage salarial et mise à disposition de talents IT en full remote. Notre mission est d’offrir une visibilité claire sur vos projets de mobilité, de structurer vos dossiers de candidature, de valoriser vos compétences et de vous accompagner de façon professionnelle et cohérente à chaque étape. NOVISA n’est pas affiliée aux consulats ni à TLS et ne fournit aucun document officiel ; notre rôle se concentre sur la structuration et la cohérence de votre dossier.'
    },
    engagements: {
      badge: 'Rôle & engagements',
      title: 'Notre rôle dans votre dossier visa',
      subtitle: 'Structurer, clarifier et sécuriser votre projet de mobilité',
      procedure: [
        'Intervention après la fixation du rendez-vous TLS/consulat, idéalement au moins une semaine avant le dépôt.',
        'Analyse de votre projet global et de votre situation professionnelle.',
        'Structuration d’un dossier professionnel, cohérent et adapté à votre profil.',
        'Mise en valeur de vos compétences, de vos expériences et de la cohérence de votre parcours.',
        'Vérification de la cohérence globale du dossier avant dépôt auprès de TLS/du consulat.',
        'Explication des grandes étapes administratives liées à votre projet (OFII, etc.), sans se substituer aux autorités officielles.'
      ],
      quality: [
        'Accompagnement strictement professionnel et indépendant des consulats et de TLS.',
        'Aucune fourniture de documents officiels ni promesse d’obtention de visa.',
        'Confidentialité totale des informations et documents transmis.',
        'Conseils personnalisés, clarté et cohérence sur l’ensemble de votre projet de mobilité.',
        'Suivi sérieux et communication professionnelle pendant toute la préparation du dossier.'
      ]
    },
    documents: {
      badge: 'Documents à fournir',
      title: 'Pièces selon votre type de visa',
      subtitle: 'Liste indicative — peut varier selon votre situation, votre type de visa et votre projet professionnel',
      bullets: [
        'Passeport en cours de validité',
        'Photo d\'identité récente aux normes',
        'Justificatifs selon le type de visa (travail, tourisme, talent)',
        'Documents spécifiques à votre projet',
        'Justificatifs d\'hébergement et de moyens financiers',
        'Formulaire de demande rempli et signé'
      ],
      helpTitle: 'Besoin d\'aide ?',
      helpText: 'Nous personnalisons la liste selon votre type de visa et vérifions chaque pièce justificative pour assurer la cohérence et la complétude de votre dossier.',
      cta: 'Nous contacter'
    },
    pricing: {
      badge: 'Tarifs & délais estimés',
      title: 'Des offres adaptées à vos besoins',
      subtitle: 'Les honoraires varient selon le type de visa, le niveau de coaching et les services de portage/full remote IT. Devis personnalisé sur demande.',
      cards: [
        { title: 'Accompagnement visa Talent / Salarié / Affaire', desc: 'Analyse de votre projet, structuration complète du dossier, mise en valeur du parcours et vérification de la cohérence avant dépôt TLS/consulat.' },
        { title: 'Coaching entretiens ESN & clients finaux', desc: 'Préparation RH, simulations d’entretien, mise en valeur du profil, gestion du stress et amélioration de la communication professionnelle.' },
        { title: 'Portage salarial & Full Remote IT', desc: 'Prise en charge administrative complète pour freelances (contrat avec le client, facturation, paiement des cotisations CNSS) et mise à disposition de développeurs tunisiens en full remote avec TJM compétitif.' }
      ],
      cta: 'Obtenir un devis'
    },
    contact: {
      badge: 'Contact NOVISA',
      title: 'Parler de votre projet avec NOVISA',
      subtitle: 'Décrivez votre projet de mobilité, de portage salarial ou de mission IT en full remote et nous revenons vers vous rapidement.',
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
        message: 'Décrivez brièvement votre projet et vos besoins...'
      },
      options: ['Visa Talent / Salarié / Affaire', 'Coaching entretiens', 'Portage salarial / Full Remote IT', 'Autre accompagnement', 'Autre'],
      consent: 'J\'accepte d\'être contacté(e) par NOVISA et j\'ai lu la politique de confidentialité.',
      submit: 'Envoyer ma demande'
    },
    footer: {
      desc: 'Accompagnement visa, coaching professionnel, portage salarial et mise à disposition de talents IT en full remote.',
      nav: {
        about: 'Présentation',
        services: 'Services',

        faq: 'Engagements',
        documents: 'Documents',
        pricing: 'Tarifs & délais',
        contact: 'Contact',
      },
      contactLines: [
        'Adresse : B21, Immeuble Titanium, Rue de l’île de Djerba, Les Berges du Lac 2 – 1053 Tunis',
        'Tél. : 29 466 456'
      ],
      disclaimer: 'NOVISA n’est ni une ambassade ni un organisme officiel et n’est pas affiliée aux consulats ni à TLS. Aucune garantie d’obtention de visa ne peut être donnée.',
      mentions: 'Mentions',
      navigation: 'Navigation',
      rights: '© {year} NOVISA. Tous droits réservés.'
    },
    serviceDetails: {
      interested: 'Intéressé par ce service ?',
      contactText: 'Contactez-nous dès maintenant pour commencer votre procédure.',
      contactBtn: 'Contactez-nous'
    },
    faq: {
      procedureTitle: 'Accompagnement et procédure',
      qualityTitle: 'Nos engagements qualité'
    },
    contactInfo: {
      hours: 'Lundi - Vendredi, 9h - 18h',
      response: 'Réponse sous 24h',
      addressTitle: 'Adresse',
      address: 'Les Berges du Lac 1<br>Tunis, Tunisie',
      mapLink: 'Voir sur la carte →'
    },
    common: {
      learnMore: 'En savoir plus'
    }
  },
  en: {
    header: { brand: 'NOVISA', services: 'Services', about: 'About', documents: 'Documents', pricing: 'Pricing & timelines', engagements: 'Commitments', cta: 'Contact us', switcher: 'Language' },
    hero: {
      badge: 'International mobility – Coaching – Payroll portage – Full Remote IT',
      title: 'NOVISA, your partner for mobility and IT assignments',
      subtitle: 'Professional support for your visas, coaching, payroll portage and full remote IT assignments',
      cta1: 'Contact us',
      cta2: 'See our services',
      servicesTitle: 'Our 6 areas of expertise',
      servicesSubtitle: 'Complete solutions for your professional mobility and IT projects',
      discoverBtn: 'Learn more',
      servicesSummary: [
        'Professional structuring of your visa file after TLS appointment',
        'Complete support for all Talent Visa types (EU Blue Card, qualified employee, entrepreneur)',
        'Employee visa file preparation with OFII consistency and professional project alignment',
        'File structuring for professional assignments abroad',
        'Complete interview preparation for ESNs and final clients with simulations',
        'Full administrative management for freelancers and IT talent provision'
      ]
    },
    services: {
      badge: 'Our areas of support',
      title: 'NOVISA visas and services',
      subtitle: 'Professional support for your mobility and IT projects',
      link: 'Contact us →',
      cards: [
        {
          title: 'Visa support – Our role',
          intro:
            'NOVISA intervenes after the TLS/consulate appointment has been booked; it is essential to contact us at least one week before, once all preliminary elements are available.',
          bullets: [
            'Structure a professional and coherent file',
            'Highlight skills and experience',
            'Clarify the overall project',
            'Check overall consistency before submission',
          ],
          footer: 'We do not provide any official documents.',
        },
        {
          title: 'Talent visa – Support',
          intro: 'NOVISA supports all Talent visa categories:',
          bullets: [
            'Qualified employee',
            'EU Blue Card (CBE)',
            'Employee on assignment',
            'Researcher',
            'Project holder / Entrepreneur',
            'Company officer',
            'Artistic professions',
          ],
          footer: 'Our role: bring visibility and coherence to projects and applications.',
        },
        {
          title: 'Employee visa',
          intro:
            'We guide employees after authorization and TLS/consulate appointment, structuring their file to ensure consistency with the professional project and administrative steps (OFII):',
          bullets: [
            'Structure the file',
            'Clarify consistency between contract, project and background',
            'Explain the main steps (OFII, etc.)',
            'Prepare a professional presentation',
          ],
        },
        {
          title: 'Business visa',
          intro:
            'For employees sent on assignment abroad with a client or subsidiary, NOVISA helps prepare the file in order to:',
          bullets: [
            'Structure the file',
            'Clarify the purpose of the assignment',
            'Present the application in a clear and coherent way',
          ],
        },
        {
          title: 'Coaching – Interviews',
          intro:
            'We prepare candidates to succeed in their interviews with ESNs and final clients, working on HR aspects, presentation and professional communication:',
          bullets: [
            'HR preparation',
            'Mock interviews',
            'Highlighting background and skills',
            'Stress management and professional communication',
          ],
        },
        {
          title: 'Payroll portage',
          intro:
            'We support freelancers without a legal entity by taking care of the full administration to secure the relationship with the client:',
          bullets: [
            'Contract with the client',
            'Invoicing and payment of income',
            'Payment of social contributions',
            'Full administrative management',
          ],
        },
      ]
    },

    about: {
      badge: 'About',
      title: 'NOVISA, specialist in professional mobility',
      subtitle: 'International mobility, coaching, payroll portage and full remote IT.',
      paragraph: 'NOVISA supports professionals and international companies in all aspects of professional mobility and IT assignments: visa preparation (Talent, Employee, Business), interview coaching, payroll portage and the provision of fully remote IT talents. Our mission is to offer clear visibility on your mobility projects, structure your applications, highlight your skills and support you professionally and consistently at each step. NOVISA is not affiliated with consulates or TLS and does not provide official documents; our role is to structure and ensure the coherence of your file.'
    },
    engagements: {
      badge: 'Commitments & role',
      title: 'Our role in your visa application',
      subtitle: 'Structuring, clarifying and securing your mobility project',
      procedure: [
        'Intervention after the TLS/consulate appointment is booked, ideally at least one week before submission.',
        'Analysis of your overall project and professional situation.',
        'Structuring a professional, coherent file adapted to your profile.',
        'Highlighting your skills, experience and the consistency of your background.',
        'Checking overall coherence before submission to TLS/the consulate.',
        'Explaining the main administrative steps related to your project (OFII, etc.) without replacing official authorities.'
      ],
      quality: [
        'Strictly professional support, independent from consulates and TLS.',
        'No provision of official documents and no guarantee of visa issuance.',
        'Full confidentiality of shared information and documents.',
        'Personalised advice, clarity and coherence on your mobility project.',
        'Serious follow-up and professional communication throughout the preparation.'
      ]
    },
    documents: { badge: 'Required documents', title: 'Documents by visa type', subtitle: 'Indicative list — may vary by situation and visa type', bullets: ['Valid passport', 'Recent ID photo', 'Documents according to visa type (work, tourist, talent)', 'Specific documents for your project', 'Proof of accommodation and funds', 'Completed and signed application form'], helpTitle: 'Need help?', helpText: 'We tailor the list to your visa type and verify each supporting document to ensure consistency and completeness of your file.', cta: 'Contact us' },
    pricing: {
      badge: 'Pricing & timelines',
      title: 'Offers tailored to your needs',
      subtitle: 'Fees depend on visa type, coaching level and payroll/full remote IT services. Personalised quote on request.',
      cards: [
        { title: 'Talent / Employee / Business visa support', desc: 'Project analysis, full file structuring, profile enhancement and coherence check before TLS/consulate submission.' },
        { title: 'Interview coaching (ESN & final clients)', desc: 'HR preparation, mock interviews, profile enhancement, stress management and professional communication.' },
        { title: 'Payroll portage & Full Remote IT', desc: 'Full administrative handling for freelancers (client contract, invoicing, social contributions) and provision of Tunisian remote developers with competitive daily rates.' }
      ],
      cta: 'Get a quote'
    },
    contact: {
      badge: 'NOVISA contact',
      title: 'Discuss your project with NOVISA',
      subtitle: 'Describe your mobility, payroll portage or full remote IT project and we will get back to you shortly.',
      labels: { name: 'Full name *', email: 'Email *', phone: 'Phone', city: 'City', type: 'Service type *', message: 'Message' },
      placeholders: { name: 'Your full name', email: 'you@email.com', phone: '+216 29 466 456', city: 'Tunis, Sfax, Sousse...', message: 'Briefly describe your project and needs...' },
      options: ['Talent / Employee / Business visa', 'Interview coaching', 'Payroll portage / Full Remote IT', 'Other support', 'Other'],
      consent: 'I agree to be contacted by NOVISA and have read the privacy policy.',
      submit: 'Send my request'
    },
    footer: {
      desc: 'Visa support, professional coaching, payroll portage and provision of full remote IT talents.',
      nav: {
        about: 'About',
        services: 'Services',

        faq: 'Commitments',
        documents: 'Documents',
        pricing: 'Pricing',
        contact: 'Contact'
      },
      contactLines: [
        'Address: B21, Immeuble Titanium, Rue de l’île de Djerba, Les Berges du Lac 2 – 1053 Tunis',
        'Phone: +216 29 466 456'
      ],
      disclaimer: 'NOVISA is neither an embassy nor an official organization and is not affiliated with consulates or TLS. Visa issuance can never be guaranteed.',
      mentions: 'Legal Mentions',
      navigation: 'Navigation',
      rights: '© {year} NOVISA. All rights reserved.'
    },
    serviceDetails: {
      interested: 'Interested in this service?',
      contactText: 'Contact us now to start your procedure.',
      contactBtn: 'Contact us'
    },
    faq: {
      procedureTitle: 'Support and procedure',
      qualityTitle: 'Our quality commitments'
    },
    contactInfo: {
      hours: 'Monday - Friday, 9am - 6pm',
      response: 'Response within 24h',
      addressTitle: 'Address',
      address: 'Les Berges du Lac 1<br>Tunis, Tunisia',
      mapLink: 'View on map →'
    },
    common: {
      learnMore: 'Learn more'
    }
  },
  ar: {
    header: { brand: 'NOVISA', services: 'الخدمات', about: 'نبذة', documents: 'الوثائق', pricing: 'الأسعار والآجال', engagements: 'الالتزامات', cta: 'اتصل بنا', switcher: 'اللغة' },
    hero: {
      badge: 'تنقل دولي – كوتشينغ مهني – بورتاج سالاريال – Full Remote IT',
      title: 'NOVISA شريككم في مشاريع التنقل والمهام المعلوماتية',
      subtitle: 'مرافقة مهنية لتأشيراتكم، كوتشينغ، بورتاج سالاريال ومهام IT عن بعد',
      cta1: 'اتصل بنا',
      cta2: 'اكتشف خدماتنا',
      servicesTitle: 'مجالات خبرتنا الستة',
      servicesSubtitle: 'حلول شاملة لتنقلكم المهني ومشاريعكم المعلوماتية',
      discoverBtn: 'اعرف المزيد',
      servicesSummary: [
        'هيكلة مهنية لملف التأشيرة بعد موعد TLS',
        'مرافقة كاملة لجميع أنواع تأشيرة الموهبة (البطاقة الزرقاء، موظف مؤهل، رائد أعمال)',
        'إعداد ملف تأشيرة العمل مع تناسق OFII والمشروع المهني',
        'هيكلة الملف للمهام المهنية في الخارج',
        'تحضير كامل للمقابلات مع ESN والعملاء النهائيين مع محاكاة',
        'إدارة إدارية كاملة للفريلانس وتوفير مواهب IT'
      ]
    },
    services: {
      badge: 'مجالات مرافقتنا',
      title: 'تأشيرات وخدمات NOVISA',
      subtitle: 'مرافقة مهنية لمشاريع التنقل والمهام المعلوماتية',
      link: 'اتصل بنا →',
      cards: [
        {
          title: 'مرافقة التأشيرة – دورنا',
          intro:
            'تتدخل NOVISA بعد حجز موعد TLS / القنصلية، ومن الضروري الاتصال بنا قبل أسبوع على الأقل عندما تكون كل العناصر الأولية متوفرة.',
          bullets: [
            'هيكلة ملف مهني ومتناسق',
            'إبراز المهارات والخبرات',
            'توضيح المشروع ككل',
            'التحقق من التناسق قبل الإيداع',
          ],
          footer: 'لا نقدّم أي وثائق رسمية.',
        },
        {
          title: 'تأشيرة موهبة – مرافقة',
          intro: 'تواكب NOVISA جميع أنواع تأشيرة الموهبة:',
          bullets: [
            'موظف مؤهل',
            'البطاقة الزرقاء الأوروبية (CBE)',
            'موظف في مهمة',
            'باحث',
            'حامل مشروع / رائد أعمال',
            'ممثل قانوني',
            'مهن فنية',
          ],
          footer: 'دورنا هو إعطاء رؤية وتناسق للمشاريع وملفات الترشح.',
        },
        {
          title: 'تأشيرة عمل',
          intro:
            'نرشد الأجراء بعد الحصول على الترخيص وتحديد موعد TLS / القنصلية، من خلال هيكلة الملف لضمان التناسق مع المشروع المهني والإجراءات الإدارية (OFII):',
          bullets: [
            'هيكلة الملف',
            'توضيح التناسق بين العقد / المشروع / المسار المهني',
            'شرح المراحل الرئيسية (OFII...)',
            'التحضير لتقديم مهني',
          ],
        },
        {
          title: 'تأشيرة أعمال',
          intro:
            'بالنسبة للأجراء الموفدين في مهمة إلى الخارج لدى عميل أو فرع، تواكب NOVISA إعداد الملف من أجل:',
          bullets: [
            'هيكلة الملف',
            'توضيح موضوع المهمة',
            'تقديم مترشح بطريقة واضحة ومتناسقة',
          ],
        },
        {
          title: 'كوتشينغ – مقابلات',
          intro:
            'نحضّر المترشحين للنجاح في مقابلاتهم مع شركات الخدمات الرقمية (ESN) والعملاء النهائيين من خلال العمل على الجوانب الموارد البشرية والعرض والتواصل المهني:',
          bullets: [
            'تحضير الموارد البشرية',
            'محاكاة مقابلة',
            'إبراز المسار والمهارات',
            'إدارة الضغط والتواصل المهني',
          ],
        },
        {
          title: 'بورتاج سالاريال',
          intro:
            'نرافق الفريلانس بدون شركة قانونية عبر التكفّل الكامل بالإدارة لتأمين العلاقة مع العميل:',
          bullets: [
            'عقد مع العميل',
            'الفوترة وتحويل العائدات',
            'دفع مساهمات CNSS',
            'تسيير إداري كامل',
          ],
        },
      ]
    },

    about: {
      badge: 'نبذة',
      title: 'NOVISA، متخصصة في التنقل المهني',
      subtitle: 'تنقل دولي، كوتشينغ، بورتاج سالاريال و Full Remote IT.',
      paragraph: 'ترافق NOVISA المهنيين والشركات الدولية في جميع جوانب التنقل المهني والمهام المعلوماتية: إعداد ملفات التأشيرة (موهبة، عمل، أعمال)، تدريب على المقابلات، بورتاج سالاريال وتوفير مطوري IT تونسيين عن بعد بالكامل. مهمتنا هي توفير رؤية واضحة لمشاريعكم، هيكلة ملفات الترشح، إبراز مهاراتكم ومرافقتكم بشكل مهني ومتناسق في كل مرحلة. NOVISA ليست تابعة للقنصليات ولا لـ TLS ولا تقدّم وثائق رسمية؛ يقتصر دورنا على هيكلة الملف وضمان تناسقه.'
    },
    engagements: {
      badge: 'الالتزامات والدور',
      title: 'دورنا في ملف التأشيرة',
      subtitle: 'هيكلة المشروع وتوضيحه وتأمينه',
      procedure: [
        'نتدخل بعد حجز موعد TLS / القنصلية، ويفضل قبل أسبوع على الأقل من الإيداع.',
        'تحليل مشروعكم العام ووضعكم المهني.',
        'هيكلة ملف مهني ومتناسق يتناسب مع ملفكم.',
        'إبراز المهارات والخبرات وتناسق المسار.',
        'التحقق من التناسق العام قبل الإيداع لدى TLS / القنصلية.',
        'شرح المراحل الإدارية الرئيسية المرتبطة بالمشروع (OFII...) دون تعويض السلطات الرسمية.'
      ],
      quality: [
        'مرافقة مهنية مستقلة تمامًا عن القنصليات و TLS.',
        'لا يتم توفير وثائق رسمية ولا ضمان بالحصول على التأشيرة.',
        'سرية تامة للمعلومات والوثائق المتبادلة.',
        'نصائح مخصصة ووضوح وتناسق في مشروع التنقل.',
        'متابعة جدية وتواصل مهني طوال مرحلة الإعداد.'
      ]
    },
    documents: {
      badge: 'الوثائق المطلوبة',
      title: 'الوثائق حسب نوع التأشيرة',
      subtitle: 'قائمة استرشادية — قد تختلف حسب وضعكم، نوع التأشيرة ومشروعكم المهني',
      bullets: [
        'جواز سفر ساري المفعول',
        'صورة شخصية حديثة مطابقة للمعايير',
        'وثائق حسب نوع التأشيرة (عمل، موهبة، أعمال)',
        'وثائق خاصة بالمهمة أو المشروع',
        'إثبات السكن والموارد المالية',
        'استمارة الطلب معبأة وموقعة'
      ],
      helpTitle: 'بحاجة لمساعدة؟',
      helpText: 'نساعدكم في تكييف قائمة الوثائق حسب نوع التأشيرة ونتحقق من تناسق واكتمال الملف قبل الإيداع.',
      cta: 'اتصل بنا'
    },
    pricing: {
      badge: 'الأسعار والآجال',
      title: 'عروض مكيّفة لاحتياجاتكم',
      subtitle: 'الرسوم تختلف حسب نوع التأشيرة، مستوى الكوتشينغ وخدمات البورتاج / Full Remote IT. عرض سعر مخصص عند الطلب.',
      cards: [
        { title: 'مرافقة تأشيرة موهبة / عمل / أعمال', desc: 'تحليل المشروع، هيكلة شاملة للملف، إبراز المسار ومراجعة التناسق قبل الإيداع لدى TLS / القنصلية.' },
        { title: 'تدريب على المقابلات (ESN والعملاء النهائيين)', desc: 'تحضير موارد بشرية، محاكاة مقابلات، إبراز الملف، إدارة الضغط والتواصل المهني.' },
        { title: 'بورتاج سالاريال و Full Remote IT', desc: 'تكفّل إداري كامل بالنسبة للفريلانس (عقد مع العميل، الفوترة، دفع الاشتراكات الاجتماعية) وتوفير مطوري IT تونسيين عن بعد مع معدل يومي تنافسي.' }
      ],
      cta: 'احصل على عرض سعر'
    },
    contact: {
      badge: 'اتصال NOVISA',
      title: 'تحدث عن مشروعك مع NOVISA',
      subtitle: 'صف مشروع التنقل أو البورتاج سالاريال أو Full Remote IT وسنعود إليك في أقرب وقت.',
      labels: { name: 'الاسم الكامل *', email: 'البريد الإلكتروني *', phone: 'الهاتف', city: 'المدينة', type: 'نوع الخدمة *', message: 'الرسالة' },
      placeholders: { name: 'اسمك الكامل', email: 'you@email.com', phone: '+216 29 466 456', city: 'تونس، صفاقس، سوسة...', message: 'اشرح بإيجاز مشروعك واحتياجاتك...' },
      options: ['تأشيرة موهبة / عمل / أعمال', 'تدريب على المقابلات', 'بورتاج سالاريال / Full Remote IT', 'مرافقة أخرى', 'أخرى'],
      consent: 'أوافق على الاتصال بي من طرف NOVISA وقد قرأت سياسة الخصوصية.',
      submit: 'إرسال الطلب'
    },
    footer: {
      desc: 'مرافقة للتأشيرات، كوتشينغ مهني، بورتاج سالاريال وتوفير مطوري IT تونسيين عن بعد بالكامل.',
      nav: {
        about: 'نبذة',
        services: 'الخدمات',

        faq: 'الالتزامات',
        documents: 'الوثائق',
        pricing: 'الأسعار',
        contact: 'اتصال'
      },
      contactLines: [
        'العنوان: B21، عمارة تيتانيوم، نهج جزيرة جربة، ضفاف البحيرة 2 – 1053 تونس',
        'الهاتف: +216 29 466 456'
      ],
      disclaimer: 'NOVISA ليست سفارة ولا مؤسسة رسمية وليست تابعة للقنصليات أو TLS. لا يمكن بأي حال ضمان الحصول على التأشيرة.',
      mentions: 'إشعارات قانونية',
      navigation: 'تصفح',
      rights: '© {year} NOVISA. جميع الحقوق محفوظة.'
    },
    serviceDetails: {
      interested: 'هل أنت مهتم بهذه الخدمة؟',
      contactText: 'اتصل بنا الآن لبدء إجراءاتك.',
      contactBtn: 'اتصل بنا'
    },
    faq: {
      procedureTitle: 'المرافقة والإجراءات',
      qualityTitle: 'التزامات الجودة لدينا'
    },
    contactInfo: {
      hours: 'الاثنين - الجمعة، 9 صباحاً - 6 مساءً',
      response: 'الرد خلال 24 ساعة',
      addressTitle: 'العنوان',
      address: 'ضفاف البحيرة 1<br>تونس، تونس',
      mapLink: 'عرض على الخريطة ←'
    },
    common: {
      learnMore: 'اعرف المزيد'
    }
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


