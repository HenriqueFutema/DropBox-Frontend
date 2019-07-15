import axios from 'axios'

const api = axios.create({
    baseURL: 'https://futema-backend.herokuapp.com'
})

export default api