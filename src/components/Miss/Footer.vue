<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-footer-fiveteen-partners
  text-align center
  .footer-top
    border-top 1px solid colorMiss1
    padding 25px 0
    text-align center
    .footer-logos
      margin-bottom 15px
      .footer-logo-left
      .footer-logo-center
      .footer-logo-right
        hover-effect()
      .footer-logo-left
        height 100px
        margin-left 45px
        @media ({mobile})
          height 50px
          margin-left 15px
      .footer-logo-center
        height 100px
        margin 0 10px 0 15px
        @media ({mobile})
          height 50px
      .footer-logo-right
        height 90px
        @media ({mobile})
          height 40px

    .footer-title
      font-large()
      font-normal()
      color colorMiss1
      margin-bottom 15px
    .partners-container
      width 100%
      display flex
      flex-wrap wrap
      justify-content center
      gap 10px 5px
      margin 0 auto
      padding 0 120px
      @media ({mobile})
        padding 0 40px
      .partner
        flex 1
        min-width 40px
        max-width 80px
        hover-effect()

  .footer-bottom-title
    font-medium()
    @media ({mobile})
      font-small()
    border-top 1px solid colorMiss1
    padding 10px 0
</style>

<template>
  <footer class="root-footer-fiveteen-partners">
    <div class="footer-top">
      <div class="footer-logos">
        <a href="https://bmstu.ru" target="_blank"><img class="footer-logo-left" src="/res/icons/bmstu-logo.svg" alt="bmstu-logo"/></a>
        <router-link :to="{name: 'default'}"><img class="footer-logo-center" src="/res/icons/stud-logo.svg" alt="stud-logo"/></router-link>
        <router-link :to="{name: 'miss'}"><img class="footer-logo-right" src="/res/icons/crown-logo.svg" alt="crown-logo"/></router-link>
      </div>
      <div class="footer-title">ПАРТНЁРЫ КОНКУРСА</div>
      <div class="partners-container">
        <img v-for="_ in 15" class="partner" src="../../../res/icons/stud-logo.svg" alt="partner-logo"/>
      </div>
    </div>
    <div class="footer-bottom-title">Сайт разработан в Студенческом совете МГТУ им. Н.Э. Баумана 2024</div>
  </footer>
</template>

<script>
export default {}
</script>
