import React from 'react';
import '../App.css';

const Hyperlink = (props) => {
  // debugger
  return (
    <a href={`${props.link}`}>{props.text}</a>
  )
}

export default Hyperlink;
