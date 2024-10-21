<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'


titleHeight = 3rem
titleWidth = 13rem
cardHeight = 28rem
cardWidth = 18rem
iconSize = 2.5rem

trans-speed = 0.5s

  
.root-person
  --cardColorText colorText1
  --cardColorBg colorBg
  block(none)
  align-content left
  width max-content
  height max-content
  box-sizing border-box
  padding 0
  trans(trans-speed)
  input[type=radio]
    height titleHeight+cardHeight
    width cardWidth
    box-sizing border-box
    position absolute
    opacity 0
    &:checked ~
      .title-box
      .card-box
        --cardColorText: colorWhite
        --cardColorBg: colorPalette4
        .card-content .links img
          filter brightness(1000%)
  .title-box
    trans(trans-speed)
    width titleWidth
    height titleHeight
    background var(--cardColorBg)
    border none
    border-radius borderRadiusL
    border-bottom-left-radius 0
    border-bottom-right-radius 0
    margin-bottom -1px
    &:before
      content ''
      display block
      position absolute
      top inherit
      left inherit
      width inherit
      height inherit
      z-index -1
      border-radius borderRadiusL
      border-bottom-left-radius 0
      border-bottom-right-radius 0
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
    .title-text
      color var(--cardColorText)
      trans(trans-speed)
      font-medium()
      padding 15px 20px
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
      display block
      position absolute
      top inherit
      left inherit
      width inherit
      height inherit
      z-index -1
      border-radius borderRadiusL
      border-top-left-radius 0
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
    .card-content
      trans(trans-speed)
      padding 20px 20px
      height inherit
      display flex
      flex-direction column
      .image-container
        width 100%
        padding-top 100%
        position relative
        border-radius borderRadiusL
        img
          position absolute
          top 0
          left 0
          height 100%
          width 100%
          object-fit cover
          border-radius borderRadiusL
      .name
        color var(--cardColorText)
        trans(trans-speed)
        padding-top 1rem
        font-medium()
      .description
        color var(--cardColorText)
        trans(trans-speed)
        padding-top 0.5rem
        font-small()
      .links
        flex 1
        display flex
        gap 0.6rem
        align-items end
        img
          display inline-block
          position relative
          trans(trans-speed)
          border-radius 0
          width iconSize
  &:hover
    //input:checked ~ .title-box
    //input:checked ~ .card-box
    .title-box
    .card-box
      --cardColorText: colorWhite
      --cardColorBg: colorPalette1
      .card-content .links img
        filter brightness(1000%)
          


</style>

<template>

  <div class="root-person">
    <input 
      type="radio"
      disabled
      :checked="head">
    <div class="title-box">
        <div class="title-text">
          {{title}}
        </div>
      <div class="shadow"></div>
    </div>
    <div class=card-box>
      <div class="card-content">
        <div class="image-container">
          <img :src="imageSrc">
        </div>
        <div class="name">
          {{name}}
        </div>
        <div class="description">
          {{description}}
        </div>
        <div class="links">
          <a :href="linkVk"><img src="/res/icons/vk.svg" alt="vk"></a>
          <a :href="linkTg"><img src="/res/icons/tg.svg" alt="tg"></a>
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
