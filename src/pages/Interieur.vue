<template>
  <div class="container" style="padding:28px 0">
    <h1>Intérieur</h1>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'

export default defineComponent({
  name:'Intérieur — G Clean Cars',
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
    return {}
  }
})
</script>
