<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.footer-container
  border-top 1px solid colorMiss1
  text-align center
  margin-bottom 10px
  padding-top 25px
  .footer-top
    padding-bottom 25px
    .footer-title
      font-large()
      font-normal()
      color colorMiss1
    .partners-conteiner
      height auto
      width 800px
      display inline-grid
      grid-template-columns repeat(10, 1fr)
      grid-template-rows repeat(1, 1fr)
      grid-column-gap 10px
      grid-row-gap 10px
      padding-left 60px
      padding-right 60px
      margin-top 15px
      text-align center
      .partner
        width 100%
        margin 4px
  .footer-bottom
    border-top 1px solid colorMiss1
    padding-top 20px
    .footer-bottom-title
      font-medium()
      display inline-block
      .footer-logo
        width 60px
        height 23px
        display inline
        vertical-align bottom
</style>

<template>
    <footer class="footer-container">
        <div class="footer-top">
        <span class="footer-title">ПАРТНЁРЫ КОНКУРСА<br></span>
        <div class="partners-conteiner">
            <img v-for="_ in 10" class="partner" src="../../../res/icons/stud-logo.svg" alt="partner-logo"/>
        </div>
        </div>
        <div class="footer-bottom">
        <div class="footer-bottom-title">Сайт разработан в Студенческом совете МГТУ им. Н.Э. Баумана 2024
            <img class="footer-logo" src="../../../res/images/logoStudMiss.png" alt="stud-miss-logo"/>
        </div>
        </div>
    </footer>
</template>

<script>
export default {}
</script>
