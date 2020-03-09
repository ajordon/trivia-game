function chooseDisplayText(score) {
  if (score < 5) {
    return "Better luck next time...";
  } else if (score  <= 6) {
    return "Not Bad!";
  } else {
    return "Your a Genius!";
  }
}

function chooseAnswerStyles(answer) {
  if (answer === 0) {
    return "answer wrong";
  } else {
    return "answer correct";
  }
}

export default { chooseDisplayText, chooseAnswerStyles };


