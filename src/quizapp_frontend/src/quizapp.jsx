import React, { useState } from 'react';

const QuizApp = () => {
  // Sample questions
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Rome', isCorrect: false },
      ],
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <p>Your score is {score} out of {questions.length}</p>
          <button onClick={handleRestartClick}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-text">
            {questions[currentQuestionIndex].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
