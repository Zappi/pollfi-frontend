import axios from 'axios'

const baseUrl = 'http://fathomless-sands-25342.herokuapp.com/api/users'

const register = async (newUser) => {
    return await axios.post(baseUrl, newUser)
}

export default { register }