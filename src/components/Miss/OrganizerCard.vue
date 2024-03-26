<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.root-organizer-card
  border-radius borderRadiusM
  overflow hidden
  background white
  border 2px solid colorMiss1
  img.photo
    width 100%
    height 300px
    object-fit cover


  .section-info
    padding 4px 8px
    padding-bottom 13px
    > *
      font-small-x()
      color colorMiss1
      line-height 1.5
    .name
      font-medium()
      font-bold()
      color colorMiss2
      margin-bottom 3px
</style>

<template>
  <li class="root-organizer-card">
    <img class="photo" :src="image" alt="photo"/>
    <section class="section-info">
      <header class="name">{{ name }}</header>

      <div class="phone-number">{{ phone }}</div>
      <div class="mail">{{ mail }}</div>
      <div class="title">{{ title }}</div>
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
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
