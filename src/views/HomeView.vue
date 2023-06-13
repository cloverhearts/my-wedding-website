<template>
  <div class="home">
    <DefaultLayout>
      <HeaderArea/>
      <MainArea/>
      <StoryArea/>
      <InfomationArea/>
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
import HeaderArea from '../components/Header.vue'
import MainArea from '../components/Main.vue'
import StoryArea from '../components/Story.vue'
import InfomationArea from '../components/Infomation.vue'
import CalendarArea from '../components/Calendar.vue'
import LocationArea from '../components/Location.vue'
import GalleryArea from '../components/Gallery.vue'
import GuestArea from '../components/Guest.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    HeaderArea,
    MainArea,
    StoryArea,
    InfomationArea,
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
