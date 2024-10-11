import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // To get the state passed from the quiz page

const ScoreSummary = () => {
  const location = useLocation(); // To access the score data
  const navigate = useNavigate();
  const { correctAnswers, wrongAnswers, totalQuestions } = location.state || {}; // Destructure the passed state

  return (
    <div className="score-summary-container p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">Quiz Result</h2>
      <p className="mt-4 text-lg">
        You answered <span className="text-green-500">{correctAnswers}</span> out of {totalQuestions} correctly.
      </p>
      <p className="mt-2 text-lg">
        You got <span className="text-red-500">{wrongAnswers}</span> answers wrong.
      </p>
      <button
        className="mt-4 bg-blue-500 btn btn-outline-secondary py-2 px-4 rounded-lg"
        onClick={() => navigate('/')} // Navigate back to home or quiz list
      >
        Back to Home
      </button>
    </div>
  );
};

export default ScoreSummary;
