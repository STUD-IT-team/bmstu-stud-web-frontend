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
      margin-top 80px
      top 10px
      width 100%
      
</style>

<template>
  <div class="root-page-news">
    <div class="emotions-sector">
      <img src="/res/images/video.png" alt=""/>
      <!-- <iframe width="100%" height="700" src="https://rutube.ru/play/embed/c6cc4d620b1d4338901770a44b3e82f4" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> -->
      <img src="/res/icons/create-emotions-circle.svg" alt=""/>
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
