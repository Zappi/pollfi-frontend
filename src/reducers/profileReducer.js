import ProfileService from '../services/profile'

const ProfileReducer = (state = [], action) => {
    switch (action.type) {

        case 'GET_PROFILE':
            return action.data

        default:
            return state
    }
}

export const fetchProfile = () => {
    return async (dispatch) => {
        const user = await ProfileService.getProfile()
        dispatch({
            type: 'GET_PROFILE',
            data: user.payload
        })
    }
}

export default ProfileReducer