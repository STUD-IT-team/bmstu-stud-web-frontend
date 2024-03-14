<style scoped lang="stylus">
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'

@keyframes fade-in {
  from {
    filter: blur(5px)
    opacity 0
  }
  to {
    opacity 1
  }
}

.root-signin
  width 100%
  background colorBg
  .navbar
    border-bottom solid
    border-bottom-width 1px
    border-bottom-color colorBg6
  .content
    margin 150px auto
    max-width 1000px
    text-align center
    display flex
    justify-content space-between
    .animation
      width 45%
      .el1
      .el2
      .el3
        opacity 0
        animation fade-in 1.5s forwards
        padding-bottom 10px
      .el1
        animation-delay 0s
      .el2
        animation-delay 0.5s
      .el3
        animation-delay 1s
    .form
      width 45%
      //align-self center
      text-align left
      font-large-extra()
      font-bold()
      color colorText1
      .profile-link
        text-decoration none
        text-align left
      .profile-button
        button()
</style>

<template>
  <div class="root-signin">

    <NavBar class="navbar"></NavBar>
    <div class="content">
      <div class="animation">
        <img class="el1" src="/res/images/339.svg">
        <img class="el2" src="/res/images/339.svg">
        <img class="el3" src="/res/images/339.svg">
      </div>
      <div class="form">
        Авторизация<br>
        <FormWithErrors
          ref="form"
          :fields="fields"
          submitText="Войти"
          @success="login"
          :loading="loading"
        ></FormWithErrors>
        <!-- <router-link class="profile-link" :to="{name: 'register'}"> -->
          <!-- <button class="profile-button">Зарегистрироваться</button> -->
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import FormWithErrors from "~/components/FormWithErrors.vue";
import NavBar from "~/components/NavBar.vue";
import {detectBrowser, detectOS} from "~/utils/utils";
import CircleLoading from "~/components/CircleLoading.vue";
import {Validators} from "~/utils/validators";


export default {
  components: {CircleLoading, FormWithErrors, NavBar},
  data() {
    return {
      fields: {
        email: {
          title: 'Логин',
          name: 'login',
          type: 'text',
          placeholder: 'bmstu_1830',
          validationRegExp: Validators.email.regExp,
          prettifyResult: Validators.email.prettifyResult,
          autocomplete: 'email',
        },
        password: {
          title: 'Пароль',
          name: 'password',
          type: 'password',
          // placeholder: '●●●●●●',
          placeholder: '******',
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
      const {ok} = await this.$api.login(data.email, data.password, detectBrowser(), detectOS());
      this.loading = false;

      if (!ok) {
        this.$refs.form.setError([this.fields.email, this.fields.password], 'Неверные email или пароль');
        return;
      }
      this.loading = true;
      await this.$store.dispatch('GET_USER');
      this.loading = false;
      this.$router.push({name: 'profile'});
    }
  }
}
</script>

