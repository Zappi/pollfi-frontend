import PollService from '../services/polls'

const pollReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POLLS':
            return action.data

        case 'REMOVE_POLL':
            return state.filter(poll => poll.id !== action.pollId)

        default:
            return state
    }
}


export const fetchPolls = () => {
    return async (dispatch) => {
        const polls = await PollService.getAll()
        dispatch({
            type: 'FETCH_POLLS',
            data: polls
        })
    }
}

export const removePoll = (poll) => {
    return async (dispatch) => {
        await PollService.remove(poll.id, poll.user)
        dispatch({
            type: 'REMOVE_POLL',
            pollId: poll.id
        })
    }
}

export default pollReducer