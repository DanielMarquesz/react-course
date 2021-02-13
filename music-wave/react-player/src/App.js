import React from "react";
import Player from './components/Player'
import Song from './components/Song'

function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
      <h1>Player Music</h1>
    </div>
  );
}

export default App;
