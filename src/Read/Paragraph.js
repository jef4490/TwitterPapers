import React, { Component } from 'react';
import '../App.css';

const Paragraph = (props) => {

  let essayText = props.tweets.map((tweet, index) => {
      let text = tweet.text.replace(tweet.regex, "")
      return text
    }).join("")

  return(
    <div className='read-paragraph'>
      {props.tweets.length > 0 ? <h3>Essay</h3> : null}
      {essayText}
    </div>
  )
}


export default Paragraph;
