import React, { Component } from 'react';
import './App.css';
import Init from './Init';
import Write from './Write';
import Read from './Read';

class Body extends Component {
  constructor() {
    super()
  }

  renderModeComponent() {
    if (this.props.mode === 'init') {
      return < Init changeMode={this.props.changeMode}/>
    } else if (this.props.mode === 'write') {
      return < Write />
    } else {
      return < Read />
    }
  }

  render() {
    return (
      <div className="row header">
        {this.renderModeComponent()}
      </div>
    );
  }
}

export default Body;
