import axios from 'axios'
import tokenService from './token'
const baseUrl = 'http://localhost:3001/api/authenticate'

const getProfile = async () => {

    const config = {
        headers: {
            'Authorization': tokenService.getToken()
        }
    }
    const res = await axios.get(`${baseUrl}/profile`, config)
    console.log(res.data)
    return res.data

}


export default {getProfile}