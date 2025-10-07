<template>
  <footer class="footer">
    
      <h2>Pour s'informer ou contacter : </h2>
      <div class="container">
        <div class="footer-gauche">
          <div class="row">
            <FontAwesomeIcon :icon="faSquareFacebook" style="font-size: 24px;"/>
            <h3>
              <a href="https://www.facebook.com/p/G-Clean-Cars-61573463407073/">
                G Clean Cars
              </a>
            </h3>
          </div>
          <div class="row">
            <FontAwesomeIcon :icon="faInstagram" /> 
            <h3>
              <a href="https://www.instagram.com/g_clean_cars/" target="_blank" rel="noopener">
                g_clean_cars
              </a>
            </h3>
          </div>
          <div class="row">
            <FontAwesomeIcon :icon="faEnvelope" />
            <h3>
              <a href="mailto:gcleancars@hotmail.com" target="_blank" rel="noopener">
                gcleancars@hotmail.com
              </a>
            </h3>
          </div>
          <div class="row">
            <FontAwesomeIcon :icon="faPhone" />
            <h3>
              06 98 45 92 82
            </h3>
          </div>
          
        </div>
        <div class="footer-droite">
          <div class="row droite">
            <h3>Adresse postale : </h3> 
          </div>
          <div class="row droite gap-10">
            <h3>G Clean Cars</h3>
          </div>
          <div class="row droite">
            <h3>Kernevez Vihan</h3>
          </div>
          <div class="row droite">
            <h3>29510 LANGOLEN</h3>
          </div>
        </div>
      </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'



export default defineComponent({
  name:'Footer',
  components: { FontAwesomeIcon },
  data(){ return { year: new Date().getFullYear(), faSquareFacebook, faInstagram, faEnvelope, faPhone } }
})
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  text-align: left;
}
h2{
  margin-bottom: 20px;
  font-size: 42px;
  padding-left: 40px;
}
h3{
  font-size: 20px;
  font-family: "Open Sans", "Odoo Unicode Support Noto", sans-serif;
}
.row{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.footer-gauche{
  margin-left: 10%;
}
.footer-droite{
  margin-right: 10%;
  text-align: right;
}
.droite{
  justify-content: flex-end;
}
.footer{
  background-color: #021014;
  padding: 5px 0;
  margin-top: 40px;
}
</style>
