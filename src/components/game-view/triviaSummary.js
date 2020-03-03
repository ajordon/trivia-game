import React from 'react';
import he from 'he';

class TriviaSummary extends React.Component {
  constructor(){
    super();

    this.handleAnswerStyles = this.handleAnswerStyles.bind(this);
  }

  handleAnswerStyles(index) {
    const { answers } = this.props;
    if (answers[index] === 0) {
      return "answer wrong";
    } else {
      return "answer correct";
    }
  };

  render() {
    const { questions, handleRestart } = this.props;
    return (
      <div className="answer-block">
        {questions.map(
          (question, i) => <div className={this.handleAnswerStyles(i)} key={i}>
            {he.decode(question.question)}
            <p className="answer-subtext">Correct Answer: {question.correct_answer}</p>
          </div>)}
        <br />
        <button className="begin-btn" type="submit" onClick={handleRestart}>Play Again?</button>
      </div>
    )}
};

export default TriviaSummary;