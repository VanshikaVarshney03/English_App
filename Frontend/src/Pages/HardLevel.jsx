import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function HardLevel() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const topics = [
    {
      id: 1,
      emoji: "🧭",
      title: "Advanced Grammar Mastery",
      description: "Master complex conditionals, passive voice, subjunctive mood and advanced structures",
      duration: "5 weeks",
      lessons: 25,
      color: darkMode ? "from-red-600 to-pink-700" : "from-red-500 to-pink-600",
      progress: 0,
      locked: false,
    },
    {
      id: 2,
      emoji: "🎙️",
      title: "Public Speaking & Debates",
      description: "Develop advanced speaking skills for presentations, debates and formal discussions",
      duration: "4 weeks",
      lessons: 20,
      color: darkMode ? "from-purple-600 to-indigo-700" : "from-purple-500 to-indigo-600",
      progress: 0,
      locked: false,
    },
    {
      id: 3,
      emoji: "🧾",
      title: "Professional Writing",
      description: "Master emails, reports, essays, creative writing and business documents",
      duration: "5 weeks",
      lessons: 22,
      color: darkMode ? "from-orange-600 to-amber-700" : "from-orange-500 to-amber-600",
      progress: 0,
      locked: false,
    },
    {
      id: 4,
      emoji: "🧑‍🏫",
      title: "Accent & Intonation Training",
      description: "Refine pronunciation, work on accent reduction and master natural intonation",
      duration: "3 weeks",
      lessons: 18,
      color: darkMode ? "from-blue-600 to-cyan-700" : "from-blue-500 to-cyan-600",
      progress: 0,
      locked: false,
    },
    {
      id: 5,
      emoji: "🏆",
      title: "Pro-Level Speaking Challenge",
      description: "10-minute spontaneous speaking tasks on complex topics with expert feedback",
      duration: "3 weeks",
      lessons: 15,
      color: darkMode ? "from-green-600 to-teal-700" : "from-green-500 to-teal-600",
      progress: 0,
      locked: false,
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#ffe0e0] via-[#ffcccc] to-[#ffb3b3]'} transition-colors duration-500`}>
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-[#0f1729]/90' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-[#2a3441]' : 'border-gray-200'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/learning-paths')}
            className={`flex items-center gap-2 ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6]' : 'text-[#1976d2] hover:text-[#1565c0]'} font-semibold transition-all hover:scale-105`}
          >
            <span className="text-xl">←</span>
            <span>Back to Paths</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-red-100'} px-4 py-2 rounded-full`}>
              <span className="text-2xl">🏆</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-red-700'}`}>Hard Level</span>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-[#1976d2] hover:bg-[#1565c0]'} text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className={`${darkMode ? 'bg-[#1e293b] text-[#60a5fa]' : 'bg-red-100 text-red-700'} px-6 py-2 rounded-full text-sm font-semibold`}>
              🏆 Advanced Level (C1-C2)
            </span>
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Hard Level Topics
          </h1>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} max-w-3xl mx-auto mb-6`}>
            Master professional-level English for advanced communication and career excellence
          </p>

          <div className={`max-w-2xl mx-auto ${darkMode ? 'bg-[#1e293b]/50 border border-[#374151]' : 'bg-white border border-gray-200'} rounded-2xl p-6 shadow-lg`}>
            <div className="flex justify-between items-center mb-3">
              <span className={`font-semibold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>Overall Progress</span>
              <span className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>0 of 5 modules completed</span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-[#0f1729]' : 'bg-gray-200'} rounded-full h-3`}>
              <div className="bg-gradient-to-r from-red-500 to-pink-600 h-3 rounded-full" style={{width: '0%'}}></div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className={`group relative rounded-3xl overflow-hidden ${darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'} transition-all duration-500 hover:scale-105 hover:shadow-2xl ${darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-red-400'}`}
            >
              <div className={`bg-gradient-to-br ${topic.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-7xl opacity-20">{topic.emoji}</div>
                <div className="relative z-10">
                  <div className="text-5xl mb-3">{topic.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-white/20 px-3 py-1 rounded-full">⏱️ {topic.duration}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">📚 {topic.lessons} lessons</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {topic.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Progress</span>
                    <span className={darkMode ? 'text-[#60a5fa]' : 'text-red-600'}>{topic.progress}%</span>
                  </div>
                  <div className={`w-full ${darkMode ? 'bg-[#0f1729]' : 'bg-gray-200'} rounded-full h-2`}>
                    <div className={`bg-gradient-to-r ${topic.color} h-2 rounded-full transition-all duration-500`} style={{width: `${topic.progress}%`}}></div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    if (topic.id === 1) {
                      navigate('/advanced-grammar');
                    } else if (topic.id === 2) {
                      navigate('/public-speaking');
                    } else if (topic.id === 3) {
                      navigate('/professional-writing');
                    } else if (topic.id === 4) {
                      navigate('/accent-training');
                    } else if (topic.id === 5) {
                      navigate('/pro-challenge');
                    }
                  }}
                  className={`w-full ${topic.locked ? 'bg-gray-400 cursor-not-allowed' : `bg-gradient-to-r ${topic.color}`} text-white font-semibold py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                  disabled={topic.locked}
                >
                  {topic.locked ? (
                    <>
                      <span>🔒</span>
                      <span>Locked</span>
                    </>
                  ) : (
                    <>
                      <span>{topic.progress > 0 ? 'Continue' : 'Start Learning'}</span>
                      <span className="text-xl">→</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`${darkMode ? 'bg-[#1e293b]/50 border border-[#374151]' : 'bg-white border border-gray-200'} rounded-3xl p-8 sm:p-12 shadow-lg`}>
          <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} text-center mb-8`}>
            💡 Tips for Advanced Learners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "Read Complex Texts", desc: "Novels, academic papers, newspapers" },
              { icon: "🎬", title: "Watch Native Content", desc: "Movies, documentaries without subtitles" },
              { icon: "💼", title: "Professional Practice", desc: "Business meetings, presentations" },
              { icon: "✍️", title: "Creative Writing", desc: "Essays, stories, professional documents" },
            ].map((tip, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h4 className={`font-semibold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-1`}>{tip.title}</h4>
                <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className={`inline-block ${darkMode ? 'bg-[#1e293b] border border-[#374151]' : 'bg-red-50 border border-red-200'} rounded-2xl p-8`}>
            <div className="text-5xl mb-4">🚀</div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
              Ready for Professional Mastery?
            </h3>
            <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-6`}>
              Complete all 5 modules to earn your Advanced Level certificate!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={() => navigate('/advanced-grammar')}
                className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-red-500 hover:bg-red-600'} text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg`}
              >
                Advanced Grammar 🎯
              </button>
              <button 
                onClick={() => navigate('/public-speaking')}
                className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg`}
              >
                Public Speaking 🎙️
              </button>
              <button 
                onClick={() => navigate('/professional-writing')}
                className={`${darkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg`}
              >
                Professional Writing 🧾
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
