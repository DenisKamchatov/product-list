export const state = () => ({
  products: [
    {
      name: 'Ноутбук',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      image: 'https://technika-remont.ru/wp-content/uploads/f/d/0/fd03c6305c124fe7feb9d07b78743282.jpeg',
      price: '12 000'
    },
    {
      name: 'Iphone X',
      description: 'Iphone X нового поколения',
      image: 'https://gadgetsnews.net/wp-content/uploads/2018/07/u-apple-v-rossii-tseny-na-vosstanovlennye-iphone-x-vyshe-chem-na-novye.jpg',
      price: '55 000'
    },
    {
      name: 'Телевизор',
      description: 'Телевизор, который поддерживает Smart TV',
      image: 'http://tvdar.ru/d/2_567343-2000x1333_2.jpg',
      price: '98 000'
    },
    {
      name: 'Наушники',
      description: 'Наушники от Apple, AirPods Pro',
      image: 'https://static.baza.farpost.ru/v/1595826173289_bulletin',
      price: '24 000'
    }
  ],
  sortedProducts: {},
  sorting: [
    'По умолчанию',
    'Сначала дешевые',
    'Сначала дорогие',
    'По названию'
  ],
  choosedSorting: 'По умолчанию'
})

export const actions = {
  fetchLocalStorageData (ctx) {
    const localProducts = JSON.parse(localStorage.getItem('products'))
    ctx.commit('setProducts', localProducts)
  }
}

export const mutations = {
  deleteProduct (state, { id, name, description, image, price }) {
    if (!state.sortedProducts.length) {
      state.products = state.products.filter((product, index) => {
        return index !== id
      })
    } else {
      state.sortedProducts = state.sortedProducts.filter((product, index) => {
        return index !== id
      })
      const deletedProduct = state.products.find((product) => {
        if (product.name === name && product.description === description && product.image === image && product.price === price) {
          return product
        } else {
          return 0
        }
      })
      state.products = state.products.filter((product, index) => {
        if (product.name !== deletedProduct.name || product.description !== deletedProduct.description || product.image !== deletedProduct.image || product.price !== deletedProduct.price) {
          return product
        } else {
          return 0
        }
      })
    }
    localStorage.setItem('products', JSON.stringify(state.products))
  },
  addProducts (state, { name, description, image, price }) {
    state.products.push({ name, description, image, price })
    localStorage.setItem('products', JSON.stringify(state.products))
    if (state.sortedProducts.length) {
      state.sortedProducts = JSON.parse(JSON.stringify(state.products))
    }
  },
  setProducts (state, localProducts) {
    // localStorage.clear()
    if (!localProducts) {
      localStorage.setItem('products', JSON.stringify(state.products))
    } else {
      state.products = localProducts
    }
  },
  chooseSorting (state, sort) {
    state.choosedSorting = sort
    state.sortedProducts = JSON.parse(JSON.stringify(state.products))
    if (sort === 'По названию') {
      state.sortedProducts.sort(function (a, b) {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    } else if (sort === 'Сначала дешевые') {
      state.sortedProducts.sort(function (a, b) {
        const priceA = Number(a.price.replace(/\s/g, ''))
        const priceB = Number(b.price.replace(/\s/g, ''))
        return priceA - priceB
      })
    } else if (sort === 'Сначала дорогие') {
      state.sortedProducts.sort(function (a, b) {
        const priceA = Number(a.price.replace(/\s/g, ''))
        const priceB = Number(b.price.replace(/\s/g, ''))
        return priceA - priceB
      })
      state.sortedProducts.reverse()
    }
  }
}

export const getters = {
  GET_allProducts (state) {
    if (localStorage.getItem('products')) {
      if (state.sortedProducts.length) {
        return state.sortedProducts
      } else {
        return state.products
      }
    }
  },
  GET_sorting (state) {
    return state.sorting
  },
  GET_choosedSorting (state) {
    return state.choosedSorting
  }
}
