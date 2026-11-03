import axios from "axios";

export const API = axios.create({
  'baseURL': 'https://dummyjson.com/',
  'headers': {
    'Content-Type': 'application/json'
  }
})

API.interceptors.request.use(
  function (config) {
    config.headers.Authorization = localStorage.getItem('authToken')
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)