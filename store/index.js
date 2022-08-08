export const state = () => ({
  products: [
    {
      name: 'Ноутбук',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      image: 'https://technika-remont.ru/wp-content/uploads/f/d/0/fd03c6305c124fe7feb9d07b78743282.jpeg',
      price: 75000
    },
    {
      name: 'Iphone X',
      description: 'Iphone X нового поколения',
      image: 'https://gadgetsnews.net/wp-content/uploads/2018/07/u-apple-v-rossii-tseny-na-vosstanovlennye-iphone-x-vyshe-chem-na-novye.jpg',
      price: 55000
    },
    {
      name: 'Телевизор',
      description: 'Телевизор, который поддерживает Smart TV',
      image: 'http://tvdar.ru/d/2_567343-2000x1333_2.jpg',
      price: 98000
    },
    {
      name: 'Наушники',
      description: 'Наушники от Apple, AirPods Pro',
      image: 'https://static.baza.farpost.ru/v/1595826173289_bulletin',
      price: 24000
    }
  ]
})

export const mutations = {
  deleteProduct (state, id) {
    state.products = state.products.filter((product, index) => {
      return index !== id
    })
  },
  addProducts (state, { name, description, image, price }) {
    state.products.push({ name, description, image, price })
    // console.log(name, description, image, price)
  }
}

export const getters = {
  GET_allProducts (state) {
    return state.products
  }
}
