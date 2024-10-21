<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'


.root-admin-new
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
    .image-container
      width 80%
      margin auto
      position relative
      display flex
      align-items center
      flex-direction column
      &:hover
        input
          cursor pointer
        img
          filter brightness(0.5)
      img
        width 100%
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
        border-radius borderRadiusM
      input
        position absolute
        width 100%
        height 100%
        opacity 0

  

*
  trans(0.3s)

</style>

<template>
  <div class="root-admin-new">
    <div class="main-container">

      <div class="button-container">
        <router-link class="button" to="/admin/news">
          Назад
        </router-link>
        <button class="button">
          Очистить всё
        </button>
      </div>

      <div class="main-info">
        <div class="main-left">
          <img :src="`/media/${this.new.media.key}`">
        </div>
        <div class="main-right">
          <!-- Заголовок -->
          <div class="input-container">
            <div class="row">
              <label ref="labelTitle">
                Заголовок: {{this.new.title}}
              </label>
              <img src="/res/icons/edit.svg" @click="showInput(0)">
            </div>
            <div class="row" ref="rowInputTitle" style="display: none">
              <input id="new-title" ref="inputTitleField" :value="this.new.title">
              <button @click="setTitle()">ОК</button>
            </div>
          </div>
          <!-- Описание -->
          <div class="input-container">
            <div class="row">
              <p style="white-space: pre-line" ref="labelDescription">
                Описание: <br>{{this.new.description}}
              </p>
              <img src="/res/icons/edit.svg" @click="showInput(1)">
            </div>
            <div class="row" ref="rowInputDescription" style="display: none">
              <textarea id="club-description" ref="inputDescriptionField">{{this.new.description}}</textarea>
              <button @click="setDescription()">ОК</button>
            </div>
          </div>
        </div>
      </div>

      <div class="image-container">
        <img :src="`/media/${this.new.media.key}`">
        <input type="file">
      </div>

      <div class="button-container">
        <button class="button" style="margin-left: auto; margin-right: 0">
          Сохранить
        </button>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  components: {},

  data() {
    return {
      new: Object,
      newId: Number,
      error: true,
      loading: false,
    }
  },

  created() {
    var params = new URLSearchParams(document.location.search)
    this.newId=params.get('newId')
    this.getInfo()
  },

  methods: {
    showInput(idx) {
      var row
      if (idx == 0)
        row = this.$refs.rowInputTitle
      if (idx == 1)
        row = this.$refs.rowInputDescription
      if (getComputedStyle(row).display == "none")
        row.style.display = "flex"
      else
        row.style.display = "none"
    },
    setTitle() {
      const newVal = this.$refs.inputTitleField.value
      if (newVal != this.new.title) {
      this.new.title = newVal
      this.$refs.labelTitle.style.color = "#FF9301"
      }
      this.showInput(0)
    },
    setDescription() {
      const newVal = this.$refs.inputDescriptionField.value
      if (newVal != this.new.description) {
      this.new.description = newVal
      this.$refs.labelDescription.style.color = "#FF9301"
      }
      this.showInput(1)
    },
    async getInfo() {
      this.loading = true;
      try {
        const {data, ok, status} = await this.$api.getNew(this.newId);
        this.loading = false;
        if (!ok) {
          this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новость')
        }
        else {
          this.error = false
          this.new = data
        }
      }
      catch(ex) {
        console.log(ex)
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить новость')
        this.error = true
        this.loading = false;
      }
      
    },
  }
}
</script>
