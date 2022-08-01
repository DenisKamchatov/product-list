<template>
  <div class="products__product product">
    <img src="" alt="">
    <h3 class="product__name">
      Наименование товара
    </h3>
    <p class="product__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк
    </p>
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
    }
  }
}
</script>
