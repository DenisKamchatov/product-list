<template>
  <form class="form" name="form-create-item">
    <div :class="[{ form__label, form__nameRequired }]">
      <label for="name">Наименование товара</label>
      <div class="form__label-dot" />
    </div>
    <input
      v-model="name"
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
    <div :class="[{ form__label, form__imageRequired }]">
      <label for="image-link">Ссылка на изображение товара</label>
      <div class="form__label-dot" />
    </div>
    <input v-model="image" type="text" name="image-link" placeholder="Введите ссылку" required>

    <div :class="[{ form__label, form__priceRequired, form__priceInvalid }]">
      <label for="price">Цена товара</label>
      <div class="form__label-dot" />
    </div>
    <input
      v-model="price"
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
      form__label: true,
      form__nameRequired: true,
      form__imageRequired: true,
      form__priceRequired: false,
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
        this.valid.name = false
      } else {
        this.form__nameRequired = false
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
        this.valid.image = false
      } else {
        this.form__imageRequired = false
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
        this.valid.price = false
      } else {
        this.form__priceInvalid = false
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
      if (this.form__nameRequired === true && this.form__imageRequired === true && this.form__priceRequired === true && this.form__priceInvalid === true) {
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
      font-size: 10px;
      font-weight: 400;
      color: $text-label;
    }
    &__label {
      display: flex;
    }
    &__label:not(:first-child) {
      margin: 20px 0 0 0;
    }
    &__label-dot {
      background-color: $required-dot;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin: 0 0 0 3px;
    }
    &__nameRequired, &__imageRequired, &__priceRequired {
      position: relative;
      &::after {
        content: 'Поле является обязательным';
        font-size: 8px;
        font-weight: 400;
        color: $text-validation;
        position: absolute;
        bottom: -55px;
        left: 0;
      }
    }
    &__priceInvalid {
      position: relative;
      &::after {
        content: 'Цена должна быть выше 0!';
        font-size: 8px;
        font-weight: 400;
        color: $text-validation;
        position: absolute;
        bottom: -55px;
        left: 0;
      }
    }
    input, textarea {
      background-color: $white;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      padding: 10px;
      margin: 7px 0 0 0;
      resize: none;

      &:focus {
        // box-shadow: inset 0 0 2px red;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02), inset 0 0 2px $delete-button;
      }
    }

    input::placeholder, textarea::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: $placeholder;
    }
  }

</style>
