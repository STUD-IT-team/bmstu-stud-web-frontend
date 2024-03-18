<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page
  background-image url("../../../res/images/backgroundLarge.png")
  background-size cover
  .main
    .title
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
      padding 20px 40px 65px 40px
      .card
        border-radius 13px
        overflow hidden
        background white
        border 2px solid colorMiss1
        margin 10px
        img.miss-photo
          width 214px
          height 225px
        .info
          margin-bottom 10px
          display flex
          gap 5px
          padding 0 4px
          circle-size = 26px
          .circle-position
            font-medium()
            color white
            width circle-size
            height circle-size
            line-height circle-size
            background colorMiss1
            border-radius 50%
            text-align center
            display inline-block
          .name-group-container
            .name
              font-small()
              line-height circle-size
              color colorMiss2
            .group
              font-small-extra()
              color colorMiss2
</style>

<template>
  <div class="root-page">
    <Header></Header>

    <main class="main">
      <header class="title">ФИНАЛИСТКИ КОНКУРСА 2024</header>
      <ul class="cards-container">
        <li v-for="(miss, idx) in missList" class="card">
          <img class="miss-photo" :src="miss.image" alt="photo"/>
          <section class="info">
            <div class="circle-position">{{ idx + 1 }}</div>
            <div class="name-group-container">
              <div class="name">{{ miss.name }}</div>
              <div class="group">Группа: {{ miss.group }}</div>
            </div>
          </section>
        </li>
      </ul>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Miss/Header.vue";
import Footer from "~/components/Miss/Footer.vue";
import ImageMiss from "../../../res/images/imageMisska0.png";

export default {
  components: {Header, Footer},

  data() {
    return {
      missList: [
        {name: 'Ивченко Антонина', group: 'Э10-42Б', image: ImageMiss},
        {name: 'Хабидулина Александра', group: 'БМТ1-43Б', image: ImageMiss},
        {name: 'Марченко Дарья', group: 'ИБМ6-21Б', image: ImageMiss},
        {name: 'Вершинина Елена', group: 'МТ4-21Б', image: ImageMiss},
        {name: 'Сахно София', group: 'СМ7-61Б', image: ImageMiss},
        {name: 'Тузкова Юлия', group: 'РК6-21Б', image: ImageMiss},
        {name: 'Федоренко Дарья', group: 'ИУ1-103', image: ImageMiss},
        {name: 'Мрыхина Полина', group: 'ЛТ6-25Б', image: ImageMiss},
        {name: 'Дубовицкая Елизавета', group: 'ЮР-46', image: ImageMiss},
        {name: 'Федорова Дарья', group: 'ФН2-42Б', image: ImageMiss},
      ]
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
