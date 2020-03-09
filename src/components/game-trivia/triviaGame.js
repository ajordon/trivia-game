import React from 'react';
import TriviaSummary from './game-views/triviaSummary';
import StartScreen from './game-views/startScreen';
import QuestionsBox from './game-views/questionsBox';
import DifficultySelect from './game-views/difficultySelect';
import chooseDisplayText from './helpers/helpers';

class TriviaGame extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStatus: 0,
      gameScore: 0,
      questions: [],
      answers: [],
      qIndex: 0,
      qType: 'boolean', 
      qDifficulty: 'hard'
    }
    this.baseState = this.state;

    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleGameHeader = this.handleGameHeader.bind(this);
    this.handleGameButtons = this.handleGameButtons.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
  }

  handleGameHeader() {
    const { gameStatus, questions, gameScore, qIndex, qDifficulty } = this.state;
    if (gameStatus === 0) {
      return (<div>
        <h3>Welcome to the Trivia Challenge!</h3>
        <label>Select Your Difficulty: 
          <DifficultySelect selected={qDifficulty} handleDiffSelect={this.handleDifficultyChange} /> 
        </label>  
      </div>);
    } else if (gameStatus === 1) {
      return (<h3>{questions ? questions[qIndex].category : '' }</h3>);
    } else {
      return (<h3>{() => chooseDisplayText(gameScore)}
        <br />You scored {gameScore}/10</h3>);
    } 
  }

  handleDifficultyChange(e) {
    this.setState({ qDifficulty: e.target.value });
  }

  handleGameStart(e) {
    e.preventDefault();
    const { qDifficulty } = this.state;
    const BASE_URL = `https://opentdb.com/api.php?amount=10&difficulty=${qDifficulty}`;
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
    if (questions && questions[qIndex].correct_answer === value) {
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

  handleGameWrapper() {
    const { gameStatus, questions , qIndex, answers, gameScore } = this.state;
    if (gameStatus === 0) {
      return <StartScreen handleClick={this.handleGameStart} />;
    } else if (gameStatus === 1) {
      return <QuestionsBox question={questions[qIndex]} 
                qIndex={qIndex} 
                handleClick={this.handleGameButtons} />;
    } else {
      return <TriviaSummary questions={questions} 
                answers={answers} 
                score={gameScore} 
                handleRestart={this.handleRestart} />;
    }
  }

  handleRestart(e) {
    e.preventDefault();
    this.setState(this.baseState);
  }

  render() {
    return (
      <>
        {this.handleGameHeader()}
        <br />
        {this.handleGameWrapper()}
      </>
    )
  }
};

export default TriviaGame;