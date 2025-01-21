<style scoped lang="stylus">
@import '../styles/constants.styl'
@import '../styles/buttons.styl'
@import '../styles/fonts.styl'
@import '../styles/components.styl'
@import '../styles/utils.styl'

between-orgs-gap = 15px
padding-sides = 20px

*
  overflow-wrap break-word

.root-page-orgs
  .main-container
    max-width (main-part-max-width + padding-sides * 2)
    margin-top 100px
    padding 0 padding-sides
    padding-top 50px
    centered-margin()
    .navbar-orgs
      font-medium()

      color colorText3
      .link
        &:hover
          color colorText4
      .current
        color colorText1

    .org-header
      display flex
      width 100%
      margin-top 20px
      .logo-container
        position relative
        top 0
        display block
        min-width 25%
        padding-top 25%
        .logo
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          img
            width 100%
            height 100%
            object-fit contain
            border-radius borderRadiusL
      .org-description
        display flex
        flex-direction column
        min-width 0
        margin 0 40px
        .title
          font-large-x()

          width max-content
          margin-bottom 20px
          padding 6px 20px 1px
          border 1px solid colorText1
          border-radius borderRadiusS
        .text
          flex 1
          font-medium()
        .links
          display flex
          gap 1rem
          justify-content left
          img
            position relative
            display inline-block
            width 3.5rem
            margin 0
            border-radius 0

    .people
      scrollbar-width none
      overflow-x scroll
      display flex
      gap 0
      height max-content
      margin-right -50rem
      margin-left -50rem
      padding-top 20px
      padding-right 50rem
      padding-bottom 20px
      padding-left 50rem

      &::-webkit-scrollbar
        display none
.gap
  margin-top 4rem
</style>

<template>
  <div class="root-page-orgs" v-if="error != true" :key="$route.name">
    <!-- <Header></Header> -->

    <main class="main-container">
      <AddressBar :path="path" />

      <div class="org-header">
        <div class="logo-container">
          <div class="logo">
            <img :src="logoSrc">
          </div>
        </div>
        <div class="org-description">
          <div class="title">
            {{ title }}
          </div>
          <div class="text">
            {{ description }}
          </div>
          <div class="links">
            <a :href="linkVk"><img src="/static/icons/vk.svg" alt="vk"></a>
            <a :href="linkTg"><img src="/static/icons/tg.svg" alt="tg"></a>
          </div>
        </div>
      </div>

      <div class="gap" />

      <div class="people">
        <PersonCard
          :style="'transform: rotate('+(Math.random()*6-3)+'deg)'"
          v-for="(oneLead, idx) in leads"
          :id="oneLead.id"
          :name="oneLead.name"
          :title="oneLead.role_name"
          :description="oneLead.spec"
          :image-src="`/${oneLead.image.key}`"
          :link-tg="parseExternalLink(oneLead.tg_url)"
          :link-vk="parseExternalLink(oneLead.vk_url)"
          :head="true"
        />
        <PersonCard
          :style="'transform: rotate('+(Math.random()*6-3)+'deg)'"
          v-for="(oneLead, idx) in subLeads"
          :id="oneLead.id"
          :name="oneLead.name"
          :title="oneLead.sub_club_name"
          :description="oneLead.spec"
          :image-src="`/${oneLead.image.key}`"
          :link-tg="parseExternalLink(oneLead.tg_url)"
          :link-vk="parseExternalLink(oneLead.vk_url)"
          :head="false"
        />
      </div>

      <div class="gap" />

      <Carousel :images="photos" />
    </main>

    <Footer />
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import PersonCard from "~/components/PersonCard.vue";
import Carousel from "~/components/Carousel.vue";
import AddressBar from "~/components/AddressBar.vue";
import {parseExternalLink} from "~/utils/utils";


import StudLogo from "#/images/stud-logo-circle.svg";
import Picture from "#/images/stud-logo-circle.svg";
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
      error: true,

      StudLogo,
      Picture,

    }
  },

  async mounted() {
    await this.initialize();
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

      try {
        const {data, ok, status} = await this.$api.getOrgInfo(this.orgId);
        this.loading = false;
        if (!ok) {
          this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию об организации')
        }
        else {
          this.error = false
          this.logoSrc = `/${data.logo.key}`
          this.title = data.name
          this.description = data.description
          this.linkVk = parseExternalLink(data.vk_url)
          this.linkTg = parseExternalLink(data.tg_url)
          this.leads = data.main_orgs
          this.subLeads = data.sub_orgs
          this.path = this.getPath()
        }
      }
      catch(ex) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию об организации (неизвестная ошибка)')
        this.error = true
        this.loading = false;
      }

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
    async initialize() {
      this.orgId=this.$route.params.orgId
      if (!this.orgId) {
        this.orgId = 1
      }
      await this.getInfo();
      if (this.error != true)
        await this.getPhotos()
    },
  },

  watch: {
    '$route' (to,from) {
      if (to.name == "organization" || to.name == "about") {
        this.error = true
        this.initialize()
        }
    }
  }
}
</script>
