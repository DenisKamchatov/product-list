<template>
  <header class="header">
    <h1 class="header__title">
      Добавление товара
    </h1>
    <div class="header__sorting-wrapper">
      <div :class="[{ header__sorting: true, sorting: true }]" @click="displaySortedList">
        <h4>{{ choosedSorting }}</h4>
        <svg class="sorting__arrow" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4" />
        </svg>
      </div>
      <ul :class="[{ sorting__list: true, active }]">
        <li v-for="(sort, index) of sorting" :key="index" class="sorting__item" @click="chooseSort(sort)">
          {{ sort }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'MainHeader',
  data () {
    return {
      active: false
    }
  },
  computed: {
    ...mapGetters(['GET_sorting', 'GET_choosedSorting']),
    sorting () {
      return this.GET_sorting
    },
    choosedSorting () {
      return this.GET_choosedSorting
    }
  },
  methods: {
    ...mapMutations(['chooseSorting']),
    displaySortedList () {
      this.active = true
    },
    chooseSort (sort) {
      this.active = false
      this.chooseSorting(sort)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/base';
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;

    &__sorting-wrapper {
      position: relative;
      .active {
        display: block;
      }
    }
  }
  .sorting {
    background-color: $white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &__arrow {
      width: 13px;
      margin: 0 0 0 5px;
    }
    &__list {
      position: absolute;
      top: 0;
      right: 0;
      background-color: $white;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      width: 170px;
      z-index: 10;
      display: none;
    }
    &__item {
      padding: 15px 10px;
      &:hover {
        background-color: $text-label;
        color: $white;
        cursor: pointer;
        border-radius: 4px;
      }
    }
  }
  @media (min-width: $screen-xxl) {
    .sorting {
      padding: 10px 15px;
      &__list {
        width: 200px;
      }
      &__item {
        padding: 15px 20px;
        font-size: 15px;
      }
    }
  }
  @media (max-width: $screen-xxl) {
    .sorting {
      padding: 10px 15px;
    }
  }
  // @media (max-width: $screen-xs) {
  //   .sorting {
  //     padding: 10px 15px;
  //   }
  // }
</style>
