import axios from 'axios'
const baseUrl='http://fathomless-sands-25342.herokuapp.com/api/authenticate'

const login = async (credientals) => {
    const res = await axios.post(baseUrl, credientals)
    return res.data
}

export default {login}