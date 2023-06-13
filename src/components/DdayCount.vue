<template>
  <strong class="dday">
    D
    <span v-if="ddayCount > 0">+</span>
    <span v-if="ddayCount <= 0">-</span>
    {{ Math.abs(ddayCount) }}
  </strong>
</template>

<script>
export default {
  name: 'DdayCount',
  props: {
    day: String,
  },
  data() {
    return {
      nowDay: this.$moment().format('YYYY-MM-DD'),
    }
  },
  computed: {
    limitDay() {
      return this.$moment(this.day).format('YYYY-MM-DD');
    },
    ddayCount() {
      return this.$moment(this.nowDay).diff(this.limitDay, 'days');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .dday{
  }
</style>
