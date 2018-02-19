import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PollFrom from './components/PollForm'
import Polls from './components/Polls'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import pollService from './services/polls'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className='container'>
        <NavigationBar />
        <Router>
          <div>
            <div>
              <Link to='/'> Home </Link>
              <Link to='/polls'> Polls </Link>
              <Link to='/polls/newpoll'> Create a poll </Link>
            </div>

            <Route exact path='/' render={() => 'Home'} />
            <Route exact path='/polls' render={() => <Polls/>} />
            <Route path='/polls/newpoll' render={() => <PollFrom />} />
            
          </div>
        </Router>
      </div>

        );
  }
}

export default App;
