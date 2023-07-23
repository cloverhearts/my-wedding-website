<template>
  <section class="thanks-section" id="thanks">
    <h2>마음을 전하실 곳</h2>
    <div class="box chaesung">
      <div class="for-name chaesung">
        신랑측.<strong>임채성</strong>
      </div>
      <div class="bank-info">
        <div class="bank-logo">
        </div>
        <div class="bank-script">
          카카오뱅크 3333-08-7916821
        </div>
        <button @click="onClickCopy('chaesung')">
          신랑측 계좌번호 복사하기
        </button>
      </div>

    </div>
    <div class="box sujin">
      <div class="for-name sujin">
        신부측.<strong>이수진</strong>
      </div>
      <div class="bank-info">
        <div class="bank-logo">
        </div>
        <div class="bank-script">
          카카오뱅크 3333-10-6277225
        </div>
        <button @click="onClickCopy('sujin')">
          신부측 계좌번호 복사하기
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import copy from 'copy-to-clipboard';
import Swal from 'sweetalert2'

export default {
  name: 'IntroduceSection',
  data() {
    return {
      bank: {
        chaesung: { forname: '신랑', account: '3333087916821' },
        sujin: { forname: '신부', account: '3333106277225' },
      }
    }
  },
  methods: {
    onClickCopy(name) {
      if (this.bank[name]) {
        copy(this.bank[name].account, {
          debug: true,
        })

        Swal.fire(
          {
            title: '',
            html: `<div class="thanks-for-alert"><p class="who">${this.bank[name].forname}측</p><p class="account">계좌번호가 복사되었습니다</p><p class="thanks">감사합니다. 잘 살겠습니다</p>`,
            confirmButtonText: '<div>확인<div>'
          }
        )
      }
    }
  }
}
</script>

<style scoped lang="scss">
.thanks-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: "Nanum Myeongjo", serif;
  h2 {

    font-family: "Nanum Myeongjo", serif;
  }

  .box {
    padding: 2rem;
    .for-name {
      position: relative;
      font-size: 1.1rem;
      text-align: left;
      &.chaesung {
        &::before {
          position: absolute;
          top: .3rem;
          left: -1rem;
          width: .5rem;
          height: .5rem;
          content: '';
          background: rgba(169, 120, 69, 0.74);
          -webkit-border-radius: .2rem;
          -moz-border-radius: .2rem;
          border-radius: .2rem;
        }
      }

      &.sujin {
        &::before {
          position: absolute;
          top: .3rem;
          left: -1rem;
          width: .5rem;
          height: .5rem;
          content: '';
          background: rgba(169, 120, 69, 0.74);
          -webkit-border-radius: .2rem;
          -moz-border-radius: .2rem;
          border-radius: .2rem;
        }
      }

    }
  }
  .bank-info {
    display: block;
    position: relative;

    button {
      min-width: 100%;
      margin-top: 1rem;
      background: rgba(169, 120, 69, 0.74);
      font-family: "Nanum Myeongjo", serif;
      border: transparent 0;
      padding: .5rem 1rem;
      color: #ffffff;
      font-weight: 800;
      &:hover {
        background: rgba(169, 120, 69, 0.84);
      }
    }
    .bank-logo {
      display: block;
      position: absolute;
      top: .3rem;
      left: -1rem;
      width: .5rem;
      height: .5rem;
      -webkit-border-radius: 0.2rem;
      -moz-border-radius: 0.2rem;
      border-radius: 0.2rem;
      background: #FFE300;
    }
    .bank-script {
      display: block;
      position: relative;
      top:0;
      left:0;
      font-size: 1.1rem;
      z-index: 1;
    }
  }
}
</style>

<style>
.swal2-html-container {
  font-family: "Nanum Myeongjo", serif;
}
.thanks-for-alert {
  font-size: 1rem;
  .who {
    margin-top: 1rem;
  }
  .account {
    margin-top: 0.5rem;
  }
  .thanks {
    margin-top: 0.5rem;
  }
}
</style>
