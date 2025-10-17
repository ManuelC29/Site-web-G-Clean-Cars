<template>
  <div class="container">
    <span class="titre red souligne">Prestation sur Devis</span>
    <h1 class="titre">Lustrage</h1>
  </div>
  <section class="grid-trois">
    <img src="/images/lustrage_un.webp" alt="Polissage voiture"/>
    <img src="/images/lustrage_deux.webp" alt="Polissage voiture"/>
          <article class="card-black">
        <div class="text">
          <span>La première étape consiste à réaliser un detailing extérieur approfondi, afin de débarrasser la carrosserie de toutes les impuretés susceptibles d’endommager la peinture pendant le polissage.</span>
        </div>
      </article>
  </section>

  <blockquote class="blocknote-black">
    <span>Le polissage est bien plus qu’un simple embellissement. Il s’agit d’une intervention essentielle pour entretenir et prolonger la durée de vie de la peinture de votre véhicule, tout en lui redonnant un aspect neuf, brillant et soigné.</span>
    <br>
  </blockquote>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Lustrage — G Clean Cars',
  components: {Footer},
  setup(){
    useSeoMeta({
      title: 'Lustrage — G Clean Cars',
      description: 'Lustrage pour une brillance parfaite — G Clean Cars',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Lustrage — G Clean Cars",
        "description":"Lustrage pour une brillance parfaite — G Clean Cars"
      }
    })
    return {Footer}
  }
})
</script>

<style scoped>
.text{
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 30px;
}

</style>
