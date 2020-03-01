import React from 'react';

class TriviaGame extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStatus: 0,
      gameScore: 0,
      questionCategory: 'Welcome to the Trivia Challenge!',
      questions: ["0"],
      answers: [],
      qIndex: 0,
      questionType: 'boolean',
      qDifficulty: 'hard',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleGameHeader = this.handleGameHeader.bind(this);
    this.handleGameButtons = this.handleGameButtons.bind(this);
  }

  handleGameHeader() {
    const { gameStatus, questionCategory, gameScore } = this.state;
    if (gameStatus === 0 || gameStatus === 1) {
      return (<h3>{questionCategory}</h3>);
    }
    else {
      return (<h3>You scored {gameScore}/10</h3>);
    } 
  }

  handleGameButtons(e) {
    e.preventDefault();
    const value = e.target.value;
    const { qIndex, answers } = this.state;
    var tempAnswer = answers;
    tempAnswer.push(value);

    if (qIndex <= 9) {
      this.setState({
        qIndex: qIndex + 1, 
        answers: tempAnswer });
      return;
    }

    this.setState({ gameStatus: 2 })
    return;
  }

  handleClick(e) {
    e.preventDefault();
    const { qDifficulty, questionType} = this.state;
    const BASE_URL = `https://opentdb.com/api.php?amount=10&difficulty=${qDifficulty}&type=${questionType}`;

    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log("My data: ", data);
        this.setState({
          gameStatus: 1,
          questions: data.results,
        })
      });
  }

  render() {
    const { gameStatus, questions , qIndex } = this.state;
    return (
      <div>
        {this.handleGameHeader()}
        <br />
        {gameStatus === 0 ? <PreGame handleClick={this.handleClick}/> 
          : <Question question={questions[qIndex]} 
                      qIndex={qIndex} 
                      handleClick={this.handleGameButtons} />}
      </div>
    )
  }
};

export default TriviaGame;


export const PreGame = props => {
  const { handleClick } = props;
  return (
    <>
      <p>You will be presented with 10 True of False questions </p>
        <br />        
      <p>Can you score 100%!?</p>
      <br />
      <button type="button" onClick={handleClick}>Begin</button>
    </>
  )
};

export const Question = props => {
  const { question, qIndex, handleClick } = props;
  return (
    <>
      <div className="question-box">{question.question}</div>
      {qIndex +1} of 10
      <br />
      <BooleanSelect handleClick={handleClick} />
    </>
  )
};

export const BooleanSelect = props => {
  const { handleClick } = props;
  return (
    <div className="bool-select">
      <button type="submit" value="true" onClick={handleClick}>True</button>
      <button type="submit" value="false" onClick={handleClick}>False</button>
    </div>
  )
};

export const triviaSummary = props => {
  const { questions, answers } = props;
  return (
    <div className="answer-block">
      {questions.map((question) => <div>{question.question}</div>)}
    </div>
  )
};