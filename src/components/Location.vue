<template>
  <section>
    <header>
      <h2>LOCATION</h2>
    </header>
    <div class="location-description">
      <div class="location-name">
        분당 오리역(6번출구) - 분당앤스퀘어
      </div>
      <div class="find-location-by-naver-map">
        <a class="button" href="https://map.naver.com/v5/directions/-/14149474.182061013,4486626.647726843,%EB%B6%84%EB%8B%B9%EC%95%A4%EC%8A%A4%ED%80%98%EC%96%B4,11872992,PLACE_POI/-/transit?c=16.9,0,0,0,dh&isCorrectAnswer=true" target="_blank">
          대중교통 찾기
        </a>
      </div>
      <div class="navigation-guide">
        내비게이션 이용시 : "분당앤스퀘어"를 입력하세요
      </div>
      <div>
        300대 이상의 넓은 주차장이 있으므로, 자차 이용시 편리합니다
      </div>
    </div>
    <div class="wedding-hall-location">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1059637514186!2d127.10409177654118!3d37.339999972098234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b59eb77ad0e33%3A0x935499ac4503c9cb!2z67aE64u57JWk7Iqk7YCY7Ja0IOybqOuUqe2ZgA!5e0!3m2!1sko!2skr!4v1688394101792!5m2!1sko!2skr"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LocationArea',
}
</script>

<style lang="scss" scoped>
.location-description {
  a.button {
    border: #eee 1px solid;
    padding: 0 1rem;
  }
}
.wedding-hall-location {
  & iframe {
    width: 100%;
    min-height: 80vh;
  }
}
</style>
