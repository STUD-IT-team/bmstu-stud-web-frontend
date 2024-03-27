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
    margin-bottom 30px
    padding 10px 20px
    scrollable()
    .partner-icon
      cursor pointer
      img
        height 150px
        border-radius borderRadiusS
        overflow hidden
        background mix(white, transparent, 20%)

  .partners-descriptions-container
    margin-bottom 60px
    .partner-container
      margin-bottom 10px
      display flex
      overflow hidden
      @media ({mobile})
        flex-direction column
        align-items center
        gap 10px
      img
        flex 1
        height 100%
        width 100%
        min-width 200px
        max-width 350px
        background white
        border-radius borderRadiusL
      .info-container
        flex 2
        padding 20px
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
      <li v-for="(partner, idx) in partners" class="partner-icon" @click.prevent="scrollToAnchor(`anchor-${idx}`)"><img :src="partner.image" :alt="partner.title"></li>
    </ul>

    <ul class="partners-descriptions-container">
      <li v-for="(partner, idx) in partners" :ref="`anchor-${idx}`" class="partner-container">
        <img :src="partner.image" alt="logo">
        <div class="info-container">
          <header class="title">{{ partner.title }}</header>
          <div class="description">{{ partner.description }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ImagePartner1 from '#~/images/miss/imageMisska0.png';

export default {
  data() {
    return {
      partners: [
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
        {
          image: ImagePartner1,
          title: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
          description: 'Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН» Научно-образовательный центр «АНТОН-КАМАЗ-БАУМАН»',
        },
      ],
      partnersScrollingTimer: undefined,
    }
  },


  mounted() {
    this.partnersScrollingTimer = setInterval(() => {
      this.$refs.partnersIconsScroller.scrollBy({left: 1});
    }, 50);
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
