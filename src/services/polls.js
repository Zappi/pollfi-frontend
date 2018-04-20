import axios from 'axios'
import tokenService from './token'

const baseUrl = 'http://fathomless-sands-25342.herokuapp.com/api/polls'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getSinglePoll = async (id) => {
    const response = await axios.get(`${baseUrl}/poll/${id}`)
    return response.data
}

const getPollFormAuth = async() => {

    const config = {
        headers: {
            'Authorization': tokenService.getToken()
        }
    }

    const response = await axios.get(`${baseUrl}/newpoll`, config)
    console.log(response)
    return response.data
}


const create = async (newPoll) => {
    console.log(tokenService.getToken())
    const config = {
        headers: {
            'Authorization': tokenService.getToken()
        }
    }

    const res = await axios.post(baseUrl, newPoll, config)
 
    return res.data
}

const remove = async (id) => {
    return await axios.delete(`${baseUrl}/poll/${id}`)
}

export default {getAll, getSinglePoll, getPollFormAuth, create, remove}