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
    .club-container
      position absolute
      size = 117px
      width size
      height size
      box-shadow 0px 5px 5px 0px rgba(0, 0, 0, 0.5)
      border-radius 99999px
      overflow hidden
      img
        width 100%
        height 100%
        animation rotate 2s linear infinite
        animation-play-state paused

        &:hover
          animation-play-state running

  @keyframes rotate
    from
      transform rotate(var(--start-angle)) translateZ(0)
    to
      transform rotate(calc(var(--start-angle) + 360deg)) translateZ(0)

</style>

<template>
  <div class="stud-clubs">
    <div class="background-img">
      <img src="/res/icons/clubs-bg.svg" alt="" />
    </div>
    <div class="club-holder">
      <div v-for="(club, index) in clubs" :key="index" class="club-container"
           :style="{
            bottom: `${bottoms[index]}%`,
            left: `${lefts[index]}%`,
            '--start-angle': `${angles[index]}deg`,
          }"
      >
        <a :href="club.redirectLink">
          <img :src="club.imgUrl" :alt="club.title"/>
        </a>
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
      lefts: [2, 17, 30, 48.5, 62.5, 76, 9.5, 23.6, 39.5, 55.7, 69.3, 1, 16.2, 33, 46.3, 62.5, 76, 25.4, 39.8, 52.9, 8, 69, 17, 32, 45, 55],
      bottoms: [2, 2, 2, 2, 2, 2, 21, 22, 18, 22, 22, 38.5, 40.8, 38, 37.9, 42, 42, 57, 58, 57.9, 58, 62, 75, 76, 76, 76],
      // angles: [162, 95, 100, 164, 115, 180, 143, 20, 98, 107, 41, 31, 180, 9, 143, 143, 160, 101, 138, 143, 13, 173, 110, 71, 113],
      angles: [],
      clubs: [],
    }
  },

  mounted() {
    this.getClubsList();
    this.generateRandArray();

  },

  methods: {
    async getClubsList() {
      this.loading = true
      const { data, ok, status } = await this.$api.getClubsList()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить список клубов')
      }

      this.clubs = data.clubsList
    },

    async generateRandArray() {
      const arr = []
      for (let i = 0; i < 25; i++) {
        arr.push(Math.floor(Math.random() * 360))
      }
      this.angles = arr
    }

  },
};
</script>
