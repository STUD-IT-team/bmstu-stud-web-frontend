<style lang="stylus" scoped>
@require '../styles/components.styl'
@require '../styles/buttons.styl'
@require '../styles/constants.styl'
@require '../styles/fonts.styl'

.root-404
  width 100%
  padding 20px
  margin-top 200px
  .form
    margin 20px auto
    max-width 600px
    background-color colorBg
    border-radius borderRadiusM
    padding 20px
    padding-top 10px
    text-align center
    color colorText1
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

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {Footer}
}
</script>

