<template>
  <div class="component row">
    <h1 class="text-info text-center fw-bold">this is coin tracker</h1>

  </div>
  <br>
  <br>
  <div class="">
    <h3 class="ms-3">BTC Current Price</h3>
    <div class="col-3 d-flex justify-content-center">
      <h1 class="text-primary border text-center ">${{ btc }}</h1>
    </div>

  </div>
</template>


<script >
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
// import { get } from "http";
export default {
  setup() {
    onMounted(() => {
      getBitcoinPrice();
      getTrendingCoins()
    })

    // const fetch = require('node-fetch');

    // Function to fetch current price of Bitcoin
    async function getBitcoinPrice() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const price = data.bitcoin.usd;
        console.log(`Current Bitcoin price: $${price}`, price, data);
        AppState.btcPrice = price
      } catch (error) {
        console.log('Error fetching Bitcoin price', error);
      }
    }


    async function getTrendingCoins() {
      const res = await fetch('https://api.coingecko.com/api/v3/exchanges/binance/volume_chart?days=1')

      const data = await res.json()
      logger.log(data)
    }

    return {
      btc: computed(() => AppState.btcPrice)

    };




  }
};
</script>


<style lang="scss" scoped>
.border {
  border: 9px solid;
}
</style>