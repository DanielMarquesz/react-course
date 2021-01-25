import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const name = "Daniel da Conceição Marques";
  const message = "Hello Brother";
  return (
    <div className="App">
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
