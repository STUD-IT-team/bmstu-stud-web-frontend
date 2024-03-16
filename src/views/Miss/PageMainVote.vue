<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'
  .root-page
    background-image url("../../../res/images/backgroundLarge.png")
    background-size cover
    .header-container
      text-align center
      border-bottom 1px solid colorMiss1
      padding-bottom 20px
      .title
        font-large-extra()
        font-normal()
        padding-top 70px
        padding-bottom 70px
      .buttons-container
        font-medium()
        width 100%
        display flex 
        justify-content space-between
        padding-left 100px
        padding-right 100px
    .body
      .body-title
        font-large()
        font-normal()
        text-align center
        padding-top 25px
        color colorMiss1
        word-wrap normal
        line-height 25px
      .body-text
        border-radius 20px
        border 2px solid colorMiss1
        text-align center
        margin 20px
        margin-left 100px
        margin-right 100px
        padding-left 40px
        padding-right 40px
        padding-top 10px
        padding-bottom 10px
        .text
          font-medium()
          padding-top 10px
          color white
          word-wrap normal
      .cards-container
        list-style none
        display flex
        flex-wrap wrap
        justify-content space-between
        padding-left 100px
        padding-right 100px
        padding-top 20px
        padding-bottom 65px
        .card
          border-radius 13px
          overflow hidden
          background white
          border 2px solid colorMiss1
          margin-left 10px
          margin-right 10px
          margin-top 10px
          margin-bottom 10px
          .main-miss
            width 190px
            height 195px
            object-fit cover
          .card-form
            margin-bottom 5px
            margin-right 1px
            margin-left 1px
            .circle
              font-small()
              color white
              width 26px
              height 26px
              line-height 26px
              background colorMiss1
              margin 3px
              border-radius 50%
              text-align center
              display inline-block
            .card-title
              font-small-extra()
              color colorMiss2
              display inline
            .card-group
              font-small-extra()
              color colorMiss2
              display flex
              margin-left 32px
          .card-vote
            font-small-extra()
            border-top 1px solid colorMiss1
            padding-top 5px
            margin-bottom 3px
            margin-right 5px
            margin-left 5px
            text-align center
            .text1
              color colorMiss1
            .text2
              color colorMiss2
          .slide-container
            width 100%
            text-align center
            margin-bottom 10px
            .how-many-vote
              font-XXS()
              color colorMiss2
    
          
          
          
          


          
        


        


</style>

<template>
  <div class="root-page">
    <header class="header-container">
      <div class="title">МИСС<br>ОЧАРОВАНИЕ</div>
      <div class="buttons-container">
        <span class="button">ГЛАВНАЯ</span>
        <span class="button">О КОНКУРСЕ</span>
        <span class="button">ПАРТНЕРЫ</span>
        <span class="button">КОНТАКТЫ</span>
        <span class="button">СТУДЕНЧЕСКИЙ СОВЕТ</span>
      </div>
    </header> 
    <div class="body">
      <div class="body-title">ФИНАЛИСТКИ КОНКУРСА 2024</div>
      <div class="body-text">
        <div class="text">Для того чтобы отдать голос за фаворитку, необходимо отправить SMS в формате:<br>«СТУД» и номер участницы на короткий номер 5533.<br></div>
        <div class="text">Например, для голосования за конкурсантку №1, нужно отправить SMS на номер 5533<br>с кодом: Студ 1 (пробел обязателен, регистр букв значения не имеет).<br></div>
        <div class="text">Только для Операторов России: Билайн, Мегафон, Tele2, Тинькофф, Мотив.<br></div>
        <div class="text">Стоимость отправки SMS: 11 рублей.<br>(SMS для подтверждения Оператору - бесплатно)<br></div>
        <div class="text">Организация голосования: Mvote.ru</div>
      </div>
      <ul class="cards-container">
          <li class="card" v-for="i in 10">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">{{i}}</div>
              <span class="card-title">Александра Хабидулина</span>
              <span class="card-group">Группа: БМТ1-43Б</span>
            </div>
            <div class="card-vote">
              <span class="text1">Для голосования отправить<br>SMS на номер </span>
              <span class="text2">5533 </span>
              <span class="text1">с кодом<br></span>
              <span class="text2">СТУД {{i}}</span>
            </div>
            <div class="slide-container">
              <input type="range" min="1" max="1000" class="slide" id="myRange" v-model="value">
              <div class="how-many-vote">Количество голосов: {{value}}</div>
            </div>
          </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "~/components/Miss/Footer.vue";
export default {
  components: {Footer},

  data() {
    return {
      value:50
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
