import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="row header">
        <h1>Tweet Papers</h1>
        <h4>When you cant fit the profound in 140 characters.</h4>
      </div>
    );
  }
}

export default Header;
