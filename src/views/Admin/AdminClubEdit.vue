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
        details
          font-medium()
          summary
            color colorWhite
            background colorPalette1
            padding 5px 10px
            border-radius borderRadiusM
          p
            padding 2px 10px
            cursor pointer
            &:hover
              color colorPalette4
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
      gap 10px
      .header
        font-large()
        text-align center
      button
        button()
        border 2px solid colorPalette1
      .person-container
        border-bottom solid 2px colorPalette3
        padding-bottom 15px
        .row
          label
            font-medium()
          input
            font-small()
          img
            position relative
            bottom 5px
        .person-dropdown
          position relative
          summary
            font-large()
            img
              filter none
              position absolute
              top 0
              height 30px
              cursor pointer
          input
            font-medium()
            padding 10px 20px
            border-radius borderRadiusM
            border 2px solid colorPalette1
          img
            position relative
            top 10px
            height 30px
            width 30px
            filter brightness(0)
            cursor pointer
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
        .new-image-button
        .image
          position relative
          display inline-block
          width calc(25% - 10px)
          padding-top calc(15% - 10px)
          margin 5px
          border-radius borderRadiusM
        .new-image-button
          box-shadow 0 1px 2px 2px mix(black, transparent, 30%)
          background mix(colorPalette3, white, 50%)
          transform scale(0.9)
          cursor pointer
          &:hover
            box-shadow 0 1px 2px 2px mix(black, transparent, 50%)
            background colorPalette3
            transform scale(1)
          input
          label
            color colorBg
            position absolute
            top 0
            left 0
            display flex
            align-items center
            justify-content center
            width 100%
            height 100%
          label
            font-large-xx()
            pointer-events none
            text-shadow 0 3px 5px mix(black, transparent, 50%)
          input
            cursor pointer
            opacity 0

        .image
          box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
          &:hover
            box-shadow 0 1px 2px 2px mix(black, transparent, 30%)
            .photo
              filter brightness(0.8)
            .icon
              opacity 1
          .icon
            position absolute
            display flex
            align-items center
            justify-content center
            width 100%
            height 100%
            top 0
            transform scale(0.5)
            cursor pointer
            opacity 0
            &:hover
              transform scale(0.6)
          .photo
            position absolute
            top 0
            border-radius borderRadiusM
            object-fit cover
            width 100%
            height 100%

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
          filter brightness(0.8)
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
        <button class="button" @click="restore()">
          Очистить всё
        </button>
      </div>


      <div class="main-info">
        <div class="main-left">
          <img v-if="club.logo" :src="`/media/${club.logo.key}`" ref="imgLogo">
          <input type="file" ref="inputLogo" @change="updateLogo()">
          <details>
            <summary>
              {{club.type}}
            </summary>
            <p v-for="(type, idx) in categories" @click="updateType(idx)" ref="typeSelect">
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
          <!-- Короткое описание -->
          <div class="input-container">
            <div class="row">
              <p style="white-space: pre-line" ref="labelShortDescription">
                Краткое описание: <br>{{club.short_description}}
              </p>
              <img src="/res/icons/edit.svg" @click="showInput(2)">
            </div>
            <div class="row" ref="rowInputShortDescription" style="display: none">
              <textarea id="club-short-description" ref="inputShortDescriptionField">{{club.short_description}}</textarea>
              <button @click="setShortDescription()">ОК</button>
            </div>
          </div>
          <!-- Описание -->
          <div class="input-container">
            <div class="row">
              <p style="white-space: pre-line" ref="labelDescription">
                Описание: <br>{{club.description}}
              </p>
              <img src="/res/icons/edit.svg" @click="showInput(3)">
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
            <label ref="labelLinkTg">
              Телеграм: {{club.tg_url}}
            </label>
            <img src="/res/icons/edit.svg" @click="showInput(4)">
          </div>
          <div class="row" ref="rowInputLinkTg" style="display: none">
            <input id="club-link-tg" ref="inputLinkTgField" :value="club.tg_url">
            <button @click="setLinkTg()">ОК</button>
          </div>
        </div>
        <div class="input-container">
          <div class="row">
            <label ref="labelLinkVk">
              ВКонтакте: {{club.vk_url}}
            </label>
            <img src="/res/icons/edit.svg" @click="showInput(5)">
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

        <div class=person-container v-for="(lead, idx) in club.main_orgs" ref="personContainer">

          <details class="person-dropdown">
            <summary>
              <label>{{lead.name}}</label> 
              <img src="/res/icons/trash.svg" @click="this.deleteLead(idx)">
            </summary>
            <input>
            <img src="/res/icons/search.svg">
            <label v-for="member in this.members">
              {{member.name}}
            </label>
          </details>


          <div class="input-container">
            <div class="row">
              <label ref="labelRoleName">
                Роль: {{lead.role_name}}
              </label>
              <img src="/res/icons/edit.svg" @click="showInput(2*idx+6)">
            </div>
            <div class="row" ref="rowRole" style="display: none">
              <input ref="inputRoleNameField" :value="lead.role_name">
              <button @click="setRoleName(idx)">ОК</button>
            </div>
          </div>

          <div class="input-container">
            <div class="row">
              <p style="white-space: pre-line" ref="labelRoleSpec">
                Описание: <br>{{lead.spec}}
              </p>
              <img src="/res/icons/edit.svg" @click="showInput(2*idx+7)">
            </div>
            <div class="row" ref="rowRole" style="display: none">
              <textarea id="club-description" ref="inputRoleSpecField">{{lead.spec}}</textarea>
              <button @click="setRoleSpec(idx)">ОК</button>
            </div>
          </div>

        </div>

        <button @click="addLead()">+</button>
        <MemberDropdown ref="MemberDropdown"></MemberDropdown>

      </div>

      <div class="image-wrapper">
        <div class="image-container">
          <div class="image" v-for="(image, idx) in photos">
            <img class="photo" :src="`/media/${image.key}`">
            <img class="icon" src="/res/icons/trash.svg" @click="deletePhoto(idx)">
          </div>
          <div class="new-image-button">
            <label>+</label>
            <input
              ref="imageUpload" 
              type="file" 
              accept=".png,.jgp,.jpeg,.webm" 
              @change="addPhoto($event)">
          </div>
        </div>
      </div>


      <div class="button-container">
        <button class="button">
          Удалить организацию
        </button>
        <button class="button" @click="updateClub()">
          Сохранить
        </button>
      </div>

    </div>
  </div>
</template>


<script>
import Dropdown from "~/components/Dropdown.vue";
import MemberDropdown from "~/components/MemberDropdown.vue";
import {fileToByteArray} from "~/utils/utils";

export default {
  components: {Dropdown, MemberDropdown},

  data() {
    return {
      club: {
        name: "Новая организация",
        description: "Описание организации",
        short_description: "Короткое описание организации",
        orgs: [],
        parent_id: 0,
        short_name: "Организация",
        tg_url: "",
        vk_url: "",
        type: "Клуб",
        logo: {
          id: Number,
          key: String,
        },
      },
      clubBackup: Object,
      photos: Array,
      orgId: Number,
      mainOrgsBackup: [],
      create: false,

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
    //this.getAllMembers()
  },

  watch: {
    '$refs.MemberDropdown.data.member': {
      handler: function(newValue) {
        console.log('Current vaules:' + newValue);
      },
      deep: true
    }
  },

  methods: {

    async updateClub() {
      var method
      if (this.create) {
        method = this.postClub
      }
      else {
        method = this.putClub
      }
      var file = this.$refs.inputLogo.files[0]
      if (file) {        
        var logoByteArray = await fileToByteArray(file)
        console.log(logoByteArray)
        const {data, ok, status} = await this.$api.postMedia(logoByteArray, file.name)
        this.club.logo.id = data.id
        console.log(data.id)
      }      
      method()

      var mediaToPost = []
      for (var idx in this.photos) {
        console.log(this.photos[idx])
        mediaToPost.push({
          media_id: this.photos[idx].id,
          ref_number: this.photos[idx].ref_number,
        })
      }

      const {data, ok, status} = await this.$api.putClubMedia(this.club.id, mediaToPost)
    },
    fileToByteArray(file) {
      return fileToByteArray(file)
    },
    postClub() {
      var clubToPost = {
        description: this.club.description,
        short_description: this.club.short_description,
        logo_id: this.club.logo.id,
        name: this.club.name,
        orgs: [],
        parent_id: 0,
        short_name: this.club.short_name,
        tg_url: this.club.tg_url,
        vk_url: this.club.vk_url,
        type: this.club.type
      }

      this.$api.postClub(clubToPost)

    },
    putClub() {
      var clubToPut = {
        description: this.club.description,
        short_description: this.club.short_description,
        logo_id: this.club.logo.id,
        name: this.club.name,
        orgs: [],
        parent_id: 0,
        short_name: this.club.short_name,
        tg_url: this.club.tg_url,
        vk_url: this.club.vk_url,
        type: this.club.type
      }

      this.$api.putClub(clubToPut, this.orgId)

    },
    restore(){
      this.club = {...this.clubBackup}
      this.club.main_orgs = []
      for (var idx in this.mainOrgsBackup) {
        this.club.main_orgs.push({...this.mainOrgsBackup[idx]})
      }
      console.log(this.clubBackup)
      console.log(this.club)
      console.log(this.mainOrgsBackup)
      // document.reload(true)
      this.$refs.labelName.style.color = "#631FB9"
      this.$refs.labelShortName.style.color = "#631FB9"
      this.$refs.labelShortDescription.style.color = "#631FB9"
      this.$refs.labelDescription.style.color = "#631FB9"
      this.$refs.labelLinkTg.style.color = "#631FB9"
      this.$refs.labelLinkVk.style.color = "#631FB9"
      for (var idx in this.$refs.labelRoleName)
        this.$refs.labelRoleName[idx].style.color = "#631FB9"
        this.$refs.labelRoleSpec[idx].style.color = "#631FB9"

    },
    updateType(idx){
      this.club.type = this.$refs.typeSelect[idx].innerText
    },
    updateLogo() {
      var file = this.$refs.inputLogo.files[0]
      //this.$refs.imgLogo.src = file.
      var reader = new FileReader();
      var component = this.$refs.imgLogo
      reader.onloadend = function() {
        component.src = reader.result;
      }
      reader.readAsDataURL(file)
      // console.log(file)
    },
    showInput(idx) {
      var row
      if (idx == 0)
        row = this.$refs.rowInputName
      if (idx == 1)
        row = this.$refs.rowInputShortName
      if (idx == 2)
        row = this.$refs.rowInputShortDescription
      if (idx == 3)
        row = this.$refs.rowInputDescription
      if (idx == 4)
        row = this.$refs.rowInputLinkTg
      if (idx == 5)
        row = this.$refs.rowInputLinkVk
      if (idx >= 6)
        var row = this.$refs.rowRole[idx-6]

      if (getComputedStyle(row).display == "none")
        row.style.display = "flex"
      else
        row.style.display = "none"
    },
    setName() {
      const newVal = this.$refs.inputNameField.value
      if (newVal != this.club.name) {
        this.club.name = newVal
        this.$refs.labelName.style.color = "#FF9301" //
      }
      this.showInput(0)
    },
    setShortName() {
      const newVal = this.$refs.inputShortNameField.value
      if (newVal != this.club.short_name) {
        this.club.short_name = newVal
        this.$refs.labelShortName.style.color = "#FF9301" //
      }
      this.showInput(1)
    },
    setShortDescription() {
      const newVal = this.$refs.inputShortDescriptionField.value
      if (newVal != this.club.short_description) {
      this.club.short_description = newVal
      this.$refs.labelShortDescription.style.color = "#FF9301" //
      }
      this.showInput(2)
    },
    setDescription() {
      const newVal = this.$refs.inputDescriptionField.value
      if (newVal != this.club.description) {
      this.club.description = newVal
      this.$refs.labelDescription.style.color = "#FF9301" //
      }
      this.showInput(3)
    },
    setLinkTg() {
      const newVal = this.$refs.inputLinkTgField.value
      if (newVal != this.club.tg_url) {
        this.club.tg_url = newVal
        this.$refs.labelLinkTg.style.color = "#FF9301" //
      }
      this.showInput(4)
    },
    setLinkVk() {
      const newVal = this.$refs.inputLinkVkField.value
      if (newVal != this.club.vk_url) {
        this.club.vk_url = newVal
        this.$refs.labelLinkVk.style.color = "#FF9301" //
      }
      this.showInput(5)
    },
    setRoleName(idx) {
      const newVal = this.$refs.inputRoleNameField[idx].value
      if (newVal != this.club.main_orgs[idx].role_name) {
        this.club.main_orgs[idx].role_name = newVal
        this.$refs.labelRoleName[idx].style.color = "#FF9301" //
      }
      this.showInput(idx*2 + 6)
    },
    setRoleSpec(idx) {
      const newVal = this.$refs.inputRoleSpecField[idx].value
      if (newVal != this.club.main_orgs[idx].spec) {
        this.club.main_orgs[idx].spec = newVal
        this.$refs.labelRoleSpec[idx].style.color = "#FF9301" //
      }
      this.showInput(idx*2 + 7)
    },
    addLead() {
      this.club.main_orgs.push({
          name: "Иван Иванов",
          role_name: "Руководитель",
          spec: `Руководитель организации ${this.club.name}`,
      })
      console.log(this.club.main_orgs)
    },
    deleteLead(idx) {
      this.club.main_orgs.splice(idx, 1)
    },
    async addPhoto(event) {
      var file = this.$refs.imageUpload.files[0]
      if (file) {        
        var byteArray = await fileToByteArray(file)
        console.log(byteArray)
        const {data, ok, status} = await this.$api.postMedia(byteArray, file.name)
        this.photos.push(data)
        console.log(data)
      }
    },
    deletePhoto(idx) {
      this.photos.splice(idx, 1)
    },
    parseExternalLink(link) {
      return parseExternalLink(link)
    },
    async getInfo() {
      this.loading = true;
      try {
        const {data, ok, status} = await this.$api.getOrgInfo(this.orgId);
        this.loading = false;
        if (!ok && !this.create) {
          this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию об организации')
        }
        else {
          this.error = false
          this.club = data
          this.clubBackup = {...this.club}
          this.mainOrgsBackup = []
          for (var idx in this.club.main_orgs) {
            this.mainOrgsBackup.push({...this.club.main_orgs[idx]})
          }
          console.log(this.club)
          console.log(this.mainOrgsBackup)
        }
      }
      catch {
        if (!this.create) {
          this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию об организации')
          this.error = true
        }
        this.loading = false;
      }
      
    },
    async getPhotos() {
      this.loading = true;
      const {data, ok, status} = await this.$api.getOrgPhotos(this.orgId);
      this.loading = false
      if (!ok && !this.create) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить фотографии')
        this.photos = [];
      }
      else {
        this.photos = data.media;
      }

    },
    initialize() {
      this.orgId=this.$route.params.orgId
      console.log(this.$route.params)
      if (!this.orgId) {
        console.log("Creating mode yuppy")
        this.create = true
      }
      else {
        this.getInfo();
        this.getPhotos();
      }
      this.clubBackup = this.club
      console.log(this.club)
      console.log(this.clubBackup)
    },
  
  }
}
</script>
