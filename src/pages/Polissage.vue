<template>
  <div class="container" style="padding:28px 0">
    <span class="titre souligne red">Prestation sur Devis</span>
    <h2 class="titre">Polissage</h2>
    <section class="section-blocknote">
      <blockquote>
        <span>Le polissage est une technique de rénovation esthétique qui vise à restaurer et à améliorer l’apparence de la peinture de votre véhicule. Ce procédé permet d’éliminer les micro-rayures, l’oxydation et diverses imperfections présentes à la surface de la carrosserie, redonnant ainsi à la peinture tout son éclat d’origine.</span>
        <br>
      </blockquote>
    </section>


       <section class="grid">
        <article class="card-black">
          <div class="text">
            <h3>Étape 1 : Préparation de la surface</h3>
            <p>Avant toute opération de polissage, un detailing extérieur complet est effectué. Cette étape vise à retirer toute saleté et tous les contaminants pouvant provoquer des rayures supplémentaires lors du travail de polissage.</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>
        </article>
        <img src="/images/polissage.webp" alt="Polissage voiture"/>
      </section>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'

export default defineComponent({
  name:'Polissage — G Clean Cars',
  setup(){
    useSeoMeta({
      title: 'Polissage — G Clean Cars',
      description: 'Polissage professionnel pour carrosserie — G Clean Cars',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"Polissage — G Clean Cars",
        "description":"Polissage professionnel pour carrosserie — G Clean Cars"
      }
    })
    return {}
  }
})
</script>

<style scoped>
.souligne{
  text-decoration: underline;
}
.red {
  display: inline-block;
  padding: 5px 16px;
  background-color: rgb(90, 7, 7);
  color: #fff;
  margin: 0 auto;
}
.titre{
  font-family: "Montserrat", "Odoo Unicode Support Noto", sans-serif;
  text-align: center;
  margin-top: 10px;
  font-size: 56px;
}
blockquote{
  padding: 20px 40px 20px;
  background-color: #0e7d9e;
  color: #FFFFFF;
  border-left:7px solid #ffffff ;
  text-align: center;
}
blockquote span{
  font-family: "Open Sans", "Odoo Unicode Support Noto", sans-serif;
  font-size: 22px;
  font-style: italic;
}
.section-blocknote{
  padding: 40px;
  background-color: #0e7d9e;
}

.card-black{
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}


</style>