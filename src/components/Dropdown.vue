<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'
@import '../styles/animations.styl'


.root-dropdown
  trans(0.5s)
  button
    button()

    display flex
    width 500px
    height 100%
    margin-left 0
    text-align left
    vertical-align middle
    background colorPalette1
    border none
    border-radius borderRadiusMax
    &:hover
      background colorPalette1
      label
        color colorWhite
    label
      cursor pointer
      width 100%
      margin-bottom -2px
      padding 0px 12px
      color colorWhite
      font-medium()
    img
      trans(0.5s)

      transform rotate(90deg)
      height 1.3rem
      margin-right 20px
      color colorWhite
      filter brightness(1000%)

  .option-list
    position absolute
    z-index 2
    transform-origin top
    transform scaleY(0)
    display flex
    flex-direction column
    width 500px
    margin-top 10px
    background colorBg
    border-radius borderRadiusS
    box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
    trans(0.2s)
    label
      cursor pointer
      padding 10px 20px
      color colorText1
      font-medium()
      &:hover
        color colorWhite
        background colorPalette5
        &:first-child
          border-radius borderRadiusS borderRadiusS 0 0
        &:last-child
          border-radius 0 0 borderRadiusS borderRadiusS
      input
        display none
        outline solid

</style>

<template>
  <div class="root-dropdown">
    <button @click="handleClick()">
      <label>{{ text }}</label>
      <img src="/static/icons/arrow-right-card.svg" :id="name+'-arrow'">
    </button>
    <div class="option-list" :id="name+'-optionList'">
      <label v-for="(item, idx) in items">
        <input
          type="radio"
          :name="name"
          :checked="item.id==defaultId"
          @click="setOption(idx)"
        >
        {{ item.text }}
      </label>
    </div>
  </div>
</template>

<script>
import CircleLoading from "~/App.vue";
import {ref} from 'vue';

// var slides = document.querySelectorAll(".slide")
// var radioButton = document.querySelectorAll(".button")

// var counter = 0;



// const itemRefs = ref([])

export default {
  // emits: ['delete', 'pin', 'upnin', 'edit'],

  components: {CircleLoading},

  props: {
    name: String,
    items: Array,
    defaultId: {
      type: Number,
      default: 0,
    }

  },

  data() {
    return {
      collapsed: true,
      text: '',
      value: '',
      currentIdx: 0,

      loading: false,
    }
  },

  computed: {
    // datePrettified() {
    //   return this.timePublished.toLocaleDateString('ru-RU', {day: "numeric", month: "short", hour: "numeric", minute: "numeric"});
    // }
  },

  // Чтобы подгружалось по готовности разметки
  updated() {
  },

  mounted() {
    var defaultIdx = this.defaultId
    var defaultIdx = this.items.findIndex(function(item, i){item.id==defaultIdx})
    this.text = this.items[this.defaultId].text
    this.value = this.items[this.defaultId].value
  },

  methods: {
    handleClick() {
      this.collapsed ?
      this.showOptions()
      : this.hideOptions()
    },
    showOptions() {
      document.getElementById(this.name+'-arrow').style.transform = "rotate(-90deg)"
      document.getElementById(this.name+'-optionList').style.transform = "scaleY(1)"
      this.collapsed = false
    },
    hideOptions() {
      document.getElementById(this.name+'-arrow').style.transform = "rotate(90deg)"
      document.getElementById(this.name+'-optionList').style.transform = "scaleY(0)"
      this.collapsed = true
    },
    setOption(option) {
      this.currentIdx = option
      this.updateData()
      this.hideOptions()
      this.$emit('updateFilter')
    },
    updateData() {
      this.value = this.items[this.currentIdx].value
      this.text = this.items[this.currentIdx].text
    }
  }
};
</script>
