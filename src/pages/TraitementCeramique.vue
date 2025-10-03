<template>
  <div class="container" style="padding:28px 0">
    <h1>Traitement Céramique</h1>
    <div style="display:flex;gap:24px;flex-wrap:wrap;margin-top:18px">
      <div style="flex:1;min-width:280px">
        <img src="/service-placeholder.jpg" alt="Traitement Céramique" style="width:100%;border-radius:8px" />
      </div>
      <div style="flex:2;min-width:260px">
        <p>Protection céramique longue durée pour carrosserie.</p>
        <p>Contenu descriptif optimisé pour le SEO : mots-clés, avantages, détails techniques, témoignages, FAQ.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'

export default defineComponent({
  name:'Traitement Céramique — G Clean Cars',
  setup(){
    useSeoMeta({
      title: 'Traitement Céramique — G Clean Cars',
      description: 'Protection céramique longue durée pour carrosserie.',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Traitement Céramique — G Clean Cars",
        "description":"Protection céramique longue durée pour carrosserie."
      }
    })
    return {}
  }
})
</script>
