<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'


.root-admin-member
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
  <div class="root-admin-member">
    <div class="main-container">
      <div class="button-container">
        <router-link class="button" to="/admin/members">
          Назад
        </router-link>
        <button class="button" @click="restore()">
          Очистить всё
        </button>
      </div>


      <div class="main-info">
        <div class="main-left">
          <img :src="`/media/${member.media.key}`" ref="imgPhoto">
          <input type="file" ref="inputPhoto" @change="updatePhoto()">
        </div>
        <div class="main-right">
          <!-- Имя -->
          <div class="input-container">
            <div class="row">
              <label ref="labelName">
                Имя: {{member.name}}
              </label>
              <img src="/res/icons/edit.svg" @click="showInput(0)">
            </div>
            <div class="row" ref="rowInputName" style="display: none">
              <input id="name" ref="inputNameField" :value="member.name">
              <button @click="setName()">ОК</button>
            </div>
          </div>

          <div class="input-container">
            <div class="row">
              <label ref="labelLinkTg">
                Телеграм: {{member.telegram}}
              </label>
              <img src="/res/icons/edit.svg" @click="showInput(1)">
            </div>
            <div class="row" ref="rowInputLinkTg" style="display: none">
              <input id="link-tg" ref="inputLinkTgField" :value="member.telegram">
              <button @click="setLinkTg()">ОК</button>
            </div>
          </div>
          <div class="input-container">
            <div class="row">
              <label ref="labelLinkVk">
                ВКонтакте: {{member.vk}}
              </label>
              <img src="/res/icons/edit.svg" @click="showInput(2)">
            </div>
            <div class="row" ref="rowInputLinkVk" style="display: none">
              <input id="link-vk" ref="inputLinkVkField" :value="member.vk">
              <button @click="setLinkVk()">ОК</button>
            </div>
          </div>

        </div>
      </div>

      <div class="button-container">
        <button class="button">
          Удалить пользователя
        </button>
        <button class="button" @click="updateMember()">
          Сохранить
        </button>
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
      memberId: Number,
      member: Object,
      memberBackup: Object,
      create: false,

    }
  },

  created() {
    this.initialize()
    //this.getAllMembers()
  },

  methods: {

    async updateMember() {
      var method
      if (this.create) {
        method = this.postMember
      }
      else {
        method = this.putMember
      }

      var reader = new FileReader()
      var imgByteArray = []
      var file = this.$refs.inputPhoto.files[0]
      if (file)
      {
        await reader.readAsArrayBuffer(file)
        reader.onloadend = async function (evt) {
          if (evt.target.readyState == FileReader.DONE) {
            var arrayBuffer = evt.target.result,
              array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < array.length; i++) {
              imgByteArray.push(array[i]);
            }
          }
          const {data, ok, status} = await this.$api.postMedia(imgByteArray, file.name)
          var newPhoto = {
            id: data.id,
            key: data.key,
            name: this.member.name,
          }
          this.member.media = newPhoto
          console.log("2")
          method()
        }.bind(this)
      }
      else {
        method()
      }

      // Уверен что это можно сделать элегантнее, но я не успеваю разобраться

    },
    async postMember() {
      var memberToPost = {
        login: this.member.login,
        password: "Очень надёжный пароль",
        name: this.member.name,
        telegram: this.member.telegram,
        vk: this.member.vk
      }

      const {data, ok, status} = await this.$api.register(memberToPost)
      if (ok) {
        this.memberBackup = this.member
        this.restore()
      }
    },
    async putMember() {
      var memberToPut = {
        is_admin: this.member.is_admin,
        login: this.member.login,
        media_id: this.member.media.id,
        name: this.member.name,
        telegram: this.member.telegram,
        vk: this.member.vk
      }
      console.log(this.memberToPut)

      const {data, ok, status} = await this.$api.putMember(memberToPut, this.memberId)
      if (ok) {
        this.memberBackup = this.member
        this.restore()
      }
    },
    restore(){
      this.member = {...this.memberBackup}
      this.$refs.labelName.style.color = "#631FB9"
      this.$refs.labelLinkTg.style.color = "#631FB9"
      this.$refs.labelLinkVk.style.color = "#631FB9"
    },
    updatePhoto() {
      var file = this.$refs.inputPhoto.files[0]
      //this.$refs.imgLogo.src = file.
      var reader = new FileReader();
      var component = this.$refs.imgPhoto
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
        row = this.$refs.rowInputLinkTg
      if (idx == 2)
        row = this.$refs.rowInputLinkVk

      if (getComputedStyle(row).display == "none")
        row.style.display = "flex"
      else
        row.style.display = "none"
    },
    setName() {
      const newVal = this.$refs.inputNameField.value
      if (newVal != this.member.name) {
        this.member.name = newVal
        this.$refs.labelName.style.color = "#FF9301" //
      }
      this.showInput(0)
    },
    setLinkTg() {
      const newVal = this.$refs.inputLinkTgField.value
      if (newVal != this.member.telegram) {
        this.member.telegram = newVal
        this.$refs.labelLinkTg.style.color = "#FF9301" //
      }
      this.showInput(1)
    },
    setLinkVk() {
      const newVal = this.$refs.inputLinkVkField.value
      if (newVal != this.member.vk) {
        this.member.vk = newVal
        this.$refs.labelLinkVk.style.color = "#FF9301" //
      }
      this.showInput(2)
    },
    parseExternalLink(link) {
      return parseExternalLink(link)
    },
    async getInfo() {
      this.loading = true;
      try {
        const {data, ok, status} = await this.$api.getMember(this.memberId);
        this.loading = false;
        if (!ok) {
          this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию о пользователе')
        }
        else {
          this.error = false
          this.member = data
          this.memberBackup = {...this.member}
          console.log(data)
        }
      }
      catch {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить информацию о пользователе')
        this.error = true
        this.loading = false;
      }

      
    },
    initialize() {
      var params = new URLSearchParams(document.location.search)
      this.memberId=params.get('memberId')
      if (!this.memberId) {
        this.create = true
        this.member = {
          id: 0,
          is_admin: false,
          login: "NewUser",
          media: {
            id: 0,
            key: "aaa",
            name: "default",
          },
          name: "",
          telegram: "",
          vk: "",
        }
      }
      else {
        this.getInfo();
      }
      console.log(this.member)
    },
  
  }
}
</script>
