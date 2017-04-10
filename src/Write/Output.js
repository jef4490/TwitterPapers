import React, { Component } from 'react';
import Tweet from './Tweet'
import '../App.css';

function Output(props) {
  let tweetList = props.essay.map((tweet, index) => {
    return <Tweet text={tweet.text} key={index} index={index + 1}/>
  })

  return(
    <div className="essay-tweets-display">
      {props.essay.length > 0 ? <h3 className="tweetSubtitle">Tweets: </h3> : null}
      {tweetList}
    </div>
  )
}


export default Output;
