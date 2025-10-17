<template>
  <div class="container" style="padding:28px 0">
    <span class="titre red souligne">Prestation sur Devis</span>
    <h1 class="titre">Pose Cire</h1>

    <section>
      <blockquote class="blocknote-black">
        <span style="font-style: italic;">Cire de protection</span>
        <br>
      </blockquote>
      <blockquote class="blocknote-black">
        <span>Idéale pour un effet brillant immédiat et un effet déperlant, la cire est une solution économique qui offre une belle profondeur à la peinture tout en facilitant l’entretien régulier.</span>
        <br>
      </blockquote>
      <img src="/images/pose_cire.webp" alt="Pose de cire"/>
    </section>

  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Pose Cire — G Clean Cars',
  components: {Footer},
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
