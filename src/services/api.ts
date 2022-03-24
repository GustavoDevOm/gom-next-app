import axios from 'axios'

const api = axios.create({
  headers: {
    baseURL: '',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export { api }
