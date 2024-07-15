<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'


.root-admin-club
  top 100px
  width 100%
  height 100%
  display flex
  align-items center
  .main-container
    height max-content
    max-width 1440px
    width 100%
    display flex
    flex-direction column
    gap 30px
    height max-content
    .button-container
      display flex
      justify-content space-between
      .button
        button()
        width 200px
        margin 0
        font-medium()
        border-radius borderRadiusMax
        border 2px solid colorPalette1
    .main-info
      display flex
      gap 20px
      .main-left
        position relative
        display flex
        flex-direction column
        gap 20px
        min-width 250px
        padding 10px
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        border-radius borderRadiusS
        height max-content
        img
          width 230px
          height 230px
          object-fit scale-down
          border-radius borderRadiusM
          background colorPalette3
      .main-right
        width 100%
        height max-content
        padding 20px
        display flex
        gap 10px
        flex-direction column
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        border-radius borderRadiusS
    .general-container
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
      border-radius borderRadiusS
      padding 10px 20px
      display flex
      flex-direction column
      .header
        font-large()
        text-align center
    .image-wrapper
      width 100%
      .image-container
        text-wrap wrap
        height max-content
        //max-width 80%
        //background colorPalette4
        display block
        //text-align center
        centered-margin()
        img
          width calc(25% - 10px)
          display inline-block
          margin 5px
          border-radius borderRadiusM
          box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
          &:hover
            //box-shadow 0 1px 2px 2px mix(colorPalette4, transparent, 30%)
            filter brightness(0.8)

    .input-container
      position relative
      width 100%
      height max-content
      align-items left  
      .row
        display flex
        height max-content
        justify-content left
        //justify-content space-between
        gap 10px
        label
          width max-content
          left 20px
          font-large()
          &:changed
            color colorPalette4
        p
          width max-content
          width 80%
          left 20px
          font-medium()
        img
          width 30px
          height 30px
          cursor pointer
        input
          border-radius borderRadiusS
          width 80%
          background colorBg
          border 2px solid colorPalette1
          opacity 1
          font-medium()
          padding 10px 20px
        textarea
          trans(0s)
          resize vertical
          width 80%
          background colorBg
          border 2px solid colorPalette1
          border-radius borderRadiusS
          min-height 100px
          height 100%
          font-medium()
          padding 10px 10px
        button
          button()
          display inline-block
          padding 10px 20px
          font-medium()
          width 20%
          height 100%
          border 2px solid colorPalette1
            





*
  trans(0.3s)
  background mix(black, transparent, 0%)

</style>

<template>
  <div class="root-admin-club">
    <div class="main-container">
      <div class="button-container">
        <router-link class="button" to="/admin/clubs">
          Назад
        </router-link>
        <button class="button">
          Очистить всё
        </button>
      </div>


      <div class="main-info">
        <div class="main-left">
          <img :src="`/media/${club.logo.key}`">
          <details>
            <summary>
              {{club.type}}
            </summary>
            <p v-for="type in categories">
              {{type.text}}
            </p>
          </details>
        </div>
        <div class="main-right">
          <!-- Название -->
          <div class="input-container">
            <div class="row">
              <label for="club-name" ref="labelName">
                Название: {{club.name}}
              </label>
              <img src="/res/icons/edit.svg" @click="showInput(0)">
            </div>
            <div class="row" ref="rowInputName" style="display: none">
              <input id="club-name" ref="inputNameField" :value="club.name">
              <button @click="setName()">ОК</button>
            </div>
          </div>
          <!-- Короткое название -->
          <div class="input-container">
            <div class="row">
              <label for="club-short-name" ref="labelShortName">
                Короткое название: {{club.short_name}}
              </label>
              <img src="/res/icons/edit.svg" @click="showInput(1)">
            </div>
            <div class="row" ref="rowInputShortName" style="display: none">
              <input id="club-short-name" ref="inputShortNameField" :value="club.short_name">
              <button @click="setShortName()">ОК</button>
            </div>
          </div>
          <!-- Описание -->
          <div class="input-container">
            <div class="row">
              <p style="white-space: pre-line" ref="labelDescription">
                Описание: <br>{{club.description}}
              </p>
              <img src="/res/icons/edit.svg" @click="showInput(2)">
            </div>
            <div class="row" ref="rowInputDescription" style="display: none">
              <textarea id="club-description" ref="inputDescriptionField">{{club.description}}</textarea>
              <button @click="setDescription()">ОК</button>
            </div>
          </div>

        </div>
      </div>


      <div class="general-container">
        <span class="header">
          Ссылки на соцсети
        </span>
        <div class="input-container">
          <div class="row">
            <label for="club-link-tg" ref="labelLinkTg">
              Телеграм: {{club.tg_url}}
            </label>
            <img src="/res/icons/edit.svg" @click="showInput(3)">
          </div>
          <div class="row" ref="rowInputLinkTg" style="display: none">
            <input id="club-link-tg" ref="inputLinkTgField" :value="club.tg_url">
            <button @click="setLinkTg()">ОК</button>
          </div>
        </div>
        <div class="input-container">
          <div class="row">
            <label for="club-link-vk" ref="labelLinkVk">
              ВКонтакте: {{club.vk_url}}
            </label>
            <img src="/res/icons/edit.svg" @click="showInput(4)">
          </div>
          <div class="row" ref="rowInputLinkVk" style="display: none">
            <input id="club-link-vk" ref="inputLinkVkField" :value="club.vk_url">
            <button @click="setLinkVk()">ОК</button>
          </div>
        </div>
      </div>

      <div class="general-container">
        <span class="header">
          Руководители
        </span>

        <!-- <label>{{club.main_orgs[0].role_name}}: {{club.main_orgs[0].name}}</label> -->
        <!-- <div class="input-container" v-for="(lead, idx) in club.main_orgs">
          <div class="row">
            <label ref="labelLead">
              {{lead.role_name}}: {{lead.name}}
            </label>
            <img src="/res/icons/edit.svg" @click="showInput(idx+5)">
          </div>
          <div class="row" ref="rowInputLinkVk" style="display: none">
            <input id="club-lead-role" ref="inputLeadRoleField" :value="lead.">
            <input id="club-lead-name" ref="inputLeadNameField" :value="club.vk_url">
            <button @click="setLinkVk()">ОК</button>
          </div>
        </div> -->
      </div>

      <div class="image-wrapper">
        <div class="image-container">
          <img v-for="image in photos" 
          :src="`/media/${image.key}`">
          <img v-for="image in photos" 
          :src="`/media/${image.key}`">
          <img v-for="image in photos" 
          :src="`/media/${image.key}`">
          <img v-for="image in photos" 
          :src="`/media/${image.key}`">
          <img v-for="image in photos" 
          :src="`/media/${image.key}`">
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import Dropdown from "~/components/Dropdown.vue";

export default {
  components: {Dropdown},

  data() {
    return {
      club: Object,
      photos: Array,
      orgId: Number,

      categories: [
        {
          id: 1,
          text: "ССФ",
          value: "IT",
        },
        {
          id: 2,
          text: "Отряд",
          value: "Отряд",
        },
        {
          id: 3,
          text: "Клуб",
          value: "Клуб",
        },
        {
          id: 4,
          text: "Отдел",
          value: "Отдел",
        },
      ],

    }
  },

  created() {
    this.initialize()
  },

  methods: {
    showInput(idx) {
      var row
      if (idx == 0)
        row = this.$refs.rowInputName
      if (idx == 1)
        row = this.$refs.rowInputShortName
      if (idx == 2)
        row = this.$refs.rowInputDescription
      if (idx == 3)
        row = this.$refs.rowInputLinkTg
      if (idx == 4)
        row = this.$refs.rowInputLinkVk
      if (getComputedStyle(row).display == "none")
        row.style.display = "flex"
      else
        row.style.display = "none"
    },
    setName() {
      const newVal = this.$refs.inputNameField.value
      if (newVal != this.club.name) {
        this.club.name = newVal
        this.$refs.labelName.style.color = "#FF9301"
      }
      this.showInput(0)
    },
    setShortName() {
      const newVal = this.$refs.inputShortNameField.value
      if (newVal != this.club.short_name) {
        this.club.short_name = newVal
        this.$refs.labelShortName.style.color = "#FF9301"
      }
      this.showInput(1)
    },
    setDescription() {
      const newVal = this.$refs.inputDescriptionField.value
      if (newVal != this.club.description) {
      this.club.description = newVal
      this.$refs.labelDescription.style.color = "#FF9301"
      }
      this.showInput(2)
    },
    setLinkTg() {
      const newVal = this.$refs.inputLinkTgField.value
      if (newVal != this.club.tg_url) {
        this.club.tg_url = newVal
        this.$refs.labelLinkTg.style.color = "#FF9301"
      }
      this.showInput(3)
    },
    setLinkVk() {
      const newVal = this.$refs.inputLinkVkField.value
      if (newVal != this.club.vk_url) {
        this.club.vk_url = newVal
        this.$refs.labelLinkVk.style.color = "#FF9301"
      }
      this.showInput(4)
    },
    parseExternalLink(link) {
      return parseExternalLink(link)
    },
    async getInfo() {
      this.loading = true;
      try {
        const {data, ok, status} = await this.$api.getOrgInfo(this.orgId);
        this.loading = false;
        if (!ok) {
          this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию об организации')
        }
        else {
          this.error = false
          this.club = data
          console.log(data)
          console.log(this.club)
        }
      }
      catch {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию об организации')
        this.error = true
        this.loading = false;
      }
      
    },
    async getPhotos() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgPhotos(this.orgId);
      this.loading = false
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить фотографии')
      }

      this.photos = data.media;
    },
    initialize() {
      var params = new URLSearchParams(document.location.search)
      this.orgId=params.get('orgId')
      this.getInfo();
      this.getPhotos();
    },
  
  }
}
</script>
