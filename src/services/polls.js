import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/polls'

let token  = null

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getSinglePoll = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const setToken = (newToken) => {
    token = newToken
}

const create = async (newPoll) => {

    const config = {
        headers: {
            'Authorization': token
        }
    }

    const res = await axios.post(baseUrl, newPoll, config)

    return res.data
}

const remove = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, getSinglePoll, create, remove, setToken}