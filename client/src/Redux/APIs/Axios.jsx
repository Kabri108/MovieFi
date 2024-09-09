import axios from 'axios'

const Axios=axios.create({
    baseURL:'https://api.movie-fi.com/api'||'http://localhost:5000/api',
})

export default Axios;