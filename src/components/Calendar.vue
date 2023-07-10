<template>
  <section>
    <h2>
      09月09日
    </h2>
    <ul class="calendar">
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
        <span class="day-number">9</span>
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
section {
  min-height: 100vh;
}
  .calendar{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    font-size: 1.4rem;
    padding: 1rem;
    li{
      position:relative;
      list-style: none;
      flex:0 auto;
      width:14.28%;
      height:60px;
      text-align: center;
      span.day-number{
        display: block;
        height:30px;
        line-height:30px;
      }
      &.prev,&.next{
        span.day-number{
          color: rgba($color: #000000, $alpha: 0.3);
        }
        &.day-off{
          span.day-number{
            color: rgba($color: #f00, $alpha: 0.3);
          }
        }
      }
      &.day-off{
        span.day-number{
          color:#f00;
        }
      }
      &.d-day{
        position: relative;
        span.day-number{
          &:after {
            display: block;
            position: absolute;
            color:#fff;
            background:#000;
            left: 0.4rem;
            top: -0.8rem;
            width: 3.5rem;
            height: 2.6rem;
            border-radius: 50%;
            content: '9';
            padding-top: 0.9rem;
          }
        }
      }
    }
  }
</style>
