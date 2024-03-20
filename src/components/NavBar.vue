<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

max-main-part-width = 1150px

.root-navbar
  position fixed
  top 0
  width 100%
  padding 10px 10%
  background mix(colorBg, transparent, 20%)
  backdrop-filter blur(20px) brightness(1.5)
  font-large()
  trans()
  .main-part
    centered-margin()
    max-width max-main-part-width
    display flex
    justify-content space-between
    align-items center
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
      display flex
      gap 15px
      justify-content space-between
      align-items center
      white-space nowrap
      .link
        padding 0 5px
        hover-effect-underline()
        &.router-link-exact-active
          background-size 100% 1px

    .left-container
    .middle-container
    .right-container
      & > *
        opacity 0
        animation button-in 0.5s ease forwards
        animation-delay calc(var(--animation-index) * 0.05s)
        @keyframes button-in
          from
            opacity 0
            transform translateY(-20px)
          to
            opacity 1
            transform translateY(0)
  &.with-bg
    block-bg()
    display flex
    .left-container
      height 35px
</style>

<template>
  <nav class="root-navbar" :class="{'with-bg': isScrolledMoreThanScreen}">
    <div class="main-part">
      <router-link :to="{name: 'default'}" class="left-container">
        <img style="--animation-index: 0" src="../../res/icons/stud-logo.svg" alt="stud-logo">
      </router-link>
      <div class="middle-container">
        <router-link style="--animation-index: 1" :to="{name: 'news'}" class="link">Новости</router-link>
        <router-link style="--animation-index: 2" :to="{name: 'calendar'}" class="link">Мероприятия</router-link>
        <router-link style="--animation-index: 3" :to="{name: 'miss'}" class="link">Мисс Очарование 2024</router-link>
      </div>
      <div v-if="$user?.isAdmin" class="right-container" @click="logout">
        <img style="--animation-index: 4" src="../../res/icons/logout.svg" alt="logout">
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
      this.isScrolledMoreThanScreen = (document.body.scrollTop >= window.innerHeight);
    },
    logout() {
      this.$store.dispatch('DELETE_USER');
      this.$router.push({name: 'default'});
    }
  },
};
</script>
