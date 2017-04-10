import React, { Component } from 'react';
import Paragraph from './Paragraph'
import '../App.css';


class Output extends Component {
  constructor() {
    super()
    this.state = {
      filteredTimeline: []
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.tweets.length > 0 && nextProps.regex) {
      this.setState( {filteredTimeline: this.filterTimeline(nextProps.tweets, nextProps.regex)} )
    }
  }

  filterTimeline(tweetTimeline, regex){
    return tweetTimeline.map((rawTweet) => {
      return {
        regex: regex,
        text: rawTweet.text,
        user: {
          id: rawTweet.user.id,
          screename: '@' + rawTweet.user.screen_name,
          name: rawTweet.user.name,
          link: `https://twitter.com/${rawTweet.user.screen_name}`,
          profilePicture: rawTweet.user.profile_image_url_https
        },
        tweetLink: `https://twitter.com/${rawTweet.user.screen_name}/status/${rawTweet.id_str}`,
        data: rawTweet.created_at
      }
    })
  }

  render() {
    return(
      <div className="Output">
        <Paragraph tweets={this.state.filteredTimeline.reverse()} />
      </div>
    )
  }
}

export default Output;
