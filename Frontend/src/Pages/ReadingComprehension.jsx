// src/Pages/ReadingComprehension.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Example data with 8 questions per passage
const passages = [
  {
    id: 1,
    text: [
      "Artificial Intelligence (AI) is transforming the way we live and work. From healthcare to finance, AI applications are becoming integral in modern society.",
      "Machine learning, a subset of AI, allows computers to learn from data and make predictions or decisions without explicit programming."
    ],
    questions: [
      { type: "mcq", question: "What is the subset of AI that allows computers to learn from data?", options: ["Deep Learning", "Machine Learning", "Robotics", "NLP"], answer: "Machine Learning" },
      { type: "synonym", question: "Find a word similar to 'integral' in the passage.", answer: "essential" },
      { type: "fill", question: "AI applications are becoming _____ in modern society.", answer: "integral" },
      { type: "mcq", question: "Which field benefits from AI applications?", options: ["Healthcare", "Finance", "Both A & B", "None"], answer: "Both A & B" },
      { type: "fill", question: "Machine learning allows computers to learn from _____.", answer: "data" },
      { type: "synonym", question: "Find a word similar to 'predictions'.", answer: "forecasts" },
      { type: "mcq", question: "Which of these is NOT a type of AI?", options: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Manual Processing"], answer: "Manual Processing" },
      { type: "fill", question: "AI can make _____ without explicit programming.", answer: "decisions" }
    ]
  },
  {
    id: 2,
    text: [
      "Climate change is one of the biggest challenges facing the world today. Rising temperatures and unpredictable weather patterns have far-reaching consequences.",
      "Governments and organizations must work together to implement sustainable practices and reduce carbon emissions."
    ],
    questions: [
      { type: "mcq", question: "What is a major consequence of climate change?", options: ["Rising temperatures", "Lower taxes", "Increased internet speed", "Space exploration"], answer: "Rising temperatures" },
      { type: "synonym", question: "Find a word similar to 'unpredictable'.", answer: "uncertain" },
      { type: "fill", question: "Organizations must work together to reduce _____ emissions.", answer: "carbon" },
      { type: "mcq", question: "What is needed to fight climate change?", options: ["Individual action", "Global cooperation", "Ignoring it", "More emissions"], answer: "Global cooperation" },
      { type: "fill", question: "Rising _____ affect weather patterns.", answer: "temperatures" },
      { type: "synonym", question: "Find a word similar to 'sustainable'.", answer: "eco-friendly" },
      { type: "mcq", question: "Which sectors must act for climate change?", options: ["Governments", "Organizations", "Both", "None"], answer: "Both" },
      { type: "fill", question: "Climate change has far-reaching _____.", answer: "consequences" }
    ]
  }
];

export default function ReadingComprehension() {
  const navigate = useNavigate();
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const passage = passages[currentPassageIndex];

  const handleChange = (questionIndex, value) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: value });
  };

  const handleSubmit = () => setSubmitted(true);

  const handleNext = () => {
    setUserAnswers({});
    setSubmitted(false);
    setCurrentPassageIndex((prev) => (prev + 1) % passages.length);
  };

  const checkAnswer = (question, userAnswer) => {
    if (!userAnswer) return null;
    return question.answer.toLowerCase() === userAnswer.toLowerCase();
  };

  return (
    <div className={`${darkMode ? 'bg-[#0a0e27] text-[#e0e7ff]' : 'bg-[#e3f2fd] text-[#0d47a1]'} min-h-screen font-[Poppins] transition-colors duration-500`}>
      <header className={`fixed top-0 w-full ${darkMode ? 'bg-[#0f1729]/90 border-b border-[#2a3441]' : 'bg-white/80 border-b border-[#90caf9]'} backdrop-blur-lg px-6 py-4 flex justify-between items-center z-50 shadow-[0_4px_12px_rgba(33,150,243,0.1)]`}>
        <h1 className={`text-xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'}`}>PrepTalk</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-[#60a5fa]' : 'bg-[#1976d2]'} text-white hover:scale-110 transition-all`}>{darkMode ? '☀️' : '🌙'}</button>
        </div>
      </header>

      <main className="pt-28 px-6 sm:px-12 md:px-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Reading & Comprehension</h2>

          <div className={`bg-white/95 ${darkMode ? 'bg-[#1e293b]/90' : 'bg-white/95'} backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl mb-8 transition-colors duration-500`}>
            {passage.text.map((para, idx) => (
              <p key={idx} className="text-base sm:text-lg mb-4">{para}</p>
            ))}
          </div>

          {passage.questions.map((q, idx) => (
            <div key={idx} className={`bg-white/95 ${darkMode ? 'bg-[#1e293b]/90' : 'bg-white/95'} backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-md mb-6 transition-colors duration-500`}>
              <strong className="block mb-2">{idx + 1}. {q.question}</strong>
              
              {q.type === 'mcq' && q.options.map((opt) => (
                <label key={opt} className="block mb-2 cursor-pointer">
                  <input type="radio" name={`question-${idx}`} value={opt} disabled={submitted} checked={userAnswers[idx] === opt} onChange={(e) => handleChange(idx, e.target.value)} className="mr-2"/>
                  {opt}
                </label>
              ))}

              {(q.type === 'fill' || q.type === 'synonym') && (
                <input type="text" disabled={submitted} value={userAnswers[idx] || ""} onChange={(e) => handleChange(idx, e.target.value)} placeholder="Type your answer" className="w-full p-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              )}

              {submitted && (
                <div className={`mt-2 font-semibold ${checkAnswer(q, userAnswers[idx]) ? 'text-green-500' : 'text-red-500'}`}>
                  {checkAnswer(q, userAnswers[idx]) ? "Correct ✅" : `Incorrect ❌ (Correct: ${q.answer})`}
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-center mt-6 gap-4">
            {!submitted ? (
              <button onClick={handleSubmit} className={`px-6 py-3 rounded-full font-semibold ${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6] text-white' : 'bg-[#1976d2] hover:bg-[#1565c0] text-white'} transition-all hover:scale-105`}>
                Submit Answers
              </button>
            ) : (
              <button onClick={handleNext} className={`px-6 py-3 rounded-full font-semibold ${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6] text-white' : 'bg-[#1976d2] hover:bg-[#1565c0] text-white'} transition-all hover:scale-105`}>
                Next Passage
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}