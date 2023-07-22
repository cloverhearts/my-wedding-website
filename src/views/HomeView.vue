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
  data() {
    return {
      sectionList: [
        '#intro',
        '#introduce',
        '#calendar',
        '#location',
        '#gallery',
        '#guest',
      ],
      scrollPosition: [],
      viewIndex: 0,
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollEvents);
    this.scrollPosition = this.sectionList.map((s) => ((document.querySelector(`${s}`).offsetTop <= 300) ? document.querySelector(`${s}`).offsetTop : document.querySelector(`${s}`).offsetTop - 200));
    this.scrollPosition.push(document.querySelector('body').getBoundingClientRect().height);
    console.log(this.scrollPosition);
  },
  methods: {
    scrollEvents() {
      const viewIndex = this.scrollPosition.findIndex((position) => Math.abs(position) > window.scrollY) - 1;
      if (this.viewIndex !== viewIndex) {
        if (document.querySelector(`${this.sectionList[this.viewIndex]}`).classList.contains('action')) {
          document.querySelector(`${this.sectionList[this.viewIndex]}`).classList.remove('action');
        }
        document.querySelector(`${this.sectionList[viewIndex]}`).classList.add('action');
        this.viewIndex = viewIndex;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  section{
    max-width:670px;
    margin:0 auto;
    &.action{
      transition:all 2s;
    }
  }
</style>
