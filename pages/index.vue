<template>
  <div class="container">
    <MainHeader :active="active" />
    <main class="main" @click="showSortingList">
      <FormCreateItem />
      <transition name="fade" appear>
        <div v-if="allProducts.length !== 0" class="main__products products">
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
        <h1 v-else class="main__products-empty">
          Список товаров пуст!
        </h1>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FormCreateItem from '~/components/FormCreateItem.vue'
import ProductItem from '~/components/ProductItem.vue'
import MainHeader from '~/components/MainHeader.vue'

export default {
  name: 'IndexPage',
  components: { FormCreateItem, ProductItem, MainHeader },
  data () {
    return {
      active: true
    }
  },
  computed: {
    ...mapGetters(['GET_allProducts']),
    allProducts () {
      const sortedList = JSON.parse(JSON.stringify(this.GET_allProducts))
      // Сортировка по имени
      // sortedList.sort(function (a, b) {
      //   const nameA = a.name.toLowerCase()
      //   const nameB = b.name.toLowerCase()
      //   if (nameA < nameB) {
      //     return -1
      //   }
      //   if (nameA > nameB) {
      //     return 1
      //   }
      //   return 0
      // })
      return sortedList
    }
  },
  async mounted () {
    await this.fetchLocalStorageData()
  },
  methods: {
    ...mapActions(['fetchLocalStorageData']),
    showSortingList () {
      this.active = false
    }
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .main {
    display: grid;
    grid-gap: 15px;
    margin: 10px 0 0 0;
    padding: 0 0 50px 0;

    &__products-empty {
      text-align: center;
    }
    &__products {
      display: grid;
      grid-template-rows: auto;
      grid-gap: 15px;
      justify-items: stretch;
    }
  }
  @media (min-width: $screen-xxl) {
    .main {
      grid-template-columns: 35% 65%;

      &__products {
        grid-template-columns: 24% 24% 24% 24%;
      }
    }
  }
  @media (max-width: $screen-xxl) {
    .main {
      grid-template-columns: 30% 70%;

      &__products {
        grid-template-columns: 32% 32% 32%;
      }
    }
  }
  @media (max-width: $screen-lg) {
    .main {
      grid-template-columns: 40% 60%;
      &__products {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media (max-width: $screen-md) {
    .main {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: $screen-xs) {
    .main {
      &__products {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
