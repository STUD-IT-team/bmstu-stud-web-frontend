<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.root-listing-block
  block(colorPalette4)
  block-bg()
  .header
    font-large()
    margin-bottom 20px
  ul.rows
    list-style none
    li.row
      padding-left 30px
      background url(/res/icons/Star.svg) 0 50% no-repeat
      font-medium()
      &:not(:last-child)
        margin-bottom 20px
</style>

<template>
  <div class="root-listing-block">
    <header class="header">{{ title }}</header>
    <ul class="rows">
      <li v-for="row in textRows" class="row" v-html="row"></li>
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
