<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'


.root-admin-clubs
  width 100%
  .input-container
    position relative
    margin 5px 10px
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
  .club-list
    display flex
    flex-direction column
    gap 10px
    margin-top 50px
    .button-add-club
      margin-bottom 10px
      padding 10px
      color colorPalette3
      text-align center
      border-radius borderRadiusS
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
      font-large()
    details
      .info-block
        margin-top 10px
        padding 10px
        border-radius borderRadiusS
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        p
          font-small()

          padding 10px 10px
        .button
          button()

          width 100px
          margin-right 0
          border 2px solid colorPalette1
          border-radius borderRadiusMax
          font-small()
      summary
        cursor pointer
        display flex
        gap 50px
        align-items center
        padding 15px 20px
        border none
        border-radius borderRadiusS
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        &:hover
          background colorPalette5
        img
          width 54px
          height 54px
          object-fit scale-down
          border-radius borderRadiusS
        .text
          font-small()
          header
            font-large()
        .type
          font-medium()

          flex 1
          padding-right 10px
          color colorPalette3
          text-align right


*
  trans(0.3s)

</style>

<template>
  <div class="root-admin-clubs">
    <form
      class="input-container"
      @submit="getOrgsByQuery()"
    >
      <input ref="searchBar">
      <label>Введите название организации</label>
      <img
        src="/static/icons/search.svg"
        @click="getOrgsByQuery()"
      >
    </form>
    <div class="club-list">
      <router-link class="button-add-club" to="/admin/clubs/create">
        +
      </router-link>
      <details v-for="(club, idx) in orgs">
        <summary>
          <img :src="`/media/${club.logo.key}`">
          <span class="text">
            <header>{{ club.name }}</header>
            <p v-for="org in club.orgs">
              {{ org.spec }}: {{ org.name }}
            </p>
          </span>
          <span class="type">
            {{ club.type }}
          </span>
        </summary>
        <div class="info-block">
          <p>{{ club.short_description }}</p>
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
