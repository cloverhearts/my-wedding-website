<template>
  <section id="gallery">
    <h2>Gallery</h2>
    <div class="gallery">
      <img src="../assets/gallery1.jpeg" alt="사진1">
      <img src="../assets/gallery2.jpeg" alt="사진2">
      <img src="../assets/gallery3.jpeg" alt="사진3">
      <img src="../assets/gallery4.jpeg" alt="사진4">
      <img src="../assets/gallery5.jpeg" alt="사진5">
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryArea',
}
</script>

<style lang="scss">
#gallery{
  .gallery{
    position:relative;
    z-index: 1;
    height:60vh;
    border: 2rem solid transparent;
    border-image-source: url(../assets/lace_border_bg.png) ;
    border-image-slice: 75;

    overflow: hidden auto;
    img{
      display:inline-block;
      width:100%;
    }
  }
  &.action{
    .gallery{
      animation: alternate 2s content-animation;
    }
  }
}
</style>
