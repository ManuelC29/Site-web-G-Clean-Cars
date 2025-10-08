<template>
  <div class="container" style="padding:28px 0">
    <span class="titre red souligne">Prestation sur Devis</span>
    <h1 class="titre">Nettoyage Intérieur</h1>

    <section class="grid-3-2">
      <h3>G Clean Cars prend soin de l’intérieur de votre véhicule dans les moindres détails.</h3>
      <img src="/images/interieur_un.webp" alt="Nettoyage intérieur voiture" />
      <img src="/images/interieur_deux.webp" alt="Nettoyage intérieur voiture" />
      <img src="/images/interieur_trois.webp" alt="Nettoyage intérieur voiture" />
      <img src="/images/interieur_quatre.webp" alt="Nettoyage intérieur voiture" />
    </section>

    <section>
      <div class="text">
        <h3 class="titre-souligne">Retrouvez l’éclat et la fraîcheur de votre véhicule comme au premier jour grâce aux services intérieurs de G Clean Cars :</h3>
      </div>
      <ul style="text-align: left; font-size: 38px;">
        <li>Aspiration complète et minutieuse de l’habitacle</li>
        <li>Dépoussiérage soigné de toutes les surfaces</li>
        <li>Shampoing en profondeur des sièges tissu</li>
        <li>Nettoyage intensif des moquettes, tapis et garnitures textiles</li>
        <li>Désinfection intégrale de l’intérieur du véhicule (bactéries, germes, odeurs)</li>
        <li>Nettoyage intérieur des vitres et du pare-brise</li>
        <li>Nettoyage et protection des surfaces en cuir</li>
      </ul>
    </section>
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

<style scoped>
.grid-3-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 20px;
}
.grid-3-2 h3 {
  grid-row: span 2;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 55px;
  line-height: 200%;

}
.grid-3-2 img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

section{
  margin-left: 160px;
  margin-right: 160px;
}
.titre-souligne{
  text-align: left;
  text-decoration: underline;
  font-size: 38px;
  margin-top: 40px;
  margin-bottom: 20px;
  text-decoration-color: #139fca;
}
li{
  margin-bottom: 50px;
}
</style>
