import axios from 'axios'
const baseUrl='http://fathomless-sands-25342.herokuapp.com/api/authenticate'

const login = async (credientals) => {
    console.log(credientals)
    const res = await axios.post(baseUrl, credientals)
    console.log(res.data)
    return res.data
}

export default {login}