<script setup>
import TheWelcome from '../components/MainWeb/TheWelcome.vue'
import StartNowWeb from '../components/MainWeb/StartNowWeb.vue'
import HighQualityWeb from '../components/MainWeb/HighQuality.vue'
import OurAllLanguageVideos from '../components/MainWeb/OurAllLanguageVideos.vue'

</script>

<template>
  <main>
    <TheWelcome />
    <div class="containerND">
      <StartNowWeb />
      <HighQualityWeb />
      <OurAllLanguageVideos />
    </div>
  </main>
</template>
<style scoped>
.containerND {
    margin: 0 10%;
}
</style>
