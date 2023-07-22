<template>
  <section class="location" id="location">
    <h2>Location</h2>
    <h3>
      경기도 성남시 분당구 탄천상로 151번길 20 (구미동 159번지)<br/>
      <strong>분당앤스퀘어</strong> (구.베어캐슬) 4층
      <!-- 09月09日 -->
    </h3>
    <div class="wedding-hall-location">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1059637514186!2d127.10409177654118!3d37.339999972098234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b59eb77ad0e33%3A0x935499ac4503c9cb!2z67aE64u57JWk7Iqk7YCY7Ja0IOybqOuUqe2ZgA!5e0!3m2!1sko!2skr!4v1688394101792!5m2!1sko!2skr"
          width="100%" height="50%" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="location-description">
            <img src="../assets/wedding-hall.jpeg" alt="웨딩홀">
            <div class="location-name">
              분당 오리역(6번출구) - 분당앤스퀘어
            </div>
            <div class="find-location-by-naver-map">
              <a class="button" href="https://map.naver.com/v5/directions/-/14149474.182061013,4486626.647726843,%EB%B6%84%EB%8B%B9%EC%95%A4%EC%8A%A4%ED%80%98%EC%96%B4,11872992,PLACE_POI/-/transit?c=16.9,0,0,0,dh&isCorrectAnswer=true" target="_blank">
                빠른 길 찾기
              </a>
            </div>
            <div class="navigation-guide">
              내비게이션 이용시 : <em>"분당앤스퀘어"</em>를 입력하세요
            </div>
            <div>
              300여대의 주차가 가능한 주차장이 있으므로, 자차 이용시 편리합니다
            </div>
          </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LocationArea',
}
</script>

<style lang="scss" scoped>
.location{
  font-size:1rem;
  line-height:2;

  h3{
      font-family: 'Nanum Myeongjo', serif;
      line-height:1.5;
      font-size:0.8rem;
      strong{
        font-size:1rem;
      }
    }
  .location-description {
    img{
      width:100%;
    }
    .find-location-by-naver-map{
      a.button {
        display:block;
        padding:1rem;
        border-radius: 0.5rem;
        padding: 1rem;
        border: #eee 1px solid;
        background:rgb(169 120 69 / 74%);
        color:#fff;
        font-family: 'Nanum Myeongjo', serif;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
  .wedding-hall-location {
    & iframe {
      width: 100%;
      min-height: 80vh;
    }
  }
  &.action{
    h3, .wedding-hall-location{
      animation: alternate 2s content-animation;
    }
  }
}
</style>
