import PollService from '../services/polls'

const initialState = {
    dataFetched: false,
    snackbarMessage: '',
    openSnackbar: false,
    voted: false,
    poll: {}
}

const pollElementReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_SINGLE_POLL':
            return Object.assign({}, state, {
                poll: action.data.poll,
                dataFetched: action.data.dataFetched
            })


        case 'SET_SNACKBAR_MESSAGE':
            return Object.assign({}, state, {
                snackbarMessage: action.data.message,
                openSnackbar: action.data.openSnackbar
            })
        
        case 'CLOSE_SNACKBAR': 
            return Object.assign({}, state, {
                openSnackbar: false,
                snackbarMessage: ''
            })
        
        case 'SET_VOTED_TRUE':
        return Object.assign({}, state, {
           voted: action.data
        })

        case 'SET_VOTED_FALSE':
        return Object.assign({}, state, {
            voted: action.data
         })

    
        default:
            return state
    }
}

export const fetchSinglePoll = (pollId) => {
    return async (dispatch) => {
        const poll = await PollService.getSinglePoll(pollId)
        dispatch({
            type: 'GET_SINGLE_POLL',
            data: {
                poll,
                dataFetched: true
            }
        })
    }
}

export const setSnackbarMessage = (message) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_SNACKBAR_MESSAGE',
            data: {
                message, 
                openSnackbar: true
            }
        })
        
        setTimeout(() => {
            dispatch({
                type: 'CLOSE_SNACKBAR'
            })
        }, 5000)
    }
}

export const setPollVoted = () => {
    return async(dispatch) => {
        dispatch({
            type: 'SET_VOTED_TRUE',
            data: true
        })

        setTimeout(() => {
            dispatch({
                type: 'SET_VOTED_FALSE',
                data: false
            })
        }, 5000)
    }
}


export default pollElementReducer