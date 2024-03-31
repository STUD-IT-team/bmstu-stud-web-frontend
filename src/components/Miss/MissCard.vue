<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.root-miss-card
  border-radius borderRadiusM
  overflow hidden
  background white
  border 2px solid colorMiss1
  display flex
  flex-direction column
  &:hover
    .photo-container
      .photo
        filter brightness(1.2)
        transform scale(1.1)
        transition all 0.4s cubic-bezier(.04,.74,.15,1.02)
  .photo-container
    height 220px
    overflow hidden
    margin-bottom 3px
    .photo
      width 100%
      //height 100%
      height 350px
      transition all 0.4s ease-in-out

  .section-info
    margin-bottom 10px
    display flex
    gap 5px
    padding 0 4px
    circle-size = 26px
    .circle-position
      font-medium()
      color white
      min-width circle-size
      min-height circle-size
      width circle-size
      height circle-size
      line-height circle-size
      text-align center
      background colorMiss1
      border-radius borderRadiusMax
      overflow hidden
      padding-top 1px
    .name-group-container
      .name
        font-small()
        color colorMiss2
        line-height circle-size
        &.too-long
          letter-spacing -1px
          //line-height 1.2
      .group
        font-small-x()
        color colorMiss2

  .section-voting
    margin-top auto
    padding-bottom 7px
    .info
      font-small-x()
      border-top 1px solid colorMiss1
      padding 5px
      text-align center
      color colorMiss1
      .text-colored
        color colorMiss2

    .slider-container
      margin-sides = 10px
      position relative
      width 'calc(100% - %s)' % (margin-sides * 2)
      margin 0 margin-sides
      .slider
        slider-height = 10px
        font-small-xxx()
        background colorMiss1
        width calc(var(--progress) * 100%)
        padding 0 15px 0 10px
        height slider-height
        line-height slider-height
        border-radius borderRadiusMax
        margin-bottom 5px
        padding-top 1px
        trans()
        &::after
          content ""
          position absolute
          inset 0
          border 2px solid colorMiss1
          border-radius borderRadiusMax
          z-index -1
    .votes-count
      font-small-xx()
      color colorMiss2
      width 100%
      text-align center
</style>

<template>
  <router-link :to="{name: 'missProfile', params: {missId: id}}" class="root-miss-card">
    <div class="photo-container">
      <ImageWebpJpg class="photo" :src-webp="imageWebp" :src-jpg="imageJpg" sizes="240px" alt="photo"/>
    </div>
    <section class="section-info">
      <div class="circle-position">{{ id }}</div>
      <div class="name-group-container">
        <div class="name" :class="{'too-long': name.length >= 20}">{{ name }}</div>
        <div class="group">Группа: {{ group }}</div>
      </div>
    </section>
    <section v-if="showVotes" class="section-voting">
      <div class="info">Для голосования отправить SMS на номер <span class="text-colored">{{ phoneNumberToVoting }} </span> с кодом <span class="text-colored">СТУД {{ id }}</span></div>
      <div class="slider-container">
        <div class="slider" :style="{'--progress': progressToMax}">{{ Math.ceil(progressTotal * 100 * 100 / 100) }}%</div>
      </div>
      <div class="votes-count">Количество голосов: {{ votesCount }}</div>
    </section>
  </router-link>
</template>

<script>
import {phoneNumberToVoting} from "~/utils/constants";
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
    showVotes: Boolean,
    votesCount: Number,
    maxVotesCount: Number,
    totalVotesCount: Number,
  },

  computed: {
    progressTotal() {
      return this.votesCount / this.totalVotesCount;
    },
    progressToMax() {
      return this.votesCount / this.maxVotesCount;
    }
  },

  data() {
    return {
      phoneNumberToVoting,
    }
  }
}
</script>
