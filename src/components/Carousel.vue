<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

carousel-width = 1140px
carousel-height = 720px

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
      z-index 2
      display: flex;
      position: absolute;
      color: colorPalette4
      bottom: 2rem;
      //background mix(black, transparent, 30%)
      //padding 5px 20px 0
      //border-radius borderRadiusMax
      gap 0px
      input[type="radio"]
        height: 3rem;
        width: 2rem;
        cursor pointer
        appearance none
        padding 0
        //background colorPalette5
        //opacity 0.5
        &:after
          position relative
          left 1rem
          bottom 3rem
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
      opacity 1

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
    <input type="radio" v-for="(image, idx) in images"
      name="image-indicator"
      :id="image.id"
      class="button"
      @click="this.changeSlide(idx)"
      :checked="idx==0">
  </div>

  <img v-for="image in images"
    :src="image.src"
    alt=""
    class="slide">

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
    images: Array,
  },

  data() {
    return {

      slides: [],
      radioButton: [],
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

  // Чтобы подгружалось по готовности разметки
  updated() {
    this.slides=document.querySelectorAll(".slide");
    this.radioButton=document.querySelectorAll(".button");
    this.slides.forEach(
        (slide, index) => {
            slide.style.left = `${index * 100}%`;
        }
    );
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
