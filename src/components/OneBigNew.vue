<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.news-container
  block(colorPalette4)
  min-width 407px
  height 310px  
  padding 0px
  padding 10px
  position relative
  border-radius 23px
  transition background 0.3s, transform 0.3s

  .button-read-more
    color white
    font-small()
    // width 224px
    // height 25px
    background colorPalette4
    border 1px colorPalette4 solid
    border-radius 15px
    padding 4px 10px
    position relative
    top 5px
    left 130px
    transition background 0.3s, color 0.3s

    svg
      fill white
      transition fill 0.3s

    &:hover
      background white
      color colorPalette4

      svg
        fill orange

  .title
    font-medium()
    color colorPalette4

 

  &:hover .image-container
    .description 
      display inline

  .image-container
    position relative
    margin-top 15px
    width 100%
    height 79%
    background colorBg2
    border-radius 20px
    .description
      font-medium()
      color colorPalette5
      position absolute
      top 0px
      left 10px
      color white
      padding 20px
      width 100%
      height 100%
      overflow auto
      //scrollbar hidden
      //box-sizing border-box
      text-align left
      display none
      scrollbar-width none
      &::-webkit-scrollbar
        display none
    img
      bottom 0
      left 0
      width 100%
      height 100%
      border-radius 20px
      object-fit cover
      user-select: none
      transition filter 0.2s

  &:hover img
    filter brightness(0.3)

</style>

<template>
  <div class="news-container">
    <div class="title">{{ title }}</div>
    <a :href="redirectLink" target="_blank" class="button-read-more">
      Читать подробнее
      <svg width="88" height="8" viewBox="0 0 88 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M87.3535 4.35353C87.5487 4.15827 87.5487 3.84169 87.3535 3.64643L84.1715 0.464446C83.9762 0.269184 83.6596 0.269184 83.4644 0.464447C83.2691 0.659709 83.2691 0.976291 83.4644 1.17155L86.2928 3.99998L83.4644 6.82841C83.2691 7.02367 83.2691 7.34025 83.4644 7.53551C83.6596 7.73078 83.9762 7.73078 84.1715 7.53551L87.3535 4.35353ZM0.674316 4.5L86.9999 4.49998L86.9999 3.49998L0.674316 3.5L0.674316 4.5Z" />
      </svg>
    </a>
    <div class="image-container">
      <img :src="imgUrl" alt="">
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },

    redirectLink: {
      type: String,
      required: true,
    },
  },

  computed: {
  },

  data() {
    return {
    }
  },


  mounted() {
  },

  methods: {
  },
};
</script>
