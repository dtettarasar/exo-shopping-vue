<template>
    <div class="basket">

      <template v-if="this.productsInBag.length >= 1">
        
        <div class="items">
    
          <div v-for="(product, index) in this.productsInBag" class="item" v-bind:key="index">
            <div v-on:click="removeFromBag(product.id)" class="remove">Remove item</div>
            <div class="photo"><img :src="product.image" alt=""></div>
            <div v-html="product.title" class="description"></div>
            <div class="price">
              <span class="quantity-area">
                <button v-on:click="product.quantity--" :disabled="product.quantity<=1">-</button>
                <span class="quantity">{{product.quantity}}</span>
                <button v-on:click="product.quantity++" >+</button>
              </span>
              <span class="amount">US$ <span v-html="(product.price * product.quantity).toFixed(2)"></span></span>
            </div>
          </div>
          <div class="grand-total"> Grand Total: US$ 22.30</div>
    
        </div>
      </template>

      <template v-else>
        <h4>Empty cart</h4>
      </template>
      
    </div>
  </template>
  
  <script>

  import { mapState } from 'vuex';
  
  export default {
    name: 'ShoppingBasket',

    computed: mapState([
      'productsInBag'
    ]),
  
    methods: {
      removeFromBag(productId) {
        this.$store.dispatch('removeFromBag', productId);
      }
    },
   
  }
  </script>
  
  <style lang="scss">
  
  .basket {
    padding: 60px 0;  
    .items {
      max-width: 800px;
      margin: auto;
      .item {
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
        border-bottom: 1px solid lightgrey;
        position: relative;
  
        .remove {
          position: absolute;
          top: 8px;
          right: 0;
          font-size: 11px;
          text-decoration: underline;
          cursor: pointer;
        }
  
        .quantity-area {
          margin: 8px auto;
          height: 14px;
  
          button {
            width: 16px;
            height: 16px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
  
          .quantity {
  
              margin: 0 4px;
          }
        }
  
        .photo {
          img {
            max-width: 80px;
          }
        }
  
        .description {
          padding-left: 30px;
          box-sizing: border-box;
          max-width: 50%;
  
        }
  
        .price {
          .amount {
            font-size: 16px;
            margin-left: 8px;
            vertical-align: middle;
  
          }
        }
      }
        .grand-total {
            font-size: 24px;
            font-weight: bold;
            text-align: right;
            margin-top: 8px;
        }
  
    }
  
  }
  
  </style>