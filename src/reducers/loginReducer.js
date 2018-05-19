const initialState = {
    fireRedirect: false,
    failedLoginWarning: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'FIRE_REDIRECT':
            return Object.assign({}, state, {
                fireRedirect: action.data
            })
        
        case 'FIRE_REDIRECT_TO_FALSE':
            return Object.assign({}, state, {
                fireRedirect: action.data
            })    

        case 'HANDLE_DIALOG_WARNING':
            return Object.assign({}, state, {
                failedLoginWarning: action.data
            })

        default:
            return state
    }
}


export const fireRedirect = () => {
    return async (dispatch) => {
        dispatch({
            type: 'FIRE_REDIRECT',
            data: true
        })
        setTimeout(() => {
                dispatch({
                    type:'FIRE_REDIRECT_TO_FALSE',
                    data: false
                },1000)
        })
    }
}

export const showDialogWarning = () => {
    return async (dispatch) => {
        dispatch({
            type: 'HANDLE_DIALOG_WARNING',
            data: true
        })
    }
}

export const hideDialogWarning = () => {
    return async (dispatch) => {
        dispatch({
            type: 'HANDLE_DIALOG_WARNING',
            data: false
        })
    }
}




export default loginReducer
