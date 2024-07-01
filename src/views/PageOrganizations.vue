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
    .header
      font-large-xx()
      margin-bottom 20px
    .navbar-orgs
      font-small()
      color colorText3
      .link
        &:hover
          color colorText4
      .current
        color colorText1
    .orgs-container
      padding-top 30px
      width 100%
      display flex
      flex-direction column
      gap between-orgs-gap

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
    .orgs-blocks-section-container
      display flex
      gap between-columns-gap
      @media ({mobile})
        flex-direction column-reverse
      .orgs-container
        width 100%
        display flex
        flex-direction column
        gap between-orgs-gap
      .side-blocks-container
        display flex
        flex-direction column
        gap between-orgs-gap
        > *
          @media ({desktop})
            width 360px
</style>

<template>
  <div class="root-page-orgs">
    <!-- <Header></Header> -->

    <main class="main-container">
      <!-- <header class="header">Организации</header> -->
      <div class="navbar-orgs">
      <router-link to="/" class="link">Главная</router-link>
      ⟶
      <g class="current">Организации</g>
      </div>
      
      <div class="orgs-container">
        <Organization v-for="(oneOrg, idx) in orgs"
            :id="oneOrg.id"
            :title="oneOrg.title"
            :text="oneOrg.description"
            :headTitle="oneOrg.head_title"
            :head-name="oneOrg.head_name"
        ></Organization>
        <!-- <Organization id=1></Organization> -->
      </div>




    </main>

    <Footer></Footer>
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import Organization from "~/components/Organization.vue";

import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: {Footer, ListingBlock, Organization, Header},

  data() {
    return {
      orgs: [],

      loading: false,

      StudLogo,
      Picture,
    }
  },

  mounted() {
    this.getOrgs();
  },

  methods: {
    async getOrgs() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgs();
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новости')
      }

      this.orgs = data.feed;
    }
  }
}
</script>
