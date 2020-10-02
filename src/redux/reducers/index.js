import { combineReducers } from 'redux'
import rocketsReducer from './rocketsReducer'
import rocketItemReducer from './rocketItemReducer'

export const rootReducer = combineReducers({
  rocketsData: rocketsReducer,
  rocketItemData: rocketItemReducer,
})
