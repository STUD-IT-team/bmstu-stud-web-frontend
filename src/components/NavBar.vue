<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'
@import '../styles/animations.styl'


.root-navbar
  position fixed
  top 0
  width 100%
  padding 10px 10%
  background colorBg
  box-shadow 0 10px 10px mix(black, transparent, 10%)
  .main-part
    display flex
    align-items center
    justify-content space-between
    max-width main-part-max-width
    .left-container
    .right-container
      cursor pointer
      height 60px
      img
        height 100%

    .right-container
      // height 20px
    .middle-container
      position relative
      flex 0.7
      .nav-buttons-container
        overflow hidden
        display flex
        gap 25px
        align-items center
        justify-content left
        max-height 120px // css animable
        color colorText1
        white-space nowrap
        .link
          padding 0 5px
          transition all 0.2s
          &.router-link-exact-active
            background-size 100% 1px

          @media ({desktop})
            &:hover
              color colorText4

        @media ({mobile})
          flex-direction column
          align-items flex-start
        trans()
      .burger-menu-input
        pointer-events none
        position absolute
        opacity 0
        &:checked ~ .burger-menu-switcher
          transform scale(0.5)
          opacity 0
      .burger-menu-switcher
        pointer-events none
        cursor pointer
        position absolute
        top 50%
        left 0
        transform translateY(-50%)
        display block
        height 23px
        opacity 0
        trans()
        img
          width 30px

    .left-container
    .nav-buttons-container
    .right-container
      position relative
      display flex
      align-items center
      justify-items right
      .login-button
        button()
        font-large()

        height 60px
        padding 5px 50px
        color colorText2
        background transparent
        border colorText2 solid 1px
        border-radius borderRadiusMax
      & > *
        animation-float(0.5s, 0, -20px)
        animation-index-delay(0.05s)

    @media ({mobile})
      gap 20px
      justify-content flex-start
    centered-margin()
  &.with-bg
    block-bg()

    display flex
    background colorText4
    .left-container
      height 35px

    @media ({mobile})
      .middle-container
        .burger-menu-switcher
          pointer-events auto
          opacity 1
        .burger-menu-input:not(:checked) ~ .nav-buttons-container
          pointer-events none
          max-height 0
          opacity 0

  @media ({mobile})
    padding 10px 10px

  @media ({mobile})
    font-medium()
  font-large()
  trans()
</style>

<template>
  <!-- <nav class="root-navbar" :class="{'with-bg': isScrolledMoreThanScreen}"> -->
  <nav class="root-navbar">
    <div class="main-part">
      <!-- <router-link :to="{name: 'login'}" class="left-container"> -->
      <img src="/static/icons/stud-logo-colored.svg">
      <!-- </router-link> -->
      <div class="middle-container">
        <input type="checkbox" class="burger-menu-input" id="burger-menu-state-store" ref="burgerMenuInput">
        <label v-if="isScrolledMoreThanScreen" class="burger-menu-switcher" for="burger-menu-state-store"><img src="/static/icons/menu.svg" alt="menu"></label>
        <nav class="nav-buttons-container">
          <router-link style="--animation-index: 1" :to="{name: 'news'}" class="link">Главная</router-link>
          <router-link style="--animation-index: 2" :to="{name: 'about'}" class="link">О нас</router-link>
          <router-link style="--animation-index: 3" :to="{name: 'organizations'}" class="link">Организации</router-link>
        </nav>
      </div>
      <div v-if="$store?.state?.user?.isAdmin" class="right-container" @click="logout">
        <img style="--animation-index: 4" src="/static/icons/logout.svg" alt="logout">
      </div>
      <div v-else class="right-container">
        <router-link class="login-button" :to="{name: 'login'}">Вход</router-link>
      </div>
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
