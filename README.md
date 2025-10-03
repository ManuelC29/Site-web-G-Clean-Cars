# G Clean Cars - Vue 3 Vite Starter (SEO-friendly)

Fichiers créés: projet Vue 3 (Composition API) + Vue Router.
Structure minimale pour un site vitrine inspiré des captures fournies.

## Comment utiliser
1. Installer les dépendances: `npm install` (ou `pnpm`, `yarn`)
2. Lancer en dev: `npm run dev`
3. Construire: `npm run build`
4. Prévisualiser la build: `npm run preview`

## SEO & bonnes pratiques incluses
- Balises meta dynamiques (title, description) mises à jour via router + `useSeoMeta`.
- JSON-LD pour schema.org injecté par page.
- `robots.txt` et `sitemap.xml` fournis.
- Fichiers publics pour OpenGraph images (à remplacer).
- URLs propres et routes dédiées pour chaque page.
- Accessibilité: attributs alt sur les images et structure sémantique.

## À compléter après génération
- Remplacer les assets dans `/public` (logo, og-image.jpg).
- Ajouter contenu textuel riche, unique et localisé pour le SEO (450+ mots par page idéal).
- Ajouter hébergement avec HTTPS et idéalement prerender / SSR pour SEO maximal (ex: Vercel avec prerender ou Nuxt pour SSR).
