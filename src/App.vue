<template>
  <div>
    <Header @toggle-menu="openMenu = !openMenu"/>
    <div :class="['menu-drawer', {open: openMenu}]">
      <button @click="openMenu=false" style="float:right">✕</button>
      <nav>
        <ul class="menu-list">
          <li></li>
          <li @click="openMenu=false"><RouterLink to="/">Accueil</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/polissage">Polissage</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/lustrage">Lustrage</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/traitement-ceramique">Traitement Céramique</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/pose-cire">Pose Cire</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/exterieur">Extérieur</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/interieur">Intérieur</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/contact">Contact</RouterLink></li>
          <li @click="openMenu=false"><RouterLink to="/boutique">Boutique</RouterLink></li>
        </ul>
      </nav>
      <div style="position:absolute;bottom:20px;left:18px;font-size:14px;color:#444">
        <div>
            <a class="coordonnee" href="mailto:gcleancars@hotmail.com">
              ✉ gcleancars@hotmail.com
            </a>
        </div>
        <div class="coordonnee">
          <svg width="20" height="22" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:4px;"><path fill="blue" d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.1V12h2.1V9.8c0-2.07 1.23-3.22 3.12-3.22.9 0 1.84.16 1.84.16v2.02h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.88h-1.93v6.99A10 10 0 0 0 22 12"/></svg>
          <a class="coordonnee" href="https://www.facebook.com/p/G-Clean-Cars-61573463407073/" target="_blank" rel="noopener noreferrer">
            G Clean Cars
          </a>
        </div>
        <div class="coordonnee">
          <svg width="20" height="20" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:4px;"><path fill="black" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.13-.38a1.13 1.13 0 1 1 0 2.25a1.13 1.13 0 0 1 0-2.25z"/></svg>
          <a class="coordonnee" href="https://www.instagram.com/g_clean_cars/" target="_blank" rel="noopener noreferrer">
            g_clean_cars
          </a>
        </div>
        <br/>
        <div class="coordonnee" >📞 06 98 45 92 82</div>
        <br/>
        <RouterLink to="/contact" class="btn-blue">Contact</RouterLink>
      </div>
   
    </div>

    <main>
      <RouterView />
    </main>


  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from '@/components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: { Header, RouterLink, RouterView },
  setup(){
    const openMenu = ref(false)
    return { openMenu }
  }
})
</script>

<style scoped>
.contact{
  background: rgb(95, 95, 255);
  color: white;
  width: 100%;
  height: auto;
  border-radius: 5px;
  border-color: #FFF;
  margin: 15px;
}
.coordonnee{
  margin: 5px 0;
  font-size: 20px;
}
.coordonnee:hover{
  color: rgb(1, 108, 170);
}
</style>