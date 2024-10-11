import React, { useState } from 'react';

const QuizList = () => {
  const [quizzes] = useState([
    { id: 1, title: 'React Basics', description: 'Test your React knowledge.' },
    { id: 2, title: 'JavaScript Fundamentals', description: 'Quiz on core JavaScript concepts.' }
  ]);

  return (
    <div className="quiz-list container">
      <h2>Available Quizzes</h2>
      <div className="row">
        {quizzes.map(quiz => (
          <div key={quiz.id} className="col-12 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text">{quiz.description}</p>
                <a href={`/quiz/${quiz.id}`} className="btn btn-primary">Start Quiz</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;