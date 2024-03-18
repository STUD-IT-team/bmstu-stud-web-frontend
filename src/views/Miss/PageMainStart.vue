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
      padding-top 70px
      padding-bottom 70px
      .special
        font-special()
      .normal
        font-large-extra()
        margin-top -25px
    .navbar-container
      font-medium()
      width 100%
      display flex
      justify-content space-evenly
      align-items center
      flex-wrap wrap
      gap 5px 20px
      padding 0 20px
      .button
        white-space nowrap
  .body
    .body-title
      font-large()
      font-normal()
      text-align center
      padding-top 25px
      color colorMiss1
    .cards-container
      list-style none
      display flex
      flex-wrap wrap
      justify-content space-between
      padding-left 40px
      padding-right 40px
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
          width 214px
          height 225px
        .card-form
          margin-bottom 10px
          .circle
            font-medium()
            color white
            width 26px
            height 26px
            line-height 26px
            background colorMiss1
            margin 4px
            border-radius 50%
            text-align center
            display inline-block
          .card-title
            font-small()
            font-size 14.7px
            color colorMiss2
            display inline
          .card-group
            font-small-extra()
            font-thin()
            color colorMiss2
            display inline
            margin-left 34px
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
  <div class="root-page">
    <header class="header-container">
      <div class="title">
        <div class="special">Мисс</div>
        <div class="normal">ОЧАРОВАНИЕ</div>
      </div>
      <nav class="navbar-container">
        <div class="button">ГЛАВНАЯ</div>
        <div class="button">О КОНКУРСЕ</div>
        <div class="button">ПАРТНЕРЫ</div>
        <div class="button">КОНТАКТЫ</div>
        <div class="button">СТУДЕНЧЕСКИЙ СОВЕТ</div>
      </nav>
    </header>
    <div class="body">
      <div class="body-title">ФИНАЛИСТКИ КОНКУРСА 2024</div>
      <ul class="cards-container">
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">1</div>
              <span class="card-title">Ивченко Антонина<br></span>
              <span class="card-group">Группа: Э10-42Б</span>
            </div>
          </li>
          <li class="card">
            <img class="main-miss" src="../../../res/images/imageMisska0.png" alt="miss-photo"/>
            <div class="card-form">
              <div class="circle">2</div>
              <span class="card-title">Хабидулина Александра<br></span>
              <span class="card-group">Группа: БМТ1-43Б</span>
            </div>
          </li>
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
    <footer class="footer-container">
      <div>
        <img class="footer-logo" src="../../../res/images/logoStudMiss.png" alt="miss-photo"/>
        <br>
        <span class="footer-text">Студенческий совет МГТУ им. Н.Э. Баумана 2024</span>
      </div>
    </footer>
  </div>
</template>


1. Ивченко Антонина (Э10-42Б)
2. Хабидулина Александра (БМТ1-43Б)
3. Марченко Дарья (ИБМ6-21Б)
4. Вершинина Елена (МТ4-21Б)
5. Сахно София (СМ7-61Б)
6. Тузкова Юлия (РК6-21Б)
7. Федоренко Дарья (ИУ1-103)
8. Мрыхина Полина (ЛТ6-25Б)
9. Дубовицкая Елизавета (ЮР-46)
10. Федорова Дарья (ФН2-42Б)


<script>
export default {
  components: {},

  data() {
    return {
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
