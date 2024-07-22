<script setup>
import FeaturedCourses from '../components/MainWeb/FeaturedCourses.vue'
import GetInTouch from '../components/FooterWeb/GetInTouch.vue'
import SubscribeOurNewsletter from '../components/FooterWeb/SubscribeOurNewsletter.vue'
</script>

<template>
  <main>
    <div class="containerND">
      <FeaturedCourses />
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
  margin-top: 50px;
}
.translate50 {
  transform: translateY(80%);
}
</style>
