<template>
  <div>
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE"
          rel="noopener" target="_blank"><span class="blue-text">BTCUSDT analysis</span></a> by TradingView</div>
      <script type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
        {
    "interval": "1m",
    "width": 425,
    "isTransparent": false,
    "height": 450,
    "symbol": "BINANCE:BTCUSDT",
    "showIntervalTabs": true,
    "locale": "en",
    "colorTheme": "dark"
  }
      </script>
    </div>
    <!-- TradingView Widget END -->
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger";
import { bbandsService } from "../services/BbandsService"
import { AppState } from "../AppState"

export default {
  setup() {

    onMounted(() => {
      getBbands()
    })

    async function getBbands() {
      try {
        await bbandsService.getBbands()

      } catch (error) {
        logger.error(error.message)
      }
    }




    return {
      bbands: computed(() => AppState.bbands)

    }
  }
}
</script>

<style scoped lang="scss"></style>
