<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'

.root-header
  position relative
  .background-container
    position relative
    img
      min-width 100vw
      min-height 80vh
      width 100%
      height 80vh
      object-fit cover
    &::after
      content ''
      position absolute
      inset 50% 0 0 0
      background linear-gradient(to top, colorBg, transparent)
  .days-preview
    position absolute
    bottom 50px
    right unquote('min(20%, 150px)')
    width 50%
</style>

<template>
  <header class="root-header">
    <div class="background-container">
      <img class="background" src="/res/images/header-image.jpg" alt=""/>
    </div>
    <DaysPreview class="days-preview"></DaysPreview>
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
