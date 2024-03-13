<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'

.root-navbar
  position fixed
  top 0
  width 100%
  padding 10px 10%
  display flex
  justify-content space-between
  align-items center
  background mix(white, transparent, 15%)
  backdrop-filter blur(20px)
  font-medium()
  .left-container
    height 40px
    cursor pointer
    img
      height 100%
  .middle-container
    flex 0.7
    display flex
    gap 20px
    justify-content space-between
    align-items center
    white-space nowrap
  .right-container
    height 25px
    cursor pointer
    img
      height 100%
</style>

<template>
  <nav class="root-navbar">
    <router-link :to="{name: 'default'}" class="left-container">
      <img src="../../res/icons/stud-logo.svg" alt="stud-logo">
    </router-link>
    <div class="middle-container">
      <router-link :to="{name: 'news'}">Новости</router-link>
      <router-link :to="{name: 'calendar'}">Мероприятия</router-link>
      <router-link :to="{name: 'miss'}">Мисс Очарование 2024</router-link>
    </div>
    <div class="right-container" @click="logout">
      <img src="../../res/icons/logout.svg" alt="logout">
    </div>
  </nav>
</template>

<script>
export default {
  props: {
  },

  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
    logout() {
      this.$store.dispatch('DELETE_USER');
      this.$router.push({name: 'default'});
    }
  }
};
</script>
