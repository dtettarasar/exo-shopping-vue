import { createStore } from 'vuex'
import axios from 'axios'; 

export default createStore({
  // données utilisées par les composants
  state: {
    products : [],
    productsInBag: []
  },
  // Fait l'intermédiaire entre actions et state
  mutations: {
    
    loadProducts(state, products) {
      console.log(products);
      state.products = products;
    },

    addToBag(state, product) {
      state.productsInBag.push(product);
    }

  },
  // actions sert aux appels API et les méthodes que l'on appelle depuis les components pour interagir avec les données du store
  actions: {

    loadProducts({commit}) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        //console.log(response.data);
        commit('loadProducts', response.data);
      })
    },

    addToBag({commit}, product) {
      commit('addToBag', product);
    }

  },
  modules: {
  }
})