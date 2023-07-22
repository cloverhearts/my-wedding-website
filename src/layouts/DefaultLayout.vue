<template>
  <main class="content">
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
@import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);

.nanummyeongjo * {
 font-family: 'Nanum Myeongjo', serif;
}
html body {
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  p{
    margin:0;
    padding:0;
  }
  animation: alternate 2s intro-first-animation;
  #sakura{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:100%;
    height:100%;
    min-height: 100vh;
    overflow:hidden;
    .sakura{
      z-index:0;
    }
  }
  .content {
    display: block;
    position: relative;
    background: #fff;
    max-width: 720px;
    margin: 0 auto;
    border-radius: 10px;
    section{
      min-height:80vh;
      padding: 20vw 5vw;
      border-bottom:2vw solid rgba(216, 220, 224, 0.6);
      h2{
        margin:0 0 10vw 0;
        &:before,
        &:after{
          content: "";
          display:inline-block;
          width:0.3rem;
          height:0.3rem;
          margin:0 1rem;
          border-radius:50%;
          background:rgba(206, 159, 111, 0.6);
          vertical-align: middle;
        }
      }
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
    border-color:#ffffff;
  }
  30% {
    color: #ffffff;
    border-color:#ffffff;
  }
  100% {
    color: inherit;
    border-color:#ffffff;
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
