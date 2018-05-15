import React from 'react'
import PollFrom from './PollForm'
import Polls from './Polls'
import Profile from './Profile'
import LoginForm from './LoginForm'
import PollElement from './PollElement'
import RegisterForm from './RegisterForm'
import HomePage from './HomePage'
import NotFound from './NotFound'
import ProfileService from '../services/profile'

import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const Container = (props) => {

    /* Check if the user is logged in */
    const authenticated = ProfileService.getUserFromLocalStorage()

    /*If the user is authenticated use these routes */
    if (authenticated != null) {

        return (

            <div className='container-user-authenticated'>
                <Route exact path='/' render={() => <HomePage />} />
                <Route exact path='/polls' render={() => <Polls />} />
                <Route exact path='/polls/poll/:id' render={({ match }) => <PollElement pollId={(match.params.id)} />} />

                <Route path='/login' render={() => <LoginForm handleSubmit={props.handleLogin} />} />
                <Route path='/register' render={() => <RegisterForm handleSubmit={props.handleLogin} />} />

                <Route path='/profile' render={() => <Profile />} />
                <Route exact path='/polls/newpoll' render={() => <PollFrom />} />

            </div>

        )
    } else {
        /*If the user is not authenticated use these routes */
        return (
            <div className='container-user-not-authenticated'>
                <Route exact path='/' render={() => <HomePage />} />
                <Route exact path='/polls' render={() => <Polls />} />
                <Route exact path='/polls/poll/:id' render={({ match }) => <PollElement pollId={(match.params.id)} />} />

                <Route exact path='/login' render={() => <LoginForm handleSubmit={props.handleLogin} />} />
                <Route exact path='/register' render={() => <RegisterForm handleSubmit={props.handleLogin} />} />

                 <Route exact path='/profile' render={() => <NotFound />} />
                <Route exact path='/polls/newpoll' render={() => <NotFound />} />
            </div>
        )
    }

}

Container.propTypes = {
    handleLogin: PropTypes.func.isRequired
}

export default Container