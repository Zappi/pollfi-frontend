import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PollFrom from './components/PollForm'
import Polls from './components/Polls'
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import pollService from './services/polls'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.state)
    return (
      <div className='container'>
        <NavigationBar />
        <Router>
          <div>
            <div>
              <Link to='/'> Home </Link>
              <Link to='/polls'> Polls </Link>
              <Link to='/polls/newpoll'> Create a poll </Link>
              <Link to='/login'> Log in </Link>
            </div>

            <Route exact path='/' render={() => 'Home'} />
            <Route exact path='/polls' render={() => <Polls />} />
            <Route path='/polls/newpoll' render={() => <PollFrom />} />
            <Route path='/login' render={() => <LoginForm />} />

          </div>
        </Router>
      </div>

    );
  }
}

export default App;
