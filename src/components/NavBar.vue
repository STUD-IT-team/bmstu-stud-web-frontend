<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.root-navbar
  position fixed
  top 0
  width 100%
  padding 10px 10%
  display flex
  justify-content space-between
  align-items center
  background mix(colorBg, transparent, 20%)
  backdrop-filter blur(20px) brightness(1.5)
  font-large()
  trans()
  .left-container
  .right-container
    height 60px
    cursor pointer
    hover-effect()
    img
      height 100%
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
      hover-effect()
      &.router-link-exact-active
        border-bottom 1px solid colorBorder
  &.with-bg
    block-bg()
    .left-container
      height 35px
</style>

<template>
  <nav class="root-navbar" :class="{'with-bg': isScrolledMoreThanScreen}">
    <router-link :to="{name: 'default'}" class="left-container">
      <img src="../../res/icons/stud-logo.svg" alt="stud-logo">
    </router-link>
    <div class="middle-container">
      <router-link :to="{name: 'news'}" class="link">Новости</router-link>
      <router-link :to="{name: 'calendar'}" class="link">Мероприятия</router-link>
      <router-link :to="{name: 'miss'}" class="link">Мисс Очарование 2024</router-link>
    </div>
    <div v-if="$user?.isAdmin" class="right-container" @click="logout">
      <img src="../../res/icons/logout.svg" alt="logout">
    </div>
    <div v-else class="right-container"></div>
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
