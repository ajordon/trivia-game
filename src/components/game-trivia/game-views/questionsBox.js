import React from 'react';
import he from 'he';
import { BooleanSelect, MultiSelect } from './answer-box/answerSelect';

const QuestionsBox = props => {
  const { question, qIndex, handleClick } = props;
  var options = question.incorrect_answers;
  options.push(question.correct_answer);  

  return (
    <div className="q-container">
      <div className="question-box">{he.decode(question.question)}</div>
      {qIndex + 1} of 10
      <br />
      {question.type === "boolean" ? <BooleanSelect handleClick={handleClick} />
        : <MultiSelect options={options} handleClick={handleClick} />}
    </div>
  )
};

export default QuestionsBox;