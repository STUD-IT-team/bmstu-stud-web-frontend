<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'


.root-admin-member
  top 100px
  display flex
  align-items center
  width 100%
  height 100%
  .main-container
    display flex
    flex-direction column
    gap 30px
    width 100%
    max-width 1440px
    height max-content
    height max-content
    .button-container
      display flex
      justify-content space-between
      .button
        button()

        width 200px
        margin 0
        border 2px solid colorPalette1
        border-radius borderRadiusMax
        font-medium()
    .main-info
      display flex
      gap 20px
      .main-left
        position relative
        display flex
        flex-direction column
        gap 20px
        min-width 250px
        height max-content
        padding 10px
        border-radius borderRadiusS
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        img
          width 230px
          height 230px
          object-fit scale-down
          background colorPalette3
          border-radius borderRadiusM
        details
          font-medium()
          summary
            padding 5px 10px
            color colorWhite
            background colorPalette1
            border-radius borderRadiusM
          p
            cursor pointer
            padding 2px 10px
            &:hover
              color colorPalette4
      .main-right
        display flex
        flex-direction column
        gap 10px
        width 100%
        height max-content
        padding 20px
        border-radius borderRadiusS
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
    .general-container
      display flex
      flex-direction column
      gap 10px
      padding 10px 20px
      border-radius borderRadiusS
      box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
      .header
        font-large()

        text-align center
      button
        button()

        border 2px solid colorPalette1
      .person-container
        padding-bottom 15px
        border-bottom solid 2px colorPalette3
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
              cursor pointer
              position absolute
              top 0
              height 30px
              filter none
          input
            font-medium()

            padding 10px 20px
            border 2px solid colorPalette1
            border-radius borderRadiusM
          img
            cursor pointer
            position relative
            top 10px
            width 30px
            height 30px
            filter brightness(0)
    .image-wrapper
      width 100%
      .image-container
        // max-width 80%
        // background colorPalette4
        display block
        height max-content
        text-wrap wrap
        // text-align center
        centered-margin()
        .new-image-button
        .image
          position relative
          display inline-block
          width calc(25% - 10px)
          margin 5px
          padding-top calc(15% - 10px)
          border-radius borderRadiusM
        .new-image-button
          cursor pointer
          transform scale(0.9)
          background mix(colorPalette3, white, 50%)
          box-shadow 0 1px 2px 2px mix(black, transparent, 30%)
          &:hover
            transform scale(1)
            background colorPalette3
            box-shadow 0 1px 2px 2px mix(black, transparent, 50%)
          input
          label
            position absolute
            top 0
            left 0
            display flex
            align-items center
            justify-content center
            width 100%
            height 100%
            color colorBg
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
            cursor pointer
            position absolute
            top 0
            transform scale(0.5)
            display flex
            align-items center
            justify-content center
            width 100%
            height 100%
            opacity 0
            &:hover
              transform scale(0.6)
          .photo
            position absolute
            top 0
            width 100%
            height 100%
            object-fit cover
            border-radius borderRadiusM

    .input-container
      position relative
      align-items left
      width 100%
      height max-content
      .row
        display flex
        // justify-content space-between
        gap 10px
        justify-content left
        height max-content
        label
          left 20px
          width max-content
          font-large()
          &:changed
            color colorPalette4
        p
          left 20px
          width max-content
          width 80%
          font-medium()
        img
          cursor pointer
          width 30px
          height 30px
          filter brightness(0.8)
        input
          width 80%
          padding 10px 20px
          opacity 1
          background colorBg
          border 2px solid colorPalette1
          border-radius borderRadiusS
          font-medium()
        textarea
          trans(0s)

          resize vertical
          width 80%
          height 100%
          min-height 100px
          padding 10px 10px
          background colorBg
          border 2px solid colorPalette1
          border-radius borderRadiusS
          font-medium()
        button
          button()

          display inline-block
          width 20%
          height 100%
          padding 10px 20px
          border 2px solid colorPalette1
          font-medium()






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
                Имя: {{ member.name }}
              </label>
              <img src="/static/icons/edit.svg" @click="showInput(0)">
            </div>
            <div class="row" ref="rowInputName" style="display: none">
              <input id="name" ref="inputNameField" :value="member.name">
              <button @click="setName()">ОК</button>
            </div>
          </div>

          <div class="input-container">
            <div class="row">
              <label ref="labelLinkTg">
                Телеграм: {{ member.telegram }}
              </label>
              <img src="/static/icons/edit.svg" @click="showInput(1)">
            </div>
            <div class="row" ref="rowInputLinkTg" style="display: none">
              <input id="link-tg" ref="inputLinkTgField" :value="member.telegram">
              <button @click="setLinkTg()">ОК</button>
            </div>
          </div>
          <div class="input-container">
            <div class="row">
              <label ref="labelLinkVk">
                ВКонтакте: {{ member.vk }}
              </label>
              <img src="/static/icons/edit.svg" @click="showInput(2)">
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
