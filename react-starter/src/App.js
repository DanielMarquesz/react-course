import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import { useState } from "react";

function App() {
  const name = "Daniel da Conceição Marques";
  const message = "Hello Brother";

  const [namer, setNamer] = useState("Daniel Marques");

  const stayCool = (e) => {
    setNamer("Lais ALves");
    console.log(namer);
  };

  return (
    <div className="App">
      <h1>{namer}</h1>
      <CreateTweet />
      {/* <TweetList name={name} message={message} /> */}

      <button onClick={stayCool}>Change Name</button>
    </div>
  );
}

export default App;
