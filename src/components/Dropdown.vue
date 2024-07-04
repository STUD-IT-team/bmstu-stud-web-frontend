<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'


.root-dropdown
  trans(0.5s)
  button
    button()  
    margin-left 0
    width 300px
    display: flex;
    border-radius borderRadiusMax
    border none
    text-align left
    background colorPalette1
    height 100%
    vertical-align: middle
    &:hover
      background colorPalette1
      label
        color colorWhite
    label 
      width 100%
      margin-bottom -2px
      color colorWhite
      font-medium()
      padding 0px 12px
      cursor pointer
    img
      trans(0.5s)
      margin-right 20px
      color colorWhite
      height 1.3rem
      filter brightness(1000%)
      transform rotate(90deg)

  .option-list
    position absolute
    z-index 2
    trans(0.2s)
    transform-origin top
    transform scaleY(0)
    display flex
    flex-direction column
    margin-top 10px
    width 300px
    background colorBg
    box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
    border-radius borderRadiusS
    label
      padding 10px 20px
      font-medium()
      color colorText1
      cursor pointer
      &:hover
        background colorPalette5
        color colorWhite
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
      <label>{{text}}</label>
      <img src="/res/icons/arrow-right-card.svg" :id="name+'-arrow'">
    </button>
    <div class="option-list" :id="name+'-optionList'">
      <label v-for="(item, idx) in items"
          :ref="'item'+item.id"
          :id="'item'+item.id">
        <input
          type="radio" 
          :name="name" 
          :checked="idx==0"
          @click="setOption('item'+item.id)">
        {{item.text}}
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




export default {
  // emits: ['delete', 'pin', 'upnin', 'edit'],

  components: {CircleLoading},

  props: {
    images: Array,
  },

  data() {
    return {
      name: "drpdn",
      items: [
        {
          id: 0,
          text: "Все организации",
        },
        {
          id: 1,
          text: "ССФ",
        },
        {
          id: 2,
          text: "Отряды",
        },
        {
          id: 3,
          text: "Клубы",
        },
        {
          id: 4,
          text: "Отделы",
        },
      ],
      
      collapsed: true,
      text: '',

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
    this.text = this.items[0].text
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
      // this.text = ref(option).text
      // ref(this.name).style.color = "colorBg3"
      this.text = document.getElementById(option).textContent
      this.hideOptions()
    }
  }
};
</script>
