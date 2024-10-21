<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'


.root-admin-news
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
  .new-list
    display flex
    flex-direction column
    gap 20px
    .new-container
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
      border 2px solid colorPalette1
      border-radius borderRadiusM borderRadiusM
      .new-header
        display flex
        justify-content space-between
        align-items center
        padding 10px 20px
        background colorPalette1
        border-radius borderRadiusS
        //color colorWhite
        .title
          color colorWhite
          font-large()
        .date
          color colorWhite
          font-medium()
      .content
        padding 20px
        display flex
        flex-direction column
        align-items end
        gap 10px
        .text
          padding 0 40px
          font-small()
          width 100%
        .media
          border-radius borderRadiusM
          box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
          width 100%
        .button
          button()
          width 30%
          margin 0
          font-small()
          padding 5px 10px
          border-radius borderRadiusMax
          border 2px colorPalette1 solid


  

*
  trans(0s)

</style>

<template>
  <div class="root-admin-news">
    <form 
      class="input-container"
      @submit="getNewsByQuery()">
      <input ref="searchBar"  >
      <label>Введите запрос</label>
      <img src="/res/icons/search.svg"
        @click="getNewsByQuery()">        
    </form>

    <div class="new-list">
      <div class="new-container" v-for="(oneNew, idx) in news">
        <div class="new-header">
          <span class="title">{{oneNew.title}}</span>
          <span class="date">{{oneNew.created_at}}</span>
        </div>
        <div class="content">
          <span class="text">{{oneNew.description}}</span>
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
