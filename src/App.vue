<script setup>
import { RouterView } from 'vue-router'
import TrandingHeader from './components/HomeComponent/HeaderComponents/TrandingHeader.vue'
import LogoHEader from './components/HomeComponent/HeaderComponents/LogoHeader.vue'
import DashboardHeader from './components/HomeComponent/HeaderComponents/DashboardHeader.vue'
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
