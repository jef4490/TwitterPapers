import React, { Component } from 'react';
import Input from './Read/Input';
import Api from './Api';
import './App.css';


class Read extends Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }

  extractID(URL){
    return URL.replace(/.*status\//g,"")
  }

  onSubmit(tweetURL) {
    this.setState({
      tweet: this.retrieveTweet(this.extractID(tweetURL))
    })
  }

  retrieveTweet(tweetURL){
    return Api.retrieveData('tweet/' + tweetURL)
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
