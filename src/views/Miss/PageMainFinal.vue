<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'
.root-page-final
  .header
    font-large-extra()
    text-align center
    color colorMiss1
    margin-bottom 15px
  .main-text
    border-radius borderRadiusL
    border 2px solid colorMiss1
    text-align center
    padding 18px 40px
    margin-bottom 50px
    font-medium()
    p:not(:last-child)
      margin-bottom 10px
    .text-colored
      color colorMiss1
  .cards-container-final
    list-style none
    display flex
    flex-direction column
    gap 20px
    align-items center
    margin-bottom 20px

</style>

<template>
  <div class="root-page-final">
    <div class="header">РЕЗУЛЬТАТЫ КОНКУРСА «МИСС ОЧАРОВАНИЕ – 2024»</div>
    <div class="main-text">
      <p><span class="text-colored">25 апреля </span>в Большом зале Центра креативных индустрий прошел финал конкурса<br><span class="text-colored">«МиСС Очарование  — 2024».</span></p>
      <p>В этом году конкурс прошел в двадцать третий раз. На бауманской сцене выступили 10 финалисток, которые раскрыли свой талант и показали свою уникальность.</p>
      <p>Ниже представлены результаты конкурса.</p>
    </div>
    <ul class="cards-container-final">
      <MissCardFinal class="card"
                     :group="missList[0].group"
                     :name="missList[0].name"
                     :position="1"
                     :image="missList[0].image"
                     title="МИСС ОЧАРОВАНИЕ"
      ></MissCardFinal>
      <MissCardFinal class="card"
                     :group="missList[1].group"
                     :name="missList[1].name"
                     :position="1"
                     :image="missList[1].image"
                     title="ВИЦЕ-МИСС"
                     light
      ></MissCardFinal>
    </ul>
    <MissCardsContainer :show-from-index="2"></MissCardsContainer>
  </div>
</template>


<script>
import MissCardsContainer from "~/components/Miss/MissCardsContainer.vue";
import FooterFivePartners from "~/components/Miss/FooterFivePartners.vue";
import MissCardFinal from "~/components/Miss/MissCardFinal.vue";
import {missList} from "~/utils/constants";

export default {
  components: {MissCardsContainer, FooterFivePartners, MissCardFinal},

  data() {
    return {
      missList,
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>


25 апреля в Большом зале Центра креативных индустрий прошел
финал конкурса «МиСС Очарование  — 2024». В этом году конкурс прошел
в двадцать третий раз. На бауманской сцене выступили 10 финалисток,
которые раскрыли свой талант и показали свою уникальность.
Ниже представлены результаты конкурса.

