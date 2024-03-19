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
        font-medium()
        border-radius 20px
        border 2px solid colorMiss1
        text-align center
        margin 20px
        margin-left 140px
        margin-right 140px
        padding-left 20px
        padding-right 20px
        padding-top 20px
        padding-bottom 20px
        .text1
          color white
          line-height 30px
        .text2
          color colorMiss1
          line-height 30px
      .cards-container-final
        list-style none
        display flex
        flex-wrap wrap
        padding-left 300px
        padding-right 300px
        padding-top 20px
        .card-final-1
          border 2px solid colorMiss1
          border-radius 13px
          overflow hidden
          background white
          margin 10px
          display flex
          width 600px
          height 195px
          .main-final-miss-1
            width 190px
            height 195px
            object-fit cover
            display inline-block
          .card-final-form-1
            background colorMiss1
            padding 15px
            display inline
            width auto
            height 195px
            .circle-final-1
              font-medium()
              color colorMiss1
              width 30px
              height 30px
              line-height 30px
              background white
              margin 5px
              border-radius 50%
              text-align center
              display inline-block
            .card-final-title-1
              font-large()
              color colorMiss2
              display inline
            .card-final-group-1
              font-small()
              color white
              display inline
              margin-left 5px
            .card-final-best-1
              font-large-extra()
              font-bold()
              color white
            .card-crown-1
              text-align right
              padding-top 20px
              .card-crown-img1
                width 20%
        .card-final-2
          border-radius 13px
          overflow hidden
          background white
          border 2px solid colorMiss1
          margin 10px
          display flex
          width 600px
          height 195px
          .main-final-miss-2
            width 190px
            height 195px
            object-fit cover
            display inline-block
          .card-final-form-2
            margin-bottom 5px
            margin-right 1px
            margin-left 1px
            padding 20px
            display inline
            width 400px
            height 195px
            .circle-final-2
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
            .card-final-title-2
              font-medium()
              color colorMiss2
              display inline
            .card-final-group-2
              font-small-extra()
              color colorMiss2
              display inline
              margin-left 32px
      .cards-container
        list-style none
        display flex
        flex-wrap wrap
        justify-content space-between
        padding-left 150px
        padding-right 150px
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
          margin-bottom 20px
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
      <div class="body-title">РЕЗУЛЬТАТЫ КОНКУРСА «МИСС ОЧАРОВАНИЕ – 2024»</div>
      <div class="body-text">
        <span class="text2">25 апреля </span>
        <span class="text1">в Большом зале Центра креативных индустрий прошел <br></span>
        <span class="text1">финал конкурса </span>
        <span class="text2">«МиСС Очарование  — 2024»</span>
        <span class="text1">. В этом году конкурс прошел<br></span>
        <span class="text1">в двадцать третий раз. На бауманской сцене выступили 10 финалисток,<br></span>
        <span class="text1">которые раскрыли свой талант и показали свою уникальность.<br></span>
        <span class="text1">Ниже представлены результаты конкурса.</span>
      </div>
        <ul class="cards-container-final">
          <li class="card-final-1">
            <img class="main-final-miss-1" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-final-form-1">
              <div class="circle-final-1">1</div>
              <span class="card-final-title-1">Ивченко Антонина<br></span>
              <span class="card-final-group-1">Группа: Э10-42Б<br></span>
              <span class="card-final-best-1">МИСС ОЧАРОВАНИЕ</span>
              <div class="card-crown-1"><img class="card-crown-img1" src="../../../res/images/crownWhite.png" alt="crownWhite"/></div>
            </div>
          </li>
          <li class="card-final-2">
            <img class="main-final-miss-2" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-final-form-2">
              <div class="circle-final-2">2</div>
              <span class="card-final-title-2">Хабидулина Александра<br></span>
              <span class="card-final-group-2">Группа: БМТ1-43Б</span>
              <img class="card-crown-2" src="../../../res/images/crownLilac.png" alt="crownLilac"/>
            </div>
          </li>
        </ul>
        <ul class="cards-container">  
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">3</div>
              <span class="card-title">Марченко Дарья<br></span>
              <span class="card-group">Группа: ИБМ6-21Б</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">4</div>
              <span class="card-title">Вершинина Елена<br></span>
              <span class="card-group">Группа: МТ4-21Б</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">5</div>
              <span class="card-title">Сахно София<br></span>
              <span class="card-group">Группа: СМ7-61Б</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">6</div>
              <span class="card-title">Тузкова Юлия<br></span>
              <span class="card-group">Группа: РК6-21Б</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">7</div>
              <span class="card-title">Федоренко Дарья<br></span>
              <span class="card-group">Группа: ИУ1-103</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">8</div>
              <span class="card-title">Мрыхина Полина<br></span>
              <span class="card-group">Группа: ЛТ6-25Б</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">9</div>
              <span class="card-title">Дубовицкая Елизавета<br></span>
              <span class="card-group">Группа: ЮР-46</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">10</div>
              <span class="card-title">Федорова Дарья<br></span>
              <span class="card-group">Группа: ФН2-42Б</span>
            </div>
          </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "~/components/Miss/FooterTenPartners.vue";
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


25 апреля в Большом зале Центра креативных индустрий прошел
финал конкурса «МиСС Очарование  — 2024». В этом году конкурс прошел
в двадцать третий раз. На бауманской сцене выступили 10 финалисток,
которые раскрыли свой талант и показали свою уникальность.
Ниже представлены результаты конкурса.

