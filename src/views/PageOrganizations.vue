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
    .filter-bar
      display flex
      margin-top 20px
      justify-content space-between
      
      details
        position: relative
        width: 300px
        margin-right: 1rem
        &[open]
          z-index 1
        summary
          padding: 12px 20px 12px 30px
          cursor: pointer;
          border-radius: 5px;
          background colorPalette1
          color colorWhite
          list-style: none;
          border-radius borderRadiusMax
          &::-webkit-details-marker
            display: none;
          &:after
            content: '';
            display: inline-block;
            float: right;
            width: .8rem;
            height: .8rem;
            border-bottom: 1px solid currentColor;
            border-left: 1px solid currentColor;
            border-bottom-left-radius: 2px;
            transform: rotate(45deg) translate(50%, 0%);
            transform-origin: center center;
            transition: transform ease-in-out 100ms
          &:focus
            outline none
          .radios
            counter-reset: radios;
            &:before
              content: var(--selection);
          input[type=radio] 
            font-medium()
            color colorWhite
            counter-increment: radios;
            appearance: none;
            display: none;
          input[type=radio]:checked
            display: inline;
            --display: block;
          input[type=radio]:after
            content: attr(title);
            display: inline;
        &[open]
          summary:before
            content: '';
            display: block;
            width: 100vw;
            height: 100vh;
            background: transparent;
            position: fixed;
            top: 0;
            left: 0;
          summary:after
            transform: rotate(-45deg) translate(0%, 0%);
        ul
          width 100%
          background colorBg
          position absolute
          top calc(100% + 0.5rem)
          left 0
          margin 0
          box-sizing border-box
          border-radius borderRadiusS
          box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
          .list
            counter-reset labels
          li
            width 100%
            margin: 0;
            padding: 10px 20px
            &:hover
              background colorPalette5
              &:last-child
                border-bottom-left-radius borderRadiusS
                border-bottom-right-radius borderRadiusS
              &:first-child
                border-top-left-radius borderRadiusS
                border-top-right-radius borderRadiusS
              label
                color colorWhite
            label
              width 100%
              display flex
              cursor pointer
              justify-content space-between
              font-small()
              span
                --display: none;
                display: var(--display);
                width: 1rem;
                height: 1rem;
                border: 1px solid #727272;
                border-radius: 3px;
        
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

    .navbar-orgs
      font-medium()
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
</style>

<template>
  <div class="root-page-orgs">
    <!-- <Header></Header> -->

    <main class="main-container">

      <div class="navbar-orgs">
      <router-link to="/" class="link">Главная</router-link>
      ⟶
      <g class="current">Организации</g>
      </div>
      
      <div class="filter-bar">
        
        <details class="custom-select">
          <summary class="radios">
            <input type="radio" name="org-type-select" id="default" title="Все организации" checked>
            <input type="radio" name="org-type-select" id="Отряд" title="Отряды">
            <input type="radio" name="org-type-select" id="ССФ" title="ССФ">
            <input type="radio" name="org-type-select" id="Клуб" title="Клубы">
            <input type="radio" name="org-type-select" id="Отдел" title="Отделы">
          </summary>
          <ul class="list">
            <li>
              <label for="default">
                Все организации
              </label>
            </li>
            <li>
              <label for="Отряд">Отряды</label>
            </li>
            <li>
              <label for="ССФ">ССФ</label>
            </li>
            <li>
              <label for="Клуб">Клубы</label>
            </li>
            <li>
              <label for="Отдел">Отделы</label>
            </li>
          </ul>
        </details>

        <div class="input-container">
        
          <input>
          <label>Введите название организации</label>
          <img src="/res/icons/search.svg">        
        </div>
      
      </div>

      <div class="orgs-container">
        <Organization v-for="(oneOrg, idx) in orgs"
            :id="oneOrg.id"
            :title="oneOrg.title"
            :text="oneOrg.description"
            :headTitle="oneOrg.head_title"
            :head-name="oneOrg.head_name"
        ></Organization>
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

      getTag: function () {        
        return document.querySelector("input[name='org-type-select']:checked").id
      },

      checkTag: function (org) {
        return true
      },
    }
  },

  

  mounted() {
    this.getOrgs();
  },


  methods: {
    async getOrgs(tag="") {
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgs();
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
      }

      this.orgs = data.feed;
    }
  }
}
</script>
