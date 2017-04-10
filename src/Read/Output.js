import React, { Component } from 'react';
import Paragraph from './Paragraph'
import '../App.css';


function Output(props) {
    return(
      <div className="Output">
        <Paragraph tweets={props.tweets} />
      </div>
    )
}

export default Output;
