import React, { Component } from 'react';
import Input from './Read/Input';
import './App.css';


class Read extends Component {
  constructor() {
    super()

    this.state = {
      tweets: []
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  extractID(URL){
    return URL.replace(/.*status\//g,"")
  }

  onSubmit(tweetURL) {
    this.setState({
      timeline: this.retrieveTweets(this.extractID(tweetURL))
    })
  }

  retrieveTweets(tweetURL){
    debugger
  }

  render() {
    return(
      <div className="read">
        <Input onSubmit={this.onSubmit}/>
      </div>
    )
  }
}
export default Read;
