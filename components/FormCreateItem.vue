<template>
  <form class="form" name="form-create-item">
    <div :class="[{ form__label: true, form__nameRequired }]">
      <label for="name">Наименование товара</label>
      <div class="form__label-dot" />
    </div>
    <input
      v-model="name"
      :class="[{form__inputNameRequired}]"
      type="text"
      name="name"
      placeholder="Введите наименование товара"
      required
    >

    <label class="form__label" for="description">Описание товара</label>
    <textarea
      id="form-description"
      v-model="description"
      name="description"
      placeholder="Введите описание товара"
      cols="30"
      rows="5"
    />
    <div :class="[{ form__label: true, form__imageRequired }]">
      <label for="image-link">Ссылка на изображение товара</label>
      <div class="form__label-dot" />
    </div>
    <input
      v-model="image"
      :class="[{form__inputImageRequired}]"
      type="text"
      name="image-link"
      placeholder="Введите ссылку"
      required
    >

    <div :class="[{ form__label: true, form__priceRequired }]">
      <label for="price">Цена товара</label>
      <div class="form__label-dot" />
    </div>
    <input
      v-model="price"
      :class="[{form__inputPriceRequired}]"
      type="text"
      name="price"
      placeholder="Введите цену"
      required
    >

    <ButtonForm
      form="form-create-item"
      text="Добавить товар"
      :name="name"
      :description="description"
      :image="image"
      :price="price"
      :valid="Boolean(valid.result)"
    />
  </form>
</template>

<script>
import ButtonForm from './UI/ButtonForm.vue'

export default {
  name: 'FormCreateItem',
  components: { ButtonForm },
  data () {
    return {
      name: '',
      description: '',
      image: '',
      price: '',
      form__nameRequired: true,
      form__imageRequired: true,
      form__priceRequired: false,
      form__inputNameRequired: true,
      form__inputImageRequired: true,
      form__inputPriceRequired: true,
      valid: {
        result: false,
        name: false,
        image: false,
        price: false
      }
    }
  },
  watch: {
    name () {
      if (this.name === '') {
        this.form__nameRequired = true
        this.form__inputNameRequired = true
        this.valid.name = false
      } else {
        this.form__nameRequired = false
        this.form__inputNameRequired = false
        this.valid.name = true
      }
      if (this.valid.name && this.valid.image && this.valid.price) {
        this.valid.result = true
      } else {
        this.valid.result = false
      }
    },
    image () {
      if (this.image === '') {
        this.form__imageRequired = true
        this.form__inputImageRequired = true
        this.valid.image = false
      } else {
        this.form__imageRequired = false
        this.form__inputImageRequired = false
        this.valid.image = true
      }
      if (this.valid.name && this.valid.image && this.valid.price) {
        this.valid.result = true
      } else {
        this.valid.result = false
      }
    },
    price () {
      if (this.price === '') {
        this.form__priceRequired = true
        this.form__inputPriceRequired = true
        this.valid.price = false
      } else {
        this.form__priceRequired = false
        this.form__inputPriceRequired = false
        this.valid.price = true
      }

      if (this.valid.name && this.valid.image && this.valid.price) {
        this.valid.result = true
      } else {
        this.valid.result = false
      }
      if (!Number(this.price)) {
        this.price = this.price.replace(/[^0-9^]/gi, '')
      }

      this.price = new Intl.NumberFormat('ru-RU').format(this.price)
    }
  },
  methods: {
    getValid () {
      if (this.form__nameRequired === true && this.form__imageRequired === true && this.form__priceRequired === true) {
        this.valid = true
      } else {
        this.valid = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/base";
  .form {
    display: flex;
    flex-direction: column;
    background-color: $white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    padding: 25px 20px;
    height: fit-content;

    label {
      font-weight: 400;
      color: $text-label;
    }
    &__label {
      display: flex;
    }
    &__label-dot {
      background-color: $required-dot;
      border-radius: 50%;
      margin: 0 0 0 3px;
    }
    &__nameRequired, &__imageRequired, &__priceRequired {
      position: relative;
      &::after {
        content: 'Поле является обязательным';
        font-weight: 400;
        color: $text-validation;
        position: absolute;
        left: 0;
      }
    }
    &__inputNameRequired, &__inputImageRequired, &__inputPriceRequired {
      outline: 1px solid $delete-button;
    }
    input, textarea {
      background-color: $white;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      margin: 7px 0 0 0;
      resize: none;

      &:focus {
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02), inset 0 0 2px $delete-button;
      }
    }

    input::placeholder, textarea::placeholder {
      font-weight: 400;
      color: $placeholder;
    }
  }
  @media (min-width: $screen-xxl) {
    .form {
      label {
        font-size: 20px;
      }
      &__label:not(:first-child) {
        margin: 30px 0 0 0;
      }
      &__label-dot {
        width: 6px;
        height: 6px;
      }
      &__nameRequired, &__imageRequired, &__priceRequired {
        &::after {
          font-size: 14px;
          bottom: -80px;
        }
      }
      input, textarea {
        font-size: 18px;
        padding: 15px;
      }
      input::placeholder, textarea::placeholder {
        font-size: 18px;
      }
    }
  }
  @media (max-width: $screen-xxl) {
    .form {
      label {
        font-size: 10px;
      }
      &__label:not(:first-child) {
        margin: 20px 0 0 0;
      }
      &__label-dot {
        width: 4px;
        height: 4px;
      }
      &__nameRequired, &__imageRequired, &__priceRequired {
        &::after {
          font-size: 8px;
          bottom: -55px;
        }
      }
      input, textarea {
        padding: 10px;
      }
      input::placeholder, textarea::placeholder {
        font-size: 14px;
      }
    }
  }
  @media (max-width: $screen-md) {
    .form {
      width: 80%;
      margin: 0 auto;

      label {
        font-size: 15px;
      }
      &__label:not(:first-child) {
        margin: 30px 0 0 0;
      }
      &__label-dot {
        width: 5px;
        height: 5px;
      }
      &__nameRequired, &__imageRequired, &__priceRequired {
      &::after {
        font-size: 10px;
        bottom: -60px;
        left: 0;
      }
    }
    }
  }
  @media (max-width: $screen-xs) {
    .form {
      width: 100%;
    }
  }
</style>
