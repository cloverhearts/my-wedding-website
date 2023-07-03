<template>
  <section id="index-section">
    <div class="intro">
      우리 결혼합니다
      <div class="d-day">
        <DdayCount :day="weddingDay"/>
      </div>
    </div>
  </section>
</template>

<script>
import DdayCount from './DdayCount.vue';

export default {
  name: 'HeaderArea',
  components: {
    DdayCount,
  },
  data() {
    return {
      weddingDay: '2023-09-09',
    }
  },
}
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    .intro {
      flex: 1;
    }
  }
</style>
