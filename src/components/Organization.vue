<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'
@import '../styles/animations.styl'

block-bg-color = colorBg2
images-section-width = 250px
text-section-max-height = 265px

.root-org
  block(none)
  block-bg(colorBg)

  position relative
  display flex
  gap 40px
  align-items center
  padding 10px 50px
  box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
  trans(0.5s)
  img
    max-width 72px
    height 72px
    border-radius borderRadiusS
  .text
    font-small()
    header
      font-large-x()
  &:hover
    background colorPalette5
    .text
      color colorWhite
      header
        color colorWhite
</style>

<template>
  <router-link :to="{name: 'organization', params: {orgId: id}}">
    <div class="root-org">
      <img :src="logoSrc">
      <div class="text">
        <header>{{ title }}</header>
        {{ text }}
        <span v-for="(lead, idx) in leads">
          <br>
          {{ lead.spec }}: {{ lead.name }}
        <!-- {{lead}} -->
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
import CircleLoading from "~/App.vue";

export default {

  components: {CircleLoading},

  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    logoSrc: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true,
    },
    leads: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      loading: false,
    }
  },

  mounted() {
  },

  methods: {  }
};
</script>
