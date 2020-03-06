import React from 'react';

const DifficultySelect = props => {
  const { handleDiffSelect, selected } = props;
  return (
    <div className="difficulty-select">
       <select value={selected} onChange={handleDiffSelect}>
          <option value="hard">Hard</option>
          <option value="medium">Medium</option>
          <option value="easy">Easy</option>
        </select>
    </div>
  )
};

export default DifficultySelect;