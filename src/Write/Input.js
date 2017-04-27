import React, { Component } from 'react';
import '../App.css';


class Input extends Component {
  constructor() {
    super()
    this.state = {
      essayText: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  handleClick(event){
    event.preventDefault()
    this.props.onSubmit(this.state.essayText)
  }

  handleText(event){
    this.setState({
      essayText: event.target.value
    })
  }

  render() {
    return(
        <div className="prompt">
          <p>To get started, copy + paste your essay in the text box below.</p>
          <form className="tweet-url-form" id="tweet-url-form" onSubmit={this.handleClick}>
            <textarea placeholder="Your essay here" className="write-essay-text" id="write-essay-text" onChange={this.handleText}>
            </textarea>
            <br />
            <button type="Submit" id="tweet-submit">Write It</button>
          </form>
          <p className="suggested-url">Not sure where to start? Try: <a target="_blank" href="http://tvipsum.com/?paragraphs=2">http://tvipsum.com/?paragraphs=2</a></p>
        </div>
    )
  }
}
export default Input;
