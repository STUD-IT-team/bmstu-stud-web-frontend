<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'

between-orgs-gap = 15px
main-part-max-width = 1140px
padding-sides = 20px


.root-page-orgs
  .main-container
    padding 0 padding-sides
    padding-top 50px
    centered-margin()
    margin-top 100px
    max-width (main-part-max-width + padding-sides * 2)
    .navbar-orgs
      font-medium()
      color colorText3
      .link
        &:hover
          color colorText4
      .current
        color colorText1

    .org-header
      margin-top 20px
      display flex
      img
        width 25%
        margin 20px
        border-radius borderRadiusL
      .org-description
        display flex
        flex-direction column
        margin 20px
        .title
          font-large-x()
          margin-bottom 20px
          padding 6px 20px 1px
          border 1px solid colorText1
          border-radius borderRadiusS
          width max-content
        .text
          flex 1
          font-medium()
        .links
          display flex
          gap 1rem
          justify-content left
          img
            display inline-block
            position relative
            border-radius 0
            width 3.5rem
            margin 0

    .people
      padding-top 20px
      padding-bottom 20px
      display flex
      gap 0
      height max-content

      padding-left 50rem
      padding-right 50rem
      margin-left -50rem
      margin-right -50rem
      overflow-x scroll
      scrollbar-width: none;
      
      &::-webkit-scrollbar
        display none
.gap
  margin-top 4rem
</style>

<template>
  <div class="root-page-orgs">
    <!-- <Header></Header> -->

    <main class="main-container">

      <div class="navbar-orgs">
      <router-link to="/" class="link">Главная</router-link>
      ⟶
      <router-link to="/organizations" class="link">Организации</router-link>
      ⟶
      <g class="current">{{title}}</g>
      </div>
      <div class="org-header">
        <img src="/res/images/placeholders/org-placeholder.jpg">
        <div class="org-description">
          <div class="title">
            {{title}}
          </div>
          <div class="text">
            {{description}}
          </div>
          <div class="links">
            <a :href="linkVk"><img src="/res/icons/vk.svg" alt="vk"></a>
            <a :href="linkTg"><img src="/res/icons/tg.svg" alt="tg"></a>
          </div>
        </div>
      </div>
      
      <div class="gap"></div>

      <div class="people">
        <PersonCard :style="'transform: rotate('+(Math.random()*6-3)+'deg)'" v-for="(oneLead, idx) in leads"
              :id="oneLead.id"
              :name="oneLead.name"
              :title="oneLead.title"
              :description="oneLead.description"
              :link-tg="oneLead.linkTg"
              :link-vk="oneLead.linkVk"
          ></PersonCard>
      </div>

      <div class="gap"></div>

      <Carousel :images="this.photos">
      </Carousel>


    </main>

    <Footer></Footer>
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import PersonCard from "~/components/PersonCard.vue";
import Carousel from "~/components/Carousel.vue";

import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: {Footer, ListingBlock, PersonCard, Header, Carousel},

  

  data() {
    return {
      // блок описания
      title: 'Студенческий Совет факультета ИУ',
      description: 'Описание организации',
      linkVk: 'https://vk.com/studsovet_iu',
      linkTg: 'https://t.me/studsovet_iu',
      // блок карточек
      leads: [],
      // блок фоток
      photos: [],

      loading: false,

      StudLogo,
      Picture,

    }
  },

  

  mounted() {
    this.getLeads();
    this.getPhotos();
  },


  methods: {
    async getLeads() {
      // this.loading = true;
      const {data, ok, status} = await this.$api.getLeads();
      // this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить руководителей')
      }

      this.leads = data.leads;
    },
    async getPhotos() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgPhotos();
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить фотографии')
      }

      this.photos = data.photos;
    },
  }
}
</script>
