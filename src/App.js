import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Body from './Body';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: 'init'
    }
  }

  render() {
    return (
      <div className="App">
            < Header />
          < Body mode={this.state.mode} />
      </div>
    );
  }
}

export default App;
