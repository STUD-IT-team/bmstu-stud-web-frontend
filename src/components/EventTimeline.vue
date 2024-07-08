<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

main-part-max-width = 1440px

.root-timeline
  margin auto
  max-width main-part-max-width
  width 100%
  .event
    trans(0.5s)
    position relative
    //top 0
    display block
    width 1019px
    height 422px
    margin-left auto
    overflow hidden
    border-radius borderRadiusL
    img
      trans(0.5s)
      //transition filter 5s linear
      //border-radius borderRadiusL
      height inherit
      width inherit
      object-fit cover
      filter brightness(0.6)
      outline 10px solid black
    .title
    .info
      trans(0.5s)
      position absolute
      top 0
      height 100%
    .title
      right 0
      width 60%
      display flex
      text-align right
      padding-right 20px
      align-items center
      font-large-xxx()
      color colorWhite
    .info
      width 40%
      display flex
      align-items top
      justify-content center
      padding 40px 40px
      font-large-xx()
      color colorWhite
    .description
      trans(0.5s)
      transition-delay 0.4s 0
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      display flex
      align-items top
      justify-content center
      font-large()
      color colorWhite
      padding 50px
      opacity 0
    &:hover
      .title
      .info
        opacity 0
      .description
        opacity 1
      img
        filter brightness(0.4) blur(10px)
  .current
    padding 20px 20px 20px 80px
    background colorPalette1
    border-radius 0 borderRadiusM borderRadiusM 0
    width 200px
    height 70px
    display flex
    align-items center
    font-medium()
    color colorWhite
  .timeline-container
    position relative
    left 200px
    top -70px
    right 0
    overflow-x scroll
  .timeline
    trans(0.5s)
    align-items center
    color colorText1
    display flex
    height 70px
    width max-content
    margin-left -30px
    .month
      top 50%
      width 500px
      height 11px
      border-bottom solid 2px
      display flex
      justify-content left
      input:checked ~ .
        width 1000px
      input[type=radio]
        height 20px
        width 20px
        -moz-appearance initial
        cursor pointer
        appearance none
        &:after
          content ''
          display block
          height 20px
          width 20px
          background colorPalette1
          border-radius borderRadiusMax
          //outline solid
        &:hover
          &:after
            background colorPalette2
        &:checked
          &:after
            height 30px
            width 30px
            margin -5px
            background colorPalette4
      &:last-child
        width 1600px

</style>

<template>
<div class="root-timeline">
    <div class="event" :key="currentEventIdx">
      <img :src="events[currentEventIdx].imgSrc">
      <span class="title">{{events[currentEventIdx].title}}</span>
      <span class="info">{{events[currentEventIdx].info}}</span>
      <span class="description">{{events[currentEventIdx].description}}</span>
    </div>
    <div class="current">{{months[currentMonthIdx]}}</div>
    <div class="timeline-container" ref="timelineScroll" @scroll="handleScroll()">  
      <div class="timeline" ref="timeline">
        <div class="month" v-for="month in Array.from({length: 12}, (_,index)=>index)">
          <input type="radio" name="monthSelect" ref="monthSelect" @click="monthSelect(month)">
          <!-- <input type="radio" v-for="(event, idx) in selectEventsByMonth(month)" name="eventSelect"> -->
        </div>
      </div>
    </div>
</div>
</template>

<script>
import CircleLoading from "~/App.vue";


export default {
  emits: ['delete', 'pin', 'upnin', 'edit'],

  
  components: {CircleLoading},

  props: {
  },

  data() {
    return {
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      currentMonthIdx: 0,
      currentEventIdx: 0,
      events: [{
        title: "ШКОЛА МОЛОДОГО БАУМАНЦА",
        info: "1719 первашей",
        imgSrc: "/res/images/shmb.jpg",
        description: "Лес кайф костёр палатки +вайб. Техподы с лопатами и колунами, штабисты с тушёнкой, кураторы уплетают втихаря доширак, медийщики нервно курят за шатром.",
        date: new Date('23 Aug 2024 00:00:00 GMT')
      },
      {
        title: "МиССка",
        info: "10 девочек",
        imgSrc: "https://vk.com/photo-56395169_457252485",
        description: "И 1 мальчик",
        date: new Date('24 Apr 2024 00:00:00 GMT')
      },
      ],
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {
    selectEventsByMonth(month) {
      return this.events.filter((event) => event.date.getMonth()==month)
    },
    monthSelect(month) {
      this.currentMonthIdx = month
      this.$refs.timelineScroll.scrollTo({left: this.$refs.monthSelect[month].offsetLeft+40, behavior: 'smooth'})
      console.log(this.$refs.monthSelect[month].offsetLeft)
      //if currentMonthIdx
      // while
      // var move = this.$refs.timeline.firstChild
      // move.remove()
      // this.$refs.timeline.append(move)
    },
    handleScroll() {
      this.currentMonthIdx = Math.floor((this.$refs.timelineScroll.scrollLeft - 0) / 500)
      console.log(Math.floor((this.$refs.timelineScroll.scrollLeft - 250) / 500))
      this.$refs.monthSelect[this.currentMonthIdx].checked = true
    },
  }
};
</script>
