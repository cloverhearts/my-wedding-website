<template>
  <div class="home">
    <DefaultLayout>
      <div class="icon">😊</div>
    </DefaultLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
  },
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 5rem;
  text-align: center;
  padding-top: 30vh;
}
</style>
