<style scoped lang="stylus">
@import '../styles/constants.styl'
@import '../styles/buttons.styl'
@import '../styles/fonts.styl'
@import '../styles/components.styl'
@import '../styles/utils.styl'

between-orgs-gap = 15px
padding-sides = 20px


.root-page-orgs
  .main-container
    max-width (main-part-max-width + padding-sides * 2)
    margin-top 100px
    padding 0 padding-sides
    padding-top 50px
    centered-margin()
    .filter-bar
      display flex
      justify-content space-between
      margin-top 20px

      .input-container
        position relative
        width 50%
        label
          pointer-events none
          position absolute
          top 0.8rem
          left 20px
          color colorText3
          text-align left
          font-medium()
          trans()
        input
          all unset
          display block
          box-sizing border-box
          width 100%
          padding 10px 30px
          color colorText1
          border colorPalette1 solid 2px
          border-radius borderRadiusMax
          font-medium()
          &:valid ~ label
          &:focus ~ label
            font-small()

            top -0.5rem
            left 25px
            padding 0 5px
            background colorBg
        img
          cursor pointer
          position absolute
          top 0.4rem
          right 20px
          height 2rem
          filter invert(100%)
    .orgs-container
      display flex
      flex-direction column
      gap between-orgs-gap
      width 100%
      padding-top 30px
      .message-empty
        font-medium()

        padding 0 20px
        color colorText3
</style>

<template>
  <div class="root-page-orgs">
    <!-- <Header></Header> -->

    <main class="main-container">
      <AddressBar :path="path" />

      <div class="filter-bar">
        <Dropdown
          ref="orgCategoriesDropdown"
          name="org-categories-dropdown"
          :items="categories"
          @updateFilter="getOrgsByType()"
        />

        <form
          class="input-container"
          @submit="getOrgsByQuery()"
        >
          <input ref="searchBar" required>
          <label>Введите название организации</label>
          <img
            src="/static/icons/search.svg"
            @click="getOrgsByQuery()"
          >
        </form>
      </div>

      <div class="orgs-container">
        <Organization
          v-for="(oneOrg, idx) in orgs"
          :id="oneOrg.id"
          :title="oneOrg.name"
          :logo-src="`/${oneOrg.logo.key}`"
          :text="oneOrg.description"
          :leads="oneOrg.orgs"
        />
        <span class="message-empty" v-if="orgs.length==0">
          Организаций не найдено :(
        </span>
      </div>
    </main>

    <Footer />
  </div>
</template>


<script>
import Header from "~/components/Header/Header.vue";
import Organization from "~/components/Organization.vue";
import Dropdown from "~/components/Dropdown.vue";
import AddressBar from "~/components/AddressBar.vue";


import StudLogo from "#/images/stud-logo-circle.svg";
import Picture from "#/images/stud-logo-circle.svg";
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
    async getOrgsByType() {
      const type = this.$refs.orgCategoriesDropdown.value
      if(type=="default")
        {this.getOrgs()}
      else {
        this.loading = true;
        const {data, ok, status} = await this.$api.getOrgsByType(type);
        this.loading = false;

        if (!ok) {
          if (status!=404) this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
          this.orgs = [];
        }
        else
          this.orgs = data.clubs;
      }
    },
    async getOrgsByQuery() {
      event.preventDefault()
      const query = this.$refs.searchBar.value
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgsByQuery(query);
      this.loading = false;

      if (!ok) {
        if (status!=404) this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
        this.orgs = [];
      }
      else
        this.orgs = data.clubs;
    },
    async getOrgs() {
      this.loading = true;

      const {data, ok, status} = await this.$api.getOrgs();

      this.loading = false;

      if (!ok && status!=404) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
      }

      this.orgs = data.clubs;
    }
  }
}
</script>
