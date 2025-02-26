<style scoped lang="stylus">
@import '../styles/constants.styl'
@import '../styles/buttons.styl'
@import '../styles/fonts.styl'
@import '../styles/components.styl'
@import '../styles/utils.styl'

between-columns-gap = between-news-gap


between-news-gap = 30px
padding-sides = 20px

.root-page-news
  display flex
  flex-direction column
  align-items center


  .orange-star
    img
      position static
      margin-left 1300px

  .emotions-sector
    position relative
    width 100%

    .background-video
      video
        pointer-events none
        top 10px
        width 100%
        margin-top 80px

    .overlay-video
      width 100%

      .create-emotions-circle
        position relative

        img
          --color #fff
          --border 4px
          --offset 10px
          --gap 3px
          --_m radial-gradient(50% 50%, #000 calc(100% - var(--offset)), #0000 calc(100% - var(--border)))
          --_g #0000 calc(99% - var(--border)), var(--color) calc(100% - var(--border)) 99%, #0000
          --_s var(--offset)
          --_r 100% 100% at

          cursor pointer
          user-select none
          position absolute
          right 5%
          bottom 30px
          width 13%
          padding calc(var(--border) + var(--gap))
          opacity 0.7
          background radial-gradient(var(--_r) 0 0, var(--_g)) calc(100% + var(--_s)) calc(100% + var(--_s)),
            radial-gradient(var(--_r) 100% 0, var(--_g)) calc(0% - var(--_s)) calc(100% + var(--_s)),
            radial-gradient(var(--_r) 0 100%, var(--_g)) calc(100% + var(--_s)) calc(0% - var(--_s)),
            radial-gradient(var(--_r) 100% 100%, var(--_g)) calc(0% - var(--_s)) calc(0% - var(--_s))
          background-repeat no-repeat
          background-size 50% 50%
          border var(--offset) solid #0000
          border-radius 50%
          -webkit-mask var(--_m)
          mask var(--_m)
          transition 0.4s ease-out
          &:hover
            --_s 0px

            opacity 1

  .content-wrapper
    width 100%
    max-width 1440px
    margin auto

    .big-news-container
      overflow-x auto
      max-width 1282px
      margin auto
      padding-bottom 60px

      .big-news-sector
        display flex
        gap 29px
        justify-content space-between

</style>

<template>
  <div class="root-page-news">
    <div class="emotions-sector">
      <div class="background-video">
        <video width="100%" autoplay muted loop disablePictureInPicture>
          <source :src="mainVideoSrc" type="video/mp4">
          Ваш браузер не поддерживает это видео
        </video>
      </div>
      <div class="overlay-video">
        <div class="create-emotions-circle">
          <a href="#slider" @click.prevent="scrollToSlider">
            <img src="/static/icons/create-emotions-circle.svg" alt="">
          </a>
        </div>
      </div>
    </div>

    <NumbersSlider id="slider" />

    <div class="orange-star">
      <img src="/static/icons/orange-star.svg" alt="">
    </div>

    <div class="content-wrapper">
      <div class="big-news-container">
        <div class="big-news-sector">
          <OneBigNew
            v-for="bigNew in bigNews"
            :title="bigNew.title"
            :description="bigNew.description"
            :img-url="`/${bigNew.media.key}`"
            :redirect-link="bigNew.vk_post_url"
          />
        </div>
      </div>
      <EventTimeline />
      <FacultyStudCouncils />
      <StudCounsilClubs />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue"
import OneBigNew from "~/components/OneBigNew.vue";
import FacultyStudCouncils from "~/components/FacultyStudCouncils.vue";
import StudCounsilClubs from "~/components/StudCounsilClubs.vue";
import EventTimeline from "~/components/EventTimeline.vue";
import NumbersSlider from "~/components/NumbersSlider.vue";

export default {
  components: {NumbersSlider, Footer, OneBigNew, FacultyStudCouncils, StudCounsilClubs, EventTimeline },
  data() {
    return {
      numbersStud: [],
      bigNews: [],
      loading: false,
      mainVideoSrc: "",
    }
  },
  mounted() {
    this.getEncounters();
    this.getBigNews();
    this.getActiveMainVideo();
  },
  methods: {
    async getEncounters() {
      this.loading = true
      const { data, ok, status } = await this.$api.getEncounters(0)
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить студ в цифрах')
      }

      this.numbersStud = data.encounter
    },
    async getActiveMainVideo() {
      this.loading = true
      const { data, ok, status } = await this.$api.getActiveMainVideo()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить главное видео')
      }
      this.mainVideoSrc = data.key
    },
    async getBigNews() {
      this.loading = true
      const { data, ok, status } = await this.$api.getNews()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новости')
      }

      this.bigNews = data.feed
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
