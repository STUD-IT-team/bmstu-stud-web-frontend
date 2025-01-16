<style lang="stylus" scoped>
@import '../styles/components.styl'
@import '../styles/buttons.styl'
@import '../styles/constants.styl'
@import '../styles/fonts.styl'

.root-404
  width 100%
  margin-top 200px
  padding 20px
  .form
    max-width 600px
    margin 20px auto
    padding 20px
    padding-top 10px
    color colorText1
    text-align center
    background-color colorBg
    border-radius borderRadiusM
    .title
      font-large()

      margin-bottom 10px
    .info
      font-medium()

      margin-bottom 15px
    .link
      font-large()
      button()
</style>

<template>
  <div class="root-404">
    <div class="form">
      <div class="title">404 Страница не найдена</div>
      <div class="info">Запрошенной страницы не существует</div>
      <router-link :to="{name: 'default'}" class="link">На главную</router-link>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {Footer}
}
</script>

