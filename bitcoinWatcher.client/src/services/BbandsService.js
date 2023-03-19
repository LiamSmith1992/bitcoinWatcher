import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { coinGecoApi } from "./AxiosService"



class BbandsService {


  // async getBbands() {
  // const res = await coinGecoApi.get()
  // logger.log(res.data)
  // AppState.bbands = res.data



  async getBbands(symbol = 'IBM', interval = '15min', timePeriod = 60, seriesType = '15', nbdevup = 2, nbdevdn = 2, matype = 0, datatype = 'json') {
    try {
      const apiUrl = `https://www.alphavantage.co/query?function=BBANDS&symbol=${symbol}&interval=${interval}&time_period=${timePeriod}&series_type=${seriesType}&nbdevup=${nbdevup}&nbdevdn=${nbdevdn}&matype=${matype}&datatype=${datatype}&apikey=SIJWLKBBY0FFYBHM`;

      let response = await fetch(apiUrl);
      let data = await response.json();
      logger.log(data)
      AppState.bbands = data.data
    } catch (error) {
      console.log(error);
    }
  }




}

export const bbandsService = new BbandsService()