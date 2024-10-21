<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.root-number-slider
  width 100%
  display flex
  justify-content space-around
  list-style none
  white-space nowrap
  overflow-x scroll
  scrollbar-width none

  .scroll-touch
    -webkit-overflow-scrolling touch

  &::-webkit-scrollbar
    display none

  .number-item
    display flex
    flex-direction column
    align-items center
    border 1px solid colorPalette1
    border-radius 20px
    padding 10px
    padding-bottom 1px
    margin 15px

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
      <div class="number">{{ numberEvent.num }}</div>
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
      const { data, ok, status } = await this.$api.getStudNums()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить студ в цифрах')
      }
      this.numbersStud = data.studNumbers;
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
