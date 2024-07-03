<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'

.root-page-news 
  position relative
  .emotions-sector 
    position relative
    .background-video 
      img
        user-select none
        margin-top 80px
        top 10px
        width 100%
    .overlay-video
      .stud-logo
        img
          position absolute
          top 29%
          left 11%
          width 30%

      .create-emotions-circle
        img 
          user-select: none
          position absolute
          top 67%
          right 11%
          width 13%

          // --color #fff
          // --border 5px
          // // --offset 5px
          // --gap 10px

          // border-radius 50%
          // cursor pointer
          // padding calc(var(--border) + var(--gap))
          // border var(--offset) solid #0000
          // --_m radial-gradient(50% 50%, #000 calc(100% - var(--offset)), #0000 calc(100% - var(--border)))
          // -webkit-mask var(--_m)
          // mask var(--_m)
          // --_g #0000 calc(99% - var(--border)), var(--color) calc(100% - var(--border)) 99%, #0000
          // --_s var(--offset)
          // --_r 100% 100% at
          // background radial-gradient(var(--_r) 0 0, var(--_g)) calc(100% + var(--_s)) calc(100% + var(--_s)),
          //             radial-gradient(var(--_r) 100% 0, var(--_g)) calc(0% - var(--_s)) calc(100% + var(--_s)),
          //             radial-gradient(var(--_r) 0 100%, var(--_g)) calc(100% + var(--_s)) calc(0% - var(--_s)),
          //             radial-gradient(var(--_r) 100% 100%, var(--_g)) calc(0% - var(--_s)) calc(0% - var(--_s))
          // background-size 50% 50%
          // background-repeat no-repeat
          // transition .4s

          // &:hover 
          //   --_s 0px
  .number-slider 
    display flex
    justify-content start
    padding 0
    list-style-type none

    .number-item
      display flex
      flex-direction column
      align-items center
      border 1px solid colorPalette1
      border-radius 20px
      padding 15px
      padding-bottom 1px
      margin 15px

    .number
      font-large-xx()
      color colorPalette1

    .description
      font-large-x()
      color colorPalette1


</style>

<template>
  <div class="root-page-news">
    <div class="emotions-sector">
      <div class="background-video">
        <img src="/res/images/video.png" alt="" />
        <!-- <iframe width="100%" height="700" src="https://rutube.ru/play/embed/c6cc4d620b1d4338901770a44b3e82f4"
          frameBorder="0" allow="clipboard-write autoplay" webkitAllowFullScreen mozallowfullscreen
          allowFullScreen></iframe> -->

        <!-- <iframe width="1080" height="720"
          src="https://www.youtube-nocookie.com/embed/nGZg03iaXzE?si=e6ChpbMEmXX-f7zd&amp;controls=0"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
      </div>
      <div class="overlay-video">
        <div class="create-emotions-circle">
          <a href="#slider" @click.prevent="scrollToSlider">
          <!-- <a href="#slider"> -->
            <img src="/res/icons/create-emotions-circle.svg" alt="" />
          </a>
        </div>
        <div class="stud-logo">
          <img src="/res/icons/stud-logo-video.svg" alt="" />
        </div>
      </div>
    </div>

  
  <ul class="number-slider" id='slider'>
    <li v-for="numberEvent in numbersStud" class="number-item">
      <div class="number">{{ numberEvent.num }}</div>
      <div class="description">{{ numberEvent.description }}</div>
    </li>
  </ul>

  </div>
  <Footer></Footer>
</template>


<script>
import Header from "~/components/Header/Header.vue"
// import {numbersStud} from "~/utils/utils.js"
// import New from "~/components/New.vue"
// import StudLogo from "#~/images/stud-logo-circle.svg"
// import Picture from "#~/images/stud-logo-circle.svg"
// import ListingBlock from "~/components/ListingBlock.vue"
import SliderOneNumber from "../components/SliderOneNumber.vue";
import Footer from "~/components/Footer.vue"


export default {
  components: { Footer, SliderOneNumber},
  // props: {
  // },


  data() {
    return {
      // news: [],
      numbersStud: [],
      loading: false,
    }
  },

  mounted() {
    // this.getNews()
    this.getStudNums()
  },

  methods: {
    async getNews() {
      this.loading = true
      const { data, ok, status } = await this.$api.getNews()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новости')
      }

      this.news = data.feed
    },
    async getStudNums() {
      this.loading = true
      const { data, ok, status } = await this.$api.getStudNums()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить студ в цифрах')
      }

      this.numbersStud = data.studNumbers
    },
    scrollToSlider() {
      const sliderElement = document.getElementById('slider');
      if (sliderElement) {
        sliderElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }
}
</script>
