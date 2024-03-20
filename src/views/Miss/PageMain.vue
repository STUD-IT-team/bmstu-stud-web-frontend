<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page-main
  background-image url("../../../res/images/backgroundLarge.png")
  background-size cover
  .main
    padding 40px 120px
    @media ({mobile})
      padding-left 20px
      padding-right 20px
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
  </div>
</template>

<script>
import Header from "~/components/Miss/Header.vue";
import Footer from "~/components/Miss/Footer.vue";

export default {
  components: {Header, Footer},

  data() {
    return {
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
