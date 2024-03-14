<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'

.text-big
  font-large()

.root-page
  margin-top 2.5%
  margin-left 10%
  margin-right 10%

/* NAVIGATION */
nav
  width: 80%

  ul
    list-style: none
    text-align: left

    li
      display: inline-block

      a
        display: block
        color: #ffffff
        font-weight: 800
        transition: all .5s
        font-medium()


// stroke
nav.stroke
  ul li a,
  ul li a:after,
  ul li a:before
    position: relative
    transition: all .5s

  ul li a:after
    position: absolute
    bottom: 0
    left: 0
    right: 0
    margin: auto
    width: 0%
    content: '.'
    color: transparent
    background: #ffffff
    height: 1px

  ul li a:hover:after
    width: 100%

// fill
nav.fill
  ul li a
    position: relative
    transition: all 2s

  ul li a:after
    position: absolute
    bottom: 0
    left: 0
    right: 0
    margin: 0
    content: '.'
    color: transparent
    background: #aaa
    height: 1px
    opacity: 0

  ul li a:hover
    color: #fff
    z-index: 1

  ul li a:hover:after
    z-index: -10
    animation: fill 1s forwards
    -webkit-animation: fill 1s forwards
    -moz-animation: fill 1s forwards
    opacity: 1

.line
  margin-top 1%
  margin-bottom 1%
  &:after
    content ""
    display block
    width 80%
    height 1px
    background-color #dddddd
    //top 50%

.congratulations
  float left
  display block
  width 300px
  block()
  border-color #FE5960
  font-medium()

ul
  list-style-image: url(../../../res/images/star.png)
</style>

<template>
  <div class="root-page">
    <!-- ... -->
    <div class="text-big"> Лента новостей</div>
    <div class="line"></div>
    <div>
      <nav class="stroke">
        <ul>
          <li><a href="#">Все события</a></li>
        </ul>
      </nav>
    </div>
    <div class="line"></div>

    <!--    <CircleLoading v-if="isLoading"></CircleLoading>-->
    <div class="container">
      <div class="congratulations">
        <ul>
          <li>Поздравляем Антон Павленко с ДР!!!</li>
          <li>Саша Морозова всё ещё не сделала дизайн.</li>
          <li>Стрим идёт хорошо!!!</li>
          <li>Это студенческий совет МГТУ им. Н.Э. Баумана.</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import CircleLoading from "~/components/CircleLoading.vue";

export default {
  components: {},

  data() {
    return {
      feeds: [],

      isLoading: false,
    }
  },

  async mounted() {
  },

  methods: {}
}
</script>
