import React, { Component } from 'react';
import './App.css';

class Init extends Component {
  constructor() {
    super()

  this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let mode = event.target.closest("div").dataset.id
    this.props.changeMode(mode)
  }

  render() {
    return (
      <div className='init'>
      <div className="col-xs-12 button row-fluid">
        <div className="read bordered hover row-fluid" data-id="read" onClick={this.handleClick}>
          <h1 className='off'>Read a Twitter Essay!</h1>
        </div>
        <div className="write bordered hover row-fluid" data-id="write" onClick={this.handleClick}>
          <h1 className='off'>Write a Twitter Essay!</h1>
        </div>
      </div>
      </div>
    );
  }
}
export default Init;
