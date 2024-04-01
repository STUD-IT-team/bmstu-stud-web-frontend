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
    .contact
      display block
      hover-effect()
    .title
      color colorMiss2
</style>

<template>
  <div class="root-organizer-card">
    <ImageWebpJpg class="photo" :src-jpg="imageJpg" :src-webp="imageWebp" sizes="400px"></ImageWebpJpg>
    <section class="section-info">
      <header class="name">{{ name }}</header>

      <a :href="`tel:${phone}`" class="contact">{{ phone }}</a>
      <a :href="`mailto:${mail}`" class="contact">{{ mail }}</a>
      <a :href="`https://t.me/${telegram}`" class="contact">@{{ telegram }}</a>
      <div class="title">{{ title }}</div>
    </section>
  </div>
</template>

<script>
import ImageWebpJpg from "~/components/ImageWebpJpg.vue";

export default {
  components: {ImageWebpJpg},
  props: {
    imageWebp: {
      type: String,
      required: true,
    },
    imageJpg: {
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
    telegram: {
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
