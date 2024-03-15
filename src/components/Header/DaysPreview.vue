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
    transition all 0.2s ease
    hover-effect()
    img
      width 20px
      height 25px

  .week-info-block
  .days-info-block
    margin 0
    padding 10px 7px 15px 7px
    backdrop-filter blur(10px) brightness(1)
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
    display flex
    width 100%
    .day
      padding 3px 10px
      width 33%
    .day:not(:last-child)
      border-right 1px solid white
</style>

<template>
  <div class="root-3-days-preview">
    <button class="left-arrow" @click="changeDay(-1)"><img src="../../../res/icons/arrow-left.svg" alt="arrow-left"></button>
    <div class="week-info-block">
      <div class="evenness">ЧС</div>
      <div class="week-number">17 нед</div>
    </div>
    <div class="days-info-block">
      <OneDay v-for="eventDay in eventsByDays" class="day" :date="eventDay.date" :events="eventDay.events"></OneDay>
    </div>
    <button class="right-arrow" @click="changeDay(+1)"><img src="../../../res/icons/arrow-right.svg" alt="arrow-left"></button>
  </div>
</template>

<script>
import OneDay from "~/components/Header/OneDay.vue";

const MS_IN_DAY = 1000*60*60*24;

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
      const date = new Date(this.dateFrom);
      date.setUTCHours(0,0,0,0);
      return date;
    },
    dateEnd() {
      const date = this.getDateAddDays(this.dateStart, this.daysPeriod);
      date.setUTCHours(23,59,59,999);
      return date;
    },
    eventsByDays() {
      const res = [];
      for (let i = 0; i < this.daysPeriod; i++) {
        const dateDay = this.getDateAddDays(this.dateFrom, i);
        res.push({
          date: dateDay,
          events: this.eventsAll.filter((event) => (event.date.getDate() === dateDay.getDate() && event.date.getMonth() === dateDay.getMonth() && event.date.getFullYear() === dateDay.getFullYear())),
        });
      }
      return res;
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
    changeDay(addDays) {
      this.dateFrom = this.getDateAddDays(this.dateFrom, addDays);
      this.updateEvents();
    },
    getDateAddDays(date, days) {
      return new Date(Number(date) + MS_IN_DAY * days);
    }
  }
};
</script>
