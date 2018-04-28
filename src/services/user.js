import axios from 'axios'

const baseUrl = '/api/users'

const register = async (newUser) => {
    return await axios.post(baseUrl, newUser)
}

export default { register }