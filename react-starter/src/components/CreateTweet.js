import React from "react";
import { v4 as uuidv4 } from "uuid";
//, { useState }
const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  //Functions
  const useInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };

  //Component Render
  return (
    <form onSubmit={submitTweetHandler}>
      <hr />
      <h2>Write your tweet here</h2>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={textInput}
        onChange={useInputHandler}
      ></textarea>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
