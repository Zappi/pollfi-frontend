import PollService from '../services/polls'

const initialState = {
    polls: [],
    fireRedirect: false,
    pollId: ''
}

const pollReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POLLS':
            return Object.assign({}, state, {
                polls: action.data
            })

        case 'REMOVE_POLL':
            return Object.assign({}, state, {
                polls: state.polls.filter(poll => poll.id !== action.pollId)
            })
        
        case 'HANDLE_CLICK':
            return Object.assign({}, state, {
                fireRedirect: action.data.redirect,
                pollId: action.data.pollId
            })
        
        case 'SET_FIREREDIRECT_TO_FALSE':
            return Object.assign({}, state, {
                fireRedirect: false
            })

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

/*Removes the poll from poll listing and from the user polls array */
export const removePoll = (poll) => {
    return async (dispatch) => {
        await PollService.remove(poll.id, poll.user)
        dispatch({
            type: 'REMOVE_POLL',
            pollId: poll.id
        })
    }
}

/*Handles the user click and sets redirect state back to false */
export const handlePollClick = (pollId) => {
    return async (dispatch) => {
        dispatch({
            type: 'HANDLE_CLICK',
            data: {
                redirect: true,
                pollId: pollId
            }
        })
        setTimeout(() => {
            dispatch({
                type:'SET_FIREREDIRECT_TO_FALSE'
            })
        },1000)
    }

}

export default pollReducer