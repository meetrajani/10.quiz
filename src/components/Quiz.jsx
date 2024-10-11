import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); 
  const [correctAnswers, setCorrectAnswers] = useState(0); 
  const [wrongAnswers, setWrongAnswers] = useState(0); 

  useEffect(() => {
    // Mock API call for questions
    const fetchQuestions = async () => {
      const quizQuestions = [
        { question: 'What is React?', options: ['Library', 'Framework', 'Language'], correct: 'Library' },
        { question: 'What is JSX?', options: ['JavaScript', 'HTML', 'XML'], correct: 'XML' },
        { question: 'What is the purpose of the useEffect hook?', options: ['To handle events', 'To perform side effects in function components', ' To manage local component state'], correct: 'To perform side effects in function components' },
        { question: 'What is a component in React?', options: ['function that returns a JSX element', 'A JavaScript object', 'A CSS stylesheet'], correct: 'function that returns a JSX element' },
        { question: 'What is the main purpose of React Router?', options: ['State management', 'Routing in React applications', 'Styling components'], correct: 'Routing in React applications' },
      ];
      setQuestions(quizQuestions);
    };

    fetchQuestions();
  }, [id]);

  const handleAnswerSubmit = () => {
    if (selectedOption === null) return; 

    if (selectedOption === questions[currentQuestionIndex].correct) {
      setCorrectAnswers(correctAnswers + 1); 
    } else {
      setWrongAnswers(wrongAnswers + 1); 
    }

    setUserAnswers([...userAnswers, selectedOption]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); 
      setSelectedOption(null);
    } else {
      navigate(`/quiz/${id}/score`, { 
        state: { 
          correctAnswers: correctAnswers + (selectedOption === questions[currentQuestionIndex].correct ? 1 : 0), 
          wrongAnswers: wrongAnswers + (selectedOption !== questions[currentQuestionIndex].correct ? 1 : 0),
          totalQuestions: questions.length 
        } 
      });
    }
  };

  if (questions.length === 0) return <p>Loading...</p>;

  return (
    <div className="quiz-container p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">Quiz Title</h2>
      <div className="question mt-4">
        <p className="text-lg">{questions[currentQuestionIndex].question}</p>
        <div className="options mt-2">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)} 
              className={`block w-full py-2 mx-2 rounded-lg btn mb-2 ${
                selectedOption === option ? 'bg-blue-500 text-white btn-primary' : 'bg-gray-200 btn-outline-primary'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleAnswerSubmit} 
          className="mt-4 btn btn-outline-secondary bg-green-500 py-2 px-4 rounded-lg"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default Quiz;
