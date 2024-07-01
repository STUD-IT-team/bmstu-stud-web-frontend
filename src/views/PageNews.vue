<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'

.root-page-news
  position relative
  .emotions-sector
    position relative
    img
      width 100%
</style>

<template>
  <div class="root-page-news">
    <div class="emotions-sector">
      <img src="/res/images/video.png" alt=""/>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import New from "~/components/New.vue";

import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: { Footer, ListingBlock, New, Header },

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
      const { data, ok, status } = await this.$api.getNews();
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новости')
      }

      this.news = data.feed;
    }
  }
}
</script>
