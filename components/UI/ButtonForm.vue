<template>
  <button class="form__submit-button" type="submit" :form="form">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    form: {
      type: String,
      default: 'form'
    },
    text: {
      type: String,
      default: 'Отправить'
    }
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/base";
  .form {
    &__submit-button {
      background-color: $button-bg;
      color: $button-text;
      padding: 15px;
      margin: 20px 0 0 0;
      border-radius: 10px;
    }
    button[disabled] {
      background-color: $button-bg-disabled;
      color: $button-text-disabled;
      cursor: default;
    }
  }
</style>
