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

.root-org
  block(none)
  block-bg(colorBg)
  padding 10px 50px
  box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
  display flex
  gap 40px
  position relative
  align-items center
  trans()
  img
    height 72px
    max-width 72px
  .text
    font-small()
    header
      font-large-x()
  &:hover
    background colorPalette5
    .text
      color colorWhite
      header
        color colorWhite
</style>

<template>
  <div class="root-org">
    <img src="/res/images/stud-logo-circle.svg">
    <div class="text">
      <header>{{title}}</header>
      {{text}}
      <br>
      {{headTitle}}: {{headName}}
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
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    headTitle: {
      type: String,
      default: 'Руководитель',
    },
    headName: {
      type: String,
      default: '',
      required: true,
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
