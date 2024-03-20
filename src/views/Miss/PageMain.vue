<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page-main
  background-image url("../../../res/images/backgroundLarge.png")
  background-size cover
  position relative
  overflow hidden
  .main
    padding 40px 120px
    @media ({mobile})
      padding-left 20px
      padding-right 20px
    max-height 0
    overflow hidden
    animation main-roll-down 2s ease forwards
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
      100%
        max-height 3000px
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
        transition all 0.5s cubic-bezier(0.02, 0.52, 0.2, 1)
      .spiral
      .sphere-right
        transform translateY(calc(var(--scroll-value) * -0.5px))
      .ring
      .sphere-left
        transform translateY(calc(var(--scroll-value) * -1px))

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
  <div class="root-page-main">
    <Header></Header>

    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="scale-in" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </main>

    <Footer></Footer>

    <section class="decoration" :style="{'--scroll-value': scrollTop}">
      <div v-for="i in 3" :style="{'--repeat-number': i - 1}" class="group">
        <img class="spiral" src="../../../res/images/miss-decorations/side-spiral.png" alt="">
        <img class="sphere-left" src="../../../res/images/miss-decorations/side-sphere.png" alt="">
        <img class="sphere-right" src="../../../res/images/miss-decorations/side-sphere.png" alt="">
        <img class="ring" src="../../../res/images/miss-decorations/side-ring.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import Header from "~/components/Miss/Header.vue";
import Footer from "~/components/Miss/Footer.vue";

export default {
  components: {Header, Footer},

  data() {
    return {
      scrollTop: 0,
    }
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
