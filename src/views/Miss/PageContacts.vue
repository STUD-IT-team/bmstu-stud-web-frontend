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
    .contact
      hover-effect()

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
      <a class="contact" href="https://yandex.ru/maps/-/CDRYrHYz">г.Москва, 2-я Бауманская улица, 5с4, южное крыло, ауд. 339ю</a>
      <label>Телефон</label>
      <a class="contact" href="tel:+74952636855">+7 (495) 263-68-55</a>
      <label>Группа VK</label>
      <a class="contact" href="https://vk.com/miss_bmstu" target="_blank">vk.com/miss_bmstu</a>
      <label>E-mail</label>
      <a class="contact" href="mailto:miss.bmstu@gmail.com" target="_blank">miss.bmstu@gmail.com</a>
    </section>

    <ul class="organizers-container">
      <OrganizerCard class="organizer-card"
                     :image-webp="ImagePavelOrlovWebp"
                     :image-jpg="ImagePavelOrlovJpg"
                     name="Павел Орлов"
                     phone="+7 (915) 720-89-11"
                     mail="orlov@bmstu.ru"
                     title="Председатель Студенческого Совета"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image-webp="ImageTamaraSergeevaWebp"
                     :image-jpg="ImageTamaraSergeevaJpg"
                     name="Тамара Сергеева"
                     phone="+7 (916) 881-04-73"
                     mail="keylabupsi@gmail.com"
                     title="Главный организатор конкурса"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image-webp="ImageGeorgiyAvdeevWebp"
                     :image-jpg="ImageGeorgiyAvdeevJpg"
                     name="Георгий Авдеев"
                     phone="+7 (985) 436-58-91"
                     mail="geor.avdeeff@yandex.ru"
                     title="Работа с партнерами"
      ></OrganizerCard>
    </ul>
  </div>
</template>

<script>
import OrganizerCard from "~/components/Miss/OrganizerCard.vue";
import ImagePavelOrlovWebp from '#~/images/miss-organizers/webp-266/PavelOrlov.webp';
import ImageTamaraSergeevaWebp from '#~/images/miss-organizers/webp-266/TamaraSergeeva.webp';
import ImageGeorgiyAvdeevWebp from '#~/images/miss-organizers/webp-266/GeorgiyAvdeev.webp';
import ImagePavelOrlovJpg from '#~/images/miss-organizers/jpg-266/PavelOrlov.jpg';
import ImageTamaraSergeevaJpg from '#~/images/miss-organizers/jpg-266/TamaraSergeeva.jpg';
import ImageGeorgiyAvdeevJpg from '#~/images/miss-organizers/jpg-266/GeorgiyAvdeev.jpg';

export default {
  components: {OrganizerCard},

  data() {
    return {
      ImagePavelOrlovWebp,
      ImageTamaraSergeevaWebp,
      ImageGeorgiyAvdeevWebp,
      ImagePavelOrlovJpg,
      ImageTamaraSergeevaJpg,
      ImageGeorgiyAvdeevJpg,
    }
  }
}
</script>
