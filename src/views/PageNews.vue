<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'
  

.root-page-news 
  max-width 1440px
  margin auto
  .orange-star
    img
      position static
      margin-left 95vw
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
          bottom 10%
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
    justify-content space-around
    list-style: none
    white-space nowrap

    overflow-x scroll

    scrollbar-width none
    .scroll-touch
      -webkit-overflow-scrolling touch;
    &::-webkit-scrollbar
      display none

    .number-item
      display flex
      flex-direction column
      align-items center

      border 1px solid colorPalette1
      border-radius 20px
      padding 10px
      padding-bottom 1px
      margin 15px

      .number
        font-large-xx()
        color colorPalette1

      .description
        font-large-x()
        color colorPalette1

  .big-news-container
    margin auto
    padding-bottom 60px
    overflow auto
    max-width 1282px
    .big-news-sector
      display flex
      justify-content space-between
      gap 29px 

</style>

<template>
  <div class="root-page-news">
    <div class="emotions-sector">
      <div class="background-video">
        <img src="/res/images/video.png" alt="" />
      </div>
      <div class="overlay-video">
        <div class="create-emotions-circle">
          <a href="#slider" @click.prevent="scrollToSlider">
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

    <div class="orange-star">
      <img src="/res/icons/orange-star.svg" alt="" />
    </div>
    <div class="big-news-container">
      <div class="big-news-sector">
        <OneBigNew v-for="bigNew in bigNews" :title="bigNew.title" :description="bigNew.description"
          :imgUrl="bigNew.imgUrl" :redirectLink="bigNew.redirectLink">
        </OneBigNew>
      </div>
    </div>
    <FSC></FSC>
    <SC></SC>
    <Footer></Footer>
  </div>
</template>


<script>
// import {numbersStud} from "~/utils/utils.js"
// import New from "~/components/New.vue"
// import StudLogo from "#~/images/stud-logo-circle.svg"
// import Picture from "#~/images/stud-logo-circle.svg"
// import ListingBlock from "~/components/ListingBlock.vue"
// import SliderOneNumber from "../components/SliderOneNumber.vue";
import Footer from "~/components/Footer.vue"
import OneBigNew from "~/components/OneBigNew.vue";
import FSC from "~/components/FacultyStudCouncils.vue";
import SC from "~/components/StudCounsilClubs.vue";

export default {
  components: { Footer, OneBigNew, FSC, SC },
  // props: {
  // },


  data() {
    return {
      numbersStud: [],
      bigNews: [],
      loading: false,
    }
  },

  mounted() {
    this.getStudNums();
    this.getBigNews();

    const list = document.querySelector('.number-slider');
    if (list) {
      list.addEventListener('wheel', function (ev) {
        let items = this.querySelectorAll('.number-item');
        if (ev.wheelDelta > 0) {
          this.prepend(items[items.length - 1]);
        } else {
          this.append(items[0]);
        }
      });
    }
  },


  methods: {
    async getStudNums() {
      this.loading = true
      const { data, ok, status } = await this.$api.getStudNums()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить студ в цифрах')
      }

      this.numbersStud = data.studNumbers
    },

    async getBigNews() {
      this.loading = true
      const { data, ok, status } = await this.$api.getBigNews()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новости')
      }

      this.bigNews = data.studBigNews
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
