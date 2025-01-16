<style scoped lang="stylus">
@import '../styles/constants.styl'
@import '../styles/buttons.styl'
@import '../styles/fonts.styl'
@import '../styles/components.styl'

.root-page-calendar
  padding-top 80px
  // TODO: Все стили ниже надо будет переписать
  .button-change-day
    button-no-styles()
    hover-effect()
    block()

    display inline-block
    padding 10px
  .days-container
    display flex
    flex-wrap wrap
</style>

<template>
  <div class="root-page-calendar">
    <!-- TODO: Такие кнпоки, понятное дело, тоже полный треш -->
    <button class="button-change-day" @click="changeDateFrom(-7)">ВЛЕВО</button>
    <button class="button-change-day" @click="changeDateFrom(+7)">ВПРАВО</button>
    <ul class="days-container">
      <CalendarOneDay
        v-for="dayEvents in eventsByDays"
        class="day"
        :date="dayEvents.date"
        :events="dayEvents.events"
      />
    </ul>

    <Footer />
  </div>
</template>


<script>
import {addDaysToDate, compressEventsByDays, getDateDayEnd, getDateDayStart} from "~/utils/utils";
import CalendarOneDay from "~/components/CalendarOneDay.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: {Footer, CalendarOneDay},
  props: {
    fromDate: Date,
    daysPeriod: {
      type: Number,
      default: 7,
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
    dateStart() { // TODO: Надо будет отредачить, чтобы dateStart всегда было понедельником, а dateEnd - воскресеньем
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
