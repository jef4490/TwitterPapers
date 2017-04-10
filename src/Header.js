import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.changeMode('init')
  }

  render() {
    return (
      <div className="row header" onClick={this.handleClick}>
        <h1 className="header-text">Tweet Papers</h1>
        <h4 className="header-text">When you cant fit the profound in 140 characters.</h4>
      </div>
    );
  }
}

export default Header;
