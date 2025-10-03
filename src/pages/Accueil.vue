<template>
  <section>
    <div class="hero">
      <h1>Offrez une seconde jeunesse à votre véhicule</h1>
      <h2>grâce à l’expertise de G Clean Cars</h2>
      <div class="titre">
        <img src="/images/logo.png" alt="G Clean Cars" />
      </div>
    </div>

    <div class="container">

      <section class="grid">
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
        <img src="/images/polissage.webp" alt="Polissage voiture"/>
      </section>
      
      <section class="grid">
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

      <section class="grid">
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

      <section class="grid">
        <img class="trio" src="/images/renovation_optique_avant.webp" alt=""></img>
        <img class="trio" src="/images/renovation_optique_apres.webp" alt=""></img>
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

      <section class="grid"> 
        <article class="card">
          <div class="text">
            <h3>Traitement des cuirs</h3>
            <p>Le nettoyage et le soin du cuir est essentiel pour une protection maximale</p>
          </div>
          <div class="btn">
            <RouterLink to="/contact" class="btn-blue-card">Contact</RouterLink>
          </div>
        </article>
        <img class="trio" src="/images/fauteuil_abime.webp" alt="">
        <img src="/images/fauteuil_restaure.webp" alt="">
      </section>

      <section class="griddy"> 
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

      <section class="grid-ext"> 
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
  width: 85% !important;
}


.btn-blue-card {
  display: inline-block;
  font-weight: 600;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #0e7d9e;   /* bleu Bootstrap */
  border: 1px solid #0e7d9e;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.375rem; /* arrondi */
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.btn-blue-card:hover {
  background-color: #066f8f;
  border-color: #07799c;
}

.btn-blue-card:active {
  background-color: #066f8f;
  border-color: #07799c;
}

.btn-blue-card:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(13,110,253,0.5);
}
.btn{
  justify-items: end;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.trio{
  width: 33%
}

.grid {
  height: 50vh;
}
section.griddy {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colonnes : gauche images, droite texte */
  gap: 2rem;
  align-items: center;
  padding: 2rem;
}
.quatre {
  display: flex;
  flex-wrap: wrap;
}

.quatre img {
  width: 50%;   /* 2 images par ligne */
  height: auto;
  object-fit: cover;
}
.griddy {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;            
}

/* SECTION EXTÉRIEUR */
section.grid-ext {
  display: flex;
  flex-direction: column; /* Article au-dessus, images en dessous */
  gap: 2rem;
  width: 100%;
}
/* Article en haut sur toute la largeur */
section.grid-ext .card {
  width: 100%;
  padding: 2rem;
  color: white;
  box-sizing: border-box;
}
/* Grille des 6 images en dessous */
section.grid-ext .six {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  grid-template-rows: repeat(2, 1fr);    /* 2 lignes */
  gap: 0.5rem;
  width: 100%;
  height: auto; /* la grille s’adapte */
}
section.grid-ext .six img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* couvre bien chaque case */
  border-radius: 6px;
}
h3, p{
  color:black
}

</style>

