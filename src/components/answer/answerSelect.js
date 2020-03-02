import React from 'react';
import _ from 'lodash';

export const BooleanSelect = props => {
  const { handleClick } = props;
  return (
    <div className="bool-select">
      <button type="submit" value="True" onClick={handleClick}>True</button>
      <button type="submit" value="False" onClick={handleClick}>False</button>
    </div>
  )
};

export const MultiSelect = props => {
  const { options, handleClick } = props;
  return(
    <div className="multi-select">
      {options.map((option, i) => 
        <button type="submit" value={option} onClick={handleClick} key={i}>{_.unescape(option)}</button>)}
    </div>
  )
};