import React, { Component } from 'react';
import * as utils from "./utils"
import Input from './Read/Input';
import Output from './Read/Output';
import axios from 'axios'
import './App.css';


class Read extends Component {
  constructor() {
    super()

    this.state = {
      filteredTimeline: []
    }

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
    axios.get(`https://twitterpapersserver.herokuapp.com/tweet/${tweetURL}.json`)
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

// https://twitter.com/matthewstoller/status/846351172680241154


  filterTweets(data) {
      var arr = []
      var replyId = this.state.tweet.id
      data.forEach((item) => {
        if (item.id_str == replyId) {
          replyId = item.in_reply_to_status_id_str
          arr.unshift(item)
            if (replyId == null) {
              replyId = 'done'
            }
        } else {
        }
      })
      return this.setState({filteredTimeline: arr})
    }

  retrieveTimeline(){
      axios.get(`https://twitterpapersserver.herokuapp.com/tweet/${this.state.tweet.id_str}/${this.state.tweet.user.id}/${parseInt(this.state.tweetCount)*2}.json`)
      .then(({data}) => {
        this.filterTweets(data)
      })
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
        <Output tweets={utils.filterTimeline(this.state.filteredTimeline, this.state.regex)}/>
      </div>
    )
  }
}
export default Read;
