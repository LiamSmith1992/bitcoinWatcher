<template>
  <div class="component">
    <h1>this is coin tracker</h1>
    <h5>smaller</h5>
  </div>
</template>


<script >
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
export default {
  setup() {
    onMounted(() => {
      getBitcoinPrice();

    })

    // const fetch = require('node-fetch');

    // Function to fetch current price of Bitcoin
    const getBitcoinPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const price = data.bitcoin.usd;
        console.log(`Current Bitcoin price: $${price}`);
      } catch (error) {
        console.log('Error fetching Bitcoin price', error);
      }
    }

    // Call the function to fetch current Bitcoin price
    getBitcoinPrice();


    return {


    };




  }
};
</script>


<style lang="scss" scoped></style>