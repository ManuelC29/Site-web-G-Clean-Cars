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

    <section class="grid-deux">
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
      <img src="/images/polissage_un.webp" alt="Polissage voiture"/>
    </section>

    <section class="grid-deux">
      <img src="/images/polissage_deux.webp" alt="Polissage voiture"/>
      <article class="card">     
        <div class="text">
          <h3>Étape 2 : Application du composé abrasif</h3>
          <p>Une fois la surface propre, un composé abrasif est appliqué sur la carrosserie. Ce produit contient de fines particules qui permettent de supprimer une couche superficielle du vernis, corrigeant ainsi les défauts visibles.</p>
        </div>
        <div class="btn">
          <RouterLink to="/contact" class="btn-blue-card">En Savoir plus</RouterLink>
          <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
        </div>
      </article>  
    </section>

    <section class="grid-deux">
      <div>
        <img src="/images/polissage_trois.webp" alt="Polissage voiture"/>
        <article class="card">     
          <div class="text">
            <h3>Étape 3 : Polissage mécanique</h3>
            <p>Les mouvements précis effectués avec une polisseuse et des tampons spécifiques assurent un polissage régulier et une finition impeccable.</p>
          </div>
        </article>  
      </div>
      <div>
        <img src="/images/polissage_quatre.webp" alt="Polissage voiture"/>
        <article class="card">     
          <div class="text">
           <h3>Étape 4 : Finition et protection (optionnelle)</h3>
           <p>Après le polissage, une couche de protection peut être appliquée comme une cire, un scellant ou un traitement céramique. Cette finition protège la peinture contre les agressions extérieures (UV, pollution…) tout en accentuant la brillance du véhicule.</p>
          </div>
        </article>  
      </div>
    </section>

    <section class="section-blocknote-black">
      <blockquote class="blocknote-black">
        <span>Le polissage est bien plus qu’un simple embellissement. Il s’agit d’une intervention essentielle pour entretenir et prolonger la durée de vie de la peinture de votre véhicule, tout en lui redonnant un aspect neuf, brillant et soigné.</span>
        <br>
      </blockquote>
    </section>

  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Polissage — G Clean Cars',
  components: {Footer},
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
    return {Footer}
  }
})
</script>

<style scoped>


blockquote{
  padding: 20px 40px 20px;
  background-color: #0e7d9e;
  color: #FFFFFF;
  border-left:7px solid #ffffff ;
  text-align: center;
}
.blocknote-black{
  padding: 20px 40px 20px;
  background-color: #000000;
  color: #FFFFFF;
  border-left:7px solid #ffffff ;
  text-align: left;

}
.blocknote-black span{
  font-family: "Open Sans", "Odoo Unicode Support Noto", sans-serif;
  font-size: 38px;
  font-style: italic;
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

.section-blocknote-black{
  padding: 40px;
  background-color: #000;

}

.card-black{
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}



</style>