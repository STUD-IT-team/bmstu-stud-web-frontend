<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'

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
      background url(/static/icons/Star.svg) 0 50% no-repeat
      font-medium()
      &:not(:last-child)
        margin-bottom 20px
</style>

<template>
  <div class="root-listing-block">
    <header class="header">{{ title }}</header>
    <ul class="rows">
      <li v-for="row in textRows" class="row" v-html="row" />
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
