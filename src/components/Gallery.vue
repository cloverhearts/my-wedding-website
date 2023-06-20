<template>
  <section>
    <div class="gallery"></div>
    자 사진
  </section>
</template>

<script>
export default {
  name: 'GalleryArea',
}
</script>

<style lang="scss">
.gallery{
  width:500px;
  height:500px;
  margin:0 auto;
  /* background:url('/wedding.svg') no-repeat center center; */
  background-size:cover;
  border:10px solid #f00;
}
</style>
