<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-footer
  margin-top auto
  text-align center
  .footer-top
    border-top 1px solid colorMiss1
    padding 25px 0 0 0
    text-align center
    .footer-logos
      margin-bottom 15px
      .footer-logo-left
      .footer-logo-center
      .footer-logo-right
        hover-effect()
      .footer-logo-left
        height 100px
        margin-left 45px
        @media ({mobile})
          height 50px
          margin-left 15px
      .footer-logo-center
        height 100px
        margin 0 10px 0 15px
        @media ({mobile})
          height 50px
      .footer-logo-right
        height 90px
        @media ({mobile})
          height 40px

    .footer-title
      font-large()
      font-normal()
      color colorMiss1
      margin-bottom 15px
    .partners-container
      width 100%
      display flex
      flex-wrap wrap
      justify-content center
      gap 10px 5px
      margin 0 auto
      padding 0 120px 25px
      border-bottom 1px solid colorMiss1
      @media ({mobile})
        padding 0 40px
      .partner
        object-fit: contain 
        flex 1
        max-width 150px
        length auto
        padding 15px
        hover-effect()

  .footer-bottom-title
    font-medium()
    @media ({mobile})
      font-small()
    padding 10px 0
</style>

<template>
  <footer class="root-footer">
    <div class="footer-top">
      <div class="footer-logos">
        <a href="https://bmstu.ru" target="_blank"><img class="footer-logo-left" src="/res/icons/bmstu-logo.svg" alt="bmstu-logo"/></a>
        <a href="https://vk.com/studsovet_bmstu" target="_blank"><img class="footer-logo-center" src="/res/icons/stud-logo.svg" alt="stud-logo"/></a>
        <a href="https://vk.com/miss_bmstu" target="_blank"><img class="footer-logo-right" src="/res/icons/crown-logo.svg" alt="crown-logo"/></a>
      </div>
      <div class="footer-title" v-if="partnersList.length">ПАРТНЁРЫ КОНКУРСА</div>
      <router-link :to="{name: 'missPartners'}" class="partners-container" v-if="partnersList.length">
        <img v-for="partner in partnersList" class="partner" :src="partner.logo" alt="partner-logo"/>
      </router-link>
    </div>
    <div class="footer-bottom-title">Сайт разработан Студенческим советом МГТУ&nbsp;им.&nbsp;Н.Э.&nbsp;Баумана, 2024&nbsp;г.</div>
  </footer>
</template>

<script>
import {partnersList} from "~/utils/constantsMiss";

export default {
  data() {
    return {
      partnersList,
    }
  }
}
</script>
