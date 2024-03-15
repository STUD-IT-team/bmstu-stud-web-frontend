<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'


.root-page-news
  padding 50px
  .header
    font-large-extra()
  .navbar-organizations
    width 100%
    border 1px solid white
    border-left none
    border-right none
    padding 10px 0
    .organization-button
      font-medium()
      font-bold()
      transition all .2s
      background linear-gradient(white, white) 50% 100% / 0 1px no-repeat
      &:hover
        background-size 100% 1px

  .side-block
    display inline-block
    block(colorPalette4)
    .heading
      font-large()
      margin-bottom 10px
    ul
      font-medium()
      list-style-image url(../../../res/images/Star.svg)
      margin-left 30px
</style>

<template>
  <div class="root-page-news">
    <header class="header">Лента новостей</header>

    <nav class="navbar-organizations">
      <router-link to="#" class="organization-button">Все события</router-link>
    </nav>

    <div class="container">
      <div class="side-block">
        <header class="heading">Поздравляем</header>
        <ul>
          <li>Поздравляем Антона Павленко с ДР!!!</li>
          <li>Поздравляем Антона Успенского со званием мисс.</li>
          <li>А вас не бесит it отдел?</li>
          <li>Это студенческий совет МГТУ им. Н.Э. Баумана.</li>
        </ul>
      </div>
      <div class="side-block">
        <header class="heading">Горячие новости</header>
        <ul>
          <li>Антон Павленко родился!!!</li>
          <li>Антон Успенский все мисс очарование сразу</li>
          <li>А вас не бесит it отдел?</li>
          <li>Меня бесит сайт для мисски</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},

  props: {
    items: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      loading: false,
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
