import React from 'react';
import { render } from '@testing-library/react';
import TrivaGame from './components/triviaGame';
import StartScreen from './components/game-view/startScreen';
import QuestionsBox from './components/game-view/questionsBox';

describe('renders game start screen', () => {
  it('should display welcome text',  () => {
    const { getByText } = render(<TrivaGame />);
    const pElement = getByText(/Welcome to the Trivia Challenge!/);
    expect(pElement).toBeInTheDocument();
  });

  it('should render the start screen', () => {
    const fn = jest.fn();
    const { getByText } = render(<StartScreen handleClick={fn}/>);
    const wrapper = getByText(/Can you score 100%?/);
    expect(wrapper).toBeInTheDocument();
  })
});


test('should display first question', () => {
  const fn = jest.fn();
  const sampleData = [
    {
      "category": "Science & Nature",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is considered the rarist form of color blindness?",
      "correct_answer": "Blue",
      "incorrect_answers": [
        "Red",
        "Green",
        "Purple"]
    },
    {
      "category": "Entertainment: Film",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What was the last Marx Brothers film to feature Zeppo?",
      "correct_answer": "Duck Soup",
      "incorrect_answers": [
      "A Night at the Opera",
      "A Day at the Races",
      "Monkey Business"]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
  }];
  
  const { getByText } = render(<QuestionsBox question={sampleData[0]} qIndex={0} 
    handleClick={fn}/>);
  
  const getQuestionText = getByText(/What is considered the rarist?/);
  expect(getQuestionText).toBeInTheDocument();
});

