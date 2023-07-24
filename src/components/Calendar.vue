<template>
  <section class="calendar" id="calendar">
    <h2>Calendar</h2>
    <h3>
      <strong>2023년 9월 9일 토요일,</strong><br/>
      오후 1시 40분 분당앤스퀘어 아모르홀
      <!-- 09月09日 -->
    </h3>
    <ul class="calendar">
      <li class="day-off">일</li>
      <li>월</li>
      <li>화</li>
      <li>수</li>
      <li>목</li>
      <li>금</li>
      <li>토</li>
      <li class="prev day-off">
        <span class="day-number">27</span>
      </li>
      <li class="prev">
        <span class="day-number">28</span>
      </li>
      <li class="prev">
        <span class="day-number">29</span>
      </li>
      <li class="prev">
        <span class="day-number">30</span>
      </li>
      <li class="prev">
        <span class="day-number">31</span>
      </li>
      <li>
        <span class="day-number">1</span>
      </li>
      <li>
        <span class="day-number">2</span>
      </li>
      <li class="day-off">
        <span class="day-number">3</span>
      </li>
      <li>
        <span class="day-number">4</span>
      </li>
      <li>
        <span class="day-number">5</span>
      </li>
      <li>
        <span class="day-number">6</span>
      </li>
      <li>
        <span class="day-number">7</span>
      </li>
      <li>
        <span class="day-number">8</span>
      </li>
      <li class="d-day">
        <strong class="day-number">9</strong>
      </li>
      <li class="day-off">
        <span class="day-number">10</span>
      </li>
      <li>
        <span class="day-number">11</span>
      </li>
      <li>
        <span class="day-number">12</span>
      </li>
      <li>
        <span class="day-number">13</span>
      </li>
      <li>
        <span class="day-number">14</span>
      </li>
      <li>
        <span class="day-number">15</span>
      </li>
      <li>
        <span class="day-number">16</span>
      </li>
      <li class="day-off">
        <span class="day-number">17</span>
      </li>
      <li>
        <span class="day-number">18</span>
      </li>
      <li>
        <span class="day-number">19</span>
      </li>
      <li>
        <span class="day-number">20</span>
      </li>
      <li>
        <span class="day-number">21</span>
      </li>
      <li>
        <span class="day-number">22</span>
      </li>
      <li>
        <span class="day-number">23</span>
      </li>
      <li class="day-off">
        <span class="day-number">24</span>
      </li>
      <li>
        <span class="day-number">25</span>
      </li>
      <li>
        <span class="day-number">26</span>
      </li>
      <li>
        <span class="day-number">27</span>
      </li>
      <li class="day-off">
        <span class="day-number">28</span>
      </li>
      <li class="day-off">
        <span class="day-number">29</span>
      </li>
      <li class="day-off">
        <span class="day-number">30</span>
      </li>
      <li class="day-off next ">
        <span class="day-number">1</span>
      </li>
      <li class="next">
        <span class="day-number">2</span>
      </li>
      <li class="next day-off">
        <span class="day-number">3</span>
      </li>
      <li class="next">
        <span class="day-number">4</span>
      </li>
      <li class="next">
        <span class="day-number">5</span>
      </li>
      <li class="next">
        <span class="day-number">6</span>
      </li>
      <li class="next">
        <span class="day-number">7</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CalendarArea',
}
</script>

<style lang="scss" scoped>
  .calendar{
    padding:10vw 0;
    h3{
      font-family: 'Nanum Myeongjo', serif;
      line-height:1.5;
      strong{
        font-size:1.5rem;
      }
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      font-size: 1.4rem;
      padding: 2rem;
      li{
        position:relative;
        list-style: none;
        flex:0 auto;
        width:14.28%;
        height:3rem;
        text-align: center;
        font-size:1rem;
        .day-number{
          display: block;
          height:30px;
          line-height:30px;
        }
        &.prev,&.next{
          .day-number{
            color: rgba($color: #000000, $alpha: 0.3);
          }
          &.day-off{
            .day-number{
              color: rgba($color: rgb(255, 70, 70), $alpha: 0.3);
            }
          }
        }
        &.day-off{
          .day-number{
            color:rgb(255, 70, 70);
          }
        }
        &.d-day{
          position: relative;
          .day-number{
            color:#fff;
            &:after {
              display: block;
              position: absolute;
              color:#fff;
              background:rgba(206, 159, 111, 0.6);
              left: 50%;
              top: -0.6rem;
              width: 3rem;
              height: 3rem;
              margin-left: -1.5rem;
              box-sizing:border-box;
              border-radius: 50%;
              content: '9';
              padding-top: 0.7rem;
            }
          }
        }
      }
    }
  &.action{
    h3{
      animation: alternate 2s content-animation;
    }
  }
  }
</style>
