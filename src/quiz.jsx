import React, { useState } from 'react';
import './quiz.css';
import ShowResult from './showresult';
import { QuizData } from './data';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(null);

  const changeQuestion = () => {
    if (clicked === null) return; 

    updateScore();
    
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClicked(null);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clicked === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setClicked(null);
  };

  

  return (
    <div className='quizapp'>
      <p className='heading' style={{ textAlign: "center" }}>Quiz App</p>
      {showResult ? (
        <ShowResult score={score} tryAgain={resetQuiz} />
      ) : (
        <div className='container-quiz'>
          <span>{QuizData[currentQuestion].question}</span>
          <br />
          <div className='data'>
            {QuizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`btn ${clicked === index+1 ? "add" : ""}`}
                onClick={() => setClicked(index+1)}
              >
                {option}
              </button>
            ))}
            <button
              style={{ marginTop: "10px" }}
              className='next'
              onClick={changeQuestion}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
