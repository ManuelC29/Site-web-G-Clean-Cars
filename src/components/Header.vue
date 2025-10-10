<template>
  <header class="header container">
    <div style="display:flex;gap:12px;align-items:center">
          <button class="nav-toggle" @click="$emit('toggle-menu')">☰</button>
    </div>
    <div class="logo">
          <img src="/images/logo.png" alt="G Clean Cars"/>
    </div>
    <div class="title-right">
          <strong>G Clean Cars</strong>
          <div style="font-size:12px;color:var(--muted);">Detailing & remise à neuf</div>
    </div>  
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'Header' })
</script>

<style scoped>
.title-right{
  text-align:right;
}
.header{

  box-shadow: 0 2px 4px 5px rgba(0,0,0,.1);
}
</style>