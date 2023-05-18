<template>
  <main class="content">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
html body {
  min-width: 100vw;
  min-height: 100vh;
  background: #fdfd96;
  overflow: hidden;
}
</style>
