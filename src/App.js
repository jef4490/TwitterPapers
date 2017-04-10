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
    this.changeMode = this.changeMode.bind(this)
  }

  changeMode(modeName) {
    this.setState({
      mode: modeName
    })

  }

  render() {
    return (
      <div className="App container-fluid-page-wrapper">
          < Header changeMode={this.changeMode}/>
          < Body mode={this.state.mode} changeMode={this.changeMode}/>
      </div>
    );
  }
}

export default App;
