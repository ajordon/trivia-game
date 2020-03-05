import React from 'react';
import './App.css';
import TriviaGame from './components/triviaGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="game-trivia">
          <h3 className="game">Game</h3>
          <h1 className="trivia">Trivia!</h1>
        </div>
      </header>
      <hr className="hr"/>
      <div className="game-wrapper">
        <TriviaGame />
      </div>
    </div>
  );
}

export default App;
