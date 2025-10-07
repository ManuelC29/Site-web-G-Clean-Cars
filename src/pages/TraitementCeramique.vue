<template>
  <div class="container" style="padding:28px 0">
    <span class="titre red souligne">Prestation sur Devis</span>
    <h1 class="titre">Traitement Céramique</h1>

    <blockquote class="blocknote-black">
      <span>Représentant la solution de protection la plus durable, le traitement céramique forme une barrière résistante contre les UV, produits chimiques et micro-rayures, tout en offrant une brillance profonde et intense.</span>
      <br>
    </blockquote>

    <img src="/images/traitement_ceramique.webp" alt="Traitement céramique voiture"/>
  </div>
  
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Traitement Céramique — G Clean Cars',
  components: {Footer},
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
    return {Footer}
  }
})
</script>


<style scoped>
.blocknote-black{
  padding: 20px 40px 20px;
  background-color: #000000;
  color: #FFFFFF;
  border-left:7px solid #ffffff ;
  text-align: left;

}
.blocknote-black span{
  font-family: "Open Sans", "Odoo Unicode Support Noto", sans-serif;
  font-size: 35px;
  font-style: italic;
}
img{
  width: 60%;
  margin-top: 20px;
}
</style>