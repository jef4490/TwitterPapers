import React from 'react';
import '../App.css';

const Hyperlink = (props) => {
  return (
    <a href={`${props.link}`}>{props.text}</a>
  )
}

export default Hyperlink;
