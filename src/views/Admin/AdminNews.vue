<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'


.root-admin-news
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
  .new-list
    display flex
    flex-direction column
    gap 20px
    .new-container
      border 2px solid colorPalette1
      border-radius borderRadiusM borderRadiusM
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
      .new-header
        display flex
        align-items center
        justify-content space-between
        padding 10px 20px
        background colorPalette1
        border-radius borderRadiusS
        // color colorWhite
        .title
          color colorWhite
          font-large()
        .date
          color colorWhite
          font-medium()
      .content
        display flex
        flex-direction column
        gap 10px
        align-items end
        padding 20px
        .text
          width 100%
          padding 0 40px
          font-small()
        .media
          width 100%
          border-radius borderRadiusM
          box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        .button
          button()

          width 30%
          margin 0
          padding 5px 10px
          border 2px colorPalette1 solid
          border-radius borderRadiusMax
          font-small()




*
  trans(0s)

</style>

<template>
  <div class="root-admin-news">
    <form
      class="input-container"
      @submit="getNewsByQuery()"
    >
      <input ref="searchBar">
      <label>Введите запрос</label>
      <img
        src="/static/icons/search.svg"
        @click="getNewsByQuery()"
      >
    </form>

    <div class="new-list">
      <div class="new-container" v-for="(oneNew, idx) in news">
        <div class="new-header">
          <span class="title">{{ oneNew.title }}</span>
          <span class="date">{{ oneNew.created_at }}</span>
        </div>
        <div class="content">
          <span class="text">{{ oneNew.description }}</span>
          <img class="media" :src="`/media/${oneNew.media.key}`">
          <router-link class="button" :to="`/admin/new/:?newId=${oneNew.id}`">
            Изменить
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},

  data() {
    return {
      news: [],
      loading: false,
    }
  },

  mounted() {
    this.getNews()
  },

  methods: {
    async getNews() {
      this.loading = true;

      const {data, ok, status} = await this.$api.getNews();

      this.loading = false;

      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
      }

      this.news = data.feed;
    },

    async getNewsByQuery() {
      event.preventDefault()
      const query = this.$refs.searchBar.value
      this.loading = true;
      const {data, ok, status} = (query) ?
        await this.$api.getNewsByQuery(query)
        : await this.$api.getNews()
      this.loading = false

      if (!ok) {
        //this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
        this.news = [];
      }
      else
        this.news = data.feed;
    },
  }
}
</script>
