<template>
  <div class="container" style="padding:28px 0">
    <span class="titre red souligne">Prestation sur Devis</span>
    <h1 class="titre">Nettoyage Extérieur</h1>
    <img src="/images/ext_un.webp" alt="Nettoyage extérieur voiture" />
  </div>

  <section class="grid-deux-ligne">
    <article class="card card-deux-portion">
      <div class="text">
        <h3>Dégoudronnage</h3>
        <p>Le dégoudronnage redonne à votre véhicule tout son éclat en éliminant efficacement les traces de goudron, de
          sève et autres dépôts incrustés.</p>
      </div>
    </article>
    <img src="/images/degoudronage_un.webp" alt="Nettoyage extérieur voiture" />
    <img src="/images/degoudronage_deux.webp" alt="Nettoyage extérieur voiture" />
  </section>

  <section class="grid-deux">
    <img src="/images/decontamination.webp" alt="Nettoyage extérieur voiture" />
    <article class="card">
      <div class="text">
        <h3>Décontamination Ferreuse</h3>
        <p>La décontamination ferreuse est un soin professionnel qui élimine les particules de fer incrustées sur la
          carrosserie et les jantes. Ces dépôts, principalement issus de la poussière des plaquettes de frein,
          ternissent l’éclat de votre véhicule.</p>
      </div>
    </article>
  </section>

  <h3 class="h3-tout-seul">Nettoyage Extérieur étapes par étapes</h3>
  <section class="grid-4-1">
    <article class="card">
      <img src="/images/ext_etape_un.webp" alt="Nettoyage extérieur voiture" />
      <div class="text">
        <h3>Nettoyage des jantes et pneus</h3>
      </div>
    </article>

    <article class="card">
      <img src="/images/ext_etape_deux.webp" alt="Nettoyage extérieur voiture" />
      <div class="text">
        <h3>Prélavage de la carrosserie</h3>
      </div>
    </article>
    
    <article class="card">
      <img src="/images/ext_etape_trois.webp" alt="Nettoyage extérieur voiture" />
      <div class="text">
        <h3>Nettoyage de la carrosserie</h3>
      </div>
    </article>

    <article class="card">
      <img src="/images/ext_etape_quatre.webp" alt="Nettoyage extérieur voiture" />
      <div class="text">
        <h3>Séchage de la carrosserie</h3>
      </div>
    </article>
  </section>

  <section class="grid-3-1">
    <article class="card">
      <div class="text">
        <h3>Dressing des pneus</h3>
        <h3></h3>
      </div>
    </article>
    <img src="/images/dressing_pneu_un.webp" alt="Nettoyage extérieur voiture" />
    <img src="/images/dressing_pneu_deux.webp" alt="Nettoyage extérieur voiture" />

  </section>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'Extérieur — G Clean Cars',
  components: { Footer },
  setup() {
    useSeoMeta({
      title: 'Extérieur — G Clean Cars',
      description: 'Services extérieurs : lavage, dégraissage, rénovation.',
      image: '/og-image.jpg',
      url: window.location.href,
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Extérieur — G Clean Cars",
        "description": "Services extérieurs : lavage, dégraissage, rénovation."
      }
    })
    return { Footer }
  }
})
</script>

<style scoped>
img {
  width: 60%;
  margin-top: 20px;
}

.card-deux-portion {
  grid-column: 1/2 span;
  justify-content: center;
  font-size: 36px;
}

.grid-deux-ligne {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
}

.grid-deux-ligne img {
  width: 100%;
  object-fit: cover;
  display: block;
}

section img {
  width: 80%;
  height: auto;
  object-fit: cover;
}

.grid-4-1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
}
.grid-4-1 .card{
  background-color: #0e7d9e;
  color : white;
} 
.grid-4-1 article img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 0px;
  border-radius: 0px;
}
.grid-4-1 article{
  text-align: center;
  margin: 0px;
  padding: 0px;
}
.grid-4-1 article h3{
  font-size: 20px;
}

.grid-3-1 {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
}
.grid-3-1 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 0px;
}
.grid-3-1 .card{
  background-color: #0e7d9e;
  color : white;
}
.grid-3-1 .card .text{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
} 
section{
  margin-left: 160px;
  margin-right: 160px;
}

.h3-tout-seul{
   margin-left: 160px;
  font-size: 38px;
  margin-top: 40px;
  margin-bottom: 20px;
}

</style>