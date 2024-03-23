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
  .contacts
    border-radius borderRadiusL
    border 2px solid colorMiss1
    padding 18px 20px
    margin-bottom 60px
    font-large()
    label
      display block
      color colorMiss1
      font-medium()
    .contact:not(:last-child)
      display block
      margin-bottom 15px

  .organizers-container
    display flex
    flex-wrap wrap
    gap 20px
    justify-content center
    margin-bottom 100px
    .organizer-card
      width 270px
</style>

<template>
  <div class="root-page-vote">
    <header class="header">КОНТАКТЫ</header>
    <section class="contacts">
      <label>Адрес</label>
      <div class="contact">2-я Бауманская ул., д.5, Главный учебный корпус, ауд. 339ю</div>
      <label>Телефон</label>
      <div class="contact">+7 (499) 263-68-55</div>
      <label>Группа VK</label>
      <a class="contact" href="https://vk.com/miss_bmstu" target="_blank">vk.com/miss_bmstu</a>
      <label>E-mail</label>
      <a class="contact" href="mailto:miss.bmstu@gmail.com" target="_blank">miss.bmstu@gmail.com</a>
    </section>

    <ul class="organizers-container">
      <OrganizerCard class="organizer-card"
                     :image="ImagePavelOrlov"
                     name="Павел Орлов"
                     phone="+7 (915) 720-89-11"
                     mail="orlov@bmstu.ru"
                     title="Председатель Студенческого Совета"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image="ImageTamaraSergeeva"
                     name="Тамара Сергеева"
                     phone="+7 (964) 998-35-65"
                     mail="mescheryakova@bmstu.ru"
                     title="Главный организатор конкурса"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image="ImageGeorgiyAvdeev"
                     name="Георгий Авдеев"
                     phone="+7 (968) 094-28-12"
                     mail="partners.studsovet@gmail.com"
                     title="Работа с партнерами"
      ></OrganizerCard>
    </ul>
  </div>
</template>

<script>
import OrganizerCard from "~/components/Miss/OrganizerCard.vue";
import ImagePavelOrlov from '../../../res/images/miss-organizers/PavelOrlov.png';
import ImageTamaraSergeeva from '../../../res/images/miss-organizers/TamaraSergeeva.png';
import ImageGeorgiyAvdeev from '../../../res/images/miss-organizers/GeorgiyAvdeev.png';

export default {
  components: {OrganizerCard},

  data() {
    return {
      ImagePavelOrlov,
      ImageTamaraSergeeva,
      ImageGeorgiyAvdeev,
    }
  }
}
</script>
