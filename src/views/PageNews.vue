<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'

between-news-gap = 30px
between-columns-gap = between-news-gap
padding-sides = 20px

.root-page-news
  .main-container
    margin-top 100px
    padding 0 padding-sides
    padding-top 50px
    centered-margin()
    max-width (main-part-max-width + padding-sides * 2)
    .header
      font-large-xx()
      margin-bottom 20px
    .navbar-organizations
      margin-left-size = 'min(-%s, calc((100vw - %s) / -2))' % (padding-sides main-part-max-width)
      padding-left-size = 'max(%s, calc((100vw - %s) / 2))' % (padding-sides main-part-max-width)
      margin-left margin-left-size
      padding 20px padding-left-size
      width 100vw
      border 1px solid white
      border-left none
      border-right none
      margin-bottom 50px
      .organization-button
        padding 5px 3px
        font-medium()
        trans()
        hover-effect-underline()
    .news-blocks-section-container
      display flex
      gap between-columns-gap
      @media ({mobile})
        flex-direction column-reverse
      .news-container
        width 100%
        display flex
        flex-direction column
        gap between-news-gap
      .side-blocks-container
        display flex
        flex-direction column
        gap between-news-gap
        > *
          @media ({desktop})
            width 360px
</style>

<template>
  <div class="root-page-news">
    <main class="main-container">
      <NumbersScroll>
      </NumbersScroll>
    </main>

    <Footer></Footer>
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import New from "~/components/New.vue";
import NumbersScroll from "~/components/NumbersScroll.vue"

import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: {Footer, ListingBlock, New, Header, NumbersScroll},

  data() {
    return {
      news: [],

      loading: false,

      StudLogo,
      Picture,
    }
  },

  mounted() {
    this.getNews();
  },

  methods: {
    async getNews() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getNews();
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новости')
      }

      this.news = data.feed;
    }
  }
}
</script>
