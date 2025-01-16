<style lang="stylus" scoped>
@import '../../styles/constants.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'
@import '../../styles/buttons.styl'

.root-day-preview
  .title
    font-medium()

    overflow-x hidden
    margin-bottom 5px
    text-overflow ellipsis
    text-transform capitalize
    white-space nowrap
  .events
    margin 0
    margin-left 10px
    padding 0
    list-style none
    .event
      font-small()

      overflow-x hidden
      line-height 1.5
      text-overflow ellipsis
      white-space nowrap
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

  data() {
    return {
    }
  },

  computed: {
    datePrettified() {
      const strData = this.date.toLocaleDateString('ru-RU', {weekday: "short", day: "numeric", month: "short"});
      return strData.slice(0, strData.length - 1);
    }
  },

  mounted() {
  },

  methods: {
  }
};
</script>
