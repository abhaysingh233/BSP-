import axios from 'axios'
export default axios.create({ baseURL:'http://10.145.8.23:8008', timeout:15000 })