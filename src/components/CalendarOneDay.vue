<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.root-calendar-one-day
  block(#F9E59A)
  padding 2.5%
  .date
    text-transform capitalize
    color #F9E59A

  .events-container
    display flex
    flex-direction column
    width 250px
    .event
      display flex
      align-items center
      flex-direction row
      justify-content space-between
      .time
        font-small()
      .title
        font-medium()

</style>

<template>
  <div class="root-calendar-one-day">
    <div class="date">{{ datePrettified }}</div>
    <ul class="events-container">
      <li v-for="event in events" class="event">
        <div class="title">{{ event.description }}</div>
        <div class="time">{{ event.date.toLocaleTimeString('ru-RU', {hour: "numeric", minute: "2-digit"}) }}</div>
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
      date: new Date(),
      dateFormat: "long",
      events: [
        {
          id: 1,
          description: 'Event 1 description',
          date: new Date('2024-03-27T18:00:00.000Z'),
          approved: true,
          created_at: new Date('2023-03-27T18:00:00.000Z'),
          reg_url: 'https://example.com/reg1',
          reg_open_date: new Date('2024-03-01T00:00:00.000Z'),
          feedback_url: 'https://example.com/feedback1'
        },

        {
          id: 2,
          description: 'Event 2 description',
          date: new Date('2024-03-28T19:00:00.000Z'),
          approved: false,
          created_at: new Date('2023-03-28T18:00:00.000Z'),
          reg_url: 'https://example.com/reg2',
          feedback_url: 'https://example.com/feedback2'
        },
      ]
    }
  },

  mounted() {
  },

  methods: {}
};
</script>
