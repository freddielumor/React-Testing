import {
  GET_ROCKET_ITEM_DATA_START,
  GET_ROCKET_ITEM_DATA_SUCCESS,
  GET_ROCKET_ITEM_DATA_ERROR,
} from '../actions/rocketItemActions'

const initialState = {
  rocket: [],
  stage: 'pending',
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROCKET_ITEM_DATA_START:
      return {
        ...state,
      }
    case GET_ROCKET_ITEM_DATA_SUCCESS:
      return {
        ...state,
        stage: 'success',
        rocket: action.payload,
      }
    case GET_ROCKET_ITEM_DATA_ERROR:
      return {
        ...state,
        stage: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}
