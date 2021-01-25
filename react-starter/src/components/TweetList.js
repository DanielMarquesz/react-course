import React from "react";
import Tweet from "./Tweet";
import Container from "@material-ui/core/Container";

const TweetList = () => {
  return (
    <div className="tweet-list">
      <hr />
      <h2>List of Tweets</h2>
      <div>
        <Container>
          <Tweet />
          <Tweet />
          <Tweet />
        </Container>
      </div>
    </div>
  );
};

export default TweetList;
