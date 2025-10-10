import { useState } from "react";
import { Link } from "react-router-dom";

const lessons = [
  {
    id: 1,
    title: "Nouns",
    content: "A noun is a person, place, or thing.",
    example: "Example: Dog, School, Apple",
    quiz: {
      question: "Which of these is a noun?",
      options: ["Run", "Happy", "Apple", "Quickly"],
      answer: "Apple",
    },
  },
  {
    id: 2,
    title: "Verbs",
    content: "A verb expresses an action or state.",
    example: "Example: Run, Eat, Sleep",
    quiz: {
      question: "Which of these is a verb?",
      options: ["Apple", "Run", "Blue", "Desk"],
      answer: "Run",
    },
  },
];

export default function GrammarLessons() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleQuizSubmit = () => {
    if (selectedOption === lessons[currentLesson].quiz.answer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try Again!");
    }
  };

  const nextLesson = () => {
    setFeedback("");
    setSelectedOption("");
    setCurrentLesson((prev) => (prev + 1) % lessons.length);
  };

  return (
    <div className={`${darkMode ? 'bg-[#0a0e27] text-[#e0e7ff]' : 'bg-[#e3f2fd] text-[#0d47a1]'} min-h-screen font-[Poppins] transition-colors duration-500`}>
      
      {/* Header */}
      <header className={`fixed top-0 w-full ${darkMode ? 'bg-[#0f1729]/90' : 'bg-white/80'} backdrop-blur-lg px-4 sm:px-8 md:px-16 py-4 flex justify-between items-center z-50 border-b ${darkMode ? 'border-[#2a3441]' : 'border-[#90caf9]'} shadow-md`}>
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'}`}>PrepTalk</h1>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/"><button className="border-2 border-[#1976d2] text-[#1565c0] hover:bg-[#e3f2fd] px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition">Back Home</button></Link>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`${darkMode ? 'bg-[#60a5fa]' : 'bg-[#1976d2]'} text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:scale-110`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 text-center px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Grammar Lessons</h2>
        <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto`}>
          Master your English grammar with interactive lessons, quizzes, and instant feedback. Learn at your own pace and improve your English step by step.
        </p>
      </section>

      {/* Lesson & Quiz Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-20 flex justify-center">
        <div className={`${darkMode ? 'bg-[#1e293b]/95 border-[#374151]' : 'bg-white/95 border-[#90caf9]'} backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border-2 max-w-2xl w-full transition-all duration-500`}>
          
          <h3 className="text-2xl font-semibold mb-2">{lessons[currentLesson].title}</h3>
          <p className="mb-2">{lessons[currentLesson].content}</p>
          <p className="italic mb-4">{lessons[currentLesson].example}</p>

          <div className="mb-4">
            <p className="font-medium mb-2">{lessons[currentLesson].quiz.question}</p>
            {lessons[currentLesson].quiz.options.map((option) => (
              <div key={option} className="my-1">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="quiz"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleQuizSubmit}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Submit Answer
            </button>
            <button
              onClick={nextLesson}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Next Lesson
            </button>
          </div>

          {feedback && <p className="mt-4 font-bold">{feedback}</p>}
        </div>
      </section>
    </div>
  );
}