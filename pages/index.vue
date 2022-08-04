<template>
  <div class="container">
    <header class="header">
      <h1 class="header__title">
        Добавление товара
      </h1>
    </header>
    <main class="main">
      <FormCreateItem />
      <!-- <h1>{{ $store.state.productsTest }}</h1> -->
      <div class="main__products products">
        <ProductItem
          v-for="product in products"
          :key="product.id"
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
// import mapGetters from 'vuex'
import FormCreateItem from '~/components/FormCreateItem.vue'
import ProductItem from '~/components/ProductItem.vue'

export default {
  name: 'IndexPage',
  components: { FormCreateItem, ProductItem },
  data () {
    return {
      products: {
        laptop: {
          id: 0,
          name: 'Ноутбук',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          image: 'https://technika-remont.ru/wp-content/uploads/f/d/0/fd03c6305c124fe7feb9d07b78743282.jpeg',
          price: 75000
        },
        iphone: {
          id: 1,
          name: 'Iphone X',
          description: 'Iphone X нового поколения',
          image: 'https://technika-remont.ru/wp-content/uploads/f/d/0/fd03c6305c124fe7feb9d07b78743282.jpeg',
          price: 55000
        },
        tv: {
          id: 3,
          name: 'Телевизор',
          description: 'Телевизор, который поддерживает Smart TV',
          image: 'https://technika-remont.ru/wp-content/uploads/f/d/0/fd03c6305c124fe7feb9d07b78743282.jpeg',
          price: 98000
        },
        headphones: {
          id: 4,
          name: 'Наушники',
          description: 'Наушники от Apple, Air Pods Pro',
          image: 'https://technika-remont.ru/wp-content/uploads/f/d/0/fd03c6305c124fe7feb9d07b78743282.jpeg',
          price: 24000
        }
      }
    }
  }
  // compited: {
  //   ...mapGetters(['allProducts']),
  //   getProducts () {
  //     return console.log(this.allProducts)
  //   }
  // }
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
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: 15px;
    }
  }
</style>
