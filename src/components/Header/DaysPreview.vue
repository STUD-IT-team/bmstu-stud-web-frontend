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
    <button class="left-arrow"><img src="../../../res/icons/arrow-left.svg" alt="arrow-left"></button>
    <div class="week-info-block">
      <div class="evenness">ЧС</div>
      <div class="week-number">17 нед</div>
    </div>
    <div class="days-info-block">
      <OneDay v-for="event in eventsAll" class="day" :date="event.date" :event-names="[event.description]"></OneDay>
    </div>
    <button class="right-arrow"><img src="../../../res/icons/arrow-right.svg" alt="arrow-left"></button>
  </div>
</template>

<script>
import OneDay from "~/components/Header/OneDay.vue";

export default {
  components: {OneDay},
  props: {
  },

  data() {
    return {
      eventsAll: [],

      loading: false,
    }
  },

  computed: {
    eventsDays() {
      return this.events;
    }
  },

  async mounted() {
    const MS_IN_DAY = 1000*60*60*24;
    this.loading = true;
    const {ok, data, code} = await this.$api.getEvents(new Date().toISOString(), new Date(new Date() + MS_IN_DAY).toISOString());
    this.loading = false;
    if (!ok) {
      this.$popups.error(`Ошибка ${code}`, 'Не удалось получить события');
      return;
    }
    this.eventsAll = data.events;
  },

  methods: {
  }
};
</script>
