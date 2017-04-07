import React, { Component } from 'react';
import './App.css';

class Body extends Component {
  constructor(props) {
    super(props)

  }

  renderModeCompondet() {
    if (this.props.mode === 'init') {
      return < Init />
    } else if (this.props.mode === 'write') {
      return < Write />
    } else {
      return < Read />
    }
  }

  render() {
    return (
      <div className="row header">

      </div>
    );
  }
}

export default Body;
