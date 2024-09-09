import axios from 'axios'

const Axios=axios.create({
    baseURL:'https://movie-fi.vercel.app/'||'http://localhost:5000/api',
})

export default Axios;