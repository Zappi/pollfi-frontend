import axios from 'axios'
import TokenService from './token'

const baseUrl = '/api/polls'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const getSinglePoll = async (id) => {
    const res = await axios.get(`${baseUrl}/poll/${id}`)
    return res.data
}

const getPollFormAuth = async () => {

    const config = {
        headers: {
            'Authorization': TokenService.getToken()
        }
    }

    const response = await axios.get(`${baseUrl}/newpoll`, config)
    console.log(response)
    return response.data
}


const create = async (newPoll) => {
    const config = {
        headers: {
            'Authorization': TokenService.getToken()
        }
    }

    const res = await axios.post(baseUrl, newPoll, config)

    return res.data
}

const vote = async (votedPoll) => {
    const config = {
        headers: {
            'Authorization': TokenService.getToken()
        }
    }

    const res = await axios.put(`${baseUrl}/poll/${votedPoll._id}`, votedPoll, config)
    return res.data
}

const remove = async (pollId, pollUser) => {
    const config = {
        headers: {
            'Authorization': TokenService.getToken(),
            'UserID': pollUser._id
        }
    }
    return await axios.delete(`${baseUrl}/poll/${pollId}`, config)
}

export default { getAll, getSinglePoll, getPollFormAuth, create, vote, remove }