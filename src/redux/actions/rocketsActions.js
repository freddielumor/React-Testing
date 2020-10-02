import fetchData from '../../utils/fetchData'
import { ROCKETS_DATA_ENDPOINT } from '../../utils/apiConfig'

export const GET_ROCKETS_DATA_START = 'GET_ROCKETS_DATA_START'
export const GET_ROCKETS_DATA_SUCCESS = 'GET_ROCKETS_DATA_SUCCESS'
export const GET_ROCKETS_DATA_ERROR = 'GET_ROCKETS_DATA_ERROR'

export const getRocketsDataStart = () => {
  return {
    type: GET_ROCKETS_DATA_START,
  }
}

export const getRocketsDataSuccess = (payload) => {
  return {
    type: GET_ROCKETS_DATA_SUCCESS,
    payload,
  }
}

export const getRocketsDataError = (payload) => {
  return {
    type: GET_ROCKETS_DATA_ERROR,
    payload,
  }
}

export function getRocketsData() {
  return async (dispatch) => {
    dispatch(getRocketsDataStart())

    try {
      const response = await fetchData(ROCKETS_DATA_ENDPOINT)
      dispatch(getRocketsDataSuccess(response.data))
    } catch (error) {
      dispatch(getRocketsDataError(error.statusText))
    }
  }
}
