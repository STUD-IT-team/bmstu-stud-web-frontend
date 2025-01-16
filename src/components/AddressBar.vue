<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'

.root-address-bar
  span
  g
    font-medium()

    color colorText3
    .link
      &:hover
        color colorText4
    .current
      color colorText1

</style>

<template>
  <div class="root-address-bar">
    <span v-for="page in path">
      <router-link
        v-if="page.current==false"
        :to="page.address"
        class="link"
      >
        {{ page.name }}
      </router-link>
      <g v-if="page.current==false"> ⟶ </g>
      <g v-if="page.current" class="current">
        {{ page.name }}
      </g>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    path: Array
  },

  data() {
    return {
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  }
};
</script>
