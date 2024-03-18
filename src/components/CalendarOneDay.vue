<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.root-calendar-one-day
  block()
  .date
    text-transform capitalize
  .events-container
    block()
    .event
      .title
        font-medium()
        margin-right 20px
      .date
        font-small()
</style>

<template>
  <div class="root-calendar-one-day">
    <div class="date">{{ datePrettified }}</div>
    <ul class="events-container">
      <li v-for="event in events" class="event">
        <span class="title">{{ event.description }}</span>
        <span class="date">{{ event.date.toLocaleTimeString('ru-RU', { hour: "numeric", minute: "2-digit" }) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      required: true,
    },
    events: {
      type: Array, // item: apiModels.Event
      required: true,
    }
  },

  computed: {
    datePrettified() {
      const strData = this.date.toLocaleDateString('ru-RU', {weekday: "short", day: "numeric", month: "short"});
      return strData.slice(0, strData.length - 1);
    }
  },

  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
  }
};
</script>
