# 🚀 Swift Social - AI-Powered Advertising Platform

Un SaaS fictif moderne pour une agence spécialisée en publicité digitale (Google Ads, Facebook Ads, TikTok Ads, LinkedIn Ads).

![Swift Social](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Fonctionnalités

### 🏠 Landing Page
- Hero section moderne avec animations et gradients
- Présentation des bénéfices (multi-plateforme, analytics, AI, support)
- Process en 4 étapes visuelles
- Plans tarifaires (Starter, Growth, Enterprise)
- Call-to-action final

### 📊 Dashboard Client
- **Overview** : KPIs, budget tracking, campagnes récentes
- **Campaigns** : Gestion complète avec métriques (CPC, ROAS, conversions)
- **Analytics** : Performance dans le temps, breakdown par plateforme
- **Budget** : Tracking mensuel, burn rate, projections
- **Objectives** : Gestion d'objectifs avec progress tracking
- **Settings** : Connexion des plateformes publicitaires

### 🎯 Onboarding
- Flow multi-étapes avec wizard UI
- Configuration du budget
- Sélection des plateformes
- Confirmation et redirection

## 🛠️ Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS v4
- **Icons** : Lucide React
- **Components** : Radix UI Slot
- **Utilities** : clsx, tailwind-merge

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/franckguglietta/fake-saas-1.git
cd fake-saas-1

# Se placer sur la branche
git checkout claude/init-swift-social-saas-01Lqx4wppSRwh6ipX3DUTaaf

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

### Build de Production

```bash
# Créer un build optimisé
npm run build

# Lancer le build en production
npm start
```

## 📁 Structure du Projet

```
fake-saas-1/
├── app/
│   ├── (landing)/              # Landing page
│   │   ├── sections/           # Hero, Benefits, Process, Pricing, CTA
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── dashboard/              # Dashboard pages
│   │   ├── analytics/
│   │   ├── budget/
│   │   ├── campaigns/
│   │   ├── objectives/
│   │   ├── settings/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── onboarding/             # Onboarding flow
│   ├── globals.css             # Styles globaux + design tokens
│   └── layout.tsx              # Root layout
├── components/
│   ├── dashboard/              # Composants dashboard (Sidebar, StatCard)
│   ├── shared/                 # Header, Footer
│   └── ui/                     # Composants UI réutilisables (Button, Card, Badge)
├── lib/
│   ├── mock-data.ts           # Données fictives (campagnes, objectifs, user)
│   └── utils.ts               # Utilitaires (cn, formatters)
└── public/                    # Assets statiques
```

## 🎨 Design System

### Couleurs
- **Primary** : Blue (#3b82f6)
- **Accent** : Purple (#8b5cf6)
- **Background** : Dark (#0a0a0a)
- **Surface** : Elevated dark (#111111, #1a1a1a)

### Thème
- Dark mode par défaut
- Gradients mesh subtils
- Glass morphism effects
- Animations fluides

### Composants Réutilisables
- `<Button>` : 4 variants (primary, secondary, outline, ghost)
- `<Card>` : Avec support hover et glass effect
- `<Badge>` : 5 variants de status
- `<StatCard>` : Pour les KPIs du dashboard

## 📄 Pages Disponibles

| Route | Description |
|-------|-------------|
| `/` | Landing page principale |
| `/dashboard` | Overview du dashboard |
| `/dashboard/campaigns` | Gestion des campagnes |
| `/dashboard/analytics` | Métriques et analytics |
| `/dashboard/budget` | Suivi du budget |
| `/dashboard/objectives` | Objectifs publicitaires |
| `/dashboard/settings` | Paramètres et connexions |
| `/onboarding` | Flow d'onboarding |

## 💾 Données Mockées

Le projet utilise des données fictives pour simuler un environnement réel :

- **5 campagnes** sur Google, Facebook, TikTok, LinkedIn
- **4 objectifs** avec tracking de progression
- **Performance metrics** sur 6 points temporels
- **User data** avec informations de compte

Toutes les données sont dans `lib/mock-data.ts` et peuvent être facilement modifiées.

## 🎯 Inspirations Design

Le design s'inspire de :
- Linear (navigation et UI claire)
- Stripe Dashboard (data visualization)
- Notion (composants modulaires)
- Framer (animations fluides)

## 📝 Scripts Disponibles

```bash
npm run dev          # Lancer en développement (avec Turbopack)
npm run build        # Build de production
npm start            # Serveur de production
npm run lint         # Linter ESLint
```

## 🚧 Améliorations Futures

- [ ] Ajouter des charts interactifs (Recharts ou Chart.js)
- [ ] Implémenter la recherche et filtres sur les campagnes
- [ ] Ajouter un mode light/dark toggle
- [ ] Créer des animations de page transitions
- [ ] Ajouter des formulaires de création de campagne
- [ ] Implémenter la gestion d'équipe
- [ ] Ajouter des notifications en temps réel
- [ ] Créer un système d'alertes budget

## 📄 License

Ce projet est un exemple fictif créé à des fins de démonstration.

---

**Créé avec ❤️ par Claude** • Next.js 16 • TypeScript • Tailwind CSS v4
