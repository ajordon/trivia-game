import React from 'react';
import _ from 'lodash';

import { BooleanSelect, MultiSelect } from '../answer/answerSelect';

const Questions = props => {
  const { question, qIndex, handleClick } = props;
  var options = question.incorrect_answers;
  options.push(question.correct_answer);  

  return (
    <>
      <div className="question-box">{_.unescape(question.question)}</div>
      {qIndex + 1} of 10
      <br />
      {question.type === "boolean" ? <BooleanSelect handleClick={handleClick} />
        : <MultiSelect options={options} handleClick={handleClick} />}
    </>
  )
};

export default Questions;