<script setup>
import GetInTouch from '../components/FooterWeb/GetInTouch.vue'
import SubscribeOurNewsletter from '../components/FooterWeb/SubscribeOurNewsletter.vue'
</script>

<template>
  <footer>
    <div class="translate50">
      <SubscribeOurNewsletter />
    </div>
    <GetInTouch />
  </footer>
</template>
<style scoped>
.translate50 {
  margin-top: -150px;
  transform: translateY(80%);
}

</style>
