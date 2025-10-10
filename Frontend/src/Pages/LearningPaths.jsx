import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LearningPaths() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const paths = [
    {
      level: "Easy",
      color: darkMode ? "from-green-600 to-emerald-700" : "from-green-400 to-emerald-500",
      description: "Start your English journey here! Build vocabulary, improve pronunciation, and learn sentence basics through fun tasks and real-life examples.",
      modules: [
        "🧩 100 Daily Use English Words",
        // "🎧 Pronunciation Practice (Audio-Based)",
        "🗣️ Basic Conversations – Greetings & Introductions",
        "📝 Grammar Starter Pack: Nouns, Verbs, Tenses",
        "🎮 Mini-Quiz: Build Your First Sentence!",
      ],
    },
    {
      level: "Intermediate",
      color: darkMode ? "from-yellow-600 to-amber-700" : "from-yellow-400 to-amber-500",
      description: "Boost your confidence! Focus on fluency, grammar accuracy, and expression through interactive lessons and role-play practice.",
      modules: [
        "💬 Real-Life Dialogues: At Work, Café & Travel",
        "🧠 Intermediate Grammar – Clauses, Modals, Reported Speech",
        "🎤 Speaking Practice: Storytelling & Opinion Sharing",
        "📘 Vocabulary Builder: Idioms & Phrasal Verbs",
        "⚡ Challenge Mode: 5-Minute Speaking Tasks",
      ],
    },
    {
      level: "Hard",
      color: darkMode ? "from-red-600 to-pink-700" : "from-red-500 to-pink-600",
      description: "Master English communication for professional and creative expression. Practice advanced fluency, debating, and emotional tone.",
      modules: [
        "🧭 Advanced Grammar: Conditionals & Passive Voice",
        "🎙️ Public Speaking & Debate Practice",
        "🧾 Writing Workshop: Emails, Essays & Storytelling",
        "🧑‍🏫 Accent Training & Intonation Control",
        "🏆 Pro-Level Challenge: Spontaneous Speaking Round",
      ],
    },
  ];

  return (
    <section className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-b from-[#e3f2fd] to-white'} py-12 px-6 sm:px-12 md:px-24 transition-colors duration-500`}>
      {/* Header with Back Button + Dark Mode */}
      <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 ${darkMode ? 'bg-[#1e293b] text-[#60a5fa] hover:bg-[#2d3748]' : 'bg-white text-[#1565c0] hover:bg-[#e3f2fd]'} px-6 py-3 rounded-full font-semibold shadow-lg transition-all hover:scale-105`}
        >
          <span>←</span> Back to Home
        </button>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-[#1976d2] hover:bg-[#1565c0]'} text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className={`${darkMode ? 'bg-[#1e293b] text-[#60a5fa]' : 'bg-blue-100 text-blue-600'} px-6 py-2 rounded-full text-sm font-semibold inline-block`}>
            🎯 Choose Your Level
          </span>
        </div>
        <h1 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1565c0]'} mb-4`}>
          🚀 Level-Based Learning Paths
        </h1>
        <p className={`text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
          Structured courses from A1 to C1 — Choose the path that matches your skill level
        </p>
      </div>

      {/* Learning Path Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {paths.map((path) => (
          <div
            key={path.level}
            className={`rounded-3xl shadow-2xl overflow-hidden border-2 ${darkMode ? 'border-[#374151] hover:border-[#60a5fa]' : 'border-white/50 hover:border-blue-300'} bg-gradient-to-br ${path.color} text-white hover:scale-105 transition-all duration-300 group`}
          >
            <div className="p-8 flex flex-col h-full justify-between">
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold">{path.level} Level</h2>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    A1-B2
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-6 leading-relaxed">{path.description}</p>

                {/* Modules List */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span>📚</span> Course Modules
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    {path.modules.map((mod, index) => (
                      <li
                        key={index}
                        className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/30 transition-all duration-200 group-hover:translate-x-1"
                      >
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Start Button */}
              <button 
                onClick={() => {
                  if (path.level === 'Easy') {
                    navigate('/easy-level');
                  } else if (path.level === 'Intermediate') {
                    navigate('/intermediate-level');
                  } else if (path.level === 'Hard') {
                    navigate('/hard-level');
                  }
                }}
                className="mt-8 bg-white text-[#1565c0] font-bold rounded-full py-3 hover:bg-opacity-90 hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Start {path.level} Path
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info Section */}
      <div className={`mt-16 text-center max-w-4xl mx-auto ${darkMode ? 'bg-[#1e293b]/50 border border-[#374151]' : 'bg-white border border-gray-200'} rounded-2xl p-8 shadow-lg`}>
        <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-4`}>
          ❓ Not Sure Which Level to Choose?
        </h3>
        <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-6`}>
          Take our quick assessment test to find the perfect learning path for you
        </p>
        <button className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-[#1976d2] hover:bg-[#1565c0]'} text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg`}>
          Take Assessment Test 📝
        </button>
      </div>

      {/* Stats Bar */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { icon: "👥", number: "10K+", label: "Active Learners" },
          { icon: "📚", number: "500+", label: "Lessons" },
          { icon: "🏆", number: "95%", label: "Success Rate" },
          { icon: "⭐", number: "4.8", label: "User Rating" }
        ].map((stat, idx) => (
          <div key={idx} className={`${darkMode ? 'bg-[#1e293b]/50 border border-[#374151]' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center transition-all hover:scale-105 shadow-lg`}>
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-2xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'}`}>{stat.number}</div>
            <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
