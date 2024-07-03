<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

carousel-width = 1140px
carousel-height = 550px

section
    background-color: colorBg2;
    height: carousel-height
    width: carousel-width;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius borderRadiusL
    box-shadow 0 1px 2px 2px mix(black, transparent, 20%)
    .buttons
      display: flex;
      position: absolute;
      color: colorPalette4
      bottom: 0;
      gap 5px
      input[type="radio"]
        height: 5rem;
        width: 2rem;
        z-index 2
        cursor pointer
        appearance none
        padding 0
        //background colorPalette5
        //opacity 0.5
        &:after
          position relative
          left 1rem
          bottom 1.5rem
          z-index 1
          margin-top 70px
          display block
          height 1px
          width 1px
          content ''
          background colorWhite
          opacity 0.5
          border-radius borderRadiusMax
          outline 0.5rem solid colorWhite
        &:hover
          &:after
            outline 0.65rem solid colorWhite
            opacity 0.7
        &:checked
          &:after
            outline 0.8rem solid colorWhite
            opacity 1
    img
      width: 100%;
      height: fit-content;
      position: absolute;
      transition: 1s;
      opacity 0.8

.nav 
    position: absolute;
    top 0
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    width carousel-width
    height carousel-height
    z-index 1
    vertical-align center
    img 
        opacity 0.5
        height 4rem
        width 4rem
        background mix(colorWhite, transparent, 30%)
        padding 20px
        margin 20px
        border-radius borderRadiusMax
    .prev
    .next
      display flex
      //background-color colorPalette4
      cursor pointer
      align-items center
    .prev
      width carousel-width*0.3
      justify-content left
    .next
      width carousel-width*0.3
      justify-content right
    .prev:hover
    .next:hover
      img
        opacity 1





</style>

<template>

<section>
  <div class="buttons">
    <input type="radio" name="radio-btn" id="radio1" class="button" @click="this.changeSlide(0)" checked>
    <input type="radio" name="radio-btn" id="radio2" class="button" @click="changeSlide(1)">
    <input type="radio" name="radio-btn" id="radio3" class="button" @click="this.changeSlide(2)">
    <input type="radio" name="radio-btn" id="radio4" class="button" @click="this.changeSlide(3)">
  </div>

  <img src="/res/images/placeholders/person-placeholder.jpg" alt="" class="slide">
  <img src="/res/images/placeholders/org-placeholder.jpg" alt="" class="slide">
  <img src="/res/images/placeholders/anime-placeholder.jpg" alt="" class="slide">
  <img src="/res/images/placeholders/anime-placeholder.jpeg" alt="" class="slide">

  <div class="nav">
      <a class="side-button prev" @click="goPrev()"> <img src="/res/icons/arrow-left.svg"> </a>
      <a class="side-button next" @click="goNext()"> <img src="/res/icons/arrow-right.svg"> </a>
  </div>
</section>
  
</template>

<script>
import CircleLoading from "~/App.vue";


// var slides = document.querySelectorAll(".slide")
// var radioButton = document.querySelectorAll(".button")

// var counter = 0;





export default {
  // emits: ['delete', 'pin', 'upnin', 'edit'],

  components: {CircleLoading},

  props: {
    numberOfSlides: {
        type: Number,
        default: 5,
    },
    height: {
        type: Number,
        default: 300,
    },
    width: {
        type: Number,
        default: 500,
    },
    // imagesSrc: {
    //   type: Array,
    //   default: [],
    // },
    // // timePublished: Date,
    // isPinned: Boolean,
    // isCollapsedByDefault: Boolean,
  },

  data() {
    return {

      slides: document.querySelectorAll(".slide"),
      radioButton: document.querySelectorAll(".button"),
      counter: 0,
      // isCollapsed: this.$props.isCollapsedByDefault,
      // isEditBlockOpened: false,

      loading: false,
    }
  },

  computed: {
    // datePrettified() {
    //   return this.timePublished.toLocaleDateString('ru-RU', {day: "numeric", month: "short", hour: "numeric", minute: "numeric"});
    // }
  },

  mounted() {
    this.slides=document.querySelectorAll(".slide");
    this.radioButton=document.querySelectorAll(".button");
    this.slides.forEach(
        (slide, index) => {
            slide.style.left = `${index * 100}%`;
        }
    );
    // this.isCollapsed = true;
  },

  methods: { 
    slideImage() {
        this.slides.forEach(
            (slide) => {
                this.counter <= this.slides.length - 1 ?
                slide.style.transform = `translateX(-${this.counter * 100}%)`
                : this.counter = this.slides.length - 1;
            }
        );

        this.radioButton.forEach((radio, i) => {
            radio.checked = i===this.counter;
        });
    },

    goNext() {
        this.counter++;
        this.slideImage();
    },

    goPrev() {
        if (this.counter>=1) {
          this.counter--;
          this.slideImage(); 
        }
    },

    changeSlide(slideNumber) {
        this.counter = slideNumber;
        this.slides.forEach(
            (slide) => {
                this.counter <= this.slides.length -1 ?
                slide.style.transform = `translateX(-${this.counter * 100}%)`
                : this.counter = this.slides.length -1;
            }
        );
    },
   }
};
</script>
