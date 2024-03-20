<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'

.root-page-vote
  .header
    font-large-extra()
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
</style>

<template>
  <div class="root-page-vote">
    <div class="header">ФИНАЛИСТКИ 2024</div>
    <div class="main-text">
      <p>Для того чтобы отдать голос за фаворитку, необходимо отправить SMS в формате:<br>«СТУД» и номер участницы на короткий номер {{ phoneNumberToVoting }}.<br></p>
      <p>Например, для голосования за конкурсантку №1, нужно отправить SMS на номер {{ phoneNumberToVoting }}<br>с кодом: Студ 1 (пробел обязателен, регистр букв значения не имеет).<br></p>
      <p>Только для Операторов России: Билайн, Мегафон, Tele2, Тинькофф, Мотив.<br></p>
      <p>Стоимость отправки SMS: 11 рублей.<br>(SMS для подтверждения Оператору - бесплатно)<br></p>
      <p>Организация голосования: <a href="https://mvote.ru" target="_blank">Mvote.ru</a></p>
    </div>
    <MissCardsContainer show-votes></MissCardsContainer>
  </div>
</template>

<script>
import {phoneNumberToVoting} from "~/utils/constants";
import MissCardsContainer from "~/components/Miss/MissCardsContainer.vue";

export default {
  components: {MissCardsContainer},
  data() {
    return {
      phoneNumberToVoting,
    }
  }
}
</script>
