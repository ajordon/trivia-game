import React from 'react';

import TriviaSummary from './game-view/triviaSummary';
import StartScreen from './game-view/startScreen';
import Questions from './game-view/questions';

class TriviaGame extends React.Component {
  defaultState = {
    gameStatus: 0,
    gameScore: 0,
    questions: [],
    answers: [],
    qIndex: 0,
    qType: 'boolean',
    qDifficulty: 'hard'
  }

  constructor() {
    super();
    this.state = this.defaultState;

    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleGameHeader = this.handleGameHeader.bind(this);
    this.handleGameButtons = this.handleGameButtons.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleGameHeader() {
    const { gameStatus, questions, gameScore, qIndex } = this.state;
    if (gameStatus === 0) {
      return (<h3>Welcome to the Trivia Challenge!</h3>);
    } else if (gameStatus === 1) {
      return (<h3>{questions[qIndex].category}</h3>);
    } else {
      return (<h3>You scored {gameScore}/10</h3>);
    } 
  }


  handleGameStart(e) {
    e.preventDefault();
    const { qDifficulty, qType } = this.state;
    const BASE_URL = `https://opentdb.com/api.php?amount=10&difficulty=${qDifficulty}&type=${qType}`;
    try {
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
          this.setState({
            gameStatus: 1,
            questions: data.results,
          })
        });
      }
    catch(error) {
      alert("An error has occured fetching questions: ", error);
    }
  }

  handleGameButtons(e) {
    e.preventDefault();
    const value = e.target.value;
    const { qIndex, answers, questions, gameScore } = this.state;

    var tempAnswer = answers;
    if (questions[qIndex].correct_answer === value) {
      tempAnswer.push(1);
    } else {
      tempAnswer.push(0);
    }

    if (qIndex !== 9) {
      this.setState({
        qIndex: qIndex + 1, 
        answers: tempAnswer,
        gameScore: tempAnswer[qIndex] === 1 ? gameScore + 1 : gameScore});
    } else {
      this.setState({ gameStatus: 2, 
        answers: tempAnswer,
        gameScore: tempAnswer[qIndex] === 1 ? gameScore + 1 : gameScore });
    }
  }

  handleGameBox() {
    const { gameStatus, questions , qIndex, answers, gameScore } = this.state;

    if (gameStatus === 0) {
      return <StartScreen handleClick={this.handleGameStart} />;
    } else if (gameStatus === 1) {
      return <Questions question={questions[qIndex]} 
                qIndex={qIndex} 
                handleClick={this.handleGameButtons} />;
    } else {
      return <TriviaSummary questions={questions} 
                answers={answers} 
                score={gameScore} 
                handleRestart={this.handleRestart}/>;
    }
  }

  handleRestart(e) {
    e.preventDefault();
    this.setState({...this.defaultState});
    return;
  }

  render() {
    return (
      <div>
        {this.handleGameHeader()}
        <br />
        {this.handleGameBox()}
      </div>
    )
  }
};

export default TriviaGame;