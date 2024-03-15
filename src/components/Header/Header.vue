<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'

.root-header
  position relative
  .background
    min-width 100vw
    min-height 100vh
    width 100%
    height 100%
    object-fit cover
  .days-preview
    position absolute
    bottom 20px
    right unquote('min(20%, 150px)')
    width 50%
</style>

<template>
  <header class="root-header">
    <img class="background" src="../../../res/images/header-image.jpg" alt=""/>
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
