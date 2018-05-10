import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import Container from './components/Container'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        <Redirect to='/' />)
    }

  }


  render() {

    return (
      <MuiThemeProvider>
        <div>
          <Router >
            <div className='nav-bar-background'>
              <NavigationBar isLoggedIn={this.state.loggedIn} logout={this.logout} />
              <div className='container-fluid'>
                <Container handleLogin={this.handleLogin} />
              </div>
            </div>
          </Router>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
