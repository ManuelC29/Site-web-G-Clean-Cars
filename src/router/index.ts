import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '@/pages/Accueil.vue'
import Polissage from '@/pages/Polissage.vue'
import Lustrage from '@/pages/Lustrage.vue'
import TraitementCeramique from '@/pages/TraitementCeramique.vue'
import PoseCire from '@/pages/PoseCire.vue'
import Exterieur from '@/pages/Exterieur.vue'
import Interieur from '@/pages/Interieur.vue'
import Contact from '@/pages/Contact.vue'
import Boutique from '@/pages/Boutique.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil, meta:{title:'G Clean Cars — Accueil', description:'Offrez une seconde jeunesse à votre véhicule.'}},
  { path: '/polissage', name: 'Polissage', component: Polissage, meta:{title:'Polissage — G Clean Cars', description:'Polissage professionnel pour carrosserie.'}},
  { path: '/lustrage', name: 'Lustrage', component: Lustrage, meta:{title:'Lustrage — G Clean Cars', description:'Lustrage pour finition brillante.'}},
  { path: '/traitement-ceramique', name: 'TraitementCeramique', component: TraitementCeramique, meta:{title:'Traitement Céramique — G Clean Cars', description:'Protection céramique longue durée.'}},
  { path: '/pose-cire', name: 'PoseCire', component: PoseCire, meta:{title:'Pose Cire — G Clean Cars', description:'Pose de cire protectrice.'}},
  { path: '/exterieur', name: 'Exterieur', component: Exterieur, meta:{title:'Extérieur — G Clean Cars', description:'Traitements extérieurs.'}},
  { path: '/interieur', name: 'Interieur', component: Interieur, meta:{title:'Intérieur — G Clean Cars', description:'Nettoyage et rénovation intérieur.'}},
  { path: '/contact', name: 'Contact', component: Contact, meta:{title:'Contact — G Clean Cars', description:'Contactez G Clean Cars.'}},
  { path: '/boutique', name: 'Boutique', component: Boutique, meta:{title:'Boutique — G Clean Cars', description:'Produits et accessoires.'}},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

import type { RouteLocationNormalized } from 'vue-router'

router.afterEach((to: RouteLocationNormalized) => {
  document.title = (to.meta.title as string) || 'G Clean Cars'
  const description = (to.meta.description as string) || ''
  let d = document.querySelector('meta[name="description"]')
  if (!d) {
    d = document.createElement('meta')
    d.setAttribute('name','description')
    document.head.appendChild(d)
  }
  d.setAttribute('content', description)
})

export default router
