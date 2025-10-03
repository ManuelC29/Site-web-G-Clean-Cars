<template>
  <footer class="footer">
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
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'



export default defineComponent({
  name:'Footer',
  components: { FontAwesomeIcon },
  data(){ return { year: new Date().getFullYear(), faSquareFacebook, faInstagram, faEnvelope } }
})
</script>

<style scoped>
.container{
  display:flex;
  justify-content:space-between;
  padding:20px 0;
  margin-left: 20px;
  text-align: left;
}
</style>
