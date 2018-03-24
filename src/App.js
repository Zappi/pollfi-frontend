import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PollFrom from './components/PollForm'
import Polls from './components/Polls'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import './App.css';

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

  handeLogin = () => {
    this.setState({
      loggedIn: true
    })
  }

  logOut = () => {
    this.setState({
      loggedIn: false,
      fireRedirect: true
    })
    window.localStorage.clear()
   
    {this.state.fireRedirect && (
      <Redirect to='/'/>
    )}

  }


  render() {

    const isLoggedIn = this.state.loggedIn

    return (
      <div className="container">
        <div>
          <NavigationBar />
          <Router>
         
            <div className="container">
              <div>
                <Link to='/'> Home </Link>
                <Link to='/polls'> Polls </Link>
                <Link to='/polls/newpoll'> Create a poll </Link>

                {!isLoggedIn ? (
                  <Link to='/login'> Log in </Link>
                ) : (
                    <div>
                      <Link to='/profile'> Profile </Link>
                      <Link to='/logout' onClick={this.logOut}> Log out </Link>
                    </div>
                  )}

              </div>

              <Route exact path='/' render={() => 'Home'} />
              <Route exact path='/polls' render={() => <Polls />} />
              <Route path='/polls/newpoll' render={() => <PollFrom />} />
              <Route path='/login' render={() => <LoginForm handleSubmit={this.handeLogin}/>} />

            
              <Route path='/profile' render={() => <Profile />} />
 
            </div>
              
    
          </Router>



        </div>
      </div>

    );
  }
}

export default App;
