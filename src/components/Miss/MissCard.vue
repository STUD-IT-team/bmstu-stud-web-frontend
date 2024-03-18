<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.root-miss-card
  border-radius 13px
  overflow hidden
  background white
  border 2px solid colorMiss1
  margin 10px
  img.miss-photo
    width 214px
    height 225px
  .info
    margin-bottom 10px
    display flex
    gap 5px
    padding 0 4px
    circle-size = 26px
    .circle-position
      font-medium()
      color white
      width circle-size
      height circle-size
      line-height circle-size
      background colorMiss1
      border-radius 50%
      text-align center
      display inline-block
    .name-group-container
      .name
        font-small()
        line-height circle-size
        color colorMiss2
      .group
        font-small-extra()
        color colorMiss2
</style>

<template>
  <li class="root-miss-card">
    <img class="miss-photo" :src="image" alt="photo"/>
    <section class="info">
      <div class="circle-position">{{ position }}</div>
      <div class="name-group-container">
        <div class="name">{{ name }}</div>
        <div class="group">Группа: {{ group }}</div>
      </div>
    </section>
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
  },
}
</script>
