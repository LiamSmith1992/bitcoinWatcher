<template>
  <div class="component">
    <h1>this is coin tracker</h1>

  </div>
</template>


<script lang="ts">
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
export default {
  setup() {
    onMounted(() => {
      grabPrices("BTC-USD");

    })

    const props = defineProps<{
      pair?: string;
      background: string;
    }>();
    const url = "https://api.coinbase.com/v2/prices";
    const btcPair = 'BTC-USD';
    const ethPair = 'ETH-USD';
    const btc = reactive({} as moneyFormat)
    const eth = reactive({} as moneyFormat)

    interface moneyFormat {
      formatted: String;
      money: number;
      name: string;
    }

    async function grabPrices(pair: string): Promise<moneyFormat> {

      const btcInfo = await fetch(url + '/' + pair + '/spot')
      const money = await btcInfo.json();

      return {

        money: parseFloat(money.data.amount),
        formatted: new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD"
        }).format(money.data.amount),
        name: pair.split("-")[0],

      };

    }

    return {
    }
  }
};
</script>


<style lang="scss" scoped></style>