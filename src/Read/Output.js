import React from 'react';
import Paragraph from './Paragraph'
import Sentence from './Sentence'
import '../App.css';


function Output(props) {

    // let formattedEssay = props.tweets.map((tweet, index) => <Sentence index={index} text={tweet.text}> )

    return(
      <div className="Output">
        <div className='read-paragraph'>
          {props.tweets.length > 0 ? <h3 className="essaySubtitle">Essay:</h3> : null}
          {props.tweets.length > 0 ? props.tweets.map((tweet, index) => <Sentence index={index} text={tweet.text}/>) : null}
        </div>
      </div>
    )
}

export default Output;
