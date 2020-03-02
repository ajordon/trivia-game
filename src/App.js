import React from 'react';
import './App.css';
import TriviaGame from './components/triviaGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GAME TRIVIA!!!</h1>
      </header>
      <hr />
      <div className="game-wrapper">
        <TriviaGame />
      </div>
    </div>
  );
}

export default App;
