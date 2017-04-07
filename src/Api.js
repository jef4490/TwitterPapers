import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class Api extends Component {
  constructor() {
    super()

  }

  static retrieveData(resource){
    axios.get(`http://localhost:4000/${resource}.json`)
      .then((data) => {

      })
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}
export default Api;
