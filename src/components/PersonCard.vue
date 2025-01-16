<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'
@import '../styles/animations.styl'

cardHeight = 28rem
cardWidth = 18rem
iconSize = 2.5rem


titleHeight = 3rem
titleWidth = 13rem

trans-speed = 0.5s


.root-person
  --cardColorText colorText1
  --cardColorBg colorBg
  block(none)

  align-content left
  box-sizing border-box
  width max-content
  height max-content
  padding 0
  trans(trans-speed)
  input[type=radio]
    position absolute
    box-sizing border-box
    width cardWidth
    height titleHeight+cardHeight
    opacity 0
    &:checked ~
      .title-box
      .card-box
        --cardColorText colorWhite
        --cardColorBg colorPalette4
        .card-content .links img
          filter brightness(1000%)
  .title-box
    trans(trans-speed)

    width titleWidth
    height titleHeight
    margin-bottom -1px
    background var(--cardColorBg)
    border none
    border-radius borderRadiusL
    border-bottom-right-radius 0
    border-bottom-left-radius 0
    &:before
      content ''
      position absolute
      z-index -1
      top inherit
      left inherit
      display block
      width inherit
      height inherit
      border-radius borderRadiusL
      border-bottom-right-radius 0
      border-bottom-left-radius 0
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
    .title-text
      padding 15px 20px
      color var(--cardColorText)
      trans(trans-speed)
      font-medium()
  .card-box
    trans(trans-speed)

    width cardWidth
    height cardHeight
    background var(--cardColorBg)
    border none
    border-radius borderRadiusL
    border-top-left-radius 0
    &:before
      content ''
      position absolute
      z-index -1
      top inherit
      left inherit
      display block
      width inherit
      height inherit
      border-radius borderRadiusL
      border-top-left-radius 0
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
    .card-content
      trans(trans-speed)

      display flex
      flex-direction column
      height inherit
      padding 20px 20px
      .image-container
        position relative
        width 100%
        padding-top 100%
        border-radius borderRadiusL
        img
          position absolute
          top 0
          left 0
          width 100%
          height 100%
          object-fit cover
          border-radius borderRadiusL
      .name
        padding-top 1rem
        color var(--cardColorText)
        trans(trans-speed)
        font-medium()
      .description
        padding-top 0.5rem
        color var(--cardColorText)
        trans(trans-speed)
        font-small()
      .links
        display flex
        flex 1
        gap 0.6rem
        align-items end
        img
          position relative
          display inline-block
          width iconSize
          border-radius 0
          trans(trans-speed)
  &:hover
    // input:checked ~ .title-box
    // input:checked ~ .card-box
    .title-box
    .card-box
      --cardColorText colorWhite
      --cardColorBg colorPalette1
      .card-content .links img
        filter brightness(1000%)



</style>

<template>
  <div class="root-person">
    <input
      type="radio"
      disabled
      :checked="head"
    >
    <div class="title-box">
      <div class="title-text">
        {{ title }}
      </div>
      <div class="shadow" />
    </div>
    <div class="card-box">
      <div class="card-content">
        <div class="image-container">
          <img :src="imageSrc">
        </div>
        <div class="name">
          {{ name }}
        </div>
        <div class="description">
          {{ description }}
        </div>
        <div class="links">
          <a :href="linkVk"><img src="/static/icons/vk.svg" alt="vk"></a>
          <a :href="linkTg"><img src="/static/icons/tg.svg" alt="tg"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleLoading from "~/App.vue";

export default {

  components: {CircleLoading},

  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    },
    linkVk: {
      type: String,
      default: '',
    },
    linkTg: {
      type: String,
      default: '',
    },
    head: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loading: false,
    }
  },

  mounted() {
  },

  methods: {  }
};
</script>
