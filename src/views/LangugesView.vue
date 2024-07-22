<script setup>
import StartNowWeb from '../components/MainWeb/StartNow.vue'
import GetInTouch from '../components/FooterWeb/GetInTouch.vue'
import SubscribeOurNewsletter from '../components/FooterWeb/SubscribeOurNewsletter.vue'
</script>
<template>
    <main>
    <div class="containerND">
      <StartNowWeb />
    </div>
  </main>
  <footer>
    <div class="translate50">
      <SubscribeOurNewsletter />
    </div>
    <GetInTouch />
  </footer>
</template>

<style scoped>
.containerND {
  padding: 0 5%;
  margin-top: 50px;
}
.translate50 {
  transform: translateY(80%);
}
</style>
