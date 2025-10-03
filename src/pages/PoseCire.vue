<template>
  <div class="container" style="padding:28px 0">
    <h1>Pose Cire</h1>
    <div style="display:flex;gap:24px;flex-wrap:wrap;margin-top:18px">
      <div style="flex:1;min-width:280px">
        <img src="/service-placeholder.jpg" alt="Pose Cire" style="width:100%;border-radius:8px" />
      </div>
      <div style="flex:2;min-width:260px">
        <p>Application de cire professionnelle pour protéger la peinture.</p>
        <p>Contenu descriptif optimisé pour le SEO : mots-clés, avantages, détails techniques, témoignages, FAQ.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'

export default defineComponent({
  name:'Pose Cire — G Clean Cars',
  setup(){
    useSeoMeta({
      title: 'Pose Cire — G Clean Cars',
      description: 'Application de cire professionnelle pour protéger la peinture.',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Pose Cire — G Clean Cars",
        "description":"Application de cire professionnelle pour protéger la peinture."
      }
    })
    return {}
  }
})
</script>
