<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'


.root-admin-clubs
  width 100%
  .input-container
    position relative
    margin 5px 10px
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
  .club-list
    margin-top 50px
    display flex
    flex-direction column
    gap 10px
    details
      .info-block
        margin-top 10px
        padding 10px
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        border-radius borderRadiusS
        p
          font-small()
          padding 10px 10px
        button
          button()
          width 100px
          font-small()
          margin-right 0
          border-radius borderRadiusMax
          border 2px solid colorPalette1
      summary  
        padding 15px 20px
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        border-radius borderRadiusS
        border none
        display flex
        gap 50px
        align-items center
        cursor pointer
        &:hover
          background colorPalette5
        img
          height 54px
          width 54px
          border-radius borderRadiusS
        .text
          font-small()
          header
            font-large()
        .type
          font-medium()
          color colorPalette3
          flex 1
          text-align right
          padding-right 10px


*
  trans(0.3s)

</style>

<template>
  <div class="root-admin-clubs">
    <form 
      class="input-container"
      @submit="getOrgsByQuery()">
      <input ref="searchBar" required >
      <label>Введите название организации</label>
      <img src="/res/icons/search.svg"
        @click="getOrgsByQuery()">        
    </form>
    <div class="club-list">
      <details>
        <summary>
          <img src="/res/images/stud-logo-circle.svg">
          <span class="text">
            <header>Название организации</header>
            Руководитель: Петя Петров
          </span>
          <span class="type">
            Клуб
          </span>
        </summary>
        <div class="info-block">
          <p>Краткое описание организации</p>
          <router-link :to="'adminClubEdit/:?orgId='+id">
            <button>Перейти</button>
          </router-link>
        </div>
      </details>
    </div>
  </div>
</template>


<script>
export default {
  components: {},

  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
  }
}
</script>
