<template>
<div class="container"></div>
  <section>
    <div class="hero">
      <h1>Offrez une seconde jeunesse à votre véhicule</h1>
      <h2>grâce à l’expertise de G Clean Cars</h2>
      <div class="titre">
        <img src="/images/logo.png" alt="G Clean Cars" />
      </div>
    </div>

    <div class="container">

      <section class="grid-deux">
        <img src="/images/polissage.webp" alt="Polissage voiture"/>
        <article class="card">
          <div class="text">
            <h3>Polissage</h3>
            <p>Le polissage de la carrosserie est une opération qui consiste à rendre la peinture d’un véhicule plus lisse et brillante en éliminant les petites rayures et défauts de surface.</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>
        </article>
      </section>
      
      <section class="grid-trois">
        <article class="card">
          <div class="text">
            <h3>Lustrage</h3>
            <p>Le lustrage est une opération qui vise à accentuer la brillance de la carrosserie après le polissage, en nourrissant la peinture et en lui donnant un aspect éclatant.</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>
        </article>
        <img src="/images/lustrage.webp" alt="Lustrage voiture"/>
        <article class="card">
          <div class="text">
            <h3>Traitement Céramique</h3>
            <p>Le traitement céramique sur carrosserie est une protection durable appliquée sur la peinture du véhicule pour la rendre plus résistante aux agressions extérieures, tout en renforçant sa brillance et facilitant son entretien.</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>
        </article>
      </section>

      <section class="grid-deux">
        <img src="/images/cire_moto.webp" alt=""></img>
        <article class="card">
          <div class="text">
            <h3>Pose d'une cire</h3>
            <p>La pose de cire sur carrosserie est une opération qui consiste à appliquer une couche protectrice pour améliorer la brillance de la peinture et la protéger temporairement contre les salissures, l’eau et les UV.</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-dark">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-dark">Contact</RouterLink>
          </div>
        </article>
      </section>

      <section class="grid-trois">
        <img class="trio" src="/images/renovation_optique_avant.webp" alt="renovation optique avant"></img>
        <img class="trio" src="/images/renovation_optique_apres.webp" alt="renovation optique arrière"></img>
        <article class="card">
          <div class="text">
            <h3>Rénovation d'optique de phare</h3>
            <p>La rénovation d’optique de phare consiste à restaurer la transparence des phares jaunis ou ternis afin d’améliorer l’esthétique du véhicule et l’efficacité de l’éclairage</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-dark">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-dark">Contact</RouterLink>
          </div>
        </article>
      </section>

      <section class="grid-trois"> 
        <article class="card">
          <div class="text">
            <h3>Traitement des cuirs</h3>
            <p>Le nettoyage et le soin du cuir est essentiel pour une protection maximale</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>
        </article>
        <img class="trio" src="/images/fauteuil_abime.webp" alt="fauteuil abimé"></img>
        <img src="/images/fauteuil_restaure.webp" alt="fauteuil restauré"></img>
      </section>

      <section class="grid-trio"> 
        <div class="quatre">
          <img src="/images/interieur_un.webp" alt="intérieur voiture"/>
          <img src="/images/interieur_deux.webp" alt="intérieur voiture"/>
          <img src="/images/interieur_trois.webp" alt="intérieur voiture"/>
          <img src="/images/interieur_quatre.webp" alt="interieur voiture"/>
        </div>
        <article class="card">
          <div class="text">
            <h3>Nettoyage Intérieur</h3>
            <p>Pour un nettoyage en profondeur de l’intérieur de votre véhicule, faites confiance à G Clean Cars pour chouchouter vos habitacles.</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>        
        </article>
      </section>

      <section class="grid-deux-ligne"> 
        <article class="card">
          <div class="text">
            <h3>Nettoyage Extérieur</h3>
            <p>Pour un nettoyage en profondeur de l’intérieur de votre véhicule, faites confiance à G Clean Cars pour chouchouter vos habitacles.</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">En Savoir plus</RouterLink>
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>        
        </article>
        <div class="six">
          <img src="/images/exterieur_un.webp" alt="intérieur voiture"/>
          <img src="/images/exterieur_deux.webp" alt="intérieur voiture"/>
          <img src="/images/exterieur_trois.webp" alt="intérieur voiture"/>
          <img src="/images/exterieur_quatre.webp" alt="interieur voiture"/>
          <img src="/images/exterieur_quatre.webp" alt="interieur voiture"/>
          <img src="/images/exterieur_quatre.webp" alt="interieur voiture"/>
        </div>
      </section>
    </div>
  </section>
    <Footer />


</template>


<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Accueil',
  components: {Footer},
  setup(){
    useSeoMeta({
      title: 'G Clean Cars — Accueil',
      description: 'Offrez une seconde jeunesse à votre véhicule grâce à l’expertise de G Clean Cars.',
      image: '/images/logo.png',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"WebPage",
        "name":"G Clean Cars - Accueil"
      }
    })
    return {}
  }
})
</script>
<style scoped>
h2 {
font-size: 56px;
line-height: 0;
}

.titre img{
  width: 95% !important;
}

.quatre {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;            
  grid-gap: 20px;
  flex-wrap: wrap;
}

.quatre img {
  width: 100%;   /* 2 images par ligne */
  height: auto;
  object-fit: cover;
}
.grid-trio {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;            
  grid-gap: 20px;
  padding: 20px;

}


h3, p{
  color:black
}

</style>

