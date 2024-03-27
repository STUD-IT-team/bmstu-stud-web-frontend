<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-card-final
  border 2px solid colorMiss1
  border-radius 13px
  overflow hidden
  background white
  display flex
  width 600px
  height 195px
  &:hover
    .miss-final-photo
      filter brightness(1.2)
      transform scale(1.1)
      transition all 0.4s cubic-bezier(.04,.74,.15,1.02)
  .miss-final-photo
    width 190px
    height 195px
    object-fit cover
    display inline-block
    transition all 0.4s ease-in-out
  .card-final-form
    background colorMiss1
    padding 15px
    display inline
    height 195px
    width 100%
    position relative
    circle-size = 30px
    .circle-name-container
      display flex
      align-items center
      gap 10px
      .circle-position
        font-medium()
        color colorMiss1
        width circle-size
        height circle-size
        line-height circle-size
        text-align center
        display inline-block
        background white
        border-radius borderRadiusMax
        overflow hidden
      .name
        font-large()
        display inline
        color colorMiss2
        line-height circle-size
    .group
      font-small()
      display inline
    .title
      font-large-x()
      font-bold()

    .card-crown
      width 20%
      position absolute
      bottom 15px
      right 20px
  &.light
    .card-final-form
      background white
      .circle-name-container
        .circle-position
          background colorMiss1
          color colorText1
      .group
          color colorMiss1
      .title
        color colorMiss1
</style>

<template>
  <router-link :to="{name: 'missProfile', params: {missId: id}}" class="root-card-final" :class="{'light': light}">
    <ImageWebpJpg class="miss-final-photo" :src-jpg="imageJpg" :src-webp="imageWebp" sizes="200px" alt="miss-photo"></ImageWebpJpg>
    <div class="card-final-form">
      <div class="circle-name-container">
        <div class="circle-position">{{ id }}</div>
        <div class="name">{{ name }}<br></div>
      </div>
      <div class="group">Группа: {{ group }}<br></div>
      <span class="title">{{ title }}</span>


      <img v-if="light" class="card-crown" src="../../../res/icons/crownLilac.svg" alt="crownLilac"/>
      <img v-else class="card-crown" src="../../../res/icons/crownWhite.svg" alt="crownWhite"/>
    </div>
  </router-link>
</template>


<script>
import ImageWebpJpg from "~/components/ImageWebpJpg.vue";

export default {
  components: {ImageWebpJpg},
  props: {
    imageJpg: {
      type: String,
      required: true,
    },
    imageWebp: {
      type: String,
      required: true,
    },
    id: {
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
    light: Boolean,
    title: {
      type: String,
      required: true,
    },
  },

  computed: {
  }
}
</script>
