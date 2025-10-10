<template>
    <div class="container">
      <h1>À propos</h1>
      <section class="grid-2-3">
        <div class="contact">
          <h5><FontAwesomeIcon :icon="faSquareFacebook" /> G Clean Cars</h5>
          <h5><FontAwesomeIcon :icon="faInstagram" /> g_clean_cars</h5>
          <h5><FontAwesomeIcon :icon="faEnvelope" /> gcleancarshotmail.com</h5>
          <h5>📞 06 98 45 92 82</h5>
        </div>
      <div>
        <svg width="20" height="20" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:4px;" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5A2.5 2.5 0 0 1 9.5 9 2.5 2.5 0 0 1 12 6.5 2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5Z"/></svg>
        <h5>Adresse postale</h5>
        <h5>G Clean Cars</h5>
        <h5>Kernevez Vihan</h5>
        <h5>29510 LANGOLEN</h5>
      </div>
      </section>
    </div>
    <Footer />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name:'Contact',
  components:{ FontAwesomeIcon, Footer },
  setup(){
    useSeoMeta({
      title:'Contact — G Clean Cars',
      description:'Contactez G Clean Cars — prise de rendez-vous et informations.',
      url: window.location.href,
      schema: {
        "@context":"https://schema.org",
        "@type":"LocalBusiness",
        "name":"G Clean Cars",
        "telephone":"06 98 45 92 82"
      }
    })
    const form = reactive({ name:'', email:'', message:'' })

    return { form, faSquareFacebook, faInstagram, faEnvelope, faLocationDot, Footer }
  }
})
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 20px;
}
.container{
  min-height: 100vh;
  color: white;
}
.grid-2-3{
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px;
}
.grid-2-3 h5{
  margin: 10px 0;
  font-size: 20px;
}

</style>
