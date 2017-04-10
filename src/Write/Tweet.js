import React from 'react';
import '../App.css';

const Tweet = (props) => {

  return(
    <p className='write-tweets'>
      {props.index + '. ' + props.text}
    </p>
  )
}


export default Tweet;
