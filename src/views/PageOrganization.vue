<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'

between-orgs-gap = 15px
padding-sides = 20px

*
  overflow-wrap break-word

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
      width 100%
      .logo-container
        position relative
        top 0
        display block
        min-width 25%
        padding-top 25%
        .logo
          position absolute
          top 0
          bottom 0
          left 0
          right 0
          img
            width 100%
            height 100%
            object-fit contain
            border-radius borderRadiusL
      .org-description
        display flex
        flex-direction column
        margin 0 40px
        min-width 0
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
  <div class="root-page-orgs" :key="$route.name">
    <!-- <Header></Header> -->

    <main class="main-container">

      <AddressBar :path="path">
      </AddressBar>

      <div class="org-header">
        <div class="logo-container">
          <div class="logo">
            <img :src="logoSrc">
          </div>
        </div>
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

        <PersonCard 
          :style="'transform: rotate('+(Math.random()*6-3)+'deg)'" 
          v-for="(oneLead, idx) in leads"
              :id="oneLead.id"
              :name="oneLead.name"
              :title="oneLead.role_name"
              :description="oneLead.spec"
              :imageSrc="`/media/${oneLead.image.key}`"
              :link-tg="parseExternalLink(oneLead.tg_url)"
              :link-vk="parseExternalLink(oneLead.vk_url)"
              :head="true"
          ></PersonCard>
        <PersonCard 
          :style="'transform: rotate('+(Math.random()*6-3)+'deg)'" 
          v-for="(oneLead, idx) in subLeads"
              :id="oneLead.id"
              :name="oneLead.name"
              :title="oneLead.sub_club_name"
              :description="oneLead.spec"
              :imageSrc="`/media/${oneLead.image.key}`"
              :link-tg="parseExternalLink(oneLead.tg_url)"
              :link-vk="parseExternalLink(oneLead.vk_url)"
              :head="false"
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
import AddressBar from "~/components/AddressBar.vue";
import {parseExternalLink} from "~/utils/utils";


import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: {Footer, ListingBlock, PersonCard, Header, Carousel, AddressBar},

  

  data() {
    return {
      // ID
      orgId: Number,
      // адресная строка
      path: Array,
      // блок описания
      logoSrc: String,
      title: String,
      description: String,
      linkVk: String,
      linkTg: String,
      // блок карточек
      leads: [],
      // блок фоток
      photos: [],

      loading: false,

      StudLogo,
      Picture,

    }
  },

  watch: {
    '$route' (to,from) {
      if (to.name == "organization")
        this.initialize()
    }
  },

  mounted() {
    this.initialize();
  },


  methods: {
    parseExternalLink(link) {
      return parseExternalLink(link)
    },
    getPath() {
      if (this.orgId!=0) {
        return [
          {
            name: "Главная",
            address: "/",
            current: false,
          },
          {
            name: "Организации",
            address: "/organizations",
            current: false,
          },
          {
            name: this.title,
            address: "",
            current: true,
          },
        ]
      }
      else {
        return [
          {
            name: "Главная",
            address: "/",
            current: false,
          },
          {
            name: "О нас",
            address: "",
            current: true,
          },
        ]
      }
    },
    async getInfo() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgInfo(this.orgId);
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию об организации')
      }
      this.logoSrc = `/media/${data.logo.key}`
      this.title = data.name
      this.description = data.description
      // this.linkTg = data.tg_url
      this.linkVk = parseExternalLink(data.vk_url)
      this.linkTg = parseExternalLink(data.tg_url)
      this.leads = data.main_orgs
      this.subLeads = data.sub_orgs
      this.path = this.getPath()
    },
    async getPhotos() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgPhotos(this.orgId);
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить фотографии')
      }

      this.photos = data.media;
    },
    initialize() {
      var params = new URLSearchParams(document.location.search)
      this.orgId=params.get('orgId')
      if (this.orgId===null) {
        this.orgId = 0
      }
      this.getInfo();
      this.getPhotos();
    },
  }
}
</script>
