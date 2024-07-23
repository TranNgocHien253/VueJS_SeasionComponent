<script setup>
import { RouterView } from 'vue-router'
import TrandingHeader from './components/HeaderComponents/TrandingHeader.vue'
import LogoHEader from './components/HeaderComponents/LogoHeader.vue'
import DashboardHeader from './components/HeaderComponents/DashboardHeader.vue'
import ContainFooter from './components/FooterComponets/ContainFooter.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <TrandingHeader />
      <LogoHEader />
      <DashboardHeader />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <ContainFooter />
  </footer>
</template>

<style scoped>

</style>
