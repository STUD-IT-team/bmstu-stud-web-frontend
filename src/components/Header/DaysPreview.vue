<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.root-3-days-preview
  display flex
  align-items justify-content
  justify-content space-between
  gap 15px
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
    backdrop-filter blur(10px) brightness(1.2)
    background mix(colorBg, transparent, 20%)
    border-radius borderRadiusS

  .week-info-block
    .evenness
      padding 0 3px
      font-large()
      border-bottom 1px solid white
    .week-number
      padding 0 3px
      font-large()
      writing-mode vertical-lr
      transform rotate(180deg)
      margin-top 8px
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
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.list-flip-enter-from
  transform scale(0.9) !important
  max-width 0 !important
  margin 0 !important
  padding 0 !important
  padding-top 20px !important
  overflow hidden !important
.list-flip-enter-active
  opacity 0
  transform scale(0.9)
  overflow hidden
.list-flip-enter-to
  trans(0.3s)
  opacity 1
  transform scale(1)

.list-flip-leave-active
  height 100%
  max-width 150px
  opacity 1
  transform scale(1, 1)
.list-flip-leave-to
  flex 0 !important
  max-width 0 !important
  padding 0 !important
  margin 0 !important
  opacity 0 !important
  transform scale(0.9, 0) !important
  overflow hidden !important
  trans()
.list-flip-move
  trans()
</style>

<template>
  <div class="root-3-days-preview">
    <button class="left-arrow" @click="changeDateFrom(-1)"><img src="/res/icons/arrow-left.svg" alt="arrow-left"></button>
    <div class="week-info-block">
      <div class="evenness">ЧС</div>
      <div class="week-number">17 нед</div>
    </div>
    <div class="days-info-block">
      <transition-group name="list-flip" tag="div">
        <OneDay v-for="eventDay in eventsByDays"
                class="day"
                :date="eventDay.date"
                :events="eventDay.events"
                :key="eventDay.date.toDateString()"
        ></OneDay>
      </transition-group>
    </div>
    <button class="right-arrow" @click="changeDateFrom(+1)"><img src="/res/icons/arrow-right.svg" alt="arrow-left"></button>
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
