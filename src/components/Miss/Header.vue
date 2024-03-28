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
    animation header-in 1s ease forwards
    @keyframes header-in
      from
        opacity 0
        letter-spacing 5px
      to
        opacity 1
        letter-spacing 0
    .special
      font-special()
      font-size 50px
      @media ({mobile})
        transform translateY(-70px) // WTF? Шрифт отображается ниже, чем нужно, только на настоящих мобилках, а не на компах с экраном в 300px
    .normal
      font-large-x()
      margin-top -25px
  .navbar-container
    font-medium()
    max-width 1180px
    centered-margin()
    width 100%
    display flex
    justify-content space-between
    @media ({mobile})
      justify-content space-evenly
    align-items center
    flex-wrap wrap
    gap 5px 20px
    padding 0 20px
    .button
      white-space nowrap
      hover-effect-underline()
      opacity 0
      animation button-in 0.5s ease forwards
      animation-delay calc(var(--animation-index) * 0.05s)
      @keyframes button-in
        from
          opacity 0
          transform translateY(20px)
        to
          opacity 1
          transform translateY(0)
  .decoration
    position absolute
    inset 0
    pointer-events none
    .sparkle
      position absolute
      animation sparkle-flick 3s cubic-bezier(0.06, 0.42, 0.78, 1.34) infinite
      @keyframes sparkle-flick
        0%
          opacity 65%
        8%
          opacity 75%
        28%
          opacity 65%
        30%
          opacity 100%
        46%
          opacity 70%
        52%
          opacity 90%
        69%
          opacity 75%
        73%
          opacity 90%
        80%
          opacity 70%
        86%
          opacity 100%
        100%
          opacity 60%

      &:nth-child(1)
        top 30%
        left calc(10% - 120px)
      &:nth-child(2)
        animation-delay 1.5s
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
      <router-link :to="{name: 'missMainVote'}" style="--animation-index: 0" class="button">ГЛАВНАЯ</router-link>
      <router-link :to="{name: 'missAbout'}" style="--animation-index: 1" class="button">О КОНКУРСЕ</router-link>
      <router-link :to="{name: 'missPartners'}" style="--animation-index: 2" class="button">ПАРТНЕРЫ</router-link>
      <router-link :to="{name: 'missContacts'}" style="--animation-index: 3" class="button">КОНТАКТЫ</router-link>
      <router-link :to="{name: 'default'}" style="--animation-index: 4" class="button">СТУДЕНЧЕСКИЙ СОВЕТ</router-link>
    </nav>

    <section class="decoration">
      <img class="sparkle" src="/res/images/miss-decorations/sparkle.png" alt="">
      <img class="sparkle" src="/res/images/miss-decorations/sparkle.png" alt="">
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
