import React from 'react';
import he from 'he';

export const BooleanSelect = props => {
  const { handleClick } = props;
  return (
    <div className="bool-select">
      <button className="true-btn" type="submit" value="True" onClick={handleClick}>True</button>
      <button className="false-btn" type="submit" value="False" onClick={handleClick}>False</button>
    </div>
  )
};

export const MultiSelect = props => {
  const { options, handleClick } = props;
  return(
    <div className="multi-select">
      {options.map((option, i) => 
        <button className="multi-btn" type="submit" value={option} onClick={handleClick} key={i}>{he.decode(option)}</button>)}
    </div>
  )
};