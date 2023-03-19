<template>
  <div>
    {{ bbands }}
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
