<template>
  <button class="form__submit-button submit-button" type="submit" :form="form" @click="addNewProduct(name, description, image, price)">
    {{ text }}
  </button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    form: {
      type: String,
      default: 'form'
    },
    text: {
      type: String,
      default: 'Отправить'
    },
    name: {
      type: String,
      default: 'Название'
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: 'https://static.tildacdn.com/tild3438-3833-4964-a238-383635613963/1522301901119501.jpg'
    },
    price: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapMutations(['addProducts', 'updateProducts']),
    addNewProduct (name, description, image, price) {
      this.addProducts({ name, description, image, price })
      // this.updateProducts()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/base";
  .submit-button {
    background-color: $button-bg;
    color: $button-text;
    padding: 15px;
    margin: 20px 0 0 0;
    border-radius: 10px;
    transition: 350ms;

    &:hover {
      background-color: #3d7c33;
      transition: 350ms;
    }
  }
  button[disabled] {
    background-color: $button-bg-disabled;
    color: $button-text-disabled;
    cursor: default;
  }

</style>
