import axios from 'axios'

const Axios=axios.create({
    // baseURL:'http://localhost:5000/api',
    baseURL:'https://movie-fi-dun.vercel.app/api'
})

export default Axios;