<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.stud-faculties 
  .background-img 
    margin 10px 0px
    display block
    img 
      position relative
      left 5%
      border-radius 20px
      top 0
      width 90%

  .box 
    position relative
    bottom 30vw
    left 45vw
    width 10vw
    height 10vw
    transform-style preserve-3d
    animation animate 25s linear infinite

    &:hover 
      animation-play-state paused

    @keyframes animate 
      0%
        transform perspective(1000px) rotateY(0deg) rotateX(10deg)
      50%
        transform perspective(1000px) rotateY(360deg) rotateX(-10deg)
      100%
        transform perspective(1000px) rotateY(720deg) rotateX(10deg)

    .one-image 
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      transform-style preserve-3d
      backface-visibility hidden
      display flex
      justify-content center
      align-items center
      border-radius 50%
      // background colorPalette1
      -webkit-box-reflect below 2px colorPalette1
      transition all 0.3s ease
      pointer-events all
      cursor pointer

      &:hover
        .bg
          transform translateZ(-1px) scale(1.2)
        img
          transform scale(1.2)
          filter brightness(1.2)
          box-shadow 0 16px 32px rgba(0, 0, 0, 0.35), 0 8px 8px rgba(0, 0, 0, 0.28)

      .bg
        position absolute
        inset 0
        border-radius 50%
        background colorPalette1
        z-index -1
        transform translateZ(-1px)
        transition all 0.3s ease

        border 1px solid colorPalette1
        pointer-events none

      img 
        width 95%
        height 95%
        border-radius 50%
        box-shadow 0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22)
        transition all 0.3s ease
        pointer-events none
</style>

<template>
  <div class="stud-faculties">
    <div class="background-img">
      <img src="/res/icons/stud-faculties-bg.svg" alt="">
    </div>
    <div class="box">
      <span v-for="(image, index) in images" :key="index" :style="getSpanStyle(index)" class="one-image">
        <span class="bg"></span>
        <img :src="image" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://sun9-50.userapi.com/impg/uSedlZUFrFDcSHnMGEAs2UbLnv2QvYdh69yv8Q/whDSLD5i8z0.jpg?size=1080x1080&quality=95&sign=8d4d152db6054c19dbabbf72c6f7173b&type=album',
        'https://sun9-75.userapi.com/impg/RyPiAsi6vKqEZiM8CQPA6xeY9yjtX1IpYXz2lw/4Ej3z8wd69c.jpg?size=1668x1667&quality=95&sign=b5b5cafc5f13e6d5aa856d199267e95f&type=album',
        'https://sun9-69.userapi.com/impg/RSls9NiDfFfioAKUXwpgg-x-GOmY7b1EyIAlTw/KQ35hPG7bHs.jpg?size=1081x1080&quality=95&sign=7c01bc15e95413d90b73b0ac5193d485&type=album',
        'https://sun9-17.userapi.com/impg/fqmrqXHRU0i8zRQFEee5snXQM_Zm39KmE19rbQ/zoZQQw7Q3WI.jpg?size=2560x2560&quality=95&sign=aed6280091da857176c1366d59023827&type=album',
        'https://sun9-13.userapi.com/impg/vuG_tke_7W_sHXjwaHNv04qKe6RAsFF-EuhzyQ/fYUTaNl2M24.jpg?size=1080x1080&quality=95&sign=96298b3c53c2804b5100c33e31e68233&type=album',
        'https://sun9-22.userapi.com/impg/auBf_amipunZjyGLYTiEzbPtcvPPA7THtCQYGQ/tv2oqPK-fdo.jpg?size=1955x2160&quality=95&sign=5308bf91e6b9d46d5bef3bbf24487b51&type=album',
        'https://sun9-75.userapi.com/impg/RyPiAsi6vKqEZiM8CQPA6xeY9yjtX1IpYXz2lw/4Ej3z8wd69c.jpg?size=1668x1667&quality=95&sign=b5b5cafc5f13e6d5aa856d199267e95f&type=album',
        'https://sun9-69.userapi.com/impg/RSls9NiDfFfioAKUXwpgg-x-GOmY7b1EyIAlTw/KQ35hPG7bHs.jpg?size=1081x1080&quality=95&sign=7c01bc15e95413d90b73b0ac5193d485&type=album',
        'https://sun9-17.userapi.com/impg/fqmrqXHRU0i8zRQFEee5snXQM_Zm39KmE19rbQ/zoZQQw7Q3WI.jpg?size=2560x2560&quality=95&sign=aed6280091da857176c1366d59023827&type=album',
        'https://sun9-13.userapi.com/impg/vuG_tke_7W_sHXjwaHNv04qKe6RAsFF-EuhzyQ/fYUTaNl2M24.jpg?size=1080x1080&quality=95&sign=96298b3c53c2804b5100c33e31e68233&type=album',
        'https://sun9-43.userapi.com/impg/xf0vjmMtRk5PuyzZVaBHeN9GlrQM8zG_VpZUAg/XpZObatXmXk.jpg?size=2560x2560&quality=95&sign=d7bbb2febd66d9c7b0b5f1946a782acd&type=album',
        'https://sun9-76.userapi.com/impg/YmVaO8clIf_NC9JuCI7DrX6Sxss-lWENDxkXBg/SFIUaLHE4GM.jpg?size=932x846&quality=95&sign=da4780033d948d117cd82f79ccabec78&type=album',
        'https://sun9-59.userapi.com/impg/7MTcy51k_yKUr-Z4vHYmUJYmCv1WPz2O_g-vsg/9sdFxKy1eXU.jpg?size=2085x2084&quality=95&sign=346501584bba9946b41401cf2827590a&type=album',
        'https://sun9-33.userapi.com/impg/M25sTKnMn8GWX8apdvsoZw_VExmlkvMdeO54kw/1cpbHF9OHw4.jpg?size=2560x2560&quality=95&sign=fe9a6a44fbfdde98d83a5c39cecfff57&type=album',
        'https://sun9-22.userapi.com/impg/auBf_amipunZjyGLYTiEzbPtcvPPA7THtCQYGQ/tv2oqPK-fdo.jpg?size=1955x2160&quality=95&sign=5308bf91e6b9d46d5bef3bbf24487b51&type=album'
      ]
    };
  },
  methods: {
    getSpanStyle(index) {
      const angle = (360 / this.images.length) * index;
      return {
        '--i': index,
        transform: `rotateY(${angle}deg) translateZ(450px)`
      };
    }
  }
};
</script>