import fetchData from '../../utils/fetchData'
import { ROCKETS_DATA_ENDPOINT } from '../../utils/apiConfig'

export const GET_ROCKET_ITEM_DATA_START = 'GET_ROCKET_ITEM_DATA_START'
export const GET_ROCKET_ITEM_DATA_SUCCESS = 'GET_ROCKET_ITEM_DATA_SUCCESS'
export const GET_ROCKET_ITEM_DATA_ERROR = 'GET_ROCKET_ITEM_DATA_ERROR'

export const getRocketItemStart = () => {
  return {
    type: GET_ROCKET_ITEM_DATA_START,
  }
}

export const getRocketItemSuccess = (payload) => {
  return {
    type: GET_ROCKET_ITEM_DATA_SUCCESS,
    payload,
  }
}

export const getRocketItemError = (payload) => {
  return {
    type: GET_ROCKET_ITEM_DATA_ERROR,
    payload,
  }
}

export function getRocketItemData(rocket_id) {
  return async (dispatch) => {
    dispatch(getRocketItemStart())

    try {
      const response = await fetchData(`${ROCKETS_DATA_ENDPOINT}/${rocket_id}`)
      dispatch(getRocketItemSuccess(response.data))
    } catch (error) {
      dispatch(getRocketItemError(error.statusText))
    }
  }
}
