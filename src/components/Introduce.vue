<template>
  <section class="introduce-section" id="introduce">
    <h2>Introduce</h2>
    <div class="comment">
      <p>저희를 아껴주시는 소중한 분들을 모시고</p>
      <p>서약하는 자리를 마련하고자 합니다</p>
      <p class="empty"></p>
      <p>축하해주시는 모든 분들께 감사드리며</p>
      <p>앞으로 즐겁고 행복하게 잘 살겠습니다</p>
      <p class="empty"></p>
      <div class="honey">
        <p>
          <strong>임현택∙김순동</strong>의 장남 <strong>채성</strong>
        </p>
        <p>
          <strong>이용만∙장영애</strong>의 장녀 <strong>수진</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroduceSection',
}
</script>

<style scoped lang="scss">
.introduce-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .comment {
    flex: 1;
    font-size: 1.1rem;
    font-family: 'Nanum Myeongjo', serif;
    padding: 10vw 0;
    p {
      margin: 0.5rem 0;
    }
    .empty {
      display: block;
      margin-bottom: 1rem;
      height: 1rem;
    }

    .honey {
      p {
        margin: 2rem 0;
        font-size: 1rem;
        strong{
          font-size: 1.18rem;
        }
      }
    }
  }
  &.action{
    .comment{
      animation: alternate 3s content-animation;
    }
  }
}
@media (orientation: landscape) {
  html body{
    .content{
      section#introduce{
        .comment{
          padding:0;
        }
      }
    }
  }
}
</style>
