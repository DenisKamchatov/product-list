<template>
  <div class="products__product product">
    <img class="product__image" :src="image" alt="">
    <div class="product__info">
      <h3 class="product__name">
        {{ name }}
      </h3>
      <p class="product__description">
        {{ description }}
      </p>
      <h2 class="product__price">
        {{ price }} руб.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Наименование товара'
    },
    description: {
      type: String,
      default: 'Описание товара'
    },
    image: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/base";
  .product {
    background-color: $white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);

    &__image {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    &__info {
      padding: 20px 15px;
    }
    &__description {
      margin: 15px 0 0 0;
    }
    &__price {
      margin: 15px 0 0 0;
    }
  }
</style>
