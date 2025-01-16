<style scoped lang="stylus">
@import '../../styles/constants.styl'
@import '../../styles/buttons.styl'

.root-signin
  width 100%
  padding 20px
  .form
    max-width 600px
    margin 20px auto
    padding 20px
    padding-top 10px
    color colorText1
    text-align center
    background-color colorBg
    border-radius borderRadiusM
    font-large()
    font-bold()
    .profile-link
      text-align left
      text-decoration none
    .profile-button
      button()
    .signin-links
      display flex
      justify-content space-between
      width 100%
      margin-top 20px
      text-decoration none
      font-small()
      .signin-by-email-link
        color colorText1
        text-decoration none
      .restore-password-link
        color colorText1
        text-decoration none
</style>

<template>
  <div class="root-signin">
    <div class="form">
      СМЕНА ПАРОЛЯ<br>
      <FormWithErrors
        ref="form"
        :fields="fields"
        submit-text="Сменить пароль"
        @success="changePassword"
        :loading="loading"
      />

      <router-link class="profile-link" :to="{name: 'profile'}">
        <button class="profile-button">Назад</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import FormWithErrors from "~/components/FormWithErrors.vue";
import CircleLoading from "~/components/CircleLoading.vue";
import {Validators} from "~/utils/validators";


export default {
  components: {CircleLoading, FormWithErrors},
  data() {
    return {
      fields: {
        oldPassword: {
          title: 'Старый пароль',
          name: 'password',
          type: 'password',
          placeholder: '●●●●●●',
          validationRegExp: Validators.password.regExp,
          prettifyResult: Validators.password.prettifyResult,
          autocomplete: 'password',
        },
        newPassword: {
          title: 'Новый пароль',
          name: 'new-password',
          type: 'password',
          placeholder: '●●●●●●',
          validationRegExp: Validators.password.regExp,
          prettifyResult: Validators.password.prettifyResult,
        },
        newPasswordAgain: {
          title: 'Новый пароль ещё раз',
          name: 'new-password',
          type: 'password',
          placeholder: '●●●●●●',
          validationRegExp: Validators.password.regExp,
          prettifyResult: Validators.password.prettifyResult,
        },
      },
      loading: false,
    }
  },

  methods: {
    async changePassword(data) {
      if (data.newPassword !== data.newPasswordAgain) {
        this.$refs.form.setError([this.fields.newPassword, this.fields.newPasswordAgain], 'Пароли не совпадают');
        return;
      }

      this.loading = true;
      const {ok} = await this.$api.changePassword(data.oldPassword, data.newPassword);
      this.loading = false;

      if (!ok) {
        this.$refs.form.setError(this.fields.oldPassword, 'Неверный пароль');
        return;
      }
      this.$popups.success('Пароль изменен', 'Пароль умпешно изменен');

      this.loading = true;
      await this.$store.dispatch('GET_USER');
      this.loading = false;
      this.$router.push({name: 'profile'});
    }
  }
}
</script>

