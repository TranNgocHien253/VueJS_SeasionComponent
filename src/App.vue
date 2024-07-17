<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HeaderDashboard from './components/Header/HeaderDashbroad.vue'
</script>

<template>
  <header>
    <div class="row">
      <div class="left">
        <div class="imglg">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div>
        <div class="conteen">
          <HeaderDashboard />
        </div>
      </div>
      <div class="right">
        <RouterView />
      </div>
    </div>
  </header>
  <main>

  </main>

  <!-- <RouterView /> -->
</template>

<style>
.row {
  display: flex;
  height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.left {
  flex: 0 0 250px;
  padding: 20px;
  margin-left: -20px;
}

.right {
  flex: 1;
  padding-left: 30px;
  margin: 10px;
  overflow-y: auto;
}

.left h2 {
  padding-left: 8px;
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
    height: 100%;
  }

  .left,
  .right {
    flex: 1 1 auto;
    padding: 10px;
  }

  .left {
    display: flex;

    .imglg {
      order: 0;
      display: flex;
      flex-direction: column;

      .logo {
        margin: 10px;
        width: 80px;
      }
    }
    .conteen {
      margin-left: 20px;
      width: 100%;
    }
  }
  .right {
    order: 2;
    padding-left: 10px;
    margin: 0;
  }
}
</style>
