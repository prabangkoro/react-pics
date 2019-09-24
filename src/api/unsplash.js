import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 6d9e4b7934cb343c97034eee5eab067e6a3af6f9ea27131e95c454b803dc386e'
  }
})