<template>
  <div class="container" style="padding:28px 0">
    <h1>Extérieur</h1>
    <div style="display:flex;gap:24px;flex-wrap:wrap;margin-top:18px">
      <div style="flex:1;min-width:280px">
        <img src="/service-placeholder.jpg" alt="Extérieur" style="width:100%;border-radius:8px" />
      </div>
      <div style="flex:2;min-width:260px">
        <p>Services extérieurs : lavage, dégraissage, rénovation.</p>
        <p>Contenu descriptif optimisé pour le SEO : mots-clés, avantages, détails techniques, témoignages, FAQ.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'

export default defineComponent({
  name:'Extérieur — G Clean Cars',
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
    return {}
  }
})
</script>
