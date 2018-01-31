import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PollFrom from './components/PollForm'
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
        <PollFrom />
      </div>
    );
  }
}

export default App;
