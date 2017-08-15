import { combineReducers } from 'redux'
import foods from './foods'

const foodApp = combineReducers({
  foods,
})

export default foodApp