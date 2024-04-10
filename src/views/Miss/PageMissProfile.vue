<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'
@require '../../styles/animations.styl'

.root-page-miss-card
  .header
    border-radius 20px
    overflow hidden
    display flex
    justify-content space-between
    align-items center
    gap 10px
    border 2px solid colorMiss1
    padding 10px 15px
    margin-bottom 40px
    .info
      font-large()
      color colorText1
    .arrow-left
    .arrow-right
      width 17px
      height 32px
      cursor pointer
      hover-effect()
      &.hidden
        opacity 0
        pointer-events none

  .profile-container
    margin-bottom 40px
    display flex
    justify-content center
    gap 20px
    @media ({mobile})
      flex-direction column
      align-items center
    .sticky-container
      flex 1
      photo-max-size = 445px
      photo-min-size = 200px
      min-width photo-min-size
      max-width photo-max-size
      .photo-container
        background white
        min-height photo-min-size
        max-height photo-max-size
        width 100%
        aspect-ratio 1 / 1
        border 2px solid colorMiss1
        border-radius borderRadiusMax
        overflow hidden
        @media ({desktop})
          transform translateY(unquote('clamp(0px, calc((var(--scroll) - var(--start-top)) * 1px), calc((var(--block-height) - var(--photo-height)) * 1px))'))
        //transition all 0.5s ease-out-slow
    .right-column
      flex 2
      .age-height-group-container
        color textColor1
        display flex
        flex-wrap wrap
        align-items flex-start
        justify-content flex-start
        gap 30px
        height min-content
        margin-bottom 20px
        .info-block
          white-space nowrap
          font-medium()
          .info-title
            border 1px solid colorMiss1
            border-radius 8px
            display inline-block
            margin-right 10px
            padding 5px 10px
          .info
            display inline-block

      .questions-answers-container
        .answer-container
          font-small()
          &:not(:last-child)
            margin-bottom 20px
          input[type=checkbox]
            position absolute
            pointer-events none
            opacity 0
            &:checked ~ .answer
              max-height 1000px
              padding-top 10px
              padding-bottom 10px
              opacity 1
            &:checked ~ .question .arrow
              transform rotate(90deg)
          .question
            border 1px solid colorMiss1
            border-radius 8px
            margin-right 10px
            padding 5px 10px
            display flex
            justify-content space-between
            align-items center
            gap 10px
            cursor pointer
            trans()
            &:hover
              padding-left 15px
              opacity 0.9
            .arrow
              trans()

          .answer
            max-height 0
            padding 0 10px
            opacity 0
            overflow hidden
            white-space pre-line
            trans(.4s)
            line-height 1.5

  .images-container
    display flex
    flex-wrap wrap
    justify-content center
    align-items center
    gap 10px
    .image-container
      flex 0 auto
      position relative
      border-radius borderRadiusS
      overflow hidden
      .image
        cursor pointer
        position relative
        max-height 600px
        max-width 400px
        @media({mobile})
          height 260px
        animation-float(0.5s, -20px, 0)
        animation-index-delay(0.1s)
        img
          //background white
          object-fit contain
          width 100%
          height 100%
          vertical-align middle
          border-radius borderRadiusS
</style>

<template>
  <div class="root-page-miss-card" :key="missId" @swipeleft="$isMobile ? goToDifferentMiss(+1) : null" @swiperight="$isMobile ? goToDifferentMiss(-1) : null">
    <header class="header">
      <img class="arrow-left" :class="{'hidden': miss.idx === 0}" @click="goToDifferentMiss(-1)" src="/res/icons/arrow-left-card.svg" alt="">
      <div class="info">№{{ miss.id }} {{ miss.name }}</div>
      <img class="arrow-right" :class="{'hidden': miss.idx === (missList.length - 1)}" @click="goToDifferentMiss(+1)" src="/res/icons/arrow-right-card.svg" alt="">
    </header>

    <section class="profile-container">
      <div class="sticky-container" ref="stickyContainer" :style="{'--start-top': stickyStartTop, '--block-height': stickyBlockHeight, '--photo-height': stickyPhotoHeight}">
        <div class="photo-container" ref="photoContainer">
          <ImageWebpJpg class="profile-photo" :src-jpg="miss.imageJpg" :src-webp="miss.imageWebp" sizes="445px" alt="photo"></ImageWebpJpg>
        </div>
      </div>
      <div class="right-column">
        <section class="age-height-group-container">
          <div class="info-block">
            <div class="info-title">Возраст</div>
            <span class="info">{{ miss.age }}</span>
          </div>
          <div class="info-block">
            <div class="info-title">Рост</div>
            <span class="info">{{ miss.height }} см</span>
          </div>
          <div class="info-block">
            <div class="info-title">Группа</div>
            <span class="info">{{ miss.group }}</span>
          </div>
        </section>

        <section class="questions-answers-container">
          <div v-for="(QAtext, idx) in miss.QAtexts" class="answer-container">
            <input type="checkbox" :id="`question-${idx}`" :checked="idx === 0"/>
            <label class="question" :for="`question-${idx}`">
              <span v-html="QAtext.question"></span>
              <img class="arrow" src="/res/icons/arrow-right-small.svg" alt="">
            </label>
            <div class="answer" v-html="QAtext.answer"></div>
          </div>
        </section>
      </div>
    </section>

    <ul class="images-container">
      <li v-for="(image, i) in miss.bioImages" class="image-container">
        <ImageWebpJpg :src-jpg="image.jpg" :src-webp="image.webp" alt="photo" class="image" :style="{'--animation-index': i}"></ImageWebpJpg>
      </li>
    </ul>
  </div>
</template>

<script>
import {missList} from "~/utils/constantsMiss";
import ImageWebpJpg from "~/components/ImageWebpJpg.vue";
import {nextTick} from "vue";
import TouchSweep from "touchsweep";


export default {
  components: {ImageWebpJpg},
  data() {
    return {
      missId: Number(this.$route.params.missId),
      miss: {},
      stickyStartTop: 150,
      stickyPhotoHeight: 0,
      stickyBlockHeight: 0,

      resizeObserver: new ResizeObserver(this.updateHeights),

      missList,
    }
  },

  async mounted() {
    this.updateMiss(this.missId);

    await nextTick();
    this.updateHeights();

    this.resizeObserver.observe(document.body);

    window.scrollTo({top: 0, behavior: "smooth"});
  },
  unmounted() {
    this.resizeObserver.unobserve(document.body);
  },

  methods: {
    goToDifferentMiss(incrementValueIdx) {
      const newId = missList[this.miss.idx + incrementValueIdx]?.id;
      if (newId === undefined) {
        return;
      }
      this.$router.push({name: 'missProfile', params: {missId: newId}})
    },
    async updateMiss(newMissId) {
      this.missId = newMissId;
      const foundMissIdx = missList.findIndex(miss => miss.id === this.missId);
      if (foundMissIdx === -1) {
        // this.$popups.error('Ошибка', `Участница с номером ${this.missId} не найдена`);
        // this.$router.push({name: 'miss'});
        return;
      }
      this.miss = Object.assign({idx: foundMissIdx}, missList[foundMissIdx]);

      await nextTick();
      new TouchSweep(this.$el, {value: 1}, 30)
    },
    updateHeights() {
      // this.stickyStartTop = this.$refs.stickyContainer.offsetTop;
      this.stickyBlockHeight = this.$refs.stickyContainer.clientHeight;
      this.stickyPhotoHeight = this.$refs.photoContainer.offsetHeight;
    },
  },

  watch: {
    '$route.params.missId'(to) {
      this.updateMiss(Number(to));
    },
  }
}
</script>
