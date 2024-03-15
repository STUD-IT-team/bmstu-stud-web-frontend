<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'

padding-sides = 50px
.root-page-news
  padding padding-sides
  .header
    font-large-extra()
    margin-bottom 20px
  .navbar-organizations
    padding 20px padding-sides
    margin-left (- padding-sides)
    width 'calc(100% + %s)' % (padding-sides * 2)
    border 1px solid white
    border-left none
    border-right none
    margin-bottom 50px
    .organization-button
      padding 5px 3px
      font-medium()
      transition all .2s
      background linear-gradient(white, white) 50% 100% / 0 1px no-repeat
      &:hover
        background-size 100% 1px
</style>

<template>
  <div class="root-page-news">
    <header class="header">Лента новостей</header>

    <nav class="navbar-organizations">
      <router-link to="#" class="organization-button">Все события</router-link>
    </nav>

    <div class="container">
      <ListingBlock title="Поздравляем!"
                    :text-rows="[
                      'Поздравляем Антона Павленко с ДР!!!',
                      'Поздравляем Антона Успенского со званием мисс',
                      'А вас не бесит it отдел?',
                      'Это студенческий совет МГТУ им. Н.Э. Баумана',
                    ]">
      </ListingBlock>
      <ListingBlock title="Горячие новости"
                    :text-rows="[
                      'А вас не бесит it отдел?',
                      'Меня лично бесит',
                      'Можно выйти пж?',
                      'Блин кнопку выхода не сделали :(',
                      'Я запрещаю вам выходить из IT-отдела!',
                    ]">
      </ListingBlock>
    </div>
  </div>
</template>


<script>
import ListingBlock from "~/components/ListingBlock.vue";

export default {
  components: {ListingBlock},

  props: {
    items: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      loading: false,
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
