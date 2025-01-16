<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'

.root-number-slider
  scrollbar-width none
  overflow-x scroll
  display flex
  justify-content space-around
  width 100%
  white-space nowrap
  list-style none

  &::-webkit-scrollbar
    display none

  .scroll-touch
    -webkit-overflow-scrolling touch

  .number-item
    display flex
    flex-direction column
    align-items center
    margin 15px
    padding 10px
    padding-bottom 1px
    border 1px solid colorPalette1
    border-radius 20px

    .number
      font-large-xx()

      color colorPalette1

    .description
      font-large-x()

      color colorPalette1
</style>

<template>
  <ul class="root-number-slider" @scroll="onScroll" ref="root">
    <li v-for="numberEvent in numbersStud.concat(numbersStud)" class="number-item">
      <div class="number">{{ numberEvent.count }}</div>
      <div class="description">{{ numberEvent.description }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      numbersStud: [],
      loading: false,
    }
  },

  mounted() {
    this.getStudNums();
    this.startAutoScrolling();
  },

  methods: {
    async getStudNums() {
      this.loading = true
      const { data, ok, status } = await this.$api.getEncounters(0)
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить студ в цифрах')
      }
      this.numbersStud = data.encounter;
    },

    onScroll() {
      const scrollLeft = this.$refs.root.scrollLeft;
      const scrollWidth = this.$refs.root.scrollWidth / 2;

      if (scrollLeft > scrollWidth) {
        this.$refs.root.scrollLeft = (this.$refs.root.scrollLeft - scrollWidth);
      }
      if (scrollLeft <= 0) {
        this.$refs.root.scrollLeft = scrollWidth + this.$refs.root.scrollLeft;
      }
    },

    startAutoScrolling() {
      this.$refs.root.scrollLeft += 2;
      requestAnimationFrame(this.startAutoScrolling);
    }
  }
};
</script>
