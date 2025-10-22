# Evia Services – Site Vitrine

Site vitrine moderne pour Evia Services, spécialisé dans l'accompagnement des demandes de VISA Schengen en Tunisie.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site s'ouvrira automatiquement dans votre navigateur à `http://localhost:5173`

### Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualisation

```bash
npm run preview
```

## 🎨 Design System

### Couleurs principales

- **Primary (Indigo)**: `#4f46e5` – Boutons, accents, éléments interactifs
- **Accent (Cyan)**: `#06b6d4` – Éléments secondaires, hover states
- **Neutrals**: Palette complète de gris pour textes et backgrounds

### Gradients

Le site utilise plusieurs gradients modernes:
- Hero section: gradient indigo → cyan
- Boutons: gradient subtil avec effet hover
- Sections alternées: gradient doux pour différenciation

### Typographies

- **Titres**: Poppins (Google Fonts)
- **Corps de texte**: Inter (Google Fonts)

## 📝 Configuration

### Formulaire de contact

Le formulaire utilise actuellement un endpoint placeholder. Pour le configurer:

1. Créez un compte sur [Formspree](https://formspree.io) ou [Formspark](https://formspark.io)
2. Obtenez votre endpoint
3. Modifiez `src/components/ContactForm.ts` ligne 3:

```typescript
const action = 'https://formspree.io/f/VOTRE-ID'
```

### Personnalisation des couleurs

Toutes les couleurs sont centralisées dans `src/styles/tokens.css`. Modifiez les variables CSS pour changer l'apparence:

```css
:root {
  --brand-primary: #4f46e5;  /* Votre couleur principale */
  --brand-accent: #06b6d4;   /* Votre couleur d'accent */
  /* ... */
}
```

### Modification des textes

Les contenus sont dans les fichiers TypeScript du dossier `src/components/`:
- `Hero.ts` – Section d'accueil
- `ServiceCards.ts` – Cartes de services
- `ProcessTimeline.ts` – Processus en 6 étapes
- `AboutFaq.ts` – À propos et FAQ
- `ContactForm.ts` – Formulaire

### SEO

Modifiez les balises meta dans `index.html`:
- Titre, description
- URL canonique
- OpenGraph et Twitter Cards
- JSON-LD (ligne 30-44)

N'oubliez pas de mettre à jour `public/sitemap.xml` avec votre véritable URL.

## 📁 Structure du projet

```
evia/
├── public/              # Assets statiques
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   ├── mentions-legales.html
│   └── politique-confidentialite.html
├── src/
│   ├── components/      # Composants TypeScript
│   │   ├── Header.ts
│   │   ├── Hero.ts
│   │   ├── ServiceCards.ts
│   │   ├── ProcessTimeline.ts
│   │   ├── AboutFaq.ts
│   │   ├── ContactForm.ts
│   │   └── Footer.ts
│   ├── styles/          # Styles CSS modulaires
│   │   ├── tokens.css   # Variables CSS (couleurs, espacements, etc.)
│   │   ├── base.css     # Reset et styles de base
│   │   ├── layout.css   # Mise en page et sections
│   │   └── components.css # Styles des composants
│   └── main.ts          # Point d'entrée JavaScript
├── index.html           # Page principale
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Fonctionnalités

### Design moderne
- ✅ Gradients full-width sur sections
- ✅ Animations et transitions fluides
- ✅ Cards avec effets hover
- ✅ Header sticky avec effet scroll
- ✅ Glassmorphism sur hero card

### UX optimisée
- ✅ Navigation smooth scroll
- ✅ Formulaire avec validation
- ✅ FAQ avec accordéons
- ✅ Responsive mobile-first
- ✅ Focus states accessibles

### Performance
- ✅ CSS modulaire optimisé
- ✅ Pas de framework lourd
- ✅ Vite pour build ultra-rapide
- ✅ Lazy loading prêt

### SEO
- ✅ Meta tags complets
- ✅ OpenGraph / Twitter Cards
- ✅ JSON-LD Schema.org
- ✅ Sitemap XML
- ✅ Robots.txt

## 🚢 Déploiement

### Netlify / Vercel

1. Connectez votre repo GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### Hébergement statique classique

1. Exécutez `npm run build`
2. Uploadez le contenu du dossier `dist/` sur votre serveur

## 📄 Mentions légales

N'oubliez pas de personnaliser:
- `public/mentions-legales.html` avec vos informations légales
- `public/politique-confidentialite.html` avec votre politique RGPD

## 🤝 Support

Pour toute question ou personnalisation, contactez votre développeur.

---

**Note importante**: Ce site est un site vitrine. Il ne garantit pas l'obtention d'un visa et respecte strictement la procédure officielle TLS.

