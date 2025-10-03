<template>
<h1>Contact</h1>

    <div class="container">
      <div>
        <h5>Pour s'informer ou contacter : </h5>
        <h5><FontAwesomeIcon :icon="faSquareFacebook" /> G Clean Cars</h5>
        <h5><FontAwesomeIcon :icon="faInstagram" /> g_clean_cars</h5>
        <h5><FontAwesomeIcon :icon="faEnvelope" /> gcleancarshotmail.com</h5>
        <h5>06 98 45 92 82</h5>
      </div>
      <div>
        <h5>Adresse postale</h5>
        <h5>G Clean Cars</h5>
        <h5>Kernevez Vihan</h5>
        <h5>29510 LANGOLEN</h5>
      </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import useSeoMeta from '@/seo/useSeoMeta'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  name:'Contact',
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

    return { form, faSquareFacebook, faInstagram, faEnvelope, faLocationDot}
  }
})
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 20px;
}
body{
  background-color: white;
}
</style>
