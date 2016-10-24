import apisauce from 'apisauce'
import { AsyncStorage } from 'react-native'

const token = await AsyncStorage.getItem('token')

const api = apisauce.create({
  baseURL: __DEV__ ? 'localhost:5000' : '',
  headers: {
    'Cache-Control': 'no-cache',
    'token': token
  },
  timeout: 10000
})

if (__DEV__ && console.tron) {
  console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
  api.addMonitor(console.tron.apisauce)
}



export const authentication = (user, password) => api.post('weather', {data: {user, password} })
export const setup = (user) => api.get('weather', {data: user})

export default {
  authentication,
  setup
}
