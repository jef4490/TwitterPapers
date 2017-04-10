import React, { Component } from 'react';
import '../App.css';

const Paragraph = (props) => {

  let essayText = <p id="essay-text">{props.tweets.map((tweet, index) => {
      let text = tweet.text.replace(tweet.regex, "")
      return text
    }).join("")}</p>

  return(
    <div className='read-paragraph'>
      {props.tweets.length > 0 ? <h3 className="essaySubtitle">Essay:</h3> : null}
      {props.tweets.length > 0 ? essayText : null}
    </div>
  )
}


export default Paragraph;
