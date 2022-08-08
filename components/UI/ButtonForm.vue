<template>
  <button :class="[{form__submitButton: true, submitButton: true, active: valid}]" type="submit" :form="form" @click="addNewProduct(name, description, image, price)">
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
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    valid: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['addProducts', 'updateProducts']),
    addNewProduct (name, description, image, price) {
      if (this.valid) {
        this.addProducts({ name, description, image, price })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/base";

  .submitButton {
    background-color: $button-bg-disabled;
    color: $button-text-disabled;
    cursor: default;
    padding: 15px;
    margin: 20px 0 0 0;
    border-radius: 10px;
    transition: 350ms;
  }

  .active {
      background-color: $button-bg;
      color: $button-text;
      cursor: pointer;

      &:hover {
      background-color: #3d7c33;
      transition: 350ms;
    }
  }
</style>
