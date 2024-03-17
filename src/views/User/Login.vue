<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'

.root-signin
  width 100%
  background colorBg
  .content
    margin 150px auto
    max-width 1150px
    text-align center
    display flex
    justify-content space-between
    .animation
      width 45%
      > *
        opacity 0
        animation fade-in ease forwards
        padding-bottom 10px
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
          animation-duration .8s
          animation-delay 0s
          animation-timing-function ease
        &:nth-child(2)
          --animation-translate-value -140px
          --animation-blur-value 1.5px
          animation-duration 2s
          animation-delay .1s
          animation-timing-function cubic-bezier(0.19, 0.87, 0.73, 0.99)
        &:nth-child(3)
          --animation-translate-value -200px
          --animation-blur-value 3px
          animation-duration 3s
          animation-delay .3s
          animation-timing-function cubic-bezier(0.09, 1.11, 0.73, 0.99)
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
      text-align left
      color colorText1
      .header
        font-large-xx()
      .profile-button
        button()
</style>

<template>
  <div class="root-signin">
    <main class="content">
      <section class="animation">
        <div><img src="../../../res/images/339.svg" alt=""></div>
        <div><img src="../../../res/images/339.svg" alt=""></div>
        <div><img src="../../../res/images/339.svg" alt=""></div>
      </section>

      <section class="form">
        <header class="header">Авторизация</header>
        <FormWithErrors
          ref="form"
          :fields="fields"
          submitText="Войти"
          @success="login"
          :loading="loading"
        ></FormWithErrors>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import FormWithErrors from "~/components/FormWithErrors.vue";
import {detectBrowser, detectOS} from "~/utils/utils";
import CircleLoading from "~/components/CircleLoading.vue";
import {Validators} from "~/utils/validators";
import Footer from "~/components/Footer.vue";


export default {
  components: {CircleLoading, FormWithErrors, Footer},
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
      const {ok} = await this.$api.login(data.login, data.password, detectBrowser(), detectOS());
      this.loading = false;

      if (!ok) {
        this.$refs.form.setError([this.fields.login, this.fields.password], "Неверные логин или пароль");
        return;
      }
      this.loading = true;
      await this.$store.dispatch('GET_USER');
      this.loading = false;
      this.$router.push({name: 'default'});
    }
  }
}
</script>

