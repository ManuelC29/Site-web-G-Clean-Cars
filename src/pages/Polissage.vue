<template>
  <div class="container" style="padding:28px 0">
    <h1>Prestation sur Devis</h1>
    <h2>Polissage</h2>
    <div style="display:flex;gap:24px;flex-wrap:wrap;margin-top:18px">
      <div style="flex:1;min-width:280px">
        <img src="/service-placeholder.jpg" alt="Polissage" style="width:100%;border-radius:8px" />
      </div>
      <div style="flex:2;min-width:260px">
        <p>Polissage professionnel pour carrosserie — G Clean Cars</p>
        <p>Contenu descriptif optimisé pour le SEO : mots-clés, avantages, détails techniques, témoignages, FAQ.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'

export default defineComponent({
  name:'Polissage — G Clean Cars',
  setup(){
    useSeoMeta({
      title: 'Polissage — G Clean Cars',
      description: 'Polissage professionnel pour carrosserie — G Clean Cars',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Polissage — G Clean Cars",
        "description":"Polissage professionnel pour carrosserie — G Clean Cars"
      }
    })
    return {}
  }
})
</script>
