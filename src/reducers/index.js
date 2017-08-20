import { combineReducers } from 'redux'
import food from './food'

const foodApp = combineReducers({
  food,
})

export default foodApp