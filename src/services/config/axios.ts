import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'localhost:3000',
  headers: { contentType: 'application/json' },
  timeout: 1000,
})
