import React from 'react'
import PollFrom from './PollForm'
import Polls from './Polls'
import Profile from './Profile'
import LoginForm from './LoginForm'
import PollElement from './PollElement'
import { Route } from 'react-router-dom'

const Container = (props) => {

    return (

        <div>
            <Route exact path='/' render={() => 'Home'} />
            <Route exact path='/polls' render={() => <Polls />} />
            <Route exact path='/polls/newpoll' render={() => <PollFrom />} />
            <Route exact path='/polls/poll/:id' render={({ match }) => <PollElement pollId={(match.params.id)} />} />

            <Route path='/login' render={() => <LoginForm handleSubmit={props.handleLogin} />} />

            <Route path='/profile' render={() => <Profile />} />
        </div>

    )

}

export default Container