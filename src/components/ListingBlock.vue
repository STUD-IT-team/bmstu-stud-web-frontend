<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.root-listing-block
  block(colorPalette4)
  .header
    font-large()
    margin-bottom 10px
  ul.rows
    font-medium()
    list-style-image url(../../../res/images/Star.svg)
    margin-left 30px
    li.row::marker
      w 1
</style>

<template>
  <div class="root-listing-block">
    <header class="header">{{ title }}</header>
    <ul class="rows">
      <li v-for="row in textRows" class="row">{{ row }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    textRows: {
      type: Array,
      required: true,
    }
  },
};
</script>
