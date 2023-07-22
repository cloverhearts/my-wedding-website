<template>
  <div class="home">
    <DefaultLayout>
      <IntroArea/>
      <IntroduceSection />
      <CalendarArea/>
      <LocationArea/>
      <GalleryArea/>
      <GuestArea/>
    </DefaultLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '../layouts/DefaultLayout.vue'
import IntroArea from '../components/Intro.vue'
import IntroduceSection from '../components/Introduce.vue'
import CalendarArea from '../components/Calendar.vue'
import LocationArea from '../components/Location.vue'
import GalleryArea from '../components/Gallery.vue'
import GuestArea from '../components/Guest.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    IntroArea,
    IntroduceSection,
    CalendarArea,
    LocationArea,
    GalleryArea,
    GuestArea,
  },
}
</script>

<style lang="scss" scoped>
  section{
    max-width:670px;
    margin:0 auto;
  }
</style>
