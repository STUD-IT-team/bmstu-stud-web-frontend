<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'
@import '../../styles/fonts.styl'

.root-admin-menu
  top 100px
  display flex
  align-items center
  width 100%
  height 100%
  .main-container
    display flex
    gap 30px
    width 100%
    max-width 1440px
    height max-content
    background colorWhite
    .navigation
      display flex
      flex-direction column
      gap 10px
      width 400px
      // background colorPalette2
      height 100%
      .button
        button()

        border 2px solid colorPalette1
        border-radius borderRadiusMax
    .content
      width calc(100% - 400px)
      height 100%


</style>

<template>
  <div class="root-admin-menu">
    <div class="main-container">
      <div class="navigation">
        <router-link class="button" to="/admin/members/">Пользователи</router-link>
        <router-link class="button" to="/admin/clubs/">Организации</router-link>
        <router-link class="button" to="/admin/news/">Контент</router-link>
      </div>
      <div class="content">
        <router-view #default="{ Component }">
          <transition :name="transitionName" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Footer from "~/components/Footer.vue"
export default {
  components: {Footer},

  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
  }
}
</script>
