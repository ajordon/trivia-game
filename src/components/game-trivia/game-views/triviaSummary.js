import React from 'react';
import he from 'he';
import chooseAnswerStyles from '../helpers/helpers';

const TriviaSummary = (props) => {
  const { questions, handleRestart, answers } = props;
  return (
    <div className="answer-block">
      {questions.map(
        (question, i) => <div className={() => chooseAnswerStyles(answers[i])} key={i}>
          {he.decode(question.question)}
          <p className="answer-subtext">Correct Answer: {question.correct_answer}</p>
        </div>)}
      <br />
      <button className="begin-btn" type="submit" onClick={handleRestart}>Play Again?</button>
    </div>
  )
};

export default TriviaSummary;