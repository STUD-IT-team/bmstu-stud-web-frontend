<style lang="stylus" scoped>
@import '../../styles/constants.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'
@import '../../styles/buttons.styl'
@import '../../styles/components.styl'

.root-3-days-preview
  display flex
  gap 15px
  align-items justify-content
  justify-content space-between
  .left-arrow
  .right-arrow
    display flex
    align-items center
    background none
    border none
    outline none
    trans()
    hover-effect()
    img
      width 20px
      height 25px

  .week-info-block
  .days-info-block
    margin 0
    padding 10px 7px 15px 7px
    background mix(colorBg, transparent, 20%)
    backdrop-filter blur(10px) brightness(1.2)
    border-radius borderRadiusS

  .week-info-block
    .evenness
      padding 0 3px
      font-large()

      border-bottom 1px solid white
    .week-number
      transform rotate(180deg)
      margin-top 8px
      padding 0 3px
      writing-mode vertical-lr
      font-large()
  .days-info-block
    > *
      display flex
      height 100%
      .day
        width 100%
        height 100%
        padding 3px 10px
      .day:not(:last-child)
        border-right 1px solid white
</style>

<style lang="stylus" scoped>
@import '../../styles/constants.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'
@import '../../styles/buttons.styl'
@import '../../styles/components.styl'

.list-flip-enter-from
  transform scale(0.9) !important
  overflow hidden !important
  max-width 0 !important
  margin 0 !important
  padding 0 !important
  padding-top 20px !important
.list-flip-enter-active
  transform scale(0.9)
  overflow hidden
  opacity 0
.list-flip-enter-to
  trans(0.3s)

  transform scale(1)
  opacity 1

.list-flip-leave-active
  transform scale(1, 1)
  max-width 150px
  height 100%
  opacity 1
.list-flip-leave-to
  transform scale(0.9, 0) !important
  overflow hidden !important
  flex 0 !important
  max-width 0 !important
  margin 0 !important
  padding 0 !important
  opacity 0 !important
  trans()
.list-flip-move
  trans()
</style>

<template>
  <div class="root-3-days-preview">
    <button class="left-arrow" @click="changeDateFrom(-1)"><img src="/static/icons/arrow-left.svg" alt="arrow-left"></button>
    <div class="week-info-block">
      <div class="evenness">ЧС</div>
      <div class="week-number">17 нед</div>
    </div>
    <div class="days-info-block">
      <transition-group name="list-flip" tag="div">
        <OneDay
          v-for="eventDay in eventsByDays"
          class="day"
          :date="eventDay.date"
          :events="eventDay.events"
          :key="eventDay.date.toDateString()"
        />
      </transition-group>
    </div>
    <button class="right-arrow" @click="changeDateFrom(+1)"><img src="/static/icons/arrow-right.svg" alt="arrow-left"></button>
  </div>
</template>

<script>
import OneDay from "~/components/Header/OneDay.vue";
import {addDaysToDate, compressEventsByDays, getDateDayEnd, getDateDayStart} from "~/utils/utils";


export default {
  components: {OneDay},
  props: {
    fromDate: Date,
    daysPeriod: {
      type: Number,
      default: 3,
    }
  },

  data() {
    return {
      eventsAll: [],
      dateFrom: this.$props.fromDate || new Date(),

      loading: false,
    }
  },

  computed: {
    dateStart() {
      return getDateDayStart(this.dateFrom);
    },
    dateEnd() {
      return getDateDayEnd(this.dateStart, this.daysPeriod);
    },
    eventsByDays() {
      return compressEventsByDays(this.dateFrom, this.daysPeriod, this.eventsAll);
    },
  },

  mounted() {
    this.updateEvents();
  },

  methods: {
    async updateEvents() {
      this.loading = true;
      const {ok, data, status} = await this.$api.getEvents(this.dateStart, this.dateEnd);
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить события');
        return;
      }
      this.eventsAll = data.events;
    },
    changeDateFrom(addDays) {
      this.dateFrom = addDaysToDate(this.dateFrom, addDays);
      this.updateEvents();
    },
  }
};
</script>
