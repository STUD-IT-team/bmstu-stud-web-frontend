<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

max-main-part-width = 1150px

.root-navbar
  position fixed
  top 0
  width 100%
  padding 10px 10%
  @media ({mobile})
    padding 10px 10px
  background mix(colorBg, transparent, 20%)
  backdrop-filter blur(20px) brightness(1.5)
  font-large()
  trans()
  @media ({mobile})
    font-medium()
  .main-part
    centered-margin()
    max-width max-main-part-width
    display flex
    justify-content space-between
    align-items center
    @media ({mobile})
      justify-content flex-start
      gap 20px
    .left-container
    .right-container
      height 60px
      cursor pointer
      hover-effect()
      img
        height 100%
        width 50px
    .right-container
      height 20px
    .middle-container
      flex 0.7
      position relative
      .nav-buttons-container
        display flex
        gap 15px
        justify-content space-between
        align-items center
        white-space nowrap
        overflow hidden
        max-height 300px // css animable
        trans()
        @media ({mobile})
          flex-direction column
          align-items flex-start
        .link
          padding 0 5px
          hover-effect-underline()
          &.router-link-exact-active
            background-size 100% 1px
      .burger-menu-input
        position absolute
        opacity 0
        pointer-events none
        &:checked ~ .burger-menu-switcher
          opacity 0
          transform scale(.5)
      .burger-menu-switcher
        height 23px
        display block
        opacity 0
        pointer-events none
        position absolute
        top 50%
        left 0
        transform translateY(-50%)
        cursor pointer
        trans()
        img
          width 30px

    .left-container
    .nav-buttons-container
    .right-container
      & > *
        animation-float(0.5s, 0, -20px)
        animation-index-delay(0.05s)
  &.with-bg
    block-bg()
    display flex
    .left-container
      height 35px
    @media ({mobile})
      .middle-container
        .burger-menu-switcher
          opacity 1
          pointer-events auto
        .burger-menu-input:not(:checked) ~ .nav-buttons-container
          max-height 0
          pointer-events none
          opacity 0
</style>

<template>
  <nav class="root-navbar" :class="{'with-bg': isScrolledMoreThanScreen}">
    <div class="main-part">
      <router-link :to="{name: 'login'}" class="left-container">
        <img style="--animation-index: 0" src="/res/icons/stud-logo.svg" alt="stud-logo">
      </router-link>
      <div class="middle-container">
        <input type="checkbox" class="burger-menu-input" id="burger-menu-state-store" ref="burgerMenuInput">
        <label v-if="isScrolledMoreThanScreen" class="burger-menu-switcher" for="burger-menu-state-store"><img src="/res/icons/menu.svg" alt="menu"></label>
        <nav class="nav-buttons-container">
          <router-link style="--animation-index: 1" :to="{name: 'news'}" class="link">Новости</router-link>
          <router-link style="--animation-index: 2" :to="{name: 'calendar'}" class="link">Мероприятия</router-link>
          <router-link style="--animation-index: 3" :to="{name: 'miss'}" class="link">Мисс Очарование 2024</router-link>
        </nav>
      </div>
      <div v-if="$store?.state?.user?.isAdmin" class="right-container" @click="logout">
        <img style="--animation-index: 4" src="/res/icons/logout.svg" alt="logout">
      </div>
      <div v-else class="right-container"></div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
  },

  data() {
    return {
      isScrolledMoreThanScreen: false,
    }
  },

  mounted() {
    document.body.addEventListener('scroll', this.watchForScroll);
    this.watchForScroll();
  },

  unmounted() {
    document.body.removeEventListener('scroll', this.watchForScroll);
  },

  methods: {
    watchForScroll(e) {
      this.$refs.burgerMenuInput.checked = false;
      this.isScrolledMoreThanScreen = (document.body.scrollTop >= window.innerHeight);
    },
    logout() {
      this.$store.dispatch('DELETE_USER');
      this.$router.push({name: 'default'});
    }
  },
};
</script>
