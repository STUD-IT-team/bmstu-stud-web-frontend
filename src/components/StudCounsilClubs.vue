<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.stud-clubs
  position relative
  margin auto
  left 5%
  .background-img
    display block
    img
      border-radius 40px
      width 90%
  
  .club-holder
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    img
      position absolute
      border-radius 50%
      width 13%
      // animation fall 1s ease-in-out forwards
      // transform translateY(0)
      animation fall 1s cubic-bezier(0.285, 1.650, 0.485, 0.640)
  
  @keyframes fall
    0%
      transform translateY(-750px)
    100% 
      transform translateY(0%)
</style>

<template>
  <div class="stud-clubs">
    <div class="background-img">
      <img src="/res/icons/clubs-bg.svg" alt="" />
    </div>
    <div class="club-holder">
      <div v-for="(club, index) in clubs" :key="index">
        <img :src="club.imgUrl" :alt="club.title" :style="{ bottom: `${bottoms[index]}%`, left: `${lefts[index]}%` }"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},

  computed: {},

  data() {
    return {
      lefts: [2, 17, 30, 49, 62, 75, 9, 15],
      bottoms: [2, 2, 2, 2, 2, 2, 13, 13],
      clubs: [],
    }
  },

  mounted() {
    this.getClubsList();
  },

  methods: {
    async getClubsList() {
      this.loading = true
      const { data, ok, status } = await this.$api.getClubsList()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить студ в цифрах')
      }

      this.clubs = data.clubsList
    },

  },
};
</script>
