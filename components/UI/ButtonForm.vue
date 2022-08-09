<template>
  <button :class="[{form__submitButton: true, submitButton: true, active: valid}]" type="submit" :form="form" @click="addNewProduct(name, description, image, price, sorting)">
    {{ text }}
  </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
  computed: {
    ...mapGetters(['GET_choosedSorting', 'GET_allProducts']),
    sorting () {
      return this.GET_choosedSorting
    },
    allProducts () {
      return this.GET_allProducts
    }
  },
  methods: {
    ...mapMutations(['addProducts', 'chooseSorting']),
    addNewProduct (name, description, image, price, sorting) {
      const repeatProduct = this.allProducts.find((product) => {
        if (product.name === name && product.description === description && product.image === image && product.price === price) {
          return product
        } else {
          return 0
        }
      })
      if (!repeatProduct) {
        if (this.valid) {
          this.addProducts({ name, description, image, price })
          this.chooseSorting(sorting)
        }
      } else {
        alert('Товары в списке не должны повторяться!')
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
  @media (min-width: $screen-xxl) {
    .submitButton {
      font-size: 20px;
      padding: 20px;
    }
  }
  @media (max-width: $screen-xxl) {
    .submitButton {
      padding: 15px;
    }
  }
</style>
