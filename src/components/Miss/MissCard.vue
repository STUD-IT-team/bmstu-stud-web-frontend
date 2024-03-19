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
  img.miss-photo
    width 100%
    height 210px
    object-fit cover

  .section-info
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
      text-align center
      padding-top 2px
      background colorMiss1
      border-radius borderRadiusMax
      overflow hidden
    .name-group-container
      .name
        font-small()
        color colorMiss2
        line-height circle-size
        &.too-long
          letter-spacing -.3px
          font-small-extra()
          line-height circle-size
      .group
        font-small-extra()
        color colorMiss2

  .section-voting
    padding-bottom 7px
    .info
      font-small-extra()
      border-top 1px solid colorMiss1
      padding 5px
      text-align center
      color colorMiss1
      .text-colored
        color colorMiss2

    .slider
      slider-height = 10px
      margin-sides = 10px
      font-small-xxx()
      background colorMiss1
      width 'calc(var(--progress) * 100% - %s)' % (margin-sides * 2)
      margin 0 margin-sides
      padding 0 10px
      height slider-height
      line-height slider-height
      padding-top 1px
      border-radius borderRadiusMax
      margin-bottom 5px
      trans()

    .votes-count
      font-small-xx()
      color colorMiss2
      width 100%
      text-align center
</style>

<template>
  <li class="root-miss-card">
    <img class="miss-photo" :src="image" alt="photo"/>
    <section class="section-info">
      <div class="circle-position">{{ position }}</div>
      <div class="name-group-container">
        <div class="name" :class="{'too-long': name.length >= 20}">{{ name }}</div>
        <div class="group">Группа: {{ group }}</div>
      </div>
    </section>
    <section v-if="showVotes" class="section-voting">
      <div class="info">
        Для голосования отправить SMS на номер
        <span class="text-colored">5533 </span>
        с кодом
        <span class="text-colored">СТУД {{ position }}</span>
      </div>
      <div class="slider" :style="{'--progress': progressToMax}">{{ Math.ceil(progressTotal * 100 * 100 / 100) }}%</div>
      <div class="votes-count">Количество голосов: {{ votesCount }}</div>
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
  }
}
</script>
