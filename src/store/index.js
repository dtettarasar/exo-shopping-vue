import { createStore } from 'vuex'
import axios from 'axios'; 

export default createStore({
  // données utilisées par les composants
  state: {
    products : []
  },
  // Fait l'intermédiaire entre actions et state
  mutations: {
    
    loadProducts(state, products) {
      console.log(products);
      state.products = products;
    }

  },
  // actions sert eux appels API
  actions: {

    loadProducts({commit}) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        //console.log(response.data);
        commit('loadProducts', response.data);
      })
    }

  },
  modules: {
  }
})