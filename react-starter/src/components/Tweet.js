import React from "react";
import Button from "@material-ui/core/Button";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };
  return (
    <div className="tweet" style={{ backgroundColor: "#cfe8fc" }}>
      <hr />
      <h3>Name: {name}</h3>
      <h3>Message: {tweet}</h3>
      <br />
      <Button variant="contained" color="primary" onClick={deleteTweet}>
        Delete
      </Button>
      <Button variant="contained" color="secondary">
        Like
      </Button>
    </div>
  );
};

export default Tweet;
