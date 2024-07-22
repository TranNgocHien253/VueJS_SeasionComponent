<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import MenuOinia from './components/menu/MenuOinia.vue'

const route = useRoute();

const isHomeRoute = computed(() => route.path === '/');
</script>

<template>
  <header>
    <div :class="{'whitewrapper': isHomeRoute, 'whitewrapper-default': !isHomeRoute}">
      <div class="wrapper">
        <MenuOinia />
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

.whitewrapper {
  background-color: #270B60;
}

.whitewrapper-default {
  background-color: #ffffff;
  border-bottom: 2px solid #d4af37;;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #fff;
  margin: 0 10px;
  border-radius: 0 0 100px 100px;
  font-size: 15px;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 10px;
}
</style>
