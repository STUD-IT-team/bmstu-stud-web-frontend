<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

block-bg-color = colorBg2
images-section-width = 250px
text-section-max-height = 265px

trans-speed = 0.5s

card-color = colorBg

.root-person
  block(none)
  align-content left
  width max-content
  height max-content
  box-sizing border-box
  padding 0
  trans(trans-speed)
  .title-box
    trans(trans-speed)
    width 17 rem
    height 3rem
    background colorBg
    border none
    border-radius borderRadiusL
    border-bottom-left-radius 0
    border-bottom-right-radius 0
    color colorText1
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
      trans(trans-speed)
      font-large()
      padding 15px 20px
  .card-box
    trans(trans-speed)
    width 22rem
    height 32rem
    background colorBg
    border none
    border-radius borderRadiusL
    border-top-left-radius 0
    color colorText1
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
      img
        width 100%
        border-radius borderRadiusL
      .name
        trans(trans-speed)
        padding-top 1rem
        font-large()
      .description
        trans(trans-speed)
        padding-top 0.5rem
        font-small()
      .links
        flex 1
        display flex
        gap 0.6rem
        img
          display block
          position relative
          trans(trans-speed)
          border-radius 0
          width 2.5rem
          top calc(100% - 2.5rem)
  &:hover
    .title-box
    .card-box
      background colorPalette1
      .title-text
        color colorWhite
      .card-content
        .name 
        .description
          color colorWhite
        .links img
          filter brightness(1000%)
          


</style>

<template>

  <div class="root-person">
    <div class="title-box">
        <div class="title-text">
          {{title}}
        </div>
      <div class="shadow"></div>
    </div>
    <div class=card-box>
      <div class="card-content">
        <img src="/res/images/person-placeholder.jpg">
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
  // emits: ['delete', 'pin', 'upnin', 'edit'],

  components: {CircleLoading},

  props: {
    id: {
      type: Number,
      required: true,
    },
    // organizationLogo: {
    //   type: String,
    //   required: false,
    // },
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
    linkVk: {
      type: String,
      default: '',
    },
    linkTg: {
      type: String,
      default: '',
    },
    // imagesSrc: {
    //   type: Array,
    //   default: [],
    // },
    // // timePublished: Date,
    // isPinned: Boolean,
    // isCollapsedByDefault: Boolean,
  },

  data() {
    return {
      // isCollapsed: this.$props.isCollapsedByDefault,
      // isEditBlockOpened: false,

      loading: false,
    }
  },

  computed: {
    // datePrettified() {
    //   return this.timePublished.toLocaleDateString('ru-RU', {day: "numeric", month: "short", hour: "numeric", minute: "numeric"});
    // }
  },

  mounted() {
    // this.isCollapsed = true;
  },

  methods: {  }
};
</script>
