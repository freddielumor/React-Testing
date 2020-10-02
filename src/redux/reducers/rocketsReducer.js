import {
  GET_ROCKETS_DATA_START,
  GET_ROCKETS_DATA_SUCCESS,
  GET_ROCKETS_DATA_ERROR,
} from '../actions/rocketsActions'

const initialState = {
  rockets: [],
  stage: 'pending',
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS_DATA_START:
      return {
        ...state,
      }
    case GET_ROCKETS_DATA_SUCCESS:
      return {
        ...state,
        stage: 'success',
        rockets: action.payload,
      }
    case GET_ROCKETS_DATA_ERROR:
      return {
        ...state,
        stage: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}
