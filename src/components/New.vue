<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

block-bg-color = colorBg2
images-section-width = 250px
text-section-max-height = 265px

.root-new
  block(colorPalette3)
  block-bg(block-bg-color)
  display flex
  gap 15px
  flex-direction column
  position relative
  .text-section
    display flex
    flex-direction column
    max-height text-section-max-height
    transition max-height 2s ease-in
    position relative
    .header
      font-medium()
      display flex
      align-items center
      margin-bottom 25px
      img
        width 48px
        height 48px
        margin-right 15px
      .time
        font-small()
        color colorText5
    .title
      font-large()
      font-bold()
      margin-bottom 20px
    .description
      font-medium()
      line-height 1.5
      overflow hidden
      text-overflow ellipsis
      min-width 0
      position relative
      &::after
        content ""
        position absolute
        bottom 0
        left 0
        right 0
        height 80px
        background linear-gradient(to top, block-bg-color, transparent);
        trans(1s)
    .button-show-more
      button-no-styles()
      hover-effect()
      font-medium()
      color colorText5
      text-align left
      padding-top 20px
  .images-section
    border-radius borderRadiusL
    overflow hidden
    @media ({desktop})
      width images-section-width
      min-width images-section-width
    display flex
    flex-wrap wrap
    img
      width 100%
      height 100%

  .button-edit-container
    position absolute
    top 10px
    right 15px
    button
      button-no-styles()
      hover-effect()
  .edit-options-block
    position absolute
    top 30px
    right 15px
    font-medium()
    block(colorPalette3)
    block-bg()
    border-radius borderRadiusM
    line-height 2
    padding 10px 20px
    > *
      hover-effect()

  &.collapsed
    @media ({desktop})
      flex-direction row
    .text-section
      .description
        &::after
          trans(.2s)
  &:not(.collapsed)
    .text-section
      animation-roll-down(text-section-max-height)
      &::before
        z-index 1
        pointer-events none
        content ""
        position absolute
        inset 0
        bg-mix-zone-size = 100px
        background linear-gradient(to left, block-bg-color (images-section-width - bg-mix-zone-size), transparent (images-section-width)) no-repeat
        opacity 0
        animation bg-roll-right .6s ease
        @keyframes bg-roll-right
          0%
            background-position-x 0
            opacity 1
          100%
            background-position-x (images-section-width + bg-mix-zone-size)
            opacity 1
      .description
        &::after
          opacity 0
    .images-section
      width 100%
</style>

<template>
  <div class="root-new" :class="{collapsed: isCollapsed}" @click="isEditBlockOpened = false">
    <section class="text-section">
      <header class="header">
        <img :src="organizationLogo" alt="logo">
        <div>
          <div>{{ organizationName }}</div>
          <div v-if="!isCollapsed" class="time">{{ datePrettified }}</div>
        </div>
      </header>
      <header v-if="title" class="title">{{ title }}</header>
      <article class="description">{{ text }}</article>
      <transition name="opacity" mode="out-in" duration="0.5s">
        <button v-if="isCollapsed" class="button-show-more" @click="isCollapsed = false">Показать еще...</button>
        <button v-else class="button-show-more" @click="isCollapsed = true">Свернуть</button>
      </transition>
    </section>
    <section v-if="imagesSrc.length > 0" class="images-section">
      <img v-for="imageSrc in imagesSrc" :src="imageSrc" alt="">
    </section>

    <div v-if="$user?.isAdmin" class="button-edit-container">
      <transition name="opacity" mode="out-in">
        <CircleLoading v-if="loading"></CircleLoading>
        <button v-else @click.stop="isEditBlockOpened = !isEditBlockOpened"><img src="/res/icons/3-points.svg" alt="edit"></button>
      </transition>
    </div>
    <transition name="scale-in">
      <ul v-if="isEditBlockOpened" class="edit-options-block" @click.stop>
        <li @click="editNew">Редактировать</li>
        <li v-if="!isPinned" @click="pinNew">Закрепить</li>
        <li v-else @click="unpinNew">Открепить</li>
        <li @click="deleteNew">Удалить</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import CircleLoading from "~/App.vue";

export default {
  emits: ['delete', 'pin', 'upnin', 'edit'],

  components: {CircleLoading},

  props: {
    id: {
      type: Number,
      required: true,
    },
    organizationLogo: {
      type: String,
      required: true,
    },
    organizationName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    imagesSrc: {
      type: Array,
      default: [],
    },
    timePublished: Date,
    isPinned: Boolean,
    isCollapsedByDefault: Boolean,
  },

  data() {
    return {
      isCollapsed: this.$props.isCollapsedByDefault,
      isEditBlockOpened: false,

      loading: false,
    }
  },

  computed: {
    datePrettified() {
      return this.timePublished.toLocaleDateString('ru-RU', {day: "numeric", month: "short", hour: "numeric", minute: "numeric"});
    }
  },

  mounted() {
    this.isCollapsed = true;
  },

  methods: {
    async pinNew() {
      await this.$modals.alert("Закрепление новости не доступно в этой версии сайта");
      // if (! await this.$modals.confirm("Вы уверены, что хотите открепить новость?")) {
      //   return;
      // }
      // this.loading = true;
      // const {ok, status} = await this.$api.pinNew(this.id);
      // this.loading = false;
      // if (!ok) {
      //   this.$popups.error(`Ошибка ${status}`, "Не удалось закрепить новость");
      //   return;
      // }
      this.isEditBlockOpened = false;
      this.$emit('pin');
    },
    async unpinNew() {
      await this.$modals.alert("Открепление новости не доступно в этой версии сайта");
      // if (! await this.$modals.confirm("Вы уверены, что хотите открепить новость?")) {
      //   return;
      // }
      // this.loading = true;
      // const {ok, status} = await this.$api.unpinNew(this.id);
      // this.loading = false;
      // if (!ok) {
      //   this.$popups.error(`Ошибка ${status}`, "Не удалось открепить новость");
      //   return;
      // }
      this.isEditBlockOpened = false;
      this.$emit('unpin');
    },
    async editNew() {
      await this.$modals.alert("Изменение новости не доступно в этой версии сайта");
      this.isEditBlockOpened = false;
      this.$emit('edit');
    },
    async deleteNew() {
      if (! await this.$modals.confirm("Вы уверены, что хотите удалить новость?", "Восстановить не получится")) {
        return;
      }
      this.loading = true;
      const {ok, status} = await this.$api.deleteNew(this.id);
      this.loading = false;
      // if (!ok) {
        this.$popups.error(`Ошибка ${status}`, "Не удалось удалить новость");
        // return;
      // }
      this.isEditBlockOpened = false;
      this.$emit('delete');
    },
  }
};
</script>
