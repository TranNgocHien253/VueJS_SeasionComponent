<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MenuOinia from './components/menu/MenuOinia.vue'
</script>

<template>
  <header>
    <div class="whitewrapper">
      <div class="wrapper">
        <HelloWorld />
        <nav>
          <MenuOinia />
        </nav>
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
  background-color: blueviolet;
}
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    background-color: aliceblue;
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
