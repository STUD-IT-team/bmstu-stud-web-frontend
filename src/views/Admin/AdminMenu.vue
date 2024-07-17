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
    background colorWhite
    display flex
    gap 30px
    .navigation
      //background colorPalette2
      height 100%
      width 400px
      display flex
      flex-direction column
      gap 10px
      button
        button()
        border-radius borderRadiusMax
        border 2px solid colorPalette1
    .content
      //background colorPalette3
      height 100%
      width 100%
      

</style>

<template>
  <div class="root-admin-menu">
    <div class="main-container">
      <div class="navigation">
        <button>Пользователи</button>
        <button>Организации</button>
        <button>Контент</button>
      </div>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition :name="transitionName" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},

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
