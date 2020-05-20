import React from 'react';
import './App.css';
import TweetFeed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TweetFeed query={query}/>
      </header>
    </div>
  );
}

export default App;
