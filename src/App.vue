<template>
  <div>
    <Header @toggle-menu="openMenu = !openMenu"/>
    <div :class="['menu-drawer', {open: openMenu}]">
      <button @click="openMenu=false" style="float:right">✕</button>
      <nav>
        <ul class="menu-list">
          <li></li>
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/polissage">Polissage</RouterLink></li>
          <li><RouterLink to="/lustrage">Lustrage</RouterLink></li>
          <li><RouterLink to="/traitement-ceramique">Traitement Céramique</RouterLink></li>
          <li><RouterLink to="/pose-cire">Pose Cire</RouterLink></li>
          <li><RouterLink to="/exterieur">Extérieur</RouterLink></li>
          <li><RouterLink to="/interieur">Intérieur</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/boutique">Boutique</RouterLink></li>
        </ul>
      </nav>
      <div style="position:absolute;bottom:20px;left:18px;font-size:14px;color:#444">
        <div class="coordonnee">📞 06 98 45 92 82</div>
        <div class="coordonnee">✉ gcleancars@hotmail.com</div>
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
</style>