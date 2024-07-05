<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.news-container
  block(colorPalette4)
  padding 0px
  padding-top 20px
  width 400px
  height 315px
  display flex
  flex-direction column
  position relative
  overflow hidden
  border-radius 23px
  transition background 0.3s, transform 0.3s

  .button-read-more
    color white
    width 230px
    background colorPalette4
    font-small-x()
    border-radius 15px
    border-width 1px
    border-color colorPalette4
    border-style solid
    padding 3px
    margin 8px
    align-self right
    position relative
    left 150px
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
    padding 28px
    padding-bottom 0px
    padding-top 0px
    font-medium()
    color colorPalette4

  .description
    font-medium()
    position absolute
    top 80px
    color white
    padding 20px
    width 100%
    box-sizing border-box
    text-align left
    display none

  &:hover .description
    display inline

  img
    position absolute
    bottom 0
    border-radius 20px
    width 396px
    user-select none
    transition filter 0.3s

  &:hover img
    filter brightness(0.3)

</style>

<template>
  <div class="news-container">
    <div class="title">{{ title }}</div>
    <a :href="redirectLink" target="_blank" class="button-read-more">
      &emsp; Читать подробнее
      <svg width="88" height="8" viewBox="0 0 88 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M87.3535 4.35353C87.5487 4.15827 87.5487 3.84169 87.3535 3.64643L84.1715 0.464446C83.9762 0.269184 83.6596 0.269184 83.4644 0.464447C83.2691 0.659709 83.2691 0.976291 83.4644 1.17155L86.2928 3.99998L83.4644 6.82841C83.2691 7.02367 83.2691 7.34025 83.4644 7.53551C83.6596 7.73078 83.9762 7.73078 84.1715 7.53551L87.3535 4.35353ZM0.674316 4.5L86.9999 4.49998L86.9999 3.49998L0.674316 3.5L0.674316 4.5Z" />
      </svg>
    </a>
    <img :src="imgUrl" alt="">
    <div class="description">{{ description }}</div>
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
    openRedirectLink() {
      // Открыть ссылку в новой вкладке
      window.open(this.redirectLink, '_blank');
    }
  },
};
</script>
