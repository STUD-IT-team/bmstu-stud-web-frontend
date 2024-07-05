<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/utils.styl'

between-orgs-gap = 15px
padding-sides = 20px


.root-page-orgs
  .main-container
    padding 0 padding-sides
    padding-top 50px
    centered-margin()
    margin-top 100px
    max-width (main-part-max-width + padding-sides * 2)
    .filter-bar
      display flex
      margin-top 20px
      justify-content space-between
      
      .input-container
        position relative
        width 50%
        label
          position absolute
          top 0.8rem
          left 20px
          text-align left
          font-medium()
          color colorText3
          trans()
          pointer-events none
        input
          all unset
          box-sizing border-box
          display block
          font-medium()
          color colorText1
          width 100%
          padding 10px 30px
          border-radius borderRadiusMax
          border colorPalette1 solid 2px
          &:valid ~ label
          &:focus ~ label
            font-small()
            left 25px
            top -0.5rem
            padding 0 5px
            background colorBg
        img
          filter invert(100%)
          position absolute
          top 0.4rem
          right 20px
          height 2rem
          cursor pointer
    .orgs-container
      padding-top 30px
      width 100%
      display flex
      flex-direction column
      gap between-orgs-gap
      .message-empty
        font-medium()
        color colorText3
        padding 0 20px  
</style>

<template>
  <div class="root-page-orgs">
    <!-- <Header></Header> -->

    <main class="main-container">

      <AddressBar :path="path">
      </AddressBar>
      
      <div class="filter-bar">
        

        <Dropdown
          ref="orgCategoriesDropdown"
          name="org-categories-dropdown"
          :items="categories"
          @updateFilter="getOrgsByTag()"></Dropdown>
        
        <form 
          class="input-container"
          @submit="getOrgsByQuery()">
          
          <input ref="searchBar" required >
          <label>Введите название организации</label>
          <img src="/res/icons/search.svg"
            @click="getOrgsByQuery()">        
        </form>
      
      </div>

      <div class="orgs-container">
        <Organization v-for="(oneOrg, idx) in orgs"
            :id="oneOrg.id"
            :title="oneOrg.title"
            :text="oneOrg.description"
            :headTitle="oneOrg.head_title"
            :head-name="oneOrg.head_name"
        ></Organization>
        <span class="message-empty" v-if="orgs.length==0">
          Организаций не найдено :(
        </span>
      </div>


    </main>

    <Footer></Footer>
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import Organization from "~/components/Organization.vue";
import Dropdown from "~/components/Dropdown.vue";
import AddressBar from "~/components/AddressBar.vue";


import StudLogo from "#~/images/stud-logo-circle.svg";
import Picture from "#~/images/stud-logo-circle.svg";
import ListingBlock from "~/components/ListingBlock.vue";
import Footer from "~/components/Footer.vue";


export default {
  components: {Footer, ListingBlock, Organization, Header, Dropdown, AddressBar},

  data() {
    return {
      orgs: [],

      path: [
        {
          name: "Главная",
          address: "/",
          current: false,
        },
        {
          name: "Организации",
          address: "/organizations",
          current: true,
        },
      ],

      categories: [
        {
          id: 0,
          text: "Все организации",
          value: "default",
        },
        {
          id: 1,
          text: "Студенческие Советы факультетов",
          value: "ССФ",
        },
        {
          id: 2,
          text: "Отряды",
          value: "Отряд",
        },
        {
          id: 3,
          text: "Клубы",
          value: "Клуб",
        },
        {
          id: 4,
          text: "Отделы",
          value: "Отдел",
        },
      ],

      loading: false,

      StudLogo,
      Picture,

    }
  },

  

  mounted() {
    this.getOrgs();
  },


  methods: {
    async getOrgsByTag() {
      const tag = this.$refs.orgCategoriesDropdown.value
      if(tag=="default")  
        {this.getOrgs()}
      else {
        this.loading = true;            
        const {data, ok, status} = await this.$api.getOrgsByTag(tag);
        this.loading = false;

        if (!ok) {
          this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
        }

        this.orgs = data.orgs;
      }
    },
    async getOrgsByQuery() {
      event.preventDefault()
      const query = this.$refs.searchBar.value
      this.loading = true;            
      const {data, ok, status} = await this.$api.getOrgsByQuery(query);
      this.loading = false;

      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
      }

      this.orgs = data.orgs;
    },
    async getOrgs() {
      this.loading = true;
      
      const {data, ok, status} = await this.$api.getOrgs();
      
      this.loading = false;

      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
      }

      this.orgs = data.orgs;
    }
  }
}
</script>
