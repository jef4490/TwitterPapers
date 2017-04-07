import React, { Component } from 'react';
import Input from './Read/Input';
import axios from 'axios'
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
  this.retrieveData('tweet/' + tweetURL)
  }

  retrieveData(resource){
    axios.get(`http://localhost:4000/${resource}.json`)
      .then(({data}) => {
        this.setState({
          tweet: data
        })
      })
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
