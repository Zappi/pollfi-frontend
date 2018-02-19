import axios from 'axios'
const baseUrl = 'http://localhost:3001/polls'
//'http://fathomless-sands-25342.herokuapp.com/api/polls'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newPoll) => {
    return await axios.post(baseUrl, newPoll)
}

export default {getAll, create}