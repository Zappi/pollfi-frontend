import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PollFrom from './components/PollForm'
import Polls from './components/Polls'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import Container from './components/Container'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      fireRedirect: false
    }
    
  }

  componentDidMount() {
    if (window.localStorage.getItem('loggedUser') != null) {
      this.setState({
        loggedIn: true
      })
    } else {
      this.setState({
        loggedIn: false
      })
    }

  }

  handleLogin = () => {
    this.setState({
      loggedIn: true
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      fireRedirect: true
    })
    window.localStorage.clear()

    {
      this.state.fireRedirect && (
        <Redirect to='/' />
      )
    }

  }


  render() {

    return (
      <div>
        <Router>
          <div>
            <NavigationBar isLoggedIn={this.state.loggedIn} logout={this.logout}/>
            <Container handleLogin={this.handleLogin} />
          </div>
        </Router>

      </div>

    );
  }
}

export default App;
