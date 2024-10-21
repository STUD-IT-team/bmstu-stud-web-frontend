<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'


.root-admin-members
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
  .members-list
    margin-top 30px
    display flex
    flex-direction column
    gap 10px
    .button-add-member
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
        span
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
          .name
          .login
            color colorWhite
        img
          height 54px
          width 54px
          object-fit scale-down
          border-radius borderRadiusS
        .name
          font-large()
        .login
          font-medium()
          color colorText3


*
  trans(0.3s)

</style>

<template>
  <div class="root-admin-members">
    <form 
      class="input-container"
      @submit="getMembersByQuery()">
      <input ref="searchBar"  >
      <label>Введите имя пользователя</label>
      <img src="/res/icons/search.svg"
        @click="getMembersByQuery()">        
    </form>
    <div class="members-list">
      <router-link class="button-add-member" to="/admin/members/create">
        +
      </router-link>
      <details v-for="(member, idx) in members">
        <summary>
          <img :src="`/media/${member.media.key}`">
          <span class="name">
            {{member.name}}
          </span>
          <span class="login">
            {{member.login}}
          </span>
        </summary>
        <div class="info-block">
          <span>TG: {{member.telegram}}</span>
          <br>
          <span>VK: {{member.vk}}</span>
          <router-link class="button" :to="'/admin/members/:?memberId='+member.id">
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
      members: [],
      loading: false,
    }
  },

  mounted() {
    this.getMembers()
  },

  methods: {
    async getMembers() {
      this.loading = true;
      
      const {data, ok, status} = await this.$api.getMembers();
      
      this.loading = false;

      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
      }

      this.members = data.members;
    },
  
    async getMembersByQuery() {
      event.preventDefault()
      const query = this.$refs.searchBar.value
      this.loading = true;            
      const {data, ok, status} = (query) ? 
        await this.$api.getMembersByQuery(query)
        : await this.$api.getMembers()
      this.loading = false

      if (!ok) {
        //this.$popups.error(`Ошибка ${status}`, 'Не удалось получить организации')
        this.members = [];
      }
      else
        this.members = data.members;
    },
  }
}
</script>
