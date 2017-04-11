import React from 'react';
import Hyperlink from './Hyperlink'
import '../App.css';

const Sentence = (props) => {

  let text = props.text.split(' ')
  let regexLink = /(https|ftp|http):\/\/.+[^.!?)(]/
  let hyperlinkFormat = text.map((item) => {
        if (item.search(regexLink) !== -1) {
          let start = ""
          let end = " "
          if (item.match(/[.!?)(]$/) != null) {
             end = item.match(/[.!?)(]$/) + " "
          }

          if (item.match(/^[?)(]/) != null) {
            start = item.match(/^[?)(]/)
          }
          let hyperlink = <Hyperlink link={item.match(regexLink)[0]} text={item.match(regexLink)[0]} start={start[0]} end={end}/>
          return hyperlink
        } else {
          return item + " "
        }
      })

  return(
    <span data-type="s" data-id={props.index}>
      {hyperlinkFormat}
    </span>
  )
}

export default Sentence;
