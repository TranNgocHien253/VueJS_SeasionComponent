<script setup>
import TheWelcome from '../components/MainWeb/TheWelcome.vue'
import StartNowWeb from '../components/MainWeb/LearnANewLanguage.vue'
import HighQualityWeb from '../components/MainWeb/HighQuality.vue'
import OurAllLanguageVideos from '../components/MainWeb/OurAllLanguageVideos.vue'
import BestTranning from '../components/MainWeb/BestTranning.vue'
import FeaturedCourses from '../components/MainWeb/FeaturedCourses.vue'
import Events from '../components/MainWeb/EventsPuple.vue'
import WhatSaysOurStudents from '../components/MainWeb/WhatSaysOurStudents.vue'
import GetInTouch from '../components/FooterWeb/GetInTouch.vue'
import SubscribeOurNewsletter from '../components/FooterWeb/SubscribeOurNewsletter.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <div class="containerND">
      <StartNowWeb />
      <HighQualityWeb />
    </div>
    <OurAllLanguageVideos />
    <div class="containerND">
      <BestTranning />
      <FeaturedCourses />
    </div>
    <Events />
    <div class="containerND">
      <WhatSaysOurStudents />
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
}
.translate50 {
  transform: translateY(80%);
}

</style>
