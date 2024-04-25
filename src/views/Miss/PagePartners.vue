<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'
@require '../../styles/scrollbars.styl'

.root-page-vote
  .header
    font-large-x()
    text-align center
    color colorMiss1
    margin-bottom 15px

  .partners-icons-container
  .partner-container
    border-radius borderRadiusL
    border 2px solid colorMiss1

  .partners-icons-container
    display flex
    gap 15px
    margin-bottom 50px
    padding 10px 20px
    scrollable()
    .partner-icon
      cursor pointer
      img
        padding 13px
        height 150px
        border-radius borderRadiusS
        overflow hidden
        background mix(white, transparent, 10%)


  .partners-descriptions-container
    margin-bottom 60px
    .partner-container
      margin-bottom 30px
      display flex
      overflow hidden
      @media ({mobile})
        flex-direction column
        align-items center
        gap 10px
      a
        flex 1
        height 100%
        width 100%
        min-width 200px
        max-width 350px
        img
          object-fit: contain
          height 330px
          width 330px
          padding 30px
          margin 15px
          background mix(white, transparent, 10%)
          border-radius borderRadiusL
      .link
        hover-effect()
        text-decoration underline
      .info-container
        flex 2
        padding 20px
        @media ({mobile})
          padding-top 0
        .title
          font-large()
          margin-bottom 10px
        .description
          font-small()
          line-height 1.5
</style>

<template>
  <div class="root-page-vote">
    <header class="header">ПАРТНЁРЫ</header>
    <ul class="partners-icons-container" ref="partnersIconsScroller">
      <li v-for="(partner, idx) in partnersList" class="partner-icon" @click.prevent="scrollToAnchor(`anchor-${idx}`)"><img :src="partner.logo" :alt="partner.title"></li>
    </ul>

    <ul class="partners-descriptions-container">
      <li v-for="(partner, idx) in partnersList" :ref="`anchor-${idx}`" class="partner-container">
        <a :href="partner.href" target="_blank" class="link"><img :src="partner.logo" alt="logo"></a>
        <div class="info-container">
          <a :href="partner.href" target="_blank" class="link"><header class="title">{{ partner.title }}</header></a>
          <div class="description">{{ partner.description }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {partnersList} from "~/utils/constantsMiss";
import {nextTick} from "vue";

export default {
  data() {
    return {
      partnersScrollingTimer: undefined,

      partnersList,
    }
  },


  async mounted() {
    this.partnersScrollingTimer = setInterval(() => {
      this.$refs.partnersIconsScroller.scrollBy({left: 1});
    }, 50);

    await nextTick();
    window.scrollTo({top: 0, behavior: "smooth"});
  },
  unmounted() {
    clearInterval(this.partnersScrollingTimer);
  },

  methods: {
    scrollToAnchor(anchorName) {
      const anchorPositionY = this.$refs[anchorName][0].getBoundingClientRect().top + document.documentElement.scrollTop;
      window.scrollTo({
        top: anchorPositionY,
        behavior: 'smooth',
      });
    }
  },
}
</script>
