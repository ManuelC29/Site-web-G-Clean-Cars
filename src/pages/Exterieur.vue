<template>
  <div class="container" style="padding:28px 0">
    <span class="titre red souligne">Prestation sur Devis</span>
    <h1 class="titre">Nettoyage Extérieur</h1>
    <img src="/images/ext_un.webp" alt="Nettoyage extérieur voiture"/>
  </div>

  <section class="grid-deux-ligne">
    <img src="/images/ext_un.webp" alt="Nettoyage extérieur voiture"/>
    <img src="/images/ext_un.webp" alt="Nettoyage extérieur voiture"/>
    <article class="card-black">
      <div class="text">
        <span>Le lavage extérieur professionnel inclut un dégraissage minutieux de la carrosserie, des jantes et des pneus, suivi d’un séchage soigneux pour éviter les traces d’eau.</span>
      </div>
    </article>
  </section>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Extérieur — G Clean Cars',
  components: {Footer},
  setup(){
    useSeoMeta({
      title: 'Extérieur — G Clean Cars',
      description: 'Services extérieurs : lavage, dégraissage, rénovation.',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Extérieur — G Clean Cars",
        "description":"Services extérieurs : lavage, dégraissage, rénovation."
      }
    })
    return {Footer}
  }
})
</script>

<style scoped>
img{
  width: 60%;
  margin-top: 20px;
}
</style>