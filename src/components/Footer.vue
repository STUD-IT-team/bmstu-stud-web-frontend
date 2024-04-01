<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.root-footer
  width 100%
  margin-top auto
  padding-top 300px

  .main-part
    display flex
    justify-content space-between
    max-width 1180px
    padding 0 20px
    margin 0 auto

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
          height 67px
          width 67px
          margin-right 30px
          hover-effect()

    .picture
      img
        height 403px

  .bottom-part
    display flex
    justify-content center
    align-items center
    gap 10px
    margin-top 40px
    border-top 1px solid colorBorder
    padding 20px

    .footer-label
      font-medium()

    img
      height 22px
</style>

<template>
  <footer class="root-footer">
    <div class="main-part">
      <div class="contacts">
        <header class="header">Контакты</header>
        <a class="address" href="https://yandex.ru/maps/-/CDRYrHYz">г.Москва, 2-я Бауманская улица, 5с4, южное крыло, ауд. 339ю</a>
        <a class="phone" href="tel:+74952636855">+7 (495) 263-68-55</a>
        <div class="messengers">
          <a href="https://vk.com/studsovet_bmstu"><img src="/res/icons/vk.svg" alt="vk"></a>
          <a href="https://t.me/studsovet_bmstu"><img src="/res/icons/telegram.svg" alt="tg"></a>
        </div>
      </div>
      <div class="picture">
        <img src="/res/icons/crane.svg" alt="">
      </div>
    </div>
    <div class="bottom-part">
      <span class="footer-label">Студенческий совет МГТУ&nbsp;им.&nbsp;Н.Э.&nbsp;Баумана, 2024 г.</span>
      <img src="/res/icons/stud-logo.svg" alt="logo">
    </div>
  </footer>
</template>

<script>
export default {}
</script>
