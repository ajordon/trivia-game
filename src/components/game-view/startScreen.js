import React from 'react';

const StartScreen = props => {
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

export default StartScreen;