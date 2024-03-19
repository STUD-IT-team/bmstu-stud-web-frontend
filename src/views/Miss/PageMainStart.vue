<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page
  background-image url("../../../res/images/backgroundLarge.png")
  background-size cover
  .main
    padding 40px 60px
    @media ({mobile})
      padding-left 0
      padding-right 0
    .title
      font-large-extra()
      font-normal()
      text-align center
      color colorMiss1
      margin-bottom 15px
    .cards-container
      list-style none
      display flex
      flex-wrap wrap
      justify-content space-between
      @media ({mobile})
        justify-content center
      gap 20px
      .card
        width 100%
        max-width 220px
</style>

<template>
  <div class="root-page">
    <Header></Header>

    <main class="main">
      <header class="title">ФИНАЛИСТКИ 2024</header>
      <ul class="cards-container">
        <MissCard v-for="(miss, idx) in missList"
                  class="card"
                  :group="miss.group"
                  :name="miss.name"
                  :position="idx + 1"
                  :image="miss.image"
        ></MissCard>
      </ul>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Miss/Header.vue";
import Footer from "~/components/Miss/Footer.vue";
import ImageMiss from "../../../res/images/imageMisska0.png";
import MissCard from "~/components/Miss/MissCard.vue";

export default {
  components: {MissCard, Header, Footer},

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
