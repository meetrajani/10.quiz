import React from "react";
import { Route, Routes } from "react-router-dom";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";
import ScoreSummary from "./components/ScoreSummary";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<QuizList/>} />
        <Route path="/quiz/:id" element={<Quiz/>} />
        <Route path="/quiz/:id/score" element={<ScoreSummary/>} />
      </Routes>
    </div>
  );
}

export default App;
