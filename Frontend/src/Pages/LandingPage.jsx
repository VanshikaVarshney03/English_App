

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
const navigate = useNavigate();


  const texts = ["Speak Better.", "Write Smarter.", "Grow Confident."];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Typing animation
  useEffect(() => {
    const speed = deleting ? 50 : 120;
    const timeout = setTimeout(() => {
      if (!deleting && j < texts[i].length) {
        setText(texts[i].substring(0, j + 1));
        setJ(j + 1);
      } else if (deleting && j > 0) {
        setText(texts[i].substring(0, j - 1));
        setJ(j - 1);
      } else if (!deleting && j === texts[i].length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && j === 0) {
        setDeleting(false);
        setI((i + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [j, deleting, i, texts]);

  // Scroll animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className={`${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb]'} ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'} overflow-x-hidden min-h-screen font-[Poppins] transition-colors duration-500`}>
      {/* Header */}
      <header className={`fixed top-0 w-full ${darkMode ? 'bg-[#0f1729]/90' : 'bg-white/80'} backdrop-blur-lg px-4 sm:px-8 md:px-16 py-4 flex justify-between items-center z-50 ${darkMode ? 'border-b border-[#2a3441]' : 'border-b border-[#90caf9]'} shadow-[0_4px_12px_rgba(33,150,243,0.1)] animate-slideDown transition-colors duration-500`}>
      
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'} animate-fadeIn`}>PrepTalk</h1>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/signup">
          <button className={`${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6] border-[#60a5fa] hover:bg-[#1e293b]' : 'text-[#1565c0] hover:text-[#0d47a1] border-[#1976d2] hover:bg-[#e3f2fd]'} border-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-110 font-medium text-sm sm:text-base`}>
            Sign Up
          </button>
          
          </Link>
          <Link to="/login">
          <button className={`${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6] border-[#60a5fa] hover:bg-[#1e293b]' : 'text-[#1565c0] hover:text-[#0d47a1] border-[#1976d2] hover:bg-[#e3f2fd]'} border-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-110 font-medium text-sm sm:text-base`}>
            Login
          </button>
          
          
          </Link>
          <Link to="/contact">
           <button className={`hidden sm:block ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6] border-[#60a5fa] hover:bg-[#1e293b]' : 'text-[#1565c0] hover:text-[#0d47a1] border-[#1976d2] hover:bg-[#e3f2fd]'} border-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-110 font-medium text-sm sm:text-base`}>
            Contact Us
          </button>
          
          
          </Link>
         
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-[#1976d2] hover:bg-[#1565c0]'} text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className={`min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-20 py-20 sm:py-24 ${darkMode ? 'bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0a0e27]' : 'bg-gradient-to-br from-[#e1f5fe] via-[#b3e5fc] to-[#81d4fa]'} relative overflow-hidden transition-colors duration-500`}>
        {/* Animated Background Circles */}
        <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 ${darkMode ? 'bg-[#3b82f6]' : 'bg-[#64b5f6]'} rounded-full opacity-20 blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 ${darkMode ? 'bg-[#2563eb]' : 'bg-[#42a5f5]'} rounded-full opacity-20 blur-3xl animate-pulse-slow animation-delay-1000`}></div>
        <div className={`absolute top-1/2 left-1/4 w-48 sm:w-64 h-48 sm:h-64 ${darkMode ? 'bg-[#1e40af]' : 'bg-[#2196f3]'} rounded-full opacity-15 blur-3xl animate-float`}></div>
        
        {/* Centered Floating Emojis */}
        <div className="w-full flex justify-center items-center mb-8 sm:mb-12">
          <div className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16 animate-floatIcons">
            <div className="text-3xl sm:text-4xl md:text-5xl opacity-80 drop-shadow-[0_0_25px_rgba(25,118,210,0.6)] animate-bounce animation-delay-200">📚</div>
            <div className="text-3xl sm:text-4xl md:text-5xl opacity-80 drop-shadow-[0_0_25px_rgba(25,118,210,0.6)] animate-bounce animation-delay-400">💬</div>
            <div className="text-3xl sm:text-4xl md:text-5xl opacity-80 drop-shadow-[0_0_25px_rgba(25,118,210,0.6)] animate-bounce animation-delay-600">🎯</div>
            <div className="text-3xl sm:text-4xl md:text-5xl opacity-80 drop-shadow-[0_0_25px_rgba(25,118,210,0.6)] animate-bounce animation-delay-800">✍️</div>
          </div>
        </div>

        {/* <div className="mb-4 animate-fadeInUp">
          <span className={`${darkMode ? 'bg-[#1e293b]/80 text-[#60a5fa] border-[#374151]' : 'bg-white/80 text-[#1976d2] border-[#90caf9]'} backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg border`}>
            ✨ Trusted by 10,000+ Learners Worldwide
          </span>
        </div> */}

        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'} animate-fadeInUp animation-delay-200 px-4`}>
          Learn English to <span className={`${darkMode ? 'text-[#60a5fa] border-[#60a5fa]' : 'text-[#1976d2] border-[#1976d2]'} border-r-2 animate-pulse`}>{text}</span>
        </h2>
        
        <p className={`max-w-3xl ${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-base sm:text-lg md:text-xl mb-3 animate-fadeInUp animation-delay-400 font-medium px-4`}>
          PrepTalk: Where interview preparation meets English mastery
        </p>
        
        <div className={`${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'} text-xs sm:text-sm md:text-base mb-6 animate-fadeInUp animation-delay-600 flex flex-wrap justify-center gap-2 sm:gap-3 px-4`}>
          <span className={`${darkMode ? 'bg-[#1e293b]/60' : 'bg-white/60'} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap`}>🏆 Track Progress</span>
          <span className={`${darkMode ? 'bg-[#1e293b]/60' : 'bg-white/60'} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap`}>🔥 Daily Streaks</span>
          <span className={`${darkMode ? 'bg-[#1e293b]/60' : 'bg-white/60'} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap`}>🎯 Level-Based Learning</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp animation-delay-800 w-full max-w-md px-4">
          <button className={`w-full sm:w-auto ${darkMode ? 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8]' : 'bg-gradient-to-r from-[#1976d2] to-[#1565c0] hover:from-[#1565c0] hover:to-[#0d47a1]'} text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-[0_8px_24px_rgba(25,118,210,0.5)] transition-all duration-500 hover:shadow-[0_12px_32px_rgba(25,118,210,0.7)] hover:-translate-y-2 hover:scale-110`}>
            Start Learning Free
          </button>
          <button className={`w-full sm:w-auto ${darkMode ? 'bg-[#1e293b]/90 text-[#60a5fa] border-[#60a5fa] hover:bg-[#1e293b]' : 'bg-white/90 text-[#1976d2] border-[#1976d2] hover:bg-white'} px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
            Watch Demo
          </button>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 animate-fadeInUp animation-delay-1000 px-4">
          <div className="text-center">
            <div className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>10K+</div>
            <div className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'}`}>Active Users</div>
          </div>
          <div className={`w-px h-8 sm:h-10 ${darkMode ? 'bg-[#374151]' : 'bg-[#90caf9]'}`}></div>
          <div className="text-center">
            <div className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>50K+</div>
            <div className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'}`}>Lessons Completed</div>
          </div>
          <div className={`w-px h-8 sm:h-10 ${darkMode ? 'bg-[#374151]' : 'bg-[#90caf9]'}`}></div>
          <div className="text-center">
            <div className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>4.8★</div>
            <div className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'}`}>User Rating</div>
          </div>
        </div>
      </section>

   {/* Core Features */}
<section id="features" className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 ${darkMode ? 'bg-gradient-to-br from-[#0f1729] to-[#1a1f3a]' : 'bg-gradient-to-br from-[#e8f4fd] to-[#d1e9f6]'} transition-colors duration-500`}>
  {/* ADD THIS HEADER SECTION */}
  <div className="text-center mb-10 sm:mb-12">
    <span className={`${darkMode ? 'bg-[#3b82f6] text-white' : 'bg-[#1976d2] text-white'} px-4 sm:px-5 py-2 rounded-full text-xs font-semibold mb-4 inline-block animate-fadeIn`}>
      COMPREHENSIVE FEATURES
    </span>
    <h2 className={`text-2xl sm:text-3xl md:text-4xl ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'} font-bold mb-4 animate-fadeIn animation-delay-200 px-4`}>
      Complete Learning System
    </h2>
    <p className={`text-center ${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-sm sm:text-base mb-4 max-w-3xl mx-auto animate-fadeIn animation-delay-400 px-4`}>
      From beginner to advanced — master English with structured lessons, real-time feedback, and interactive practice
    </p>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
    {/* Level-Based Learning Paths - Clickable Card */}
    <div
      onClick={() => navigate('/learning-paths')}
      className={`reveal-card cursor-pointer ${darkMode ? 'bg-[#1e293b]/95 border-[#374151]' : 'bg-white/95 border-[#90caf9]'} backdrop-blur-sm p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl border-2 opacity-0 translate-y-8 transition-all duration-700 hover:shadow-[0_16px_40px_rgba(25,118,210,0.3)] hover:-translate-y-4 ${darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-[#1976d2]'} hover:scale-105 sm:hover:scale-110 hover:rotate-1 sm:hover:rotate-2 group`}
    >
      <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">📚</div>
      <h3 className={`text-base sm:text-lg font-bold mb-2 ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>
        Level-Based Learning Paths
      </h3>
      <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-xs sm:text-sm leading-relaxed`}>
        Progress from A1 to C1 with structured courses designed for your level
      </p>
      <div className={`mt-3 text-sm font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'} flex items-center gap-1`}>
        Explore Paths →
      </div>
    </div>

    {/* Other Feature Cards (No onClick) */}
    {[
      { icon: "✍️", title: "Grammar Lessons", desc: "Interactive lessons with examples, quizzes, and instant feedback",link:"/grammar"},
      { icon: "📖", title: "Vocabulary Builder", desc: "Daily words with pronunciation, meaning, and real-world usage examples",link:"/vocabulary" },
      { icon: "🎤", title: "Pronunciation Practice", desc: "AI-powered speech recognition checks your accent accuracy instantly" },
      { icon: "🎧", title: "Listening Practice", desc: "Audio clips, podcasts, and dialogues with comprehension questions" },
      { icon: "📝", title: "Reading & Comprehension", desc: "Short passages with MCQs to improve understanding and speed" ,link:"/reading"},
      { icon: "💬", title: "Writing Practice", desc: "Daily writing tasks with AI grammar correction and suggestions" },
      { icon: "👥", title: "Group Discussion", desc: "Join live group discussions to practice speaking and debating in English" ,link:"/discuss"}
    ].map((feature, idx) => (
      <div
        key={idx}
        className={`reveal-card ${darkMode ? 'bg-[#1e293b]/95 border-[#374151]' : 'bg-white/95 border-[#90caf9]'} backdrop-blur-sm p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl border-2 opacity-0 translate-y-8 transition-all duration-700 hover:shadow-[0_16px_40px_rgba(25,118,210,0.3)] hover:-translate-y-4 ${darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-[#1976d2]'} hover:scale-105 sm:hover:scale-110 hover:rotate-1 sm:hover:rotate-2 group`}
      >
        <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
        <h3 className={`text-base sm:text-lg font-bold mb-2 ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>{feature.title}</h3>
        <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-xs sm:text-sm leading-relaxed`}>{feature.desc}</p>
{/*       
    🟢 Footer clickable if link exists */}
    {/* {feature.link && (
      <div

        onClick={() => navigate(feature.link)}
        className={`mt-3 text-sm font-semibold ${
          darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'
        } flex items-center gap-1 hover:underline`}
      >
        Explore Path →
      </div>
      )} */}
      {feature.link && <div onClick={() => navigate(feature.link)} className={`mt-3 font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'} hover:underline cursor-pointer`}>Explore Path →</div>}
        


      </div>
      
    ))}
  </div>
</section>




      {/* Gamification */}
<section id="gamification" className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 ${darkMode ? 'bg-gradient-to-br from-[#1a1f3a] via-[#0f1729] to-[#0a0e27]' : 'bg-gradient-to-br from-[#e1f5fe] via-[#b3e5fc] to-[#81d4fa]'} relative overflow-hidden transition-colors duration-500`}>
  <div className={`absolute top-10 right-10 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 ${darkMode ? 'bg-[#2563eb]' : 'bg-[#42a5f5]'} rounded-full opacity-15 blur-3xl animate-pulse-slow`}></div>
  <div className={`absolute bottom-10 left-10 sm:left-20 w-72 sm:w-96 h-72 sm:h-96 ${darkMode ? 'bg-[#3b82f6]' : 'bg-[#1976d2]'} rounded-full opacity-15 blur-3xl animate-pulse-slow animation-delay-1000`}></div>
  
  <div className="text-center mb-10 sm:mb-12 relative z-10">
    <span className={`${darkMode ? 'bg-[#3b82f6] text-white' : 'bg-[#1976d2] text-white'} px-4 sm:px-5 py-2 rounded-full text-xs font-semibold mb-4 inline-block animate-fadeIn`}>
      GAMIFIED LEARNING
    </span>
    <h2 className={`text-2xl sm:text-3xl md:text-4xl ${darkMode ? 'text-[#60a5fa]' : 'text-[#0d47a1]'} font-bold mb-4 animate-fadeIn animation-delay-200 px-4`}>
      Learn While You Play
    </h2>
    <p className={`text-center ${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-sm sm:text-base mb-4 max-w-3xl mx-auto animate-fadeIn animation-delay-400 px-4`}>
      Gamified learning keeps you motivated and makes progress fun
    </p>
  </div>
  
  {/* Updated 5-Card Layout */}
  <div className="max-w-6xl mx-auto relative z-10">
    {/* First Row - 3 Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
      {[
        { icon: "🏆", title: "XP Points & Badges", desc: "Earn rewards for completing lessons, quizzes, and challenges" },
        { icon: "🔥", title: "Streak Rewards", desc: "Practice daily to unlock special badges and bonus XP" },
        { icon: "🎯", title: "Quests & Missions", desc: "Complete goals like 'Speak for 3 minutes' or 'Learn 50 words'" }
      ].map((feature, idx) => (
        <div
          key={idx}
          className={`reveal-card ${darkMode ? 'bg-[#1e293b]/95 border-[#374151]' : 'bg-white/95 border-[#64b5f6]'} backdrop-blur-md p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 opacity-0 translate-y-8 transition-all duration-700 hover:shadow-[0_20px_48px_rgba(25,118,210,0.4)] hover:-translate-y-4 sm:hover:-translate-y-5 ${darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-[#1976d2]'} hover:scale-105 sm:hover:scale-110 hover:rotate-2 sm:hover:rotate-3 group`}
        >
          <div className="text-4xl sm:text-5xl mb-3 animate-bounce-slow group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
          <h3 className={`text-base sm:text-lg font-bold mb-2 ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>{feature.title}</h3>
          <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-xs sm:text-sm leading-relaxed`}>{feature.desc}</p>
        </div>
      ))}
    </div>
    
    {/* Second Row - 2 Cards Centered */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
      {[
        { icon: "📈", title: "Leaderboards", desc: "Compete with friends and classmates for top rankings" },
        { icon: "🧩", title: "Mini Games", desc: "Word puzzles, matching games, and fill-in-the-blanks" }
      ].map((feature, idx) => (
        <div
          key={idx}
          className={`reveal-card ${darkMode ? 'bg-[#1e293b]/95 border-[#374151]' : 'bg-white/95 border-[#64b5f6]'} backdrop-blur-md p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 opacity-0 translate-y-8 transition-all duration-700 hover:shadow-[0_20px_48px_rgba(25,118,210,0.4)] hover:-translate-y-4 sm:hover:-translate-y-5 ${darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-[#1976d2]'} hover:scale-105 sm:hover:scale-110 hover:rotate-2 sm:hover:rotate-3 group`}
        >
          <div className="text-4xl sm:text-5xl mb-3 animate-bounce-slow group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
          <h3 className={`text-base sm:text-lg font-bold mb-2 ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>{feature.title}</h3>
          <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-xs sm:text-sm leading-relaxed`}>{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-center ${darkMode ? 'bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]' : 'bg-gradient-to-br from-[#90caf9] to-[#64b5f6]'} relative overflow-hidden transition-colors duration-500`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxOTc2ZDIiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white animate-fadeInUp px-4">
            Ready to Master English?
          </h2>
          <p className={`${darkMode ? 'text-[#bfdbfe]' : 'text-[#e3f2fd]'} text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-200 px-4`}>
            Join thousands of learners improving their English skills every day with PrepTalk
          </p>
          <button className="bg-white text-[#1976d2] px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#e3f2fd] shadow-[0_8px_28px_rgba(13,71,161,0.4)] transition-all duration-500 hover:shadow-[0_12px_36px_rgba(13,71,161,0.6)] hover:-translate-y-2 hover:scale-110 animate-fadeInUp animation-delay-400">
            Get Started Now — It's Free
          </button>
        </div>
      </section>

      {/* What Makes Us Different - Horizontal Scroll */}
      <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 ${darkMode ? 'bg-gradient-to-br from-[#0f1729] to-[#1a1f3a]' : 'bg-gradient-to-br from-[#bbdefb] to-[#90caf9]'} overflow-hidden transition-colors duration-500`}>
        <div className="text-center mb-10 sm:mb-12">
          <span className={`${darkMode ? 'bg-[#1e293b] text-[#60a5fa] border-[#374151]' : 'bg-white text-[#1976d2]'} px-4 sm:px-5 py-2 rounded-full text-xs font-semibold mb-4 inline-block animate-fadeIn border`}>
            WHY CHOOSE US
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl ${darkMode ? 'text-[#60a5fa]' : 'text-[#0d47a1]'} font-bold mb-4 animate-fadeIn animation-delay-200 px-4`}>
            What Makes Us Different
          </h2>
          <p className={`text-center ${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-sm sm:text-base mb-6 sm:mb-8 max-w-3xl mx-auto animate-fadeIn animation-delay-400 px-4`}>
            Powered by AI technology and designed for real-world communication
          </p>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex animate-scroll-fast gap-4 sm:gap-6">
            {[
              { icon: "🤖", title: "AI Conversation Partner", desc: "Chat with your AI tutor anytime — practice real conversations" },
              { icon: "✨", title: "Real-time Grammar Fix", desc: "AI detects and explains mistakes as you type or speak" },
              { icon: "🌍", title: "Native Language Support", desc: "Learn in Hindi, Tamil, or your language for better understanding",path:"/language" },
              { icon: "🎯", title: "Topic-Based Rooms", desc: "Practice Interview English, Travel English, or Business scenarios" },
              { icon: "📊", title: "Progress Dashboard", desc: "Visualize your vocabulary growth and skill improvements" },
              { icon: "⏱️", title: "5-Min Micro-Lessons", desc: "Short, focused lessons perfect for busy schedules" },
              { icon: "👥", title: "Community Practice", desc: "Chat with learners worldwide in 'English-only' mode" },
              { icon: "🔥", title: "Daily Streaks", desc: "Build consistency with daily challenges and rewards" },
              // Duplicate for seamless loop
              { icon: "🤖", title: "AI Conversation Partner", desc: "Chat with your AI tutor anytime — practice real conversations" },
              { icon: "✨", title: "Real-time Grammar Fix", desc: "AI detects and explains mistakes as you type or speak" },
              { icon: "🌍", title: "Native Language Support", desc: "Learn in Hindi, Tamil, or your language for better understanding" },
              { icon: "🎯", title: "Group Discussion", desc: "Practice Interview English, Travel English, or Business scenarios" }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-72 sm:w-80 ${darkMode ? 'bg-[#1e293b]/95 border-[#374151] hover:to-[#1e293b]' : 'bg-white/95 border-[#64b5f6] hover:to-[#e3f2fd]'} backdrop-blur-sm p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(25,118,210,0.35)] ${darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-[#1976d2]'} hover:bg-gradient-to-br hover:from-white hover:scale-105 group`}
              >
                <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                <h3 className={`text-base sm:text-lg font-bold mb-2 ${darkMode ? 'text-[#e0e7ff]' : 'text-[#0d47a1]'}`}>{feature.title}</h3>
                <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-[#1565c0]'} text-xs sm:text-sm leading-relaxed`}>{feature.desc}</p>

                {feature.path && (
      <div
        onClick={() => navigate(feature.path)}
        className={`mt-3 font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-[#1976d2]'} hover:underline cursor-pointer`}
      >
        Explore Path →
      </div>
    )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className={`${darkMode ? 'bg-gradient-to-r from-[#0f1729] to-[#1a1f3a]' : 'bg-gradient-to-r from-[#1976d2] to-[#1565c0]'} ${darkMode ? 'border-t border-[#2a3441]' : 'border-t border-[#42a5f5]'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">PrepTalk</h3>
              <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-white/80'} text-sm mb-4`}>
                Master English through AI-powered conversations, gamified learning, and personalized practice for interviews and beyond.
              </p>
              <div className="flex gap-3">
                <a href="#" className={`${darkMode ? 'bg-[#1e293b] hover:bg-[#2d3748]' : 'bg-white/20 hover:bg-white/30'} p-2 rounded-full transition`}>
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className={`${darkMode ? 'bg-[#1e293b] hover:bg-[#2d3748]' : 'bg-white/20 hover:bg-white/30'} p-2 rounded-full transition`}>
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className={`${darkMode ? 'bg-[#1e293b] hover:bg-[#2d3748]' : 'bg-white/20 hover:bg-white/30'} p-2 rounded-full transition`}>
                  <span className="text-xl">📸</span>
                </a>
                <a href="#" className={`${darkMode ? 'bg-[#1e293b] hover:bg-[#2d3748]' : 'bg-white/20 hover:bg-white/30'} p-2 rounded-full transition`}>
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Features</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Pricing</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>About Us</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Blog</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Careers</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Help Center</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>FAQs</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Tutorials</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Community</a></li>
                <li><a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>API Docs</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-lg">📧</span>
                  <a href="mailto:hello@preptalk.com" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>hello@preptalk.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📞</span>
                  <a href="tel:+911234567890" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>+91 123 456 7890</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📍</span>
                  <span className={`${darkMode ? 'text-[#94a3b8]' : 'text-white/80'} text-sm`}>Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-8 ${darkMode ? 'border-t border-[#2a3441]' : 'border-t border-white/20'} flex flex-col sm:flex-row justify-between items-center gap-4`}>
            <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-white/80'} text-sm text-center sm:text-left`}>
              © 2025 PrepTalk. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Privacy Policy</a>
              <a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Terms of Service</a>
              <a href="#" className={`${darkMode ? 'text-[#94a3b8] hover:text-[#60a5fa]' : 'text-white/80 hover:text-white'} text-sm transition`}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes floatIcons {
          from { transform: translateY(0); }
          to { transform: translateY(20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.15; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-floatIcons {
          animation: floatIcons 6s ease-in-out infinite alternate;
        }
        
        .animate-scroll-fast {
          animation: scroll-fast 15s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}