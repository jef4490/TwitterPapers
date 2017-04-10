function filterTimeline(tweetTimeline, regex){
  return tweetTimeline.map((rawTweet) => {
    return {
      regex: regex,
      text: rawTweet.text.replace(regex, ""),
      user: {
        id: rawTweet.user.id,
        screename: `@${rawTweet.user.screen_name}`,
        name: rawTweet.user.name,
        link: `https://twitter.com/${rawTweet.user.screen_name}`,
        profilePicture: rawTweet.user.profile_image_url_https
      },
      tweetLink: `https://twitter.com/${rawTweet.user.screen_name}/status/${rawTweet.id_str}`,
      data: rawTweet.created_at
    }
  })
}

function splitConstruct(sentencePortion, tweets){
  if (sentencePortion.length <= 135) {
    let tweet = { text: sentencePortion }
    return tweets.push(tweet)
  }
  let midpoint = Math.floor(sentencePortion.length/2)
  while (sentencePortion[midpoint] !== " ") {
    midpoint++
  }
  splitConstruct(sentencePortion.slice(0, midpoint), tweets)
  splitConstruct(sentencePortion.slice(midpoint, sentencePortion.length), tweets)
}

function constructTweets(linkSentences) {
  let tweets = []
  let i = 0
  while (i < linkSentences.length) {
    if (linkSentences[i].length > 135) {
      splitConstruct(linkSentences[i], tweets)
      i++
    }
    let current = ""
    while (linkSentences[i] && current.length + linkSentences[i].length <= 135) {
      current += (" " + linkSentences[i])
      i++
    }
    let tweet = { text: current }
    tweets.push(tweet)
  }
  return tweets
}

function parseEssay(essay){
  let links = essay.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)
  let linklessText = essay.replace(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm, `&K^jK&`)
  let sentences = linklessText.match(/(?!.?!).*?[.?!\r\n]+[\)”"]?/g)
  let linkSentences = linkReplacer(sentences, links)
  return constructTweets(linkSentences)
}

function linkReplacer(sentences, links) {
  let i = -1
  let linkSentences = sentences.map( sentence => {
    if (sentence.match(/\&K\^jK&/g)) {
      i ++
      return sentence = sentence.replace(/\&K\^jK&/g, links[i])
    }
    return sentence
  })
  return linkSentences
}

export { filterTimeline, constructTweets, linkReplacer, parseEssay }
