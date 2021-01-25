import React from "react";
import Tweet from "./Tweet";
import Container from "@material-ui/core/Container";

const TweetList = ({ name, message }) => {
  return (
    <div className="tweet-list">
      <hr />
      <h2>List of Tweets</h2>
      <div>
        <Container>
          <Tweet name={name} message={message} />
          <Tweet name={name} message={message} />
          <Tweet name={name} message={message} />
        </Container>
      </div>
    </div>
  );
};

export default TweetList;
