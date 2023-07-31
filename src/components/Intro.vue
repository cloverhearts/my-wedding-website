<template>
  <section id="intro">
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
        <span class="landscape">신랑, <strong>임채성</strong></span> & 신부, <strong class="sujin">이수진</strong>
      </p>
      <div class="scroll-down">
        <div class="scroll-round">
          <svg width="190" height="70" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xml:space="preserve">
              <path fill="#ffffff" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path>
          </svg>
          <button type="button" class="scroll">
            scroll-down
          </button>
        </div>
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
  computed: {
    weddingDaySplit() {
      return this.weddingDay.replaceAll('-', '.')
    },
  },
}
</script>

<style lang="scss" scoped>
  section#intro {
    position:relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing:border-box;
    min-height: 97vh;
    padding: 1rem;
    background: transparent url("../assets/wedding-main.jpeg") no-repeat;
    background-size: cover;
    background-position: center center;
    /* background-attachment: fixed; */
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
        text-shadow: 0 0 2px rgba(255, 255, 255, 1);
        animation: alternate 2s intro-title-animation;
        span{
          display:block;
          border-bottom:1px solid rgba(51,51,51,0.5);
          &:first-child{
            width:23vw;
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
      .d-day{
        overflow:hidden;
        animation: alternate 2s intro-title-animation;
        font-family: 'Nanum Myeongjo', serif;
        font-size:1.2rem;
        text-shadow: #ffffff 1px 1px 5px;
      }
      .wedding-name {
        overflow:hidden;
        position:absolute;
        bottom: 3rem;
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
          text-shadow: #000 1px 1px 5px;
        }
      }

      .scroll-down{
        position: absolute;
        bottom: -4vh;
        left: 0;
        width: 100%;
        height:5vh;
        padding: 0;
        background: transparent;
          animation: alternate 2s intro-day-animation;

        @media (orientation: portrait) {
          padding: 0;
        }

        .scroll-round{
          position: absolute;
          bottom: 0rem;
          left: 30%;
          width:40%;
          margin:0 auto;
          @media (orientation: portrait) {
            bottom: 0;
          }
        }
        svg{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index:1;
        }
        button{
          position: absolute;
          bottom: 2.4rem;
          left: 0;
          z-index:2;
          width:100%;
          height: 0.5rem;
          border:0;
          background:transparent;
          text-align: center;
          font-size:0;
          animation: infinite 1.8s 2.5s intro-scroll-animation;
          &:after{
            content: "";
            position: absolute;
            bottom: 50%;
            left: 50%;
            z-index: 20;
            width: 0.5rem;
            height: 0.5rem;
            margin-left: -0.25rem;
            margin-top: -0.25rem;
            border-right: 2px solid rgba(69,69,69,1);
            border-bottom: 2px solid rgba(69,69,69,1);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
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
    @keyframes intro-scroll-animation {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  @media (min-width: 700px) and (max-width: 3000px) {
    section#intro{
      padding-top:2vw;
      background-size:76vh;
      background-position-x: 50%;
      background-position-y: 0;
      text-shadow: #fff 1px 1px 5px;
      .intro{
        .wedding-title{
          padding-bottom:1vw;
          text-shadow: #fff 1px 1px 5px;
        }
        .wedding-name{
          letter-spacing: 0.6vw;
          bottom:8vh;
          text-shadow: #fff 1px 1px 5px;
        }
      }
    }
  }
  @media (orientation: landscape) and (max-width: 920px) {
    section#intro{
      padding-top: calc(50vh - 5.2rem);
      background-position: center 40%;
      background-size:cover;
      min-height:90vh;
      .intro{
        .wedding-title,
        .wedding-title span,
        .wedding-day,
        .d-day,
        .wedding-name{
          color:#fff;
          border-color:#fff;
          text-shadow: #000000 1px 1px 5px;
        }
        .wedding-title{
          margin-bottom:0.5rem;
          padding-bottom:0.2rem;
        }
        .wedding-title,
        .wedding-day,
        .d-day{
          transform:scale(0.9);
        }
        .wedding-name{
          bottom:10vh;
          text-shadow: none
        }
        .scroll-down{
          bottom:-6vh;
          .scroll-round{
            left:40%;
            width:20%;
          }
        }
        .landscape{
          color:#333;
        }
      }
    }
  }
</style>
