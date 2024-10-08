import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY.trim()

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
})

export default axiosInstance