<template>
  <main class="content" ref="sakura">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
  created() {
    this.$nextTick(() => {
    });
  },
}
</script>

<style lang="scss">
html body {
  min-width: 100vw;
  min-height: 100vh;

  animation: alternate 2s intro-first-animation;
  .content {
    display: block;
    position: relative;
    background: #fff;
    width: 100%;
    max-width: 720px;
    margin: 3rem auto;
    border-radius: 10px;

    &:after {
      display: block;
      position: absolute;
      z-index: -1;
      top: - 3rem;
      left: - 3rem;
      right: - 3rem;
      bottom: - 3rem;
      border: 3rem solid transparent;
      padding: 15px;
      border-image-source: url('http://127.0.0.1:8080/lace_border_bg.png');
      border-image-repeat: round;
      border-image-slice: 100;
      content: "";
      opacity: 1;
      animation: alternate 1s lace-decoration-animation;
    }
    & .intro {
      opacity: 1 !important;
      animation: alternate 2s intro-content-animation;
    }
    animation: alternate 2s intro-animation;
  }
}

@keyframes intro-first-animation {
  0% {
    background: black;
    border-color: transparent;
  }
  30% {
    background: black;
  }
  80% {
    border-color: inherit;
  }
  100% {
    background: white;
    border-color: inherit;
  }
}

@keyframes intro-content-animation {
  0% {
    color: #ffffff;
  }
  30% {
    color: #ffffff;
  }
  100% {
    color: inherit;
  }
}

@keyframes intro-animation {
  0% {
    background: transparent;
  }
  30% {
    background: transparent;
  }
  100% {
    background: #ffffff;
  }
}

@keyframes lace-decoration-animation {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
