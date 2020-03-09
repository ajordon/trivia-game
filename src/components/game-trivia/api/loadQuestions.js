

async function loadQuestions(qDifficulty = 'hard') {
  const application = 'application/';
  const BASE_URL = `https://opentdb.com/api.php?amount=10&difficulty=${qDifficulty}`;
  const params = { method: "GET", headers: new Headers({ application })};

  const questions = await fetch(BASE_URL, params).then(res => res.json(), console.log);

  return questions ? questions : [];
}

export default loadQuestions; 