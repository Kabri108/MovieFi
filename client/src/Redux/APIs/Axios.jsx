import axios from 'axios'

const Axios=axios.create({
    // baseURL:'http://localhost:5000/api',
    baseURL:'https://movie-fi.vercel.app'
})

export default Axios;