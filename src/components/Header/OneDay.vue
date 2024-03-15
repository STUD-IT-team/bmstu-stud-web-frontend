<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'

.root-day-preview
  .title
    font-medium()
    margin-bottom 5px
    white-space nowrap
    overflow-x hidden
    text-overflow ellipsis
    text-transform capitalize
  .events
    list-style none
    padding 0
    margin 0
    margin-left 10px
    .event
      font-small()
      line-height 1.5
      white-space nowrap
      overflow-x hidden
      text-overflow ellipsis
</style>

<template>
  <div class="root-day-preview">
    <header class="title">{{ datePrettified }}</header>
    <ul class="events">
      <li v-for="event in events" class="event">
        {{ event.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
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
