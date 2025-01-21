<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'
@import '../styles/animations.styl'

*
  trans(0.2s)

.root-member-dropdown
  width 100%
  .members-container
    overflow auto
    display flex
    flex-direction column
    gap 10px
    // background colorPalette3
    height 400px
    padding 10px
    border solid 2px colorPalette1
    border-radius borderRadiusM
    .member
      cursor pointer
      display flex
      gap 10px
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
        object-fit contain
        border-radius borderRadiusS
      .name
        font-medium()
      .login
        font-small()

        color colorPalette3



</style>

<template>
  <div class="root-member-dropdown">
    <div class="members-container">
      {{ member }}
      <div class="member" v-for="member, idx in members" @click="setMember(idx)">
        <img :src="`/s${member.media.key}`">
        <span class="name">
          {{ member.name }}
        </span>
        <span class="login">
          {{ member.login }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CircleLoading from "~/App.vue";
import {ref} from 'vue';

export default {

  components: {CircleLoading},

  props: {
  },

  data() {
    return {
      member: Object,
      members: Array,
      loading: false,
    }
  },

  // Чтобы подгружалось по готовности разметки
  updated() {
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
    setMember(idx) {
      this.member = this.members[idx]
    }
  }
};
</script>
