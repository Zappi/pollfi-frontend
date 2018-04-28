import axios from 'axios'
const baseUrl='/api/authenticate'

const login = async (credientals) => {
    const res = await axios.post(baseUrl, credientals)
    return res.data
}

export default {login}