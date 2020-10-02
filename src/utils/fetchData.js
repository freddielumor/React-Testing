import axios from 'axios'

// Data Fetching Utility
export default async function fetchData(url) {
  try {
    const response = await axios.get(url)
    return response
  } catch (error) {
    return error
  }
}
