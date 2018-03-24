const getToken = () => {
    let user = JSON.parse(window.localStorage.getItem('loggedUser'))

    if(user != null) {
        return user.token
    }
    
    return null
}

export default {getToken}