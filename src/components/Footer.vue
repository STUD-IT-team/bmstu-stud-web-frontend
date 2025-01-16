<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'

.root-footer
  width 100%
  margin-top auto
  padding-top 300px

  .main-part
    display flex
    justify-content space-between
    max-width 1180px
    margin 0 auto
    padding 0 20px

    .contacts
      .header
        font-large-xx()

        margin-bottom 40px

      .address
        display block
        margin-bottom 27px
        font-medium()
        hover-effect()

      .phone
        display block
        font-medium()

        margin-bottom 47px
        hover-effect()

      .messengers
        img
          width 67px
          height 67px
          margin-right 30px
          hover-effect()


  .bottom-part
    position relative
    display flex
    flex-direction row
    gap 10px
    align-items center
    justify-content center
    margin-top 40px
    padding 20px
    border-top 1px solid colorBorder

    .footer-label
      font-medium()

    img
      position absolute
      bottom 0
      height 22px

    .picture
      img
        position absolute
        right 0px
        bottom 0px
        width 30vw
        // height 403px
        height 33vw
</style>

<template>
  <footer class="root-footer">
    <div class="main-part">
      <div class="contacts">
        <header class="header">Контакты</header>
        <a class="address" href="https://yandex.ru/maps/-/CDRYrHYz">г.Москва, 2-я Бауманская улица, 5с4, южное крыло,
          ауд. 339ю</a>
        <a class="phone" href="tel:+74952636855">+7 (495) 263-68-55</a>
        <div class="messengers">
          <a href="https://vk.com/studsovet_bmstu"><img src="/static/icons/vk.svg" alt="vk"></a>
          <a href="https://t.me/studsovet_bmstu"><img src="/static/icons/tg.svg" alt="tg"></a>
        </div>
      </div>
    </div>
    <div class="bottom-part">
      <div class="picture">
        <img src="/static/icons/hoomans.svg" alt="">
      </div>
      <span class="footer-label">Студенческий совет МГТУ&nbsp;им.&nbsp;Н.Э.&nbsp;Баумана, 2024 г.</span>
      <img src="/static/icons/stud-logo-colored.svg" alt="logo">
    </div>
  </footer>
</template>

<script>
export default {}
</script>
