import React, { Component } from 'react'
import PollFrom from './PollForm'
import Polls from './Polls'
import Profile from './Profile'
import LoginForm from './LoginForm'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Container extends Component {
    constructor() {
        super()
    }

    render() {
        return (
        
            <div>
                <Route exact path='/' render={() => 'Home'} />
                <Route exact path='/polls' render={() => <Polls />} />
                <Route path='/polls/newpoll' render={() => <PollFrom />} />

                <Route path='/login' render={() => <LoginForm handleSubmit={this.props.handleLogin} />} />

                <Route path='/profile' render={() => <Profile />} />
            </div>
        
        )
    }
}

export default Container