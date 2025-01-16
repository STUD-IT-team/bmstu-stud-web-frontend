<style lang="stylus" scoped>
@import '../../styles/constants.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'
@import '../../styles/buttons.styl'

.root-header
  position relative
  .background-container
    position relative
    &::after
      content ''
      position absolute
      inset 50% 0 0 0
      background linear-gradient(to top, colorBg, transparent)
    img
      width 100%
      min-width 100vw
      height 80vh
      min-height 80vh
      object-fit cover
  .days-preview
    position absolute
    right unquote('min(20%, 150px)')
    bottom 50px
    width 50%
</style>

<template>
  <header class="root-header">
    <div class="background-container">
      <img class="background" src="/static/images/header-image.jpg" alt="">
    </div>
    <DaysPreview class="days-preview" />
  </header>
</template>

<script>
import DaysPreview from "~/components/Header/DaysPreview.vue";

export default {
  components: {DaysPreview},
  props: {
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
