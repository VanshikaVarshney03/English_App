import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function MiniQuiz() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const quizQuestions = [
    // Vocabulary Questions
    {
      id: 1,
      category: "Vocabulary",
      question: "What is the meaning of 'Happy'?",
      hindi: "'Happy' का अर्थ क्या है?",
      options: ["Sad", "Excited", "Joyful", "Angry"],
      correct: 2,
      explanation: "'Happy' means जoyful or खुश"
    },
    {
      id: 2,
      category: "Vocabulary",
      question: "Choose the correct word: 'I am very ___ to see you.'",
      hindi: "सही शब्द चुनो: 'मैं तुम्हें देखकर बहुत ___ हूं।'",
      options: ["sad", "angry", "happy", "tired"],
      correct: 2,
      explanation: "'Happy' is correct - मैं तुम्हें देखकर बहुत खुश हूं"
    },
    {
      id: 3,
      category: "Vocabulary",
      question: "What do you say when you meet someone?",
      hindi: "जब आप किसी से मिलते हैं तो क्या कहते हैं?",
      options: ["Goodbye", "Hello", "Thank you", "Sorry"],
      correct: 1,
      explanation: "'Hello' is used for greeting - नमस्ते/हैलो"
    },
    {
      id: 4,
      category: "Vocabulary",
      question: "I am ___. I need water.",
      hindi: "मैं ___ हूं। मुझे पानी चाहिए।",
      options: ["hungry", "thirsty", "happy", "sad"],
      correct: 1,
      explanation: "'Thirsty' means प्यासा"
    },
    {
      id: 5,
      category: "Vocabulary",
      question: "The opposite of 'big' is ___.",
      hindi: "'बड़ा' का विपरीत शब्द ___ है।",
      options: ["large", "small", "tall", "short"],
      correct: 1,
      explanation: "'Small' is opposite of big - छोटा"
    },

    // Grammar - Nouns
    {
      id: 6,
      category: "Grammar - Nouns",
      question: "Which is a proper noun?",
      hindi: "कौन सा व्यक्तिवाचक संज्ञा है?",
      options: ["city", "Mumbai", "book", "dog"],
      correct: 1,
      explanation: "'Mumbai' is a proper noun (specific place name)"
    },
    {
      id: 7,
      category: "Grammar - Nouns",
      question: "Find the noun: 'She loves her cat.'",
      hindi: "संज्ञा ढूंढो: 'उसे अपनी बिल्ली से प्यार है।'",
      options: ["loves", "her", "cat", "she"],
      correct: 2,
      explanation: "'Cat' is a noun (thing/animal)"
    },

    // Grammar - Pronouns
    {
      id: 8,
      category: "Grammar - Pronouns",
      question: "Replace with pronoun: 'Rahul is smart. Rahul studies hard.'",
      hindi: "सर्वनाम से बदलो: 'राहुल स्मार्ट है। राहुल मेहनत से पढ़ता है।'",
      options: ["She", "He", "They", "It"],
      correct: 1,
      explanation: "'He' replaces Rahul (male)"
    },
    {
      id: 9,
      category: "Grammar - Pronouns",
      question: "Choose correct: 'Give the book to ___'",
      hindi: "सही चुनो: 'किताब ___ को दो'",
      options: ["I", "me", "my", "mine"],
      correct: 1,
      explanation: "'me' is object pronoun - मुझे"
    },

    // Grammar - Verbs
    {
      id: 10,
      category: "Grammar - Verbs",
      question: "Find the verb: 'I eat breakfast.'",
      hindi: "क्रिया ढूंढो: 'मैं नाश्ता करता हूं।'",
      options: ["I", "eat", "breakfast", "morning"],
      correct: 1,
      explanation: "'Eat' is the action verb"
    },
    {
      id: 11,
      category: "Grammar - Verbs",
      question: "Which is an action verb?",
      hindi: "कौन सी क्रिया शब्द है?",
      options: ["book", "run", "happy", "beautiful"],
      correct: 1,
      explanation: "'Run' shows action - दौड़ना"
    },

    // Grammar - Adjectives
    {
      id: 12,
      category: "Grammar - Adjectives",
      question: "Find adjective: 'The red car is fast.'",
      hindi: "विशेषण ढूंढो: 'लाल कार तेज़ है।'",
      options: ["car", "red", "is", "the"],
      correct: 1,
      explanation: "'Red' describes the car (color)"
    },
    {
      id: 13,
      category: "Grammar - Adjectives",
      question: "A ___ flower (add adjective)",
      hindi: "एक ___ फूल (विशेषण जोड़ो)",
      options: ["run", "beautiful", "quickly", "eat"],
      correct: 1,
      explanation: "'Beautiful' describes the flower"
    },

    // Present Tense
    {
      id: 14,
      category: "Present Tense",
      question: "He ___ to school every day.",
      hindi: "वह हर दिन स्कूल ___ है।",
      options: ["go", "goes", "going", "went"],
      correct: 1,
      explanation: "'goes' is correct for he/she/it in present"
    },
    {
      id: 15,
      category: "Present Tense",
      question: "I ___ reading a book now.",
      hindi: "मैं अभी एक किताब पढ़ ___ हूं।",
      options: ["am", "is", "are", "was"],
      correct: 0,
      explanation: "'am' is used with 'I' in present continuous"
    },
    {
      id: 16,
      category: "Present Tense",
      question: "They ___ cricket on Sundays.",
      hindi: "वे रविवार को क्रिकेट ___ हैं।",
      options: ["plays", "play", "playing", "played"],
      correct: 1,
      explanation: "'play' is used with they/we/you"
    },

    // Past Tense
    {
      id: 17,
      category: "Past Tense",
      question: "I ___ to the market yesterday.",
      hindi: "मैं कल बाजार ___ था।",
      options: ["go", "goes", "went", "going"],
      correct: 2,
      explanation: "'went' is past form of 'go'"
    },
    {
      id: 18,
      category: "Past Tense",
      question: "She ___ a movie last night.",
      hindi: "उसने कल रात एक फिल्म ___ ।",
      options: ["watch", "watches", "watched", "watching"],
      correct: 2,
      explanation: "'watched' is past tense"
    },
    {
      id: 19,
      category: "Past Tense",
      question: "They ___ the test last week.",
      hindi: "उन्होंने पिछले हफ्ते टेस्ट ___ ।",
      options: ["pass", "passes", "passed", "passing"],
      correct: 2,
      explanation: "'passed' is past form"
    },

    // Future Tense
    {
      id: 20,
      category: "Future Tense",
      question: "I ___ go to Delhi tomorrow.",
      hindi: "मैं कल दिल्ली ___ ।",
      options: ["will", "am", "was", "is"],
      correct: 0,
      explanation: "'will' is used for future tense"
    },
    {
      id: 21,
      category: "Future Tense",
      question: "She ___ study hard for exams.",
      hindi: "वह परीक्षा के लिए मेहनत से पढ़ ___ ।",
      options: ["is", "will", "was", "has"],
      correct: 1,
      explanation: "'will' indicates future action"
    },

    // Articles
    {
      id: 22,
      category: "Articles",
      question: "___ apple a day keeps doctor away.",
      hindi: "दिन में ___ सेब डॉक्टर को दूर रखता है।",
      options: ["A", "An", "The", "No article"],
      correct: 1,
      explanation: "'An' is used before vowel sound"
    },
    {
      id: 23,
      category: "Articles",
      question: "I have ___ book.",
      hindi: "मेरे पास ___ किताब है।",
      options: ["a", "an", "the", "no article"],
      correct: 0,
      explanation: "'a' is used before consonant sound"
    },
    {
      id: 24,
      category: "Articles",
      question: "___ sun rises in the east.",
      hindi: "___ सूरज पूर्व में उगता है।",
      options: ["A", "An", "The", "No article"],
      correct: 2,
      explanation: "'The' is used for unique things"
    },

    // Prepositions
    {
      id: 25,
      category: "Prepositions",
      question: "The book is ___ the table.",
      hindi: "किताब मेज ___ है।",
      options: ["in", "on", "at", "of"],
      correct: 1,
      explanation: "'on' is used for surfaces"
    },
    {
      id: 26,
      category: "Prepositions",
      question: "I live ___ Mumbai.",
      hindi: "मैं मुंबई ___ रहता हूं।",
      options: ["in", "on", "at", "to"],
      correct: 0,
      explanation: "'in' is used for cities/countries"
    },
    {
      id: 27,
      category: "Prepositions",
      question: "Meet me ___ 5 PM.",
      hindi: "मुझसे 5 बजे ___ मिलो।",
      options: ["in", "on", "at", "by"],
      correct: 2,
      explanation: "'at' is used for specific time"
    },

    // Conversations
    {
      id: 28,
      category: "Conversations",
      question: "How do you greet someone in morning?",
      hindi: "सुबह किसी का अभिवादन कैसे करते हैं?",
      options: ["Good night", "Good morning", "Goodbye", "Thank you"],
      correct: 1,
      explanation: "'Good morning' is morning greeting"
    },
    {
      id: 29,
      category: "Conversations",
      question: "What do you say to thank someone?",
      hindi: "किसी का धन्यवाद करने के लिए क्या कहते हैं?",
      options: ["Sorry", "Thank you", "Hello", "Goodbye"],
      correct: 1,
      explanation: "'Thank you' means धन्यवाद"
    },
    {
      id: 30,
      category: "Conversations",
      question: "Response to 'How are you?'",
      hindi: "'How are you?' का जवाब",
      options: ["I'm fine", "I'm John", "Yes please", "No thanks"],
      correct: 0,
      explanation: "'I'm fine' is correct response"
    },
  ];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correct;
    setAnswers([...answers, { questionId: quizQuestions[currentQuestion].id, selected: selectedAnswer, correct: isCorrect }]);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) return { emoji: "🏆", message: "Excellent! You're a star!", color: "text-yellow-400" };
    if (percentage >= 75) return { emoji: "🎉", message: "Great job! Keep it up!", color: "text-green-400" };
    if (percentage >= 50) return { emoji: "👍", message: "Good effort! Practice more!", color: "text-blue-400" };
    return { emoji: "💪", message: "Keep learning! You'll improve!", color: "text-orange-400" };
  };

  if (!quizStarted) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500 flex items-center justify-center p-4`}>
        <div className="max-w-2xl w-full text-center">
          <button 
            onClick={() => navigate('/easy-level')}
            className={`mb-8 flex items-center gap-2 ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6]' : 'text-[#1976d2] hover:text-[#1565c0]'} font-semibold transition-all hover:scale-105 mx-auto`}
          >
            <span className="text-xl">←</span>
            <span>Back to Topics</span>
          </button>

          <div className="text-8xl mb-6">🎮</div>
          <h1 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Mini Quiz Challenge
          </h1>
          <p className={`text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-8`}>
            Test your English skills with 30 questions covering all topics!
          </p>

          <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-8 mb-8`}>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <div className={`text-3xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>30</div>
                <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Questions</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>100%</div>
                <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Score to Aim</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>6</div>
                <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Topics Covered</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>15min</div>
                <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Estimated Time</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setQuizStarted(true)}
            className={`${darkMode ? 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb]' : 'bg-gradient-to-r from-indigo-500 to-purple-600'} text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-xl`}
          >
            Start Quiz 🚀
          </button>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`mt-6 ${darkMode ? 'bg-[#60a5fa]' : 'bg-[#1976d2]'} text-white p-3 rounded-full hover:scale-110 transition-all`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const scoreMsg = getScoreMessage();
    const percentage = ((score / quizQuestions.length) * 100).toFixed(1);

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500 flex items-center justify-center p-4`}>
        <div className="max-w-2xl w-full text-center">
          <div className="text-9xl mb-6">{scoreMsg.emoji}</div>
          <h1 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Quiz Completed!
          </h1>
          <p className={`text-2xl ${scoreMsg.color} font-bold mb-8`}>
            {scoreMsg.message}
          </p>

          <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-8 mb-8`}>
            <div className="text-6xl font-bold mb-2">
              <span className={darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}>{score}</span>
              <span className={`text-3xl ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>/{quizQuestions.length}</span>
            </div>
            <div className={`text-xl ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-4`}>
              Score: {percentage}%
            </div>

            <div className={`w-full ${darkMode ? 'bg-[#0f1729]' : 'bg-gray-200'} rounded-full h-4 mb-6`}>
              <div 
                className={`h-4 rounded-full transition-all duration-1000 ${
                  percentage >= 75 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                  percentage >= 50 ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                  'bg-gradient-to-r from-orange-400 to-red-500'
                }`}
                style={{width: `${percentage}%`}}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-green-500">{score}</div>
                <div className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">{quizQuestions.length - score}</div>
                <div className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Wrong</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">{quizQuestions.length}</div>
                <div className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Total</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={restartQuiz}
              className={`flex-1 ${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105`}
            >
              Try Again 🔄
            </button>
            <button
              onClick={() => navigate('/easy-level')}
              className={`flex-1 ${darkMode ? 'bg-[#1e293b] text-[#60a5fa] border-2 border-[#60a5fa]' : 'bg-white text-indigo-600 border-2 border-indigo-600'} px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105`}
            >
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500 p-4`}>
      <div className="max-w-3xl mx-auto py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className={`${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'} font-semibold`}>
            Question {currentQuestion + 1}/{quizQuestions.length}
          </div>
          <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} px-4 py-2 rounded-full font-bold`}>
            Score: <span className={darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}>{score}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`w-full ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-200'} rounded-full h-3 mb-8`}>
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-300"
            style={{width: `${progress}%`}}
          ></div>
        </div>

        {/* Question Card */}
        <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-8 shadow-2xl mb-6`}>
          <div className={`inline-block ${darkMode ? 'bg-[#0f1729]' : 'bg-indigo-100'} px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'} mb-4`}>
            {currentQ.category}
          </div>
          
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            {currentQ.question}
          </h2>
          <p className={`text-base ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-6 italic`}>
            {currentQ.hindi}
          </p>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswer === index
                    ? darkMode 
                      ? 'border-[#60a5fa] bg-[#0f1729]' 
                      : 'border-indigo-600 bg-indigo-50'
                    : darkMode
                    ? 'border-[#374151] hover:border-[#60a5fa] hover:bg-[#0f1729]'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? darkMode ? 'border-[#60a5fa] bg-[#60a5fa]' : 'border-indigo-600 bg-indigo-600'
                      : darkMode ? 'border-[#374151]' : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span className={`font-medium ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className={`w-full ${
            selectedAnswer === null
              ? 'bg-gray-400 cursor-not-allowed'
              : darkMode
              ? 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:scale-105'
              : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105'
          } text-white py-4 rounded-full text-lg font-bold transition-all`}
        >
          {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz 🎉' : 'Next Question →'}
        </button>
      </div>
    </div>
  );
}
