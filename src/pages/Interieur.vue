<template>
  <div class="container" style="padding:28px 0">
    <span class="titre red souligne">Prestation sur Devis</span>
    <h1 class="titre">Nettoyage Intérieur</h1>

  </div>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Intérieur — G Clean Cars',
  components: {Footer},
  setup(){
    useSeoMeta({
      title: 'Intérieur — G Clean Cars',
      description: 'Nettoyage et rénovation intérieure : tissus, cuirs et plastiques.',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Intérieur — G Clean Cars",
        "description":"Nettoyage et rénovation intérieure : tissus, cuirs et plastiques."
      }
    })
    return {Footer}
  }
})
</script>
