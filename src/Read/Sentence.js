import React from 'react';
import Hyperlink from './Hyperlink'
import '../App.css';

const Sentence = (props) => {

  let text = props.text.split(' ')
  let regexLink = /(https|ftp|http):\/\/.+[^.!?)(]/
  let textCache = ''
  let hyperlinkFormat = []

  text.forEach((item, index) => {
    if (item.search(regexLink) !== -1) {
      let start = ""
      let end = ""
      if (item.match(/[.!?)(]$/) != null) {
         end = item.match(/[.!?)(]$/)[0] + " "
      }
      if (item.match(/^[?)(]/) != null) {
        start = item.match(/^[?)(]/)[0]
      }
      let hyperlink = <Hyperlink link={item.match(regexLink)[0]} text={item.match(regexLink)[0]}/>
      textCache += start
      hyperlinkFormat.push(textCache)
      textCache = end + " "
      return hyperlinkFormat.push(hyperlink)
    } else {
      return textCache += (item + " ")
    }
  })
    hyperlinkFormat.push(textCache)


  return(
    <span data-type="s" data-id={props.index}>
      {hyperlinkFormat}
    </span>
  )
}

export default Sentence;
