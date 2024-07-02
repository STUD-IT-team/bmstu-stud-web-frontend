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
    .people
      padding-top 20px
      display flex
      gap 0
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


    </main>

    <Footer></Footer>
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import PersonCard from "~/components/PersonCard.vue";

import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: {Footer, ListingBlock, PersonCard, Header},

  

  data() {
    return {
      leads: [],

      loading: false,

      StudLogo,
      Picture,

      title: 'MediaBMSTU',
    }
  },

  

  mounted() {
    this.getLeads();
  },


  methods: {
    async getLeads() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getLeads();
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить руководителей')
      }

      this.leads = data.leads;
    }
  }
}
</script>
