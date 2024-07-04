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
  // margin 0px
  button
    color white
    background colorPalette4
    font-small()
    border-radius 15px
    border-width 0
    padding 2px
    margin 10px
    align-self right
    position relative
    left 150px
  .title
    padding 28px
    padding-bottom 0px
    padding-top 0px
    // margin-top 0px
    font-medium()
    color colorPalette4
  img
    border-radius 23px
    width 396px
    user-select: none


</style>

<template>
  <div class="news-container">
    <div class="title">{{ title }}</div>
    <button class="button-orange"> &emsp; Читать подробнее ―――⟶ &emsp;</button>
    <img :src=img_url alt="">
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

    img_url: {
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
  }
};
</script>
