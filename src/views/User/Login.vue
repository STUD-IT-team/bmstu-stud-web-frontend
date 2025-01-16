<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'

.root-signin
  width 100%
  background colorBg
  .content
    display flex
    gap 20px
    justify-content space-between
    max-width 1150px
    margin 100px auto
    text-align center
    .animation
      width 45%
      > *
        padding-bottom 10px
        opacity 0
        animation fade-in ease forwards

        @keyframes fade-in
          0%
            transform translateY(var(--animation-translate-value))
            opacity 0
          10%
            filter blur(0)
          100%
            opacity 1
            filter blur(var(--animation-blur-value))
        &:nth-child(1)
          --animation-translate-value -20px
          --animation-blur-value 0px

          animation-duration 0.8s
          animation-timing-function ease
          animation-delay 0s
        &:nth-child(2)
          --animation-translate-value -140px
          --animation-blur-value 1.5px

          animation-duration 2s
          animation-timing-function cubic-bezier(0.19, 0.87, 0.73, 0.99)
          animation-delay 0.1s
        &:nth-child(3)
          --animation-translate-value -200px
          --animation-blur-value 3px

          animation-duration 3s
          animation-timing-function cubic-bezier(0.09, 1.11, 0.73, 0.99)
          animation-delay 0.3s
        img
          animation shake 15s cubic-bezier(0.4, 0.11, 0.68, 1.25) infinite

          @keyframes shake
            0%
              transform translate(0, 0)
            20%
              transform translate(5px, 3px)
            40%
              transform translate(3px, -2px)
            60%
              transform translate(-1px, 6px)
            80%
              transform translate(3px, 3px)
            90%
              transform translate(-5px, 3px)
        &:nth-child(1)
          img
            animation-delay 0s
        &:nth-child(2)
          img
            animation-delay 5s
        &:nth-child(3)
          img
            animation-delay 10s
    .form
      width 45%
      color white
      text-align left
      .header
        font-large-xx()
      .profile-button
        button()
      .register
        font-small()

        color colorPalette1
        a
          color colorPalette2
          &:hover
            color colorPalette4
</style>

<template>
  <div class="root-signin">
    <main class="content">
      <section class="animation">
        <div><img src="/static/images/339.svg" alt=""></div>
        <div><img src="/static/images/339.svg" alt=""></div>
        <div><img src="/static/images/339.svg" alt=""></div>
      </section>

      <section class="form">
        <header class="header">Авторизация</header>
        <section class="register">
          Нет&nbsp;аккаунта?&nbsp;
          <a href="/register"> Зарегистрироваться</a>
        </section>
        <FormWithErrors
          ref="form"
          :fields="fields"
          submit-text="Войти"
          @success="login"
          :loading="loading"
        />
      </section>
    </main>
  </div>
</template>

<script>
import FormWithErrors from "~/components/FormWithErrors.vue";
import { detectBrowser, detectOS } from "~/utils/utils";
import CircleLoading from "~/components/CircleLoading.vue";
import { Validators } from "~/utils/validators";


export default {
  components: { CircleLoading, FormWithErrors },
  data() {
    return {
      fields: {
        login: {
          title: 'Логин',
          name: 'login',
          type: 'text',
          placeholder: 'bmstu_1830',
          validationRegExp: Validators.username.regExp,
          prettifyResult: Validators.username.prettifyResult,
          autocomplete: 'login',
        },
        password: {
          title: 'Пароль',
          name: 'password',
          type: 'password',
          placeholder: '●●●●●●',
          validationRegExp: Validators.password.regExp,
          prettifyResult: Validators.password.prettifyResult,
          autocomplete: 'password',
        }
      },
      loading: false,
    }
  },

  methods: {
    async login(data) {
      this.loading = true;
      const {ok} = await this.$api.login(data.login, data.password);
      this.loading = false;

      if (!ok) {
        this.$refs.form.setError([this.fields.login, this.fields.password], "Неверные логин или пароль");
        return;
      }
      this.loading = true;
      await this.$store.dispatch('GET_USER');
      this.loading = false;
      this.$router.push({ name: 'default' });
    }
  }
}
</script>
