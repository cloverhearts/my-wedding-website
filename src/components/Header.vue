<template>
  <section>
    <DdayCount :day="weddingDay"/>
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
