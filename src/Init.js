import React, { Component } from 'react';
import './App.css';

class Read extends Component {
  constructor() {
    super()

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
