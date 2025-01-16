<style lang="stylus" scoped>
@import '../styles/buttons.styl'
@import '../styles/constants.styl'
@import '../styles/fonts.styl'

border-color = colorText1
input-border = 1px solid border-color

.root-form
  .input-container
    position relative
    padding-top 12px
    color colorText4

    .title
      font-large()

      padding 5px 0
      color colorText1

    label
    .placeholder
      pointer-events none
      user-select none
      position absolute
      top calc(2.4rem + 24px)
      left 8px
      padding-left 10px
      text-align left
      opacity 0.1
      font-medium()
      trans()
    label
      opacity 0

    input
      all unset
      display block
      box-sizing border-box
      width 100%
      padding-top 10px
      padding-bottom 10px
      padding-left 17px
      // border-top-width 0
      text-align left
      background-color white
      border input-border
      border-color colorBorder
      border-radius borderRadiusS
      // outline input-border
      // outline-offset 0
      transition all 0.2s ease, background-size 0.1s ease
      font-medium()
      &::placeholder
        transform translateY(5px)
        visibility hidden
        opacity 0
      &:focus
        // &:not(:placeholder-shown)
        border-color transparent
        outline-color transparent
        outline-offset 5px
        // &:not(:placeholder-shown) ~ label
        // &:focus ~ label
        //  left 15px
        //  top 2px
        //  opacity 0.3
      &:not(:focus) ~ .placeholder
        left 8px
        opacity 0.6
      &:not(:placeholder-shown) ~ .placeholder
        opacity 0
      &.error
        color colorError

    .error
    .success
      pointer-events none
      user-select none
      position absolute
      top 26px
      right 20px
      opacity 0
      font-small-x()
      trans()
      &.hidden
        opacity 0
    .error
      color colorError
    .success
      color colorSuccess
    .info
      user-select none
      margin-top 2px
      padding-left 20px
      text-align left
      opacity 0.5
      font-small-x()

    &.error
      color colorError
      .error:not(.hidden)
        opacity 1
      .title
        color colorError
    &.success
      color colorSuccess
      .success:not(.hidden)
        opacity 1
      .title
        color colorSuccess
  .error-msg
    font-small()

    margin-top 20px
    color colorError
    &.hidden
      height 0
      visibility hidden
  .submit
    button-submit()
    font-large()

    margin-top 30px
    margin-bottom 10px
</style>

<template>
  <div class="root-form" @keydown.enter="submit" @input="() => {isSubmittedAlready ? checkFormat() : null}">
    <div class="input-container" v-for="[fieldName, field] in Object.entries(fields)" :class="{error: field.__error, success: field.__success}">
      <div class="title">{{ field.title }}</div>
      <input v-bind="field" :id="`${uid}-${fieldName}`" :type="field.type || 'text'" v-model="field.value" :autocomplete="field.autocomplete || 'off'" placeholder="-">
      <label :for="`${uid}-${fieldName}`">{{ field.title }}</label>
      <div class="info" v-if="field.info">{{ field.info }}</div>
      <div class="placeholder">{{ field.placeholder }}</div>
      <div class="error" :class="{hidden: !errorSuccessShowed}">{{ field.overrideErrorText || field.errorText || 'Неверный формат' }}</div>
      <div class="success" :class="{hidden: !errorSuccessShowed}">{{ field.successText || 'Успех' }}</div>
    </div>

    <button class="submit" @click="submit">
      <transition name="opacity" mode="out-in" duration="200">
        <CircleLoading v-if="loading" size="1.2em" />
        <span v-else>{{ submitText || 'Отправить' }}</span>
      </transition>
    </button>
  </div>
</template>

<script>
import CircleLoading from "./CircleLoading.vue";

export default {
  components: {CircleLoading},
  emits: ['success', 'error'],

  props: {
    fields: {
      type: Object,
      required: true,
      default: {
        some_field: {
          name: String,
          errorText: String,
          overrideErrorText: null,
          successText: String,
          value: String, // initial value
          regExp: RegExp,
          validator: Function, // (Any) => Boolean
          required: Boolean, // default: false
          noTrimValue: Boolean, // default: false. By default the return value will be trimmed

          type: String(), // default: 'text'
          placeholder: String(),
          autocomplete: String(), // default: 'off'
          //other <input> attributes: String()
        }
      }
    },
    errorText: String,
    submitText: String, // default: 'Отправить'
    setSuccesses: Boolean, // default: false. Can set on fields only errors
    loading: Boolean, // default: false
  },

  data() {
    return {
      uid: Math.random(),
      errorSuccessShowed: false,

      isSubmittedAlready: false,
    }
  },

  methods: {
    submit() {
      this.isSubmittedAlready = true;
      this.errorSuccessShowed = true;
      // setTimeout(() => this.errorSuccessShowed = false, 1000);

      if (!this.checkFormat()) {
        this.$emit('error');
        return;
      }
      const res = {};
      Object.entries(this.fields).forEach(([fieldName, field]) => {
        const fieldValueTrimmed = field.type === 'text' ? field.value.trim() : field.value;
        res[fieldName] = field.prettifyResult ? field.prettifyResult(fieldValueTrimmed) : fieldValueTrimmed;
      });
      this.$emit('success', res);
    },

    checkFormat() {
      let res = true;
      Object.values(this.fields).forEach(field => {
        field.value = field.value || '';
        const validationText = field.type === 'text' ? (field.noTrimValue ? field.value : field.value.trim()) : field.value;
        if (field.validationRegExp) {
          field.__error = !field.validationRegExp.test(validationText);
        } else if (field.validator) {
          field.__error = !field.validator(validationText);
        } else {
          field.__error = false;
        }
        if (field.__error) {
          field.overrideErrorText = null;
        }
        field.__success = this.setSuccesses && !field.__error;
        res = res && !field.__error;
      });
      return res;
    },

    __setErrorOnField(field, errorText) {
      field.__error = true;
      field.overrideErrorText = errorText;
    },
    setError(fields, errorText) {
      if (Array.isArray(fields)) {
        fields.forEach(field => this.__setErrorOnField(field, errorText));
        return;
      }
      this.__setErrorOnField(fields, errorText);
      this.errorText = errorText
    }
  }
}
</script>
