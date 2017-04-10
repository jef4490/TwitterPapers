import React, { Component } from 'react';
import Input from './Write/Input'
import Output from './Write/Output'
import './App.css';

class Write extends Component {
  constructor() {
    super()
    this.state = {
      essayText: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(essay){
    this.setState({
      essayText: essay
    })
  }

  render() {
    return(
      <div className="write">
        <Input onSubmit={this.onSubmit}/>
        <Output essay={this.state.essayText}/>
      </div>
    )
  }
}

export default Write;
