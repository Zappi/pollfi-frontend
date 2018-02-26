import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/polls'
//'http://fathomless-sands-25342.herokuapp.com/api/polls'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getSinglePoll = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const create = async (newPoll) => {
    return await axios.post(baseUrl, newPoll)
}

const remove = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, getSinglePoll, create, remove}