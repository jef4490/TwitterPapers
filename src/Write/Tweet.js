import React from 'react';
import '../App.css';

const Tweet = (props) => {
  let tweetID = `tweet-${props.index}`
  return(
    <p className='write-tweets' id={tweetID}>
      {props.index + '. ' + props.text}
    </p>
  )
}


export default Tweet;
