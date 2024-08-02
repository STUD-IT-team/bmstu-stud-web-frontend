<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'

.stud-faculties
  position relative
  margin auto

  .background-img
    display block
    img
      position relative
      left 5%
      border-radius 40px
      top 0
      width 90%

  .box
    position relative
    bottom 400px
    left 50%
    width 10%
    transform-style preserve-3d
    animation animate 50s linear infinite

    &:hover
      animation-play-state paused

    @keyframes animate
      0%
        transform perspective(1000px) rotateY(0deg) rotateX(10deg)
      50%
        transform perspective(1000px) rotateY(360deg) rotateX(-10deg)
      100%
        transform perspective(1000px) rotateY(720deg) rotateX(10deg)

    .one-image
      position absolute
      top 0
      left 0
      width 130px
      height 130px
      transform-style preserve-3d
      display flex
      align-items center
      justify-content center
      border-radius 999999px
      pointer-events all
      cursor pointer
      transform rotateY(calc(var(--progress) * 360deg)) translateZ(450px)

      &:hover
        .bg
          transform translateZ(-1px) scale(1.1)
        img
          transform translateZ(20px) scale(1.1)
          filter brightness(1.1)
          box-shadow 0 16px 32px rgba(0, 0, 0, 0.35), 0 8px 8px rgba(0, 0, 0, 0.28)

      .bg
        position absolute
        top 0
        right 0
        inset 0
        border-radius 50%
        background colorPalette1
        z-index -1
        //transform translateZ(-1px)
        transform translateZ(calc(var(--idx) * -2px))
        transition all 0.2s ease
        border 1px solid colorPalette1
        pointer-events none
        display flex
        justify-content center
        align-items center

      img
        width 93%
        height 93%
        border-radius 50%
        box-shadow 0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22)
        transition all 0.2s ease

      a
        display flex
        justify-content center
        align-items center
</style>

<template>
  <div class="stud-faculties">
    <div class="background-img">
      <img src="/res/icons/stud-faculties-bg.svg" alt="">
    </div>
    <div class="box">
      <span v-for="(club, index) in clubs" :style="{'--progress': index / clubs.length}" class="one-image">
        <span v-for="idx in 5" class="bg" :style="{'--idx': idx}"></span>
        <a :href="club.redirectLink">
          <img :src="club.imgUrl" :href="club.redirectLink" />
        </a>
      </span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      clubs: []
    };
  },

  mounted() {
    this.getFacList();
  },

  methods: {
    async getFacList() {
      this.loading = true
      const { data, ok, status } = await this.$api.getFacList()
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить клубы')
      }

      this.clubs = data.clubsList
    },
  }
};
</script>
