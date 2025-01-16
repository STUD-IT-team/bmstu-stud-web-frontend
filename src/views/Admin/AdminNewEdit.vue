<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'
@import '../../styles/fonts.styl'
@import '../../styles/utils.styl'


.root-admin-new
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
      .main-right
        display flex
        flex-direction column
        gap 10px
        width 100%
        height max-content
        padding 20px
        border-radius borderRadiusS
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)

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
    .image-container
      position relative
      display flex
      flex-direction column
      align-items center
      width 80%
      margin auto
      &:hover
        input
          cursor pointer
        img
          filter brightness(0.5)
      img
        width 100%
        border-radius borderRadiusM
        box-shadow 0 1px 2px 2px mix(black, transparent, 10%)
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
                Заголовок: {{ this.new.title }}
              </label>
              <img src="/static/icons/edit.svg" @click="showInput(0)">
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
                Описание: <br>{{ this.new.description }}
              </p>
              <img src="/static/icons/edit.svg" @click="showInput(1)">
            </div>
            <div class="row" ref="rowInputDescription" style="display: none">
              <textarea id="club-description" ref="inputDescriptionField">{{ this.new.description }}</textarea>
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
        <button class="button" style=" margin-right: 0;margin-left: auto">
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
