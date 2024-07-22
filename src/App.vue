<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TrandingHeader from './components/HeaderComponents/TrandingHeader.vue'
import LogoHEader from './components/HeaderComponents/LogoHeader.vue'
import DashboardHeader from './components/HeaderComponents/DashboardHeader.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <TrandingHeader />
      <LogoHEader />
      <DashboardHeader />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>

</template>

<style scoped>

</style>
