<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page-final
  .header
    font-large-x()
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
    mark
      background none
      color colorMiss1
  .cards-container-final
    list-style none
    display flex
    flex-direction column
    gap 20px
    align-items center
    margin-bottom 20px
  .cards-container-all
    max-width 900px
    centered-margin()
</style>

<template>
  <div class="root-page-final">
    <header class="header">РЕЗУЛЬТАТЫ КОНКУРСА<br>«МИСС ОЧАРОВАНИЕ – 2024»</header>

    <section class="main-text">
      <p><mark>25 апреля</mark>в Большом зале Центра креативных индустрий прошел финал конкурса<br><mark>«МиСС Очарование  — 2024».</mark></p>
      <p>В этом году конкурс прошел в двадцать третий раз. На бауманской сцене выступили <mark>10 финалисток</mark>, которые раскрыли свой талант и показали свою уникальность.</p>
      <p>Ниже представлены результаты конкурса.</p>
    </section>

    <section class="cards-container-final">
      <MissCardFinal class="card"
                     :group="missList[0].group"
                     :name="missList[0].name"
                     :id="missList[0].id"
                     :image-jpg="missList[0].imageJpg"
                     :image-webp="missList[0].imageWebp"
                     title="МИСС ОЧАРОВАНИЕ"
      ></MissCardFinal>
      <MissCardFinal class="card"
                     :group="missList[1].group"
                     :name="missList[1].name"
                     :id="missList[1].id"
                     :image-jpg="missList[1].imageJpg"
                     :image-webp="missList[1].imageWebp"
                     title="ВИЦЕ-МИСС"
                     light
      ></MissCardFinal>
    </section>
    <MissCardsContainer class="cards-container-all" :excluded-ids="[1, 2]"></MissCardsContainer>
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
