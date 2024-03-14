<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'

</style>

<template>
  <div class="root-page">
    <Header></Header>
    NEWS PAGE

    <NavBar></NavBar>
  </div>
</template>


<script>
import NavBar from "~/components/NavBar.vue";
import Header from "~/components/Header/Header.vue";

export default {
  components: {Header, NavBar},

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
