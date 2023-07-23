<template>
  <section id="guest">
    <h2>Guest</h2>
    <div class="guest-list">
      <ul v-if="items">
        <li v-for="(item ,index) in items" :key="`comment${index}`">
          <span class="icon" :class="item.target">{{ (item.target === 'bridegroom')? '채성': '수진'}}에게</span>
          {{ item.name }} : {{ item.comment }}
        </li>
      </ul>
      <p v-else class="guest-empty">
        축하 메세지가 없습니다. 첫 축하메세지를 작성해 주세요.
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
          신랑에게
        </label>
        <input
          type="radio"
          name="target"
          v-model="target"
          id="bride"
          value="bride"/>
        <label for="bride">
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
        @click="guestAddComment"
      >
        전송
      </button>
      </fieldset>
    </div>
    <div class="send-alert" v-if="seand">
      <div class="alert-content">
        <p>축하메세지를 남겨주셔서 감사합니다.</p>
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
      seand: false,
    }
  },
  mounted() {
    if (this.$firebaseDB) {
      this.fetchData();
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
    // eslint-disable-next-line consistent-return
    async guestAddComment() {
      try {
        this.id = this.items?.length || 0;
        const newPostKey = await push(child(ref(this.$firebaseDB), 'guests')).key;
        const postData = {
          name: this.name,
          target: this.target,
          comment: this.comment,
        };
        console.log(postData, newPostKey);
        const updates = {};
        updates[`/guests/${newPostKey}`] = postData;
        this.send = true;
        return update(ref(this.$firebaseDB), updates);
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
      /* overflow:hidden;
      overflow-x:auto; */
      width:100%;
      /* height:5rem; */
      margin-bottom:2rem;
      border:1px solid #ddd;
      border-radius: 1rem;
      ul{
        overflow:hidden;
        margin:0;
        padding:0;
        li{
          list-style:none;
          line-height:5rem;
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
        }
      }
    }
    .guest-empty{
      font-family: 'Nanum Myeongjo', serif;
      line-height:5rem;
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
      top:50%;
      left:50%;
      width:80vw;
      min-height:40vw;
      margin:-20vw 0 0 -40vw;
      padding:10vw;
      background:#fff;
      border:1px solid #ddd;
      border-radius: 1rem;
      font-size:1rem;
      line-height:2;
      .alert-button{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        padding:1rem;
        border:none;
        border-top:1px solid #ddd;
        background:#fff;
      }
    }
  }
</style>