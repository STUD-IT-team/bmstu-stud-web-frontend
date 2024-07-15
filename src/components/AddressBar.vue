<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

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
            class="link">
            {{page.name}}
        </router-link>
        <g v-if="page.current==false"> ⟶ </g>
        <g v-if="page.current" class="current">
            {{page.name}}
        </g>
    </span>
    
  </div>
</template>

<script>
export default {
  props: {
    path: Array
  },

  computed: {
  },

  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
  }
};
</script>
