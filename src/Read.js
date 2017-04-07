import React, { Component } from 'react';
import Input from './Read/Input';
// import Output from './Read/Output';
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
    axios.get(`http://localhost:4000/tweet/${tweetURL}.json`)
      .then(({data}) => {
        this.setState({
          tweet: data
        })
      }).then(() => {
        this.sanitizeTweet()
      }).then(() => {
        this.retrieveTimeline()
      })
  }

  sanitizeTweet(){
    this.tweetNumber()
  }
// https://twitter.com/HeerJeet/status/529767402775781376
  retrieveTimeline(){
      axios.get(`http://localhost:4000/tweet/${this.state.tweet.id_str}/${this.state.tweet.user.id}/${parseInt(this.state.tweetCount)*2}.json`)
      .then(({data}) => {
        this.setState({
          tweetTimeline: data
        })
      })
  }

 componentWillUpdate(){
  //  DO TWEET STUFF
 }

   tweetNumber() {
    let regexNumberStart = /^\d+\.*/
    let regexNumberEnd = /[-=|]*\d+$/
    let regexFractionStart = /^\d+\/\d+[->=|]*/
    let regexFractionEnd = /[-=|]*\d+\/\d+$/

      if (regexFractionStart.test(this.state.tweet.text)) {
        this.setState({
          regex: regexFractionStart,
          tweetCount: this.state.tweet.text.match(regexFractionStart)[0].match(/\d+/)[0]
        })
      } else if (regexNumberStart.test(this.state.tweet.text)) {
        this.setState({
          regex: regexNumberStart,
          tweetCount: this.state.tweet.text.match(regexNumberStart)[0].match(/\d+/)[0]
        })
      } else if (regexFractionEnd.test(this.state.tweet.text)) {
        this.setState({
          regex: regexFractionEnd,
          tweetCount: this.state.tweet.text.match(regexFractionEnd)[0].match(/\d+/)[0]
        })
      } else if (regexNumberEnd.test(this.state.tweet.text)) {
        this.setState({
          regex: regexNumberEnd,
          tweetCount: this.state.tweet.text.match(regexNumberEnd)[0].match(/\d+/)[0]
        })
     } else {
       alert("error!")
     }
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
