<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.root-miss-header
  border-bottom 1px solid colorMiss1
  padding-top 70px
  padding-bottom 20px
  .title
    margin 0 auto
    width min-content
    margin-bottom 70px
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
</style>

<template>
  <header class="root-miss-header">
    <header class="title">
      <div class="special">Мисс</div>
      <div class="normal">ОЧАРОВАНИЕ</div>
    </header>
    <nav class="navbar-container">
      <router-link :to="{name: 'miss'}" class="button">ГЛАВНАЯ</router-link>
      <router-link :to="{name: 'miss'}" class="button">О КОНКУРСЕ</router-link>
      <router-link :to="{name: 'miss'}" class="button">ПАРТНЕРЫ</router-link>
      <router-link :to="{name: 'miss'}" class="button">КОНТАКТЫ</router-link>
      <router-link :to="{name: 'default'}" class="button">СТУДЕНЧЕСКИЙ СОВЕТ</router-link>
    </nav>
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
