<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'

.root-admin-menu
  top 100px
  width 100%
  height 100%
  display flex
  align-items center
  .main-container
    height max-content
    max-width 1440px
    width 100%
    display flex
    background colorWhite
    gap 30px
    .navigation
      //background colorPalette2
      height 100%
      width 400px
      display flex
      flex-direction column
      gap 10px
      .button
        button()
        border-radius borderRadiusMax
        border 2px solid colorPalette1
    .content
      height 100%
      width calc(100% - 400px)
      

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
        <router-view v-slot="{ Component }">
          <transition :name="transitionName" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
    </div>
    <Footer></Footer>
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
