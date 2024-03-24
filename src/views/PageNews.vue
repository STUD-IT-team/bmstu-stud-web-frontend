<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'

between-news-gap = 30px
between-columns-gap = between-news-gap
main-part-max-width = 1140px
padding-sides = 20px

.root-page-news
  .main-container
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
        transition all .2s
        hover-effect-underline()
    .news-blocks-section-container
      display flex
      gap between-columns-gap
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
          width 360px
</style>

<template>
  <div class="root-page-news">
    <Header></Header>

    <main class="main-container">
      <header class="header">Лента новостей</header>

      <nav class="navbar-organizations">
        <router-link to="#" class="organization-button">Все события</router-link>
      </nav>

      <section class="news-blocks-section-container">
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
        <div class="side-blocks-container">
          <ListingBlock title="Поздравляем!"
                        :text-rows="[
                        'Поздравляем Антона Павленко с ДР!!!',
                        'Поздравляем Антона Успенского со званием мисс',
                        'А вас не бесит it отдел?',
                        'Это студенческий совет МГТУ им. Н.Э. Баумана',
                      ]">
          </ListingBlock>
          <ListingBlock title="Горячие новости"
                        :text-rows="[
                        'А вас не бесит it отдел?',
                        'Меня лично бесит',
                        'Можно выйти пж?',
                        'Блин кнопку выхода не сделали :(',
                        'Я запрещаю вам выходить из IT-отдела!',
                      ]">
          </ListingBlock>
        </div>
      </section>
    </main>

    <Footer></Footer>
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import New from "~/components/New.vue";

import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";


export default {
  components: {ListingBlock, New, Header},

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
