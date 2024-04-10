<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'
@require '../../styles/animations.styl'

.root-miss-header
  border-bottom 1px solid colorMiss1
  padding-top 20px
  padding-bottom 12px
  position relative
  .title
    width 100%
    text-align center
    margin-bottom 10px
    user-select none
    animation header-in 1s ease forwards
    @keyframes header-in
      from
        opacity 0
        letter-spacing 5px
      to
        opacity 1
        letter-spacing 0
    .logo
      width 40vw
      max-width 250px
  .navbar-container
    font-medium()
    centered-margin()
    width 100%
    display flex
    justify-content space-between
    @media ({mobile})
      justify-content space-evenly
    align-items center
    flex-wrap wrap
    gap 5px 20px
    padding-sides = 120px
    padding 0 120px
    max-width (1140px + padding-sides * 2)
    @media ({mobile})
      padding 0 20px
    .button
      white-space nowrap
      hover-effect-underline()
      animation-float(0.5s, 0, 20px)
      animation-index-delay(0.05s)
      &.router-link-exact-active
        background-size 100% 1px
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
      <img class="logo" src="/res/images/miss/headerLogo.svg" alt="logo">
    </header>
    <nav class="navbar-container">
      <router-link :to="{name: 'miss'}" style="--animation-index: 0" class="button">ГЛАВНАЯ</router-link>
      <router-link :to="{name: 'missAbout'}" style="--animation-index: 1" class="button">О КОНКУРСЕ</router-link>
      <router-link v-if="partnersList.length" :to="{name: 'missPartners'}" style="--animation-index: 2" class="button">ПАРТНЁРЫ</router-link>
      <router-link :to="{name: 'missContacts'}" style="--animation-index: 3" class="button">КОНТАКТЫ</router-link>
<!--      <router-link :to="{name: 'default'}" style="&#45;&#45;animation-index: 4" class="button">СТУДЕНЧЕСКИЙ СОВЕТ</router-link>-->
    </nav>

    <section class="decoration">
      <img class="sparkle" src="/res/images/miss-decorations/sparkle.png" alt="">
      <img class="sparkle" src="/res/images/miss-decorations/sparkle.png" alt="">
    </section>
  </header>
</template>

<script>
import {partnersList} from "~/utils/constantsMiss";

export default {
  props: {
  },

  data() {
    return {
      partnersList,
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
