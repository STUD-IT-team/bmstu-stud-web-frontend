<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

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
    .photo-container
      flex 1
      photo-max-size = 445px
      photo-min-size = 200px
      min-width photo-min-size
      min-height photo-min-size
      max-width photo-max-size
      max-height photo-max-size
      width 100%
      height 100%
      aspect-ratio 1 / 1
      border 2px solid colorMiss1
      border-radius borderRadiusMax
      overflow hidden
      .profile-photo
        margin-top -20px
        background white
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
            transition all 0.4s ease
            line-height 1.5

  .images-container
    display flex
    flex-wrap wrap
    gap 10px
    .image
      flex 1 1 auto /* or flex: auto; */
      height 200px
      cursor pointer
      position relative
      img
        background white
        object-fit cover
        width 100%
        height 100%
        vertical-align middle
        border-radius 5px
</style>

<template>
  <div class="root-page-miss-card" :key="missId">
    <header class="header">
      <img class="arrow-left" :class="{'hidden': miss.idx === 0}" @click="goToDifferentMiss(-1)" src="/res/icons/arrow-left-card.svg" alt="">
      <div class="info">№{{ miss.id }} {{ miss.name }}</div>
      <img class="arrow-right" :class="{'hidden': miss.idx === (missList.length - 1)}" @click="goToDifferentMiss(+1)" src="/res/icons/arrow-right-card.svg" alt="">
    </header>

    <section class="profile-container">
      <div class="photo-container">
        <ImageWebpJpg class="profile-photo" :src-jpg="miss.imageJpg" :src-webp="miss.imageWebp" alt="photo"></ImageWebpJpg>
      </div>
      <div class="right-column">
        <section class="age-height-group-container">
          <div class="info-block">
            <div class="info-title">Возраст</div>
            <span class="info">{{ miss.age }} лет</span>
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
              <span>{{ QAtext.question }}</span>
              <img class="arrow" src="/res/icons/arrow-right-small.svg" alt="">
            </label>
            <div class="answer">{{ QAtext.answer }}</div>
          </div>
        </section>
      </div>
    </section>

    <ul class="images-container">
      <li class="image" v-for="image in miss.bioImages"><img :src="image" alt="photo"></li>
    </ul>
  </div>
</template>

<script>
import {missList} from "~/utils/constants";
import ImageWebpJpg from "~/components/ImageWebpJpg.vue";


export default {
  components: {ImageWebpJpg},
  data() {
    return {
      missId: Number(this.$route.params.missId),
      miss: {},

      missList,
    }
  },

  mounted() {
    this.updateMiss(this.missId);

    window.scrollTo({top: 0, behavior: "smooth"});
  },

  methods: {
    goToDifferentMiss(incrementValueIdx) {
      const newId = missList[this.miss.idx + incrementValueIdx].id;
      this.$router.push({name: 'missProfile', params: {missId: newId}})
    },
    updateMiss(newMissId) {
      this.missId = newMissId;
      const foundMissIdx = missList.findIndex(miss => miss.id === this.missId);
      if (foundMissIdx === -1) {
        // this.$popups.error('Ошибка', `Участница с номером ${this.missId} не найдена`);
        // this.$router.push({name: 'miss'});
        return;
      }
      this.miss = Object.assign({idx: foundMissIdx}, missList[foundMissIdx]);
    }
  },

  watch: {
    '$route.params.missId'(to) {
      this.updateMiss(Number(to));
    }
  }
}
</script>
