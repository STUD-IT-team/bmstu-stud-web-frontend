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
      <a class="contact" href="https://yandex.ru/maps/-/CDRYrHYz" target="_blank">г. Москва, 2-я Бауманская улица, 5с4, южное крыло, ауд. 339ю</a>
      <label>Телефон</label>
      <a class="contact" href="tel:+74952636855" target="_blank">+7 (495) 263-68-55</a>
      <label>Группа VK</label>
      <a class="contact" href="https://vk.com/miss_bmstu" target="_blank">vk.com/miss_bmstu</a>
      <label>Канал TG</label>
      <a class="contact" href="https://t.me/miss_bmstu" target="_blank">t.me/miss_bmstu</a>
      <label>E-mail</label>
      <a class="contact" href="mailto:miss.bmstu@yandex.ru" target="_blank">miss.bmstu@yandex.ru</a>
    </section>

    <section class="organizers-container">
      <OrganizerCard class="organizer-card"
                     :image-webp="ImagePavelOrlovWebp"
                     :image-jpg="ImagePavelOrlovJpg"
                     name="Павел Орлов"
                     phone="+7 (915) 720-89-11"
                     mail="orlov@bmstu.ru"
                     telegram="Pavel_BMSTU"
                     title="Председатель Студенческого Совета"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image-webp="ImageTamaraSergeevaWebp"
                     :image-jpg="ImageTamaraSergeevaJpg"
                     name="Тамара Сергеева"
                     phone="+7 (916) 881-04-73"
                     mail="sergeevatb@student.bmstu.ru"
                     telegram="Wiltyan_li"
                     title="Главный организатор конкурса"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image-webp="ImageGeorgiyAvdeevWebp"
                     :image-jpg="ImageGeorgiyAvdeevJpg"
                     name="Георгий Авдеев"
                     phone="+7 (985) 436-58-91"
                     mail="geor.avdeeff@yandex.ru"
                     telegram="GeorgeAvdeev"
                     title="Ответственный за работу с партнерами"
      ></OrganizerCard>
    </section>
  </div>
</template>

<script>
import OrganizerCard from "~/components/Miss/OrganizerCard.vue";
import ImagePavelOrlovWebp200 from '#~/images/miss-organizers/webp-266/PavelOrlov.webp';
import ImageTamaraSergeevaWebp200 from '#~/images/miss-organizers/webp-266/TamaraSergeeva.webp';
import ImageGeorgiyAvdeevWebp200 from '#~/images/miss-organizers/webp-266/GeorgiyAvdeev.webp';
import ImagePavelOrlovJpg200 from '#~/images/miss-organizers/jpg-266/PavelOrlov.jpg';
import ImageTamaraSergeevaJpg200 from '#~/images/miss-organizers/jpg-266/TamaraSergeeva.jpg';
import ImageGeorgiyAvdeevJpg200 from '#~/images/miss-organizers/jpg-266/GeorgiyAvdeev.jpg';
import ImagePavelOrlovWebp400 from '#~/images/miss-organizers/webp-400/PavelOrlov.webp';
import ImageTamaraSergeevaWebp400 from '#~/images/miss-organizers/webp-400/TamaraSergeeva.webp';
import ImageGeorgiyAvdeevWebp400 from '#~/images/miss-organizers/webp-400/GeorgiyAvdeev.webp';
import ImagePavelOrlovJpg400 from '#~/images/miss-organizers/jpg-400/PavelOrlov.jpg';
import ImageTamaraSergeevaJpg400 from '#~/images/miss-organizers/jpg-400/TamaraSergeeva.jpg';
import ImageGeorgiyAvdeevJpg400 from '#~/images/miss-organizers/jpg-400/GeorgiyAvdeev.jpg';

export default {
  components: {OrganizerCard},

  data() {
    return {
      ImagePavelOrlovWebp: `${ImagePavelOrlovWebp200} 200w, ${ImagePavelOrlovWebp400} 400w`,
      ImageTamaraSergeevaWebp: `${ImageTamaraSergeevaWebp200} 200w, ${ImageTamaraSergeevaWebp400} 400w`,
      ImageGeorgiyAvdeevWebp: `${ImageGeorgiyAvdeevWebp200} 200w, ${ImageGeorgiyAvdeevWebp400} 400w`,
      ImagePavelOrlovJpg: `${ImagePavelOrlovJpg200} 200w, ${ImagePavelOrlovJpg400} 400w`,
      ImageTamaraSergeevaJpg: `${ImageTamaraSergeevaJpg200} 200w, ${ImageTamaraSergeevaJpg400} 400w`,
      ImageGeorgiyAvdeevJpg: `${ImageGeorgiyAvdeevJpg200} 200w, ${ImageGeorgiyAvdeevJpg400} 400w`,
    }
  }
}
</script>
