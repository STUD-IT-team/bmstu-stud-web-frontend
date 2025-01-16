<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'


.root-admin-members
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
  .members-list
    display flex
    flex-direction column
    gap 10px
    margin-top 30px
    .button-add-member
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
        span
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
          .name
          .login
            color colorWhite
        img
          width 54px
          height 54px
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
      @submit="getMembersByQuery()"
    >
      <input ref="searchBar">
      <label>Введите имя пользователя</label>
      <img
        src="/static/icons/search.svg"
        @click="getMembersByQuery()"
      >
    </form>
    <div class="members-list">
      <router-link class="button-add-member" to="/admin/members/create">
        +
      </router-link>
      <details v-for="(member, idx) in members">
        <summary>
          <img :src="`/media/${member.media.key}`">
          <span class="name">
            {{ member.name }}
          </span>
          <span class="login">
            {{ member.login }}
          </span>
        </summary>
        <div class="info-block">
          <span>TG: {{ member.telegram }}</span>
          <br>
          <span>VK: {{ member.vk }}</span>
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
