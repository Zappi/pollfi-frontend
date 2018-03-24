const getToken = () => {
    return JSON.parse(window.localStorage.getItem('loggedUser')).token
}

export default {getToken}