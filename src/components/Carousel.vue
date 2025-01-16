<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'
@import '../styles/animations.styl'

carousel-height = 960px * 0.6

carousel-width = main-part-max-width * 0.6

section
  position relative
  overflow hidden
  display flex
  align-items center
  justify-content center
  width carousel-width
  height carousel-height
  // left (main-part-max-width - carousel-width) * 0.5
  margin auto
  background-color colorBg2
  border-radius borderRadiusL
  box-shadow 0 1px 2px 2px mix(black, transparent, 20%)
  .buttons
    position absolute
    z-index 2
    bottom 2rem
    display flex
    // background mix(black, transparent, 30%)
    // padding 5px 20px 0
    // border-radius borderRadiusMax
    gap 0px
    color colorPalette4
    input[type="radio"]
      cursor pointer
      width 2rem
      height 3rem
      padding 0
      appearance none
      // background colorPalette5
      // opacity 0.5
      &:after
        trans(0.1s)

        content ''
        position relative
        z-index 1
        bottom 3rem
        left 1rem
        display block
        width 1px
        height 1px
        margin-top 70px
        opacity 0.5
        background colorWhite
        border-radius borderRadiusMax
        outline 0.5rem solid colorWhite
      &:hover
        &:after
          opacity 0.7
          outline 0.65rem solid colorWhite
      &:checked
        &:after
          opacity 1
          outline 0.8rem solid colorWhite
  img
    position absolute
    width 100%
    height 100%
    opacity 1
    object-fit cover
    transition 1s

.nav
  position absolute
  z-index 1
  top 0
  display flex
  justify-content space-between
  width carousel-width
  height carousel-height
  font-size 30px
  vertical-align center
  img
    width 4rem
    height 4rem
    margin 20px
    padding 20px
    opacity 0.5
    background mix(colorWhite, transparent, 30%)
    border-radius borderRadiusMax
  .prev
  .next
    // background-color colorPalette4
    cursor pointer
    display flex
    align-items center
  .prev
    justify-content left
    width carousel-width*0.3
  .next
    justify-content right
    width carousel-width*0.3
  .prev:hover
  .next:hover
    img
      opacity 1





</style>

<template>
  <section>
    <div class="buttons">
      <input
        type="radio"
        v-for="(image, idx) in images"
        name="image-indicator"
        :id="image.id"
        class="button"
        @click="changeSlide(idx)"
        :checked="idx==0"
      >
    </div>

    <img
      v-for="image in images"
      :src="`/media/${image.key}`"
      :alt="image.name"
      class="slide"
    >

    <div class="nav">
      <a class="side-button prev" @click="goPrev()"> <img src="/static/icons/arrow-left.svg"> </a>
      <a class="side-button next" @click="goNext()"> <img src="/static/icons/arrow-right.svg"> </a>
    </div>
  </section>
</template>

<script>
import CircleLoading from "~/App.vue";

export default {
  components: {CircleLoading},

  props: {
    images: Array,
  },

  data() {
    return {

      slides: [],
      radioButton: [],
      counter: 0,

      loading: false,
    }
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
