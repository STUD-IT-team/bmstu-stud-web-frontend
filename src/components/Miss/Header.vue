<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.root-miss-header
  border-bottom 1px solid colorMiss1
  padding-top 60px
  padding-bottom 12px
  position relative
  .title
    width 100%
    text-align center
    margin-bottom 60px
    user-select none
    .special
      font-special()
    .normal
      font-large-extra()
      margin-top -25px
  .navbar-container
    font-medium()
    width 100%
    display flex
    justify-content space-evenly
    align-items center
    flex-wrap wrap
    gap 5px 20px
    padding 0 20px
    .button
      white-space nowrap
      hover-effect-underline()
  .decoration
    position absolute
    inset 0
    pointer-events none
    .sparkle
      position absolute
      &:nth-child(1)
        top 30%
        left calc(10% - 120px)
      &:nth-child(2)
        top 10%
        right calc(20% - 240px)
</style>

<template>
  <header class="root-miss-header">
    <header class="title">
      <div class="special">Мисс</div>
      <div class="normal">ОЧАРОВАНИЕ</div>
    </header>
    <nav class="navbar-container">
      <router-link :to="{name: 'missMainStart'}" class="button">ГЛАВНАЯ</router-link>
      <router-link :to="{name: 'missMainVote'}" class="button">О КОНКУРСЕ</router-link>
      <router-link :to="{name: 'missMainFinal'}" class="button">ПАРТНЕРЫ</router-link>
      <router-link :to="{name: 'miss'}" class="button">КОНТАКТЫ</router-link>
      <router-link :to="{name: 'default'}" class="button">СТУДЕНЧЕСКИЙ СОВЕТ</router-link>
    </nav>

    <section class="decoration">
      <img class="sparkle" src="../../../res/images/miss-decorations/sparkle.png" alt="">
      <img class="sparkle" src="../../../res/images/miss-decorations/sparkle.png" alt="">
    </section>
  </header>
</template>

<script>
export default {
  props: {
  },

  data() {
    return {
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  }
};
</script>
