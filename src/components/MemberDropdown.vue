<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'


.root-member-dropdown
  width 100%
  .members-container
    //background colorPalette3
    height 400px
    border solid 2px colorPalette1
    border-radius borderRadiusM
    
  

</style>

<template>

<div class="root-member-dropdown">
  <div class="members-container">
    <div class="member" v-for="member, idx in members">
      AAA
    </div>
  </div>
</div>

</template>

<script>
import CircleLoading from "~/App.vue";
import {ref} from 'vue';

// var slides = document.querySelectorAll(".slide")
// var radioButton = document.querySelectorAll(".button")

// var counter = 0;



// const itemRefs = ref([])

export default {
  // emits: ['delete', 'pin', 'upnin', 'edit'],

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

  computed: {
    // datePrettified() {
    //   return this.timePublished.toLocaleDateString('ru-RU', {day: "numeric", month: "short", hour: "numeric", minute: "numeric"});
    // }
  },

  // Чтобы подгружалось по готовности разметки
  updated() {
  },

  mounted() {
    
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
    }
  }
};
</script>
