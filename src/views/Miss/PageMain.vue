<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page-main
  position relative
  overflow hidden
  //background-image url(/res/images/backgroundLarge.png)
  //background-size cover
  .background
    position absolute
    height 100%
    min-height 100%
    top 0
    left 0
    width 100%
    z-index -1

  .main
    max-width = 1260px
    padding-sides = 120px
    padding 40px padding-sides
    @media ({mobile})
      padding-sides = 20px
      padding 40px padding-sides
    trans()
    max-height 0
    overflow hidden
    animation main-roll-down 2s ease forwards
    centered-margin()
    max-width (max-width + padding-sides * 2)
    @keyframes main-roll-down
      0%
        opacity 0
        max-height 0
        padding-top 0
        padding-bottom 0
      10%
        opacity 1
        padding-top 40px
        padding-bottom 40px
      99%
        max-height 3000px
      100%
        max-height unset
  .decoration
    position absolute
    inset 0
    pointer-events none
    .group
      position absolute
      inset 0
      top calc(var(--repeat-number) * 2000px)
      > *
        position absolute
        transition all 0.5s ease-out-slow
      .spiral
      .sphere-left
        transform translateY(calc(var(--scroll) * -0.5px))
      .ring
      .sphere-right
        transform translateY(calc(var(--scroll) * -1px))

      .spiral
        left -210px
        top 500px
        width 400px
        @media ({mobile})
          left -120px
          width 200px
      .sphere-left
        left -80px
        top 2000px
        width 220px
        @media ({mobile})
          left -60px
          width 120px
      .sphere-right
        right -80px
        top 300px
        width 220px
        @media ({mobile})
          right -60px
          width 120px
      .ring
        right -100px
        top 1500px
        width 220px
        @media ({mobile})
          right -70px
          width 140px
</style>

<template>
  <div class="root-page-main" :style="{'--scroll': scrollTop}">
    <ImageWebpJpg
      :src-jpg="`${ImageBackgroundLarge400Jpg} 400w, ${ImageBackgroundLarge800Jpg} 800w, ${ImageBackgroundLarge1440Jpg} 1440w`"
      :src-webp="`${ImageBackgroundLarge400Webp} 400w, ${ImageBackgroundLarge800Webp} 800w, ${ImageBackgroundLarge1440Webp} 1440w`"
      sizes="100vw"
      class="background"
    ></ImageWebpJpg>
    <Header></Header>

    <main class="main">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </main>

    <Footer></Footer>

    <section class="decoration">
      <div v-for="i in 3" :style="{'--repeat-number': i - 1}" class="group">
        <img class="spiral" src="/res/images/miss-decorations/side-spiral.png" alt="">
        <img class="sphere-left" src="/res/images/miss-decorations/side-sphere.png" alt="">
        <img class="sphere-right" src="/res/images/miss-decorations/side-sphere.png" alt="">
        <img class="ring" src="/res/images/miss-decorations/side-ring.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import Header from "~/components/Miss/Header.vue";
import Footer from "~/components/Miss/Footer.vue";
import ImageWebpJpg from "~/components/ImageWebpJpg.vue";
import ImageBackgroundLarge400Jpg from "#~/images/miss/background/backgroundLarge400.jpg"
import ImageBackgroundLarge800Jpg from "#~/images/miss/background/backgroundLarge800.jpg"
import ImageBackgroundLarge1440Jpg from "#~/images/miss/background/backgroundLarge1440.jpg"
import ImageBackgroundLarge400Webp from "#~/images/miss/background/backgroundLarge400.webp"
import ImageBackgroundLarge800Webp from "#~/images/miss/background/backgroundLarge800.webp"
import ImageBackgroundLarge1440Webp from "#~/images/miss/background/backgroundLarge1440.webp"

export default {
  components: {ImageWebpJpg, Header, Footer},

  data() {
    return {
      scrollTop: 0,

      transitionName: "scale-in",

      ImageBackgroundLarge400Jpg,
      ImageBackgroundLarge800Jpg,
      ImageBackgroundLarge1440Jpg,
      ImageBackgroundLarge400Webp,
      ImageBackgroundLarge800Webp,
      ImageBackgroundLarge1440Webp,
    }
  },

  watch: {
    $route(to, from) {
      this.transitionName = 'scale-in';
      const isMissProfile = (path) => /^\/miss\/profile/.test(path);
      if (isMissProfile(to.path) && isMissProfile(from.path)) {
        this.transitionName = 'opacity';
      }

      console.log(from.path, 'TO', to.path)
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll, {passive: true});
  },

  unmounted() {
    document.documentElement.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll() {
      this.scrollTop = document.documentElement.scrollTop;
    }
  }
}
</script>
