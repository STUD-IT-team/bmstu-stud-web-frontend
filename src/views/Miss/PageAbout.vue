<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'
@require '../../styles/components.styl'
@require '../../styles/scrollbars.styl'

.root-page-about
  .header
    font-large-x()
    text-align center
    color colorMiss1
    margin-bottom 15px
  .header-colored
    font-large-x()
    text-align center
    background colorMiss1
    color colorText1
    padding 10px
    margin-bottom 15px
    margin-top 20px
    border-radius borderRadiusM

  .section-text
    font-medium()
    border-radius borderRadiusL
    border 2px solid colorMiss1
    text-align justify
    padding 18px 30px
    margin-bottom 50px
    @media ({mobile})
      padding-left 10px
      padding-right 10px
    p:not(:last-child)
      margin-bottom 10px
    .listing
      list-style circle
      padding-left 20px
      margin-top -10px
      &:not(:last-child)
        margin-bottom 10px
    a
      text-decoration underline
      hover-effect()
    mark
      background none
      color colorMiss1

    .image-full-size
      width 100%
      min-height 500px
      @media ({mobile})
        min-height 300px
      border-radius borderRadiusM
      overflow hidden
    .horizontal-scroll-container
      display flex
      gap 10px
      overflow-x auto
      padding-bottom 5px
      scrollable()
      .jury-container
        display flex
        flex-direction column
        align-items center
        gap 10px
        min-width 200px
        width 200px
        border 2px solid colorMiss1
        border-radius borderRadiusS
        overflow hidden
        img
          width 100%
          overflow hidden
          background mix(white, transparent, 70%)
        .name
          font-medium()
    .nomination-header
      font-large-x()
      text-align center
      padding 3px
      margin-bottom 22px
      border-bottom 2px solid colorMiss1
      &:not(:first-child)
        margin-top 60px
</style>

<template>
  <div class="root-page-about">
    <header class="header">О КОНКУРСЕ</header>
    <section class="section-text">
      <p>Студенческий конкурс талантов <mark>«МиСС Очарование»</mark> — один из самых ярких и масштабных проектов МГТУ им. Н.Э. Баумана. Данный конкурс позволяет участницам выйти из зоны комфорта и раскрыть свои творческие способности.</p>
      <p>«Мисс Очарование» — это возможность для бауманских студенток получить <mark>новые эмоции</mark> и сценический опыт. Данный проект позволяет показать свой уникальный взгляд на технический вуз, а также начать бауманскую весну и укрепить сообщества факультетов, поддерживающих участниц.</p>
      <p>Конкурсу <mark>более 20 лет</mark>, но он не теряет свою актуальность и каждый год собирает полный зал, который бурными овациями встречает каждую финалистку.</p>
      <p>Подготовка к конкурсу длится почти <mark>2 месяца</mark>, которая состоит из репетиций творческих номеров, постановок дефиле, съемок, интервью и фотосессий. Такой плотный график и подготовка позволяют каждой участнице конкурса <mark>раскрыться на максимум</mark> во время финала.</p>
      <p>Финал конкурса состоит из следующих этапов:</p>
      <ul class="listing">
        <li>Видео-визитка;</li>
        <li>Общий танец;</li>
        <li>Дефиле участниц;</li>
        <li>Творческий номер;</li>
        <li>Конкурс «Лучшая группа поддержки».</li>
      </ul>
      <p>После проведения всех этапов <mark>подводятся итоги</mark> и, конечно же, <mark>проходит награждение</mark> всех финалисток.</p>
      <header class="header-colored">КАК ЭТО БЫЛО</header>
<!--      <img class="image-full-size" src="/res/images/missAwarding.png" alt="photo from awarding">-->
      <iframe class="image-full-size" src="https://vk.com/video_ext.php?oid=-26724538&id=456239353&hd=3&autoplay=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </section>

<!--    <header class="header">ЖЮРИ</header>-->
<!--    <section class="section-text">-->
<!--      <p>В состав членов жюри конкурса входит администрация Университета и партнеры нашего мероприятия. Возглавляет коллегию президент МГТУ им. Н.Э. Баумана, доктор технических наук, А.А. Александров.</p>-->
<!--      <p>В разные годы проведения конкурса в состав жюри входили следующие известные личности:</p>-->
<!--      <ul class="listing">-->
<!--        <li>Российский космонавт-испытатель, герой России — Олег Германович Артемьев;</li>-->
<!--        <li>Исполнительный директор Госкорпорации «Ростех» — Олег Николаевич Евтушенко</li>-->
<!--        <li>Генеральный директор АО «Объединенная приборостроительная корпорация» — Сергей Степанович Сахненко;</li>-->
<!--        <li>Председатель Правления акционерного общества «Роснано», выпускник МГТУ им. Н.Э. Баумана — Сергей Александрович Куликов;</li>-->
<!--        <li>Российская актриса и телеведущая — Юлия Михалкова.</li>-->
<!--      </ul>-->
<!--      <ul class="horizontal-scroll-container" ref="juryScrollerContainer">-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--      </ul>-->
<!--    </section>-->

    <header class="header">НОМИНАЦИИ</header>
    <section class="section-text">
      <header class="nomination-header">МИСС ОЧАРОВАНИЕ</header>
      <p>Главная номинация присуждается победительнице конкурса. Она определяется суммарным голосованием жюри по всем пяти турам мероприятия финала конкурса.</p>
      <p>Каждый член жюри индивидуально ставит участнице оценку за каждый этап в бланк. Таблица результатов выводится на большой экран сцены после каждого этапа. Члены жюри не имеют права договариваться о совместном лоббировании тех или иных кандидаток.</p>
      <p>Результат вычисляется простым суммированием оценок, выставленных всеми членами жюри за все туры.</p>

      <p>Участница, набравшая наибольший суммарный балл, становится победительницей конкурса.</p>
      <p>Участница, занявшая второе место по результатам голосования жюри, получает титул «Вице-мисс».</p>

      <header class="nomination-header">МИСС ОВАЦИЯ</header>
      <p>Победительница в данной номинации определяется очным голосованием зрительного зала. Каждый человек, который присутствует на финальном шоу, может отдать голос за понравившуюся ему участницу.</p>

      <header class="nomination-header">МИСС ОНЛАЙН</header>
      <p>Данная номинация определяется sms-голосованием, которое проходит во время подготовки к конкурсу. Результат автоматически появляется на сайте, а самый активный участник (обладатель номера, с которого отправили наибольшее количество sms-сообщений) сможет выйти на сцену во время награждения и вручить приз победительнице в этой номинации.</p>

      <header class="nomination-header">МИСС ДРУЖБА</header>
      <p>Мисс Дружба — единственная номинация, победительницу в которой выбирают сами участницы конкурса путем тайного голосования, проходящего за день до финального мероприятия. На протяжении всей подготовки к финалу девушки становятся настоящими подруга, а титул «Мисс Дружба» получает та девушка, которая стала душой прекрасного коллектива.</p>

      <header class="nomination-header">МИСС ЦЕЛЕУСТРЕМЛЕННОСТЬ</header>
      <p>Мисс Целеустремленность — номинация, присуждаемая оргкомитетом конкурса. Во время подготовки с финалистками работают профессионалы разных профилей: хореограф, преподаватель дефиле, режиссеры-постановщики, стилисты, фотографы и операторы. Для определения данной номинации организационный комитет оценивает самоорганизацию участниц и независимо друг от друга путем тайного голосования выбирает конкурсантку, которая больше всех сделала для желаемой победы.</p>

      <header class="nomination-header">НОМИНАЦИЯ ОТ ПАРТНЁРОВ КОНКУРСА</header>
      <p>Партнёрам мероприятия по согласованию с оргкомитетом предоставляется право учредить собственную номинацию и наградить ею любую понравившуюся участницу.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      juryScrollingTimer: undefined,
    }
  },


  mounted() {
    // this.juryScrollingTimer = setInterval(() => {
    //   this.$refs.juryScrollerContainer.scrollBy({left: 1});
    // }, 50);
  },
  unmounted() {
    clearInterval(this.juryScrollingTimer);
  },
}
</script>
