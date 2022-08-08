<template>
  <div class="container">
    <header class="header">
      <h1 class="header__title">
        Добавление товара
      </h1>
    </header>
    <main class="main">
      <FormCreateItem />
      <div class="main__products products">
        <ProductItem
          v-for="(product, index) of allProducts"
          :id="index"
          :key="index"
          :name="product.name"
          :description="product.description"
          :image="product.image"
          :price="product.price"
        />
      </div>
    </main>
    <nuxt />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FormCreateItem from '~/components/FormCreateItem.vue'
import ProductItem from '~/components/ProductItem.vue'

export default {
  name: 'IndexPage',
  components: { FormCreateItem, ProductItem },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['GET_allProducts']),
    allProducts () {
      // const numb = 1234567
      // const numbFmt = numb.toLocaleString('ru-RU')
      // console.log(numbFmt)
      return this.GET_allProducts
    }
  },
  async mounted () {
    await this.fetchLocalStorageData()
  },
  methods: {
    ...mapActions(['fetchLocalStorageData'])
  }
}
/**
 * ff - Source Sans Pro
 * h1 - fw600, fz28px
 * h2 - fw600, fz24px
 * h3 - fw600, fz20px
 * p - fw400, fz16px
 * label - fw400, fz10px
 * ph - fw400, fz12
 * button - fw600, fz12
 */
</script>

<style lang="scss">
  @import "~assets/scss/base";
  .main {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 15px;
    margin: 10px 0 0 0;

    &__products {
      flex-basis: 70%;
      display: grid;
      grid-template-columns: 32% 32% 32%;
      grid-template-rows: auto;
      grid-gap: 15px;
      justify-items: stretch;
    }
  }
</style>
