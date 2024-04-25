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
  width 100%
  max-width 600px
  height 195px
  &:hover
    .miss-final-photo
      filter brightness(1.2)
      transform scale(1.1)
      transition all 0.4s ease-out-fast
  .miss-final-photo
    width 150px
    min-width 150px
    @media ({mobile})
      width 130px
      min-width 130px
    height 100%
    object-fit cover
    transition all 0.4s ease-in-out
    //.photo
    //  height 280px
  .card-final-form
    background colorMiss1
    padding 15px
    height 100%
    width 100%
    position relative
    circle-size = 30px
    circle-size-mobile = 20px
    @media ({mobile})
      padding-left 8px
      padding-top 8px
    .circle-name-container
      display flex
      align-items center
      gap 10px
      .circle-position
        font-medium()
        color colorMiss1
        width circle-size
        min-width circle-size
        height circle-size
        min-height circle-size
        line-height circle-size
        @media ({mobile})
          width circle-size-mobile
          min-width circle-size-mobile
          height circle-size-mobile
          min-height circle-size-mobile
          line-height circle-size-mobile
        text-align center
        display inline-block
        background white
        border-radius borderRadiusMax
        overflow hidden
        padding-top 1px
      .name
        font-large()
        display inline
        color colorMiss2
        line-height circle-size
        @media ({mobile})
          line-height 1
    .group
      font-small()
      display inline
    .title
      font-large-x()
      font-bold()
      @media ({mobile})
        font-large()

    .section-nominations
      display flex
      flex-wrap wrap
      margin-top 5px
      padding-right 70px
      @media({mobile})
        padding-right 30px
      gap 3px
      .nomination
        font-small()
        font-bold()
        centered-flex-container()
        background colorText1
        color colorMiss2
        border-radius borderRadiusXS
        padding 5px 10px

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
      .section-nominations
        .nomination
          background colorMiss1
          color colorText1
</style>

<template>
  <router-link :to="{name: 'missProfile', params: {missId: id}}" class="root-card-final" :class="{'light': light}">
    <div class="miss-final-photo">
      <ImageWebpJpg class="photo" :src-jpg="imageJpg" :src-webp="imageWebp" sizes="200px" alt="miss-photo"></ImageWebpJpg>
    </div>
    <div class="card-final-form">
      <div class="circle-name-container">
        <div class="circle-position">{{ id }}</div>
        <div class="name">{{ name }}<br></div>
      </div>
      <div class="group">Группа: {{ group }}<br></div>
      <span class="title">{{ title }}</span>

      <section class="section-nominations">
        <div v-for="nomination in nominations" class="nomination">{{ nomination }}</div>
      </section>

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
    nominations: Array,
  },

  computed: {
  }
}
</script>
