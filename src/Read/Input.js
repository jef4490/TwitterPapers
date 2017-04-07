import React, { Component } from 'react';
import '../App.css';


class Input extends Component {
  constructor() {
    super()
    this.state = {
      tweetURL: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  handleClick(event){
    event.preventDefault()
    this.props.onSubmit(this.state.tweetURL)
  }

  handleText(event){
    this.setState({
      tweetURL: event.target.value
    })
  }

  render() {
    return(
      <div className="prompt">
        <p>To get started, copy + paste the url of the last tweet from the tweet essay.</p>
        <form className="tweet-url-form" id="tweet-url-form" onSubmit={this.handleClick}>
          <input type="text" placeholder="Tweet URL" value={this.state.tweetURL} onChange={this.handleText}className="Tweet-URL-text" id="tweet-url-text"/>
          <button type="Submit" id="tweet-submit">Read It</button>
        </form>
      </div>
    )
  }
}
export default Input;
