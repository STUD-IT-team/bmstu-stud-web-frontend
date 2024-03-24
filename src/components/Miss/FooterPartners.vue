<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.footer-container
  border-top 1px solid colorMiss1
  text-align center
  padding 25px 0
  .footer-logo
    width 25%
    margin-bottom 25px
  .footer-text
    font-medium()
</style>

<!-- <template>
  <footer class="footer-container">
    <img class="footer-logo" src="/res/icons/logoBaumStudMiss.svg" alt="miss-photo"/>
    <div class="footer-text">Студенческий совет МГТУ им. Н.Э. Баумана 2024</div>
  </footer>
</template> -->

<template>
    <footer class="footer-container">
      <div class="footer-top">
        <span class="footer-title">ПАРТНЁРЫ КОНКУРСА<br></span>
        <div class="partners-conteiner">
          <div v-for="_ in 5"><img class="partner" src="../../../res/icons/stud-logo.svg" alt="partnere-test-logo"/></div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-text">Сайт разработан в Студенческом совете МГТУ им. Н.Э. Баумана 2024
          <img class="footer-logo" src="../../../res/icons/logoBaumStudMiss.svg" alt="stud-miss-logo"/>
        </div>
      </div>
    </footer>
</template>



<script>
export default {
}
</script>
