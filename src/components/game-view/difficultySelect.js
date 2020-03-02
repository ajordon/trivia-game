import React from 'react';

const DifficultySelect = props => {
  const { handleDiffSelect } = props;
  return (
    <div className="question-box">
      <button type="button" onClick={handleDiffSelect} value="easy">Easy</button>
      <button type="button" onClick={handleDiffSelect} value="medium">Medium</button>
      <button type="button" onClick={handleDiffSelect} value="hard">Hard</button>
    </div>
  )
};

export default DifficultySelect;