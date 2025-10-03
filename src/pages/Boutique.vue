<template>
  <div class="container" style="padding:28px 0">
    <h1>Boutique</h1>
    <div style="display:flex;gap:24px;flex-wrap:wrap;margin-top:18px">
      <div style="flex:1;min-width:280px">
        <img src="/service-placeholder.jpg" alt="Boutique" style="width:100%;border-radius:8px" />
      </div>
      <div style="flex:2;min-width:260px">
        <p>Produits et accessoires sélectionnés par G Clean Cars.</p>
        <p>Contenu descriptif optimisé pour le SEO : mots-clés, avantages, détails techniques, témoignages, FAQ.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'

export default defineComponent({
  name:'Boutique — G Clean Cars',
  setup(){
    useSeoMeta({
      title: 'Boutique — G Clean Cars',
      description: 'Produits et accessoires sélectionnés par G Clean Cars.',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Boutique — G Clean Cars",
        "description":"Produits et accessoires sélectionnés par G Clean Cars."
      }
    })
    return {}
  }
})
</script>
