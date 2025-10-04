<template>
  <div class="container" style="padding:28px 0">
    <h1>Boutique</h1>

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

<style scoped>
h1 {
  text-align: center;
}
</style>