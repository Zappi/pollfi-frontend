import PollService from '../services/polls'

const pollElementReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_SINGLE_POLL':
            console.log(action.data)
            return action.data

        default: 
            return state
    }
}

export const fetchSinglePoll = (pollId) => {
    console.log('what the fuck')
    return async (dispatch) => {
        const poll = await PollService.getSinglePoll(pollId)
        console.log(poll)
        dispatch({
            type:'GET_SINGLE_POLL',
            data: poll
        })
    }
}

export default pollElementReducer