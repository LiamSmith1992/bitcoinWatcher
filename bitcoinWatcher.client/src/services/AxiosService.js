import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


// apiKey = SIJWLKBBY0FFYBHM

export const coinGecoApi = Axios.create({
  baseURL: 'https://www.alphavantage.co/query?function=BBANDS&symbol=IBM&interval=15min&time_period=50&series_type=close&nbdevup=3&nbdevdn=3',
  timeout: 8000,
  json: true,
  params: {
    apiKey: 'SIJWLKBBY0FFYBHM'
  }
})