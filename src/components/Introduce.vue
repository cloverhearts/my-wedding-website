<template>
  <section class="introduce-section">
    <div class="comment">
      <p>저희를 아껴주시는 소중한 분들을 모시고</p>
      <p>서약하는 자리를 마련하고자 합니다</p>
      <p class="empty"></p>
      <p>축하해주시는 모든 분들께 감사드리며</p>
      <p>앞으로 즐겁고 행복하게 잘 살겠습니다</p>
      <p class="empty"></p>
      <div class="honey">
        <p>
          임현택∙김순동의 장남 채성
        </p>
        <p>
          이용만∙장영애의 장녀 수진
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroduceSection',
  props: {

  },
  data() {
  },
  computed: {
  },
}
</script>

<style scoped lang="scss">
.introduce-section {
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10vw;
  font-size: 1.2rem;
  .comment {
    flex: 1;
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
        margin: 1rem 0;
      }
    }
  }

}
</style>
