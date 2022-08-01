<template>
  <div class="container">
    <header class="header">
      <h1 class="header__title">
        Добавление товара
      </h1>
    </header>
    <main class="main">
      <FormCreateItem />
      <!-- <div class="main__products products">
        <ProductItem name="123" description="456" image="dasd" />
      </div> -->
    </main>
    <nuxt />
  </div>
</template>

<script>
import FormCreateItem from '../components/FormCreateItem.vue'
// import ProductItem from '~/components/ProductItem.vue'
export default {
  name: 'IndexPage',
  components: { FormCreateItem },
  data () {
    return {
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
</style>
