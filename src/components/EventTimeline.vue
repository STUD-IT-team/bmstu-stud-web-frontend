<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

main-part-max-width = 1440px
indicator-width = 232px
indicator-height = 76px
radio-radius = 14px

collapsed-width = 200px
expanded-width = 700px

.root-timeline
  //trans(0.5s)
  position relative
  margin auto
  max-width main-part-max-width
  width 100%
  .event
    //trans(0.5s)
    position relative
    //top 0
    display block
    width 1019px
    height 422px
    margin-left auto
    overflow hidden
    border-radius borderRadiusL
    margin-bottom 30px
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
      justify-content left
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
    padding-left 80px
    background colorPalette1
    border-radius 0 borderRadiusM borderRadiusM 0
    width indicator-width
    height indicator-height
    display flex
    align-items center
    padding-top 5px
    font-large()
    color colorWhite
  .timeline-container
    position relative
    left indicator-width
    top - indicator-height
    right 0
    overflow-y visible
    overflow-x scroll
    scrollbar-width none
    height indicator-height + 10px
    .timeline
      trans(0.5s)
      color colorText1
      display flex
      height indicator-height
      width max-content
      margin-left - radio-radius
      .month
        position relative
        height indicator-height * 0.5
        width max-content
        .radio-month
          position absolute
          bottom - (radio-radius * 0.5)
          height radio-radius
          width radio-radius
          -moz-appearance initial
          cursor pointer
          appearance none
          &:after
            trans(0.2s)
            content ''
            display block
            height radio-radius
            width radio-radius
            background colorPalette1
            border-radius borderRadiusMax
            //outline solid
          &:hover
            &:after
              background colorPalette2
          &:checked
            &:after
              //height 30px
              //width 30px
              //margin -5px
              background colorPalette4
          &:checked ~ label
            opacity 0
        label
          trans(0.5s)
          position relative
          top 35px
          font-large()
          width 200px
          left 0.5 * radio-radius - 100px
          text-align center
          padding 0 auto
          display block
        &:first-child
          .month-events-flex
            width expanded-width
          .month-events-flex
            .radio-event
              opacity 1
        .month-events-flex
          trans(0.3s)
          position relative
          top indicator-height * 0.5
          margin-left radio-radius //* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4
                
          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10

        
.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to 
  transform translateY(-10px)
  opacity 0

</style>

<template>
<div class="root-timeline">
    <transition name="event-fade" mode="out-in">
      <div class="event" :key="this.currentEventIdx">
        <img :src="events[currentEventIdx].imgSrc">
        <span class="title">{{events[currentEventIdx].title}}</span>
        <span class="info">{{events[currentEventIdx].info}}</span>
        <span class="description">{{events[currentEventIdx].description}}</span>
      </div>
    </transition>
    <div class="current">{{months[currentMonthIdx]}}</div>
    <div class="timeline-container" ref="timelineScroll" @wheel="handleScroll">  
      <div class="timeline" ref="timeline">
        <div class="month" ref="month" v-for="month in Array.from({length: 12}, (_,index)=>index)">
          <div class="month-events-flex" 
              ref="monthEventFlex">
            <div 
              class="radio-event" 
              ref="radioEvent" 
              v-for="(event, idx) in selectEventsByMonth(month)">
              <input type="radio" 
                name="eventSelect"
                ref="eventSelect"
                :checked="event.id==currentEventIdx"
                @input="setEvent(event.id)">
              <label >{{getShortDate(event.date)}}</label>
            </div>
          </div>
          <input type="radio" 
            ref="monthSelect" 
            class="radio-month" 
            name="monthSelect" 
            :checked="month==currentMonthIdx"
            @click="monthSelect(month)">
          <label for="monthSelect">{{months[month]}}</label>
        </div>
      <div class="future"></div> 
      </div>
      <div class="gradient"></div>
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
        "АВГУСТ",
        "СЕНТЯБРЬ",
        "ОКТЯБРЬ",
        "НОЯБРЬ",
        "ДЕКАБРЬ",
        "ЯНВАРЬ",
        "ФЕВРАЛЬ",
        "МАРТ",
        "АПРЕЛЬ",
        "МАЙ",
        "ИЮНЬ",
        "ИЮЛЬ",
      ],
      monthsGenitive: [
        "АВГУСТА",
        "СЕНТЯБРЯ",
        "ОКТЯБРЯ",
        "НОЯБРЯ",
        "ДЕКАБРЯ",
        "ЯНВАРЯ",
        "ФЕВРАЛЯ",
        "МАРТА",
        "АПРЕЛЯ",
        "МАЯ",
        "ИЮНЯ",
        "ИЮЛЯ",
      ],
      currentMonthIdx: 0,
      currentEventIdx: 0,
      events: [{
        id: 0,
        title: "ШКОЛА ПЕРЕД ШКОЛОЙ",
        info: "300+ базовичков",
        imgSrc: "/res/images/shmb.jpg",
        description: "Лес кайф костёр палатки +вайб, только людей поменьше",
        date: new Date('16 Aug 2024 00:00:00 GMT')
      },
      {
        id: 1,
        title: "ШКОЛА МОЛОДОГО БАУМАНЦА",
        info: "1719 первашей",
        imgSrc: "/res/images/shmb.jpg",
        description: "Лес кайф костёр палатки +вайб. Техподы с лопатами и колунами, штабисты с тушёнкой, кураторы уплетают втихаря доширак, медийщики нервно курят за шатром.",
        date: new Date('23 Aug 2024 00:00:00 GMT')
      },
      {
        id: 2,
        title: "СТАРОСТАТ",
        info: "Выезд для старост окда",
        imgSrc: "/res/images/starostat.jpg",
        description: "Старосты старосты старосты",
        date: new Date('29 Sept 2024')
      },
      {
        id: 3,
        title: "МИСТЕР МУСКУЛ",
        info: "Самые горячие техподы университета",
        imgSrc: "/res/images/missPlaceholder.jpg",
        description: "Мужественные мужчины спорят кто самый мужественный мужчина",
        date: new Date('24 Apr 2024 00:00:00 GMT')
      },
      ],
      autoScrolling: false,
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {
    getShortDate(date) {
      return date.getDate() + " " + this.monthsGenitive[(date.getMonth() + 5) % 12]
    },
    getMonthOffset(month) {
      return month * (200 + 14)
    },
    selectEventsByMonth(month) {
      return this.events.filter((event) => (event.date.getMonth() + 5) % 12==month)
    },
    expandMonth(month) {
      this.$refs.monthEventFlex[month].style.width = "700px"
      let monthEvents = this.selectEventsByMonth(month)
      if (monthEvents.length > 0) {
        for (const eventIdx in monthEvents) {
          this.$refs.radioEvent[monthEvents[eventIdx].id].style.opacity = "1"
        }  
      }
    },
    contractMonth(month) {
      this.$refs.monthEventFlex[month].style.width = "200px"
      let monthEvents = this.selectEventsByMonth(month)
      if (monthEvents.length > 0) {
        for (const eventIdx in monthEvents) {
          this.$refs.radioEvent[monthEvents[eventIdx].id].style.opacity = "0"
        }  
      }
      
    },
    scrollToMonth(month) {
      var target = this.getMonthOffset(month)
      this.$refs.timelineScroll.scrollTo({left: target, behavior: 'smooth'})
      // return new Promise((resolve, reject) => {
      //   const failed = setTimeout(() => {
      //     reject();
      //   }, 2000);

      //   const scrollWaiter = () => {
      //     if (this.$refs.timelineScroll.scrollLeft === target) {
      //       this.$refs.timelineScroll.removeEventListener("scroll", scrollWaiter);
      //       clearTimeout(failed);
      //       resolve();
      //     }
      //   };
      //   if (this.$refs.timelineScroll.scrollLeft === target) {
      //     clearTimeout(failed);
      //     resolve();
      //   } else {
      //     this.$refs.timelineScroll.addEventListener("scroll", scrollWaiter);
      //     //this.$refs.timelineScroll.getBoundingClientRect();
      //   }
      // })
    },
    monthSelect(month) {
      //this.autoScrolling = true
      this.contractMonth(this.currentMonthIdx)
      // await new Promise(r => setTimeout(r, 800));
      this.currentMonthIdx = month
      //this.$refs.timelineScroll.scrollTo({left: month*(200+14), behavior: 'smooth'})
      this.scrollToMonth(month)//.then(() => {
      this.expandMonth(this.currentMonthIdx)
      if (this.selectEventsByMonth(month).length != 0) {
        this.$refs.eventSelect[this.selectEventsByMonth(month)[0].id].checked = true
        this.setEvent(this.selectEventsByMonth(month)[0].id)
      }
      //})
      //while (this.$refs.timelineScroll.offsetLeft != month*(200+14)) {}
      //this.$refs.timelineScroll.scrollTo({left: this.$refs.month[month].offsetLeft+28, behavior: 'smooth'})
    },
    handleScroll(event) {
      event.preventDefault()
      this.$refs.timelineScroll.scrollLeft += event.deltaY*0.5
      // console.log(event.wheelDelta)
      var month = this.currentMonthIdx
      var currentMonthOffset = this.getMonthOffset(this.currentMonthIdx)
      if (this.$refs.timelineScroll.scrollLeft > currentMonthOffset + 200)
        month = this.currentMonthIdx + 1
      if (this.$refs.timelineScroll.scrollLeft < currentMonthOffset - 0)
        month = this.currentMonthIdx - 1
      // console.log(month)
      if (month < 0) month = 0
      if (month > 11) month = 11
      if (this.currentMonthIdx != month) {
        this.monthSelect(month)
        this.$refs.monthSelect[this.currentMonthIdx].checked = true
      } 
    },
    setEvent(eventIdx) {
      this.currentEventIdx = eventIdx
      // console.log("event set: " + eventIdx)
    },
  }
};
</script>
