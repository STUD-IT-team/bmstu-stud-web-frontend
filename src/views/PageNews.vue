<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'


between-news-gap = 30px
between-columns-gap = between-news-gap
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
    width 100%
    position relative

    .background-video
      video
        pointer-events none
        width 100%
        top 10px
        margin-top 80px

    .overlay-video
      width 100%

      .create-emotions-circle
        position relative

        img
          user-select none
          position absolute
          bottom 30px
          right 5%
          width 13%
          --color: #fff
          --border: 4px
          --offset: 10px
          --gap: 3px
          border-radius: 50%
          cursor: pointer
          padding: calc(var(--border) + var(--gap))
          border: var(--offset) solid #0000
          --_m: radial-gradient(50% 50%, #000 calc(100% - var(--offset)), #0000 calc(100% - var(--border)))
          -webkit-mask: var(--_m)
          mask: var(--_m)
          --_g: #0000 calc(99% - var(--border)), var(--color) calc(100% - var(--border)) 99%, #0000
          --_s: var(--offset)
          --_r: 100% 100% at
          background: radial-gradient(var(--_r) 0 0, var(--_g)) calc(100% + var(--_s)) calc(100% + var(--_s)),
                      radial-gradient(var(--_r) 100% 0, var(--_g)) calc(0% - var(--_s)) calc(100% + var(--_s)),
                      radial-gradient(var(--_r) 0 100%, var(--_g)) calc(100% + var(--_s)) calc(0% - var(--_s)),
                      radial-gradient(var(--_r) 100% 100%, var(--_g)) calc(0% - var(--_s)) calc(0% - var(--_s))
          background-size: 50% 50%
          background-repeat: no-repeat
          transition: .4s ease-out
          opacity: 0.7
          &:hover
            --_s: 0px
            opacity: 1

  .content-wrapper
    max-width 1440px
    width 100%
    margin auto

    .big-news-container
      margin auto
      padding-bottom 60px
      overflow-x auto
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
        <video width="100%" autoplay muted loop disablePictureInPicture>
          <source src="http://localhost:9000/videos/main_vid.mp4" type="video/mp4">
          Ваш браузер не поддерживает это видео
        </video>
      </div>
      <div class="overlay-video">
        <div class="create-emotions-circle">
          <a href="#slider" @click.prevent="scrollToSlider">
            <img src="/res/icons/create-emotions-circle.svg" alt="" />
          </a>
        </div>
      </div>
    </div>

    <NumbersSlider id="slider"></NumbersSlider>

    <div class="orange-star">
      <img src="/res/icons/orange-star.svg" alt="" />
    </div>

    <div class="content-wrapper">
      <div class="big-news-container">
        <div class="big-news-sector">
          <OneBigNew v-for="bigNew in bigNews" :title="bigNew.title" :description="bigNew.description"
            :imgUrl="`/media/${bigNew.media.key}`" :redirectLink="bigNew.vk_post_url">
          </OneBigNew>
        </div>
      </div>
      <EventTimeline></EventTimeline>
      <FacultyStudCouncils></FacultyStudCouncils>
      <StudCounsilClubs></StudCounsilClubs>
    </div>
    <Footer></Footer>
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
    }
  },
  mounted() {
    this.getEncounters();
    this.getBigNews();
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
