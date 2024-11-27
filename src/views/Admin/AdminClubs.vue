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
    .button-add-club
      padding 10px
      margin-bottom 10px
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
      border-radius borderRadiusS
      text-align center
      font-large()
      color colorPalette3
    details
      .info-block
        margin-top 10px
        padding 10px
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        border-radius borderRadiusS
        p
          font-small()
          padding 10px 10px
        .button
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
          object-fit scale-down
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
      <input ref="searchBar"  >
      <label>Введите название организации</label>
      <img src="/res/icons/search.svg"
        @click="getOrgsByQuery()">        
    </form>
    <div class="club-list">
      <router-link class="button-add-club" to="/admin/clubs/create">
        +
      </router-link>
      <details v-for="(club, idx) in orgs">
        <summary>
          <img :src="`/media/${club.logo.key}`">
          <span class="text">
            <header>{{club.name}}</header>
            <p v-for="org in club.orgs">
              {{org.spec}}: {{org.name}}
            </p>
          </span>
          <span class="type">
            {{club.type}}
          </span>
        </summary>
        <div class="info-block">
          <p>{{club.short_description}}</p>
          <router-link class="button" :to="'/admin/clubs/'+club.id">
            Перейти
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
      orgs: [],
      loading: false,
    }
  },

  mounted() {
    this.getOrgs()
  },

  methods: {
    async getOrgs() {
      this.loading = true;
      
      const {data, ok, status} = await this.$api.getOrgs();
      
      this.loading = false;

      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
      }

      this.orgs = data.clubs;
    },
  
    async getOrgsByQuery() {
      event.preventDefault()
      const query = this.$refs.searchBar.value
      this.loading = true;            
      const {data, ok, status} = (query) ? 
        await this.$api.getOrgsByQuery(query)
        : await this.$api.getOrgs()
      this.loading = false

      if (!ok) {
        //this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
        this.orgs = [];
      }
      else
        this.orgs = data.clubs;
    },
  }
}
</script>
