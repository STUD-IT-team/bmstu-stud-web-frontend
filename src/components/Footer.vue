<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'

.root-footer
    width 100%

    .main-part
        display flex
        justify-content space-between
        padding 40px
    
        .contacts
            width 810px
            margin-left 120px

            .header
                font-large-xx()
                font-thin()
                margin-bottom 20px

            .address
            .phone
                display block
                margin-bottom 25px
                font-medium()

            .messangers 
                img
                    height 60px
                    width 60px
                    margin 20px 20px 20px 0px

        .picture
            img
                height 400px
                width 320px
                margin-right 150px

    .down-border
        border-top 1px solid white
        display flex
        justify-content center
        .footer-label
            font-medium()
            margin 20px 10px 20px 20px
</style>

<template>
    <footer class="root-footer">
        <div class="main-part">
            <div class="contacts">
                <header class="header">Контакты</header>
                <a class="address">г.Москва, 2-я Бауманская улица, 5с4, южное крыло, ауд. 339ю</a>
                <a class="phone" href="tel:+74952636855">+7 (495) 263 68-55</a>
                <div class="messangers">
                    <a href="https://vk.com/studsovet_bmstu"><img src="/res/icons/vk.svg"></a>
                    <a href="https://t.me/studsovet_bmstu"><img src="/res/icons/telegram.svg"></a>
                </div>
            </div>
            <div class="picture">
                <img src="/res/icons/crane.svg">
            </div>
        </div>
        <div class="down-border">
            <label class="footer-label">Студенческий совет МГТУ им. Н.Э. Баумана 2024</label>
            <img src="/res/icons/bmstu_logo.svg">
        </div>
    </footer>
</template>

<script>
export default {}
</script>