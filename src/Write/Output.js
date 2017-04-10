import React, { Component } from 'react';
import Tweet from './Tweet'
import '../App.css';

class Output extends Component {
  constructor() {
    super()
    this.state = {
      essayTweets: []
    }
  }

  linkReplacer(sentences, links) {
    let i = -1
    let linkSentences = sentences.map( sentence => {
      if (sentence.match(/\&K\^jK&/g)) {
        i ++
        return sentence = sentence.replace(/\&K\^jK&/g, links[i])
      }
      return sentence
    })
    return linkSentences
  }

  parseEssay(essay){
    let links = essay.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)
    let linklessText = essay.replace(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm, `&K^jK&`)
    let sentences = linklessText.match(/(?!.?!).*?[.?!\r\n]+[\)”"]?/g)
    let linkSentences = this.linkReplacer(sentences, links)
    this.constructTweets(linkSentences)
  }

  splitConstruct(sentencePortion, tweets){
    if (sentencePortion.length <= 135) {
      let tweet = { text: sentencePortion }
      return tweets.push(tweet)
    }
    let midpoint = Math.floor(sentencePortion.length/2)
    while (sentencePortion[midpoint] !== " ") {
      midpoint++
    }
    this.splitConstruct(sentencePortion.slice(0, midpoint), tweets)
    this.splitConstruct(sentencePortion.slice(midpoint, sentencePortion.length), tweets)
  }

  constructTweets(linkSentences) {
    let tweets = []
    let i = 0
    while (i < linkSentences.length) {
      if (linkSentences[i].length > 135) {
        this.splitConstruct(linkSentences[i], tweets)
        i++
      }
      let current = ""
      while (linkSentences[i] && current.length + linkSentences[i].length <= 135) {
        current += (" " + linkSentences[i])
        i++
      }
      let tweet = { text: current }
      tweets.push(tweet)
    }
    this.setState({
      essayTweets: tweets
    })
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.essay.length > 0){
      this.parseEssay(nextProps.essay)
    }
  }


  render(){
    let tweetList = this.state.essayTweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} index={index + 1}/>
    })

    return(
      <div className="essay-tweets-display">
        {tweetList}
      </div>
    )
  }
}


export default Output;
