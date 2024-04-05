<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page-vote
  .header
    font-large-x()
    text-align center
    color colorMiss1
    margin-bottom 15px
  .main-text
    border-radius borderRadiusL
    border 2px solid colorMiss1
    text-align center
    padding 18px 40px
    margin-bottom 30px
    font-medium()
    p:not(:last-child)
      margin-bottom 10px
    a
      text-decoration underline
      hover-effect()
    mark
      background none
      color colorMiss1
</style>

<template>
  <div class="root-page-vote">
    <header class="header">ФИНАЛИСТКИ 2024</header>
    <section class="main-text">
      <p>
        Для&nbsp;того, чтобы отдать голос за&nbsp;фаворитку, необходимо <mark>отправить SMS</mark> в&nbsp;формате:<br>
        «СТУД» и&nbsp;номер участницы на&nbsp;короткий номер {{ phoneNumberToVoting }}.
      </p>
      <p>
        Например, для&nbsp;голосования за&nbsp;финалистку №1, нужно отправить SMS на&nbsp;номер <mark>{{ phoneNumberToVoting }}</mark><br>
        с&nbsp;кодом: <mark>Студ 1</mark> (пробел обязателен, регистр букв значения не&nbsp;имеет).
      </p>
      <p>Только для&nbsp;операторов России: Билайн, Мегафон, Tele2, МТС, Тинькофф, Мотив.</p>
      <p>
        Стоимость отправки <mark>SMS</mark> - 10&nbsp;рублей.<br>
        (SMS для&nbsp;подтверждения Оператору - бесплатно)
      </p>
      <p>Организация голосования: <a href="https://mvote.ru" target="_blank">Mvote.ru</a></p>
    </section>
    <MissCardsContainer show-votes></MissCardsContainer>
  </div>
</template>

<script>
import {phoneNumberToVoting} from "~/utils/constantsMiss";
import MissCardsContainer from "~/components/Miss/MissCardsContainer.vue";

export default {
  components: {MissCardsContainer},
  data() {
    return {
      phoneNumberToVoting,
    }
  },

  mounted() {
  },

  methods: {
  }
}
</script>
