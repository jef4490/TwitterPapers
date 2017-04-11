import React from 'react';
import '../App.css';

const Hyperlink = (props) => {
  // debugger
  return (
    <a href={`${props.link}`}>{props.start}{props.text}{props.end}</a>
  )
}

export default Hyperlink;
