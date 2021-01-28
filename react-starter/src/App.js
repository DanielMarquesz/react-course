import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import { useState } from "react";

function App() {
  //States
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const name = "Daniel da Conceição Marques";
  const [namer, setNamer] = useState("Daniel Marques");

  const stayCool = (e) => {
    setNamer("Lais ALves");
    console.log(namer);
  };

  return (
    <div className="App">
      <h1>{namer}</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <button onClick={stayCool}>Change Name</button>
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
