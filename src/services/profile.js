import axios from 'axios'
import tokenService from './token'
const baseUrl = '/api/authenticate'

const getProfile = async () => {

    const config = {
        headers: {
            'Authorization': tokenService.getToken()
        }
    }
    const res = await axios.get(`${baseUrl}/profile`, config)
    return res.data

}

const getUserFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem('loggedUser'))
}


export default {getProfile, getUserFromLocalStorage}