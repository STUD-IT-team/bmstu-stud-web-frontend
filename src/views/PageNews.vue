<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'

between-news-gap = 30px
between-columns-gap = between-news-gap

.root-page-news
  .main-container
    display flex
    gap between-columns-gap
    centered-margin()
    width fit-content
    .news-container
      max-width 750px
      display flex
      flex-direction column
      gap between-news-gap
    .side-blocks-container
      max-width 360px
      width 360px
      display flex
      flex-direction column
      gap between-news-gap
      > *
        block(colorPalette4)
        block-bg()
</style>

<template>
  <div class="root-page-news">
    <Header></Header>

    <main class="main-container">
      <ul class="news-container">
        <New v-for="(oneNew, idx) in news"
             :id="oneNew.id"
             :title="oneNew.title"
             :text="oneNew.description"
             organization-name="Студнческий совет МГТУ им. Н.Э. Баумана"
             :organization-logo="StudLogo"
             :images-src="[Picture]"
             :time-published="oneNew.created_at"
             @delete="news.splice(idx, 1)"
        ></New>
      </ul>
      <section class="side-blocks-container">
        <div>Поздравляем</div>
        <div>Горячие новости</div>
      </section>
    </main>

    <NavBar></NavBar>
  </div>
</template>


<script>
import NavBar from "~/components/NavBar.vue";
import Header from "~/components/Header/Header.vue";
import New from "~/components/New.vue";

import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";


export default {
  components: {New, Header, NavBar},

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
