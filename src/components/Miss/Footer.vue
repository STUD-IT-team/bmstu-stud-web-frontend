<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.footer-container
  border-top 1px solid colorMiss1
  text-align center
  margin-bottom 10px
  .footer-logo
    padding-top 25px
    padding-bottom 25px
  .footer-text
    font-medium()
    padding-top 25px
</style>

<template>
  <footer class="footer-container">
    <div>
      <img class="footer-logo" src="../../../res/images/logoStudMiss.png" alt="miss-photo"/>
      <br>
      <span class="footer-text">Студенческий совет МГТУ им. Н.Э. Баумана 2024</span>
    </div>
  </footer>
</template>

<script>
export default {}
</script>