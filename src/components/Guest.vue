<template>
  <section id="guest">
    <h2>Guest</h2>
    <div class="guest-list" v-if="items">
      <ul v-if="items" :style="`width:${guestWidth}px; animation-duration:${guestDuration}s`">
        <li v-for="(item ,index) in items" :key="`comment${index}`" ref="item">
          <span class="icon" :class="item.target">{{ (item.target === 'bridegroom')? '채성': '수진'}}에게</span>
          {{ item.name }} : {{ item.comment }}
        </li>
      </ul>
      <p v-else class="guest-empty">
        <span class="icon bridegroom"></span>
        <span class="icon bride"></span><br/>
        첫 축하메세지를 작성해 주세요.
      </p>
    </div>
    <div class="guest-form">
      <fieldset class="guest-target">
        <input
          type="radio"
          name="target"
          v-model="target"
          id="bridegroom"
          value="bridegroom" />
        <label for="bridegroom">
          <span class="icon bridegroom"></span>
          신랑에게
        </label>
        <input
          type="radio"
          name="target"
          v-model="target"
          id="bride"
          value="bride"/>
        <label for="bride">
          <span class="icon bride"></span>
          신부에게
        </label>
      </fieldset>
      <fieldset class="guest-input">
      <label for="name">이름</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="이름"
      />
      <!-- <label for="comment">비밀번호</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="비밀번호"
      /> -->
      <label for="comment">남기실 말</label>
      <input
        type="text"
        id="comment"
        v-model="comment"
        placeholder="남기실 말"
      />
      <button
        type="button"
        class="guest-button"
        @click="sendAlertOpen"
      >
        전송
      </button>
      </fieldset>
    </div>
    <div
      v-if="send"
      class="send-alert"
      @click="closeAlert"
    >
      <div class="alert-content">
        <span class="icon bridegroom"></span>
        <span class="icon bride"></span><br/>
        <p>축하메세지를 남겨주셔서</p>
        <p>감사합니다</p>
        <p>이쁘게 잘 살겠습니다.</p>
        <p>채성,수진 올림</p>
        <button
          type="button"
          class="alert-button"
          @click="closeAlert"
        >
          확인
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref, onValue, child, push, update } from 'firebase/database';

export default {
  name: 'GuestArea',
  data() {
    return {
      items: {},
      target: 'bridegroom',
      name: '',
      // password: '',
      comment: '',
      send: false,
      contentWidth: 0,
      guestWidth: 0,
    }
  },
  mounted() {
    if (this.$firebaseDB) {
      this.fetchData();
      this.contentWidth = (window.outerWidth >= 900) ? 615 : window.outerWidth;
    }
  },
  updated() {
    if (this.$refs.item) {
      const allClientWidth = this.$refs.item.map((a) => a.clientWidth);
      this.guestWidth = allClientWidth.reduce((a, b) => a + b, 0);
    }
  },
  computed: {
    guestDuration() {
      return 5 * Object.entries(this.items).length;
    },
  },
  watch: {
    items: {
      handler(value) {
        this.guestWidth = this.contentWidth * Object.entries(value).length
      }
    }
  },
  methods: {
    async fetchData() {
      try {
        onValue(ref(this.$firebaseDB, 'guests'), async (snapshot) => {
          this.items = await snapshot.val();
        });
      } catch (ex) {
        alert('게시물을 읽어오지 못했습니다.');
      }
    },
    sendAlertOpen() {
      let next = false;
      let returnType = '';
      console.log(this.name, this.comment, this.target);
      if (!this.name || this.name.length === 0) {
        returnType = '이름을 입력해 주세요.';
        next = true;
      } else if (!this.comment || this.comment.length === 0) {
        returnType = '메세지를 입력해 주세요.';
        next = true;
      } else if (!this.target) {
        returnType = '누구에게 보내는지 선택해주세요.';
        next = true;
      }

      if (next) {
        alert(`${returnType}`)
      } else {
        this.send = true;
        document.querySelector('body').classList.add('lock');
      }
      // console.log('sendAlertOpen');
    },
    closeAlert() {
      this.guestAddComment();
    },
    async guestAddComment() {
      try {
        this.id = this.items?.length || 0;
        const newPostKey = await push(child(ref(this.$firebaseDB), 'guests')).key;
        const postData = {
          name: this.name,
          target: this.target,
          comment: this.comment,
        };
        const updates = {};
        updates[`/guests/${newPostKey}`] = postData;
        update(ref(this.$firebaseDB), updates);

        this.send = false;
        this.comment = '';
        this.name = '';
        this.target = 'bridegroom';
      } catch (ex) {
        alert('게시물을 읽어오지 못했습니다.');
      }
    },
  },
}
</script>

<style lang="scss">
  #guest{
    font-size:1rem;
    .guest-list{
      position:relative;
      z-index:1;
      overflow:hidden;
      width:100%;
      height:5rem;
      margin-bottom:2rem;
      border:1px solid #ddd;
      border-radius: 1rem;
      &:hover ul{
        animation-play-state: paused;
        cursor: pointer;
      }
      ul{
        display:flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        position:absolute;
        left:0;
        animation: infinite linear guest-animation;
        margin:0;
        padding:0;
        li{
          flex:0 auto;
          padding:0 2rem;
          list-style:none;
          line-height:5rem;
        }
      }
    }
    .icon{
      overflow:hidden;
      display:inline-block;
      width:3rem;
      height:3rem;
      border-radius: 3rem;
      box-shadow:0 0 1px rgba(0,0,0,0.2);
      text-indent:-1000em;
      font-size:0;
      vertical-align: middle;
      &.bridegroom{
        background:url('../assets/icon-sung.png') no-repeat center;
        background-size:cover;
      }
      &.bride{
        background:url('../assets/icon-jin.png') no-repeat center;
        background-size:cover;
      }
    }
    .guest-empty{
      padding:0.5rem;
      font-family: 'Nanum Myeongjo', serif;
      line-height:1.6;
    }
    .guest-form{
      position: relative;
      z-index:1;
      fieldset{
        display:flex;
        padding:0;
        border:0;
        &.guest-target{
          overflow: hidden;
          border:1px solid rgb(169 120 69 / 74%);
          border-radius: 1rem;
          justify-content: space-around;
          input[type="radio"]{
            display: none;
            &:checked + label{
              background:rgb(169 120 69 / 74%);
              color:#fff;
            }
          }
          label{
            flex:1;
            padding:1rem;
          }
        }
        &.guest-input{
          justify-content: space-between;
          padding:1rem 0;
          label{
            display:none;
          }
          input[type="text"],
          input[type="password"]{
            padding:1rem;
            border-radius: 0.5rem;
            border:1px solid #ddd;
          }
          input[type="text"]{
            /* margin: 0 1rem 1rem 0; */
            &#name{
              width:3.4rem;
            }
            &#comment{
              flex:1;
              margin:0 0.5rem;
            }
          }
        }
      }
      .guest-button{
        box-sizing:border-box;
        width:3.4rem;
        height:3rem;
        padding:0.5rem;
        border-radius: 0.5rem;
        border:1px solid rgb(169 120 69 / 74%);
      }
    }
    .send-alert{
      overflow:hidden;
      box-sizing: border-box;
      position:fixed;
      top:0;
      bottom:0;
      left:0;
      right:0;
      z-index:10;
      background: rgba($color: #000000, $alpha: 0.3);
      .alert-content{
        position:fixed;
        top:50%;
        left:50%;
        z-index:10;
        min-width:60vw;
        min-height:58vw;
        max-height:70vw;
        transform: translate(-50%, -50%);
        padding:1rem;
        background:#fff;
        border:1px solid #ddd;
        border-radius: 1rem;
        font-size:1rem;
        line-height:2;
      }
      .alert-button{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        padding:1rem;
        border:none;
        border-radius: 1rem;
        border-top:1px solid #ddd;
        background:#fff;
      }
    }
  }
  body.lock{
    overflow:hidden;
  }

  @keyframes guest-animation {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }
  @media (min-width: 700px) and (max-width: 1280px) {
  html body{
    .content{
      section#guest{
        .send-alert{
          .alert-content{
            width:320px;
            height:200px;
            min-width:320px;
            min-height:220px;
          }
        }
      }
    }
  }
}
  @media (max-width: 280px) {
  html body{
    .content{
      section#guest{
        .guest-form{
          .guest-input{
            flex-direction: row;
            flex-wrap:wrap;
            input[type="text"]{
              &#name,
              &#comment{
                box-sizing: border-box;
                width:100%;
                margin:0.5rem 0;
              }
            }
            button{
              width:100%;
              margin:1rem 0;
            }
          }
        }
      }
    }
  }
}
</style>
