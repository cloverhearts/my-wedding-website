<template>
  <section id="index-section">
    <div class="intro">
      <p class="wedding-title">
        <span>저희</span>
        <span>결혼합니다.</span>
      </p>
      <p class="wedding-day">{{ weddingDaySplit }}</p>
      <div class="d-day">
        <DdayCount :day="weddingDay"/>
      </div>

      <p class="wedding-name">
        신랑, <strong>임채성</strong> & 신부, <strong class="sujin">이수진</strong>
      </p>

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
  computed: {
    weddingDaySplit() {
      return this.weddingDay.replaceAll('-', '.')
    },
  },
}
</script>

<style lang="scss" scoped>
  html body .content section {
    position:relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing:border-box;
    min-height: 100vh;
    padding: 10vw 5vw;
    background: #d8dce0 url("../assets/wedding-main.jpeg") no-repeat;
    background-size: 66vh;
    background-position: center;
    background-attachment: fixed;
    .intro {
      overflow:hidden;
      flex: 1;
      font-size: 1.8rem;
      color:#333;
      .wedding-title {
        position:relative;
        display:inline-block;
        padding:0 0 2vw;
        border-bottom:1px solid rgba(51,51,51,0.5);
        font-family: 'Nanum Myeongjo', serif;
        font-weight:bold;
        text-shadow: 0 0 1vw rgba(255, 255, 255, 0.2);
        animation: alternate 2s intro-title-animation;
        span{
          display:block;
          border-bottom:1px solid rgba(51,51,51,0.5);
          &:first-child{
            width:20vw;
            margin: 0 auto 1vw;
            font-size: 2rem;
          }
        }
        &:before,
        &:after{
          content: '"';
          position:absolute;
          top:0;
          display:block;
          font-family: cursive;
        }
        &:before{
          left:0;
        }
        &:after{
          right:0;
          transform:scaleX(-1);
        }
      }
      .wedding-day{
        display:block;
        margin: 0 0 0.5rem;
        font-size:0.8rem;
        letter-spacing: 1.5vw;
        animation: alternate 2s intro-day-animation;
      }
      .wedding-name {
        overflow:hidden;
        position:absolute;
        bottom:10vw;
        left:0;
        width:100%;
        font-family: 'Nanum Myeongjo', serif;
        font-size: 0.8rem;
        text-align:center;
        line-height: 2;
        letter-spacing: 1.2vw;
        /* background: rgba(255,255,255,0.3); */
        animation: alternate 2s intro-name-animation;
        strong{
          font-size:1.2rem;
        }
        .sujin{
          color:#fff;
        }
      }
      .d-day{
        overflow:hidden;
        animation: alternate 2s intro-title-animation;
        font-family: 'Nanum Myeongjo', serif;
        font-size:1.2rem;
      }
    }
    @keyframes intro-title-animation {
      0% {
        transform: scale(1);
        filter:blur(1px);
      }
      50% {
        transform: scale(1.2);
        filter:blur(2px);
      }
      100% {
        transform: scale(1);
        filter:none;
      }
    }
    @keyframes intro-name-animation {
      0% {
        opacity: 0;
        transform: translateY(0);
        filter:blur(1px);
      }
      50% {
        opacity: 1;
        transform: translateY(-10px);
        filter:blur(2px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter:none;
      }
    }
    @keyframes intro-day-animation {
      0% {
        opacity: 0;
      }
      80% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
