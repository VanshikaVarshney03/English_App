
import { useEffect, useState } from "react";

export default function LandingPage() {
  const texts = ["Speak Better.", "Write Smarter.", "Grow Confident."];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

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
    <div className="bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] text-[#0d47a1] overflow-x-hidden min-h-screen font-[Poppins]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg px-8 md:px-16 py-4 flex justify-between items-center z-50 border-b border-[#90caf9] shadow-[0_4px_12px_rgba(33,150,243,0.1)] animate-slideDown">
        <h1 className="text-2xl font-bold text-[#1976d2] animate-fadeIn">PrepTalk</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-[#1565c0] hover:text-[#0d47a1] transition-all duration-300 hover:scale-110">Home</a>
          <a href="#features" className="text-[#1565c0] hover:text-[#0d47a1] transition-all duration-300 hover:scale-110">Features</a>
          <a href="#gamification" className="text-[#1565c0] hover:text-[#0d47a1] transition-all duration-300 hover:scale-110">Rewards</a>
          <a href="#" className="text-[#1565c0] hover:text-[#0d47a1] transition-all duration-300 hover:scale-110">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-gradient-to-br from-[#e1f5fe] via-[#b3e5fc] to-[#81d4fa] relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#64b5f6] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#42a5f5] rounded-full opacity-20 blur-3xl animate-pulse animation-delay-1000"></div>
        
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex gap-16 animate-[floatIcons_6s_ease-in-out_infinite_alternate]">
          <img src="https://cdn-icons-png.flaticon.com/512/4762/4762313.png" alt="icon" className="w-14 opacity-70 drop-shadow-[0_0_20px_rgba(25,118,210,0.5)] animate-bounce animation-delay-200" />
          <img src="https://cdn-icons-png.flaticon.com/512/3094/3094850.png" alt="icon" className="w-14 opacity-70 drop-shadow-[0_0_20px_rgba(25,118,210,0.5)] animate-bounce animation-delay-400" />
          <img src="https://cdn-icons-png.flaticon.com/512/4762/4762322.png" alt="icon" className="w-14 opacity-70 drop-shadow-[0_0_20px_rgba(25,118,210,0.5)] animate-bounce animation-delay-600" />
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4 text-[#0d47a1] animate-fadeInUp">
          Learn English to <span className="text-[#1976d2] border-r-2 border-[#1976d2] animate-pulse">{text}</span>
        </h2>
        <p className="max-w-2xl text-[#1565c0] text-lg mb-3 animate-fadeInUp animation-delay-200">
          AI-powered practice, grammar correction, and gamified learning — all in one app.
        </p>
        <p className="text-[#1976d2] text-sm mb-2 animate-fadeInUp animation-delay-400">🏆 Track Progress · 🔥 Daily Streaks · 🎯 Level-Based Learning</p>
        <button className="mt-6 bg-gradient-to-r from-[#1976d2] to-[#1565c0] text-white px-8 py-3 rounded-full text-lg hover:from-[#1565c0] hover:to-[#0d47a1] shadow-[0_6px_20px_rgba(25,118,210,0.4)] transition-all duration-500 hover:shadow-[0_8px_28px_rgba(25,118,210,0.6)] hover:-translate-y-1 hover:scale-105 animate-fadeInUp animation-delay-600">
          Start Learning Free
        </button>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#e8f4fd] to-[#d1e9f6]">
        <h2 className="text-3xl md:text-4xl text-[#1976d2] font-semibold mb-4 text-center animate-fadeIn">
          Complete Learning System
        </h2>
        <p className="text-center text-[#1565c0] mb-12 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
          From beginner to advanced — master English with structured lessons, real-time feedback, and interactive practice
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "📚", title: "Level-Based Learning Paths", desc: "Progress from A1 to C1 with structured courses designed for your level" },
            { icon: "✍️", title: "Grammar Lessons", desc: "Interactive lessons with examples, quizzes, and instant feedback" },
            { icon: "📖", title: "Vocabulary Builder", desc: "Daily words with pronunciation, meaning, and real-world usage examples" },
            { icon: "🎤", title: "Pronunciation Practice", desc: "AI-powered speech recognition checks your accent accuracy instantly" },
            { icon: "🎧", title: "Listening Practice", desc: "Audio clips, podcasts, and dialogues with comprehension questions" },
            { icon: "📝", title: "Reading & Comprehension", desc: "Short passages with MCQs to improve understanding and speed" },
            { icon: "💬", title: "Writing Practice", desc: "Daily writing tasks with AI grammar correction and suggestions" }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="reveal-card bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#90caf9] opacity-0 translate-y-8 transition-all duration-700 hover:shadow-[0_12px_32px_rgba(25,118,210,0.25)] hover:-translate-y-3 hover:border-[#1976d2] hover:scale-105 hover:rotate-1"
            >
              <div className="text-4xl mb-3 animate-wiggle">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#0d47a1]">{feature.title}</h3>
              <p className="text-[#1565c0] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#bbdefb] to-[#90caf9]">
        <h2 className="text-3xl md:text-4xl text-[#0d47a1] font-semibold mb-4 text-center animate-fadeIn">
          What Makes Us Different
        </h2>
        <p className="text-center text-[#1565c0] mb-12 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
          Powered by AI technology and designed for real-world communication
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🤖", title: "AI Conversation Partner", desc: "Chat with your AI tutor anytime — practice real conversations" },
            { icon: "✨", title: "Real-time Grammar Fix", desc: "AI detects and explains mistakes as you type or speak" },
            { icon: "🌍", title: "Native Language Support", desc: "Learn in Hindi, Tamil, or your language for better understanding" },
            { icon: "🎯", title: "Topic-Based Rooms", desc: "Practice Interview English, Travel English, or Business scenarios" },
            { icon: "📊", title: "Progress Dashboard", desc: "Visualize your vocabulary growth and skill improvements" },
            { icon: "⏱️", title: "5-Min Micro-Lessons", desc: "Short, focused lessons perfect for busy schedules" },
            { icon: "👥", title: "Community Practice", desc: "Chat with learners worldwide in 'English-only' mode" },
            { icon: "🔥", title: "Daily Streaks", desc: "Build consistency with daily challenges and rewards" }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="reveal-card bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#64b5f6] opacity-0 translate-y-8 transition-all duration-700 hover:shadow-[0_12px_32px_rgba(25,118,210,0.3)] hover:-translate-y-3 hover:border-[#1976d2] hover:bg-gradient-to-br hover:from-white hover:to-[#e3f2fd]"
            >
              <div className="text-4xl mb-3 animate-wiggle">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#0d47a1]">{feature.title}</h3>
              <p className="text-[#1565c0] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gamification */}
      <section id="gamification" className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#e1f5fe] via-[#b3e5fc] to-[#81d4fa] relative overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-[#42a5f5] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#1976d2] rounded-full opacity-10 blur-3xl animate-pulse animation-delay-1000"></div>
        
        <h2 className="text-3xl md:text-4xl text-[#0d47a1] font-semibold mb-4 text-center animate-fadeIn relative z-10">
          Learn While You Play
        </h2>
        <p className="text-center text-[#1565c0] mb-12 max-w-2xl mx-auto animate-fadeIn animation-delay-200 relative z-10">
          Gamified learning keeps you motivated and makes progress fun
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {[
            { icon: "🏆", title: "XP Points & Badges", desc: "Earn rewards for completing lessons, quizzes, and challenges" },
            { icon: "🔥", title: "Streak Rewards", desc: "Practice daily to unlock special badges and bonus XP" },
            { icon: "🎯", title: "Quests & Missions", desc: "Complete goals like 'Speak for 3 minutes' or 'Learn 50 words'" },
            { icon: "📈", title: "Leaderboards", desc: "Compete with friends and classmates for top rankings" },
            { icon: "🧩", title: "Mini Games", desc: "Word puzzles, matching games, and fill-in-the-blanks" },
            { icon: "⭐", title: "Achievement System", desc: "Unlock milestones and celebrate your learning journey" }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="reveal-card bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border-2 border-[#64b5f6] opacity-0 translate-y-8 transition-all duration-700 hover:shadow-[0_16px_40px_rgba(25,118,210,0.35)] hover:-translate-y-4 hover:border-[#1976d2] hover:scale-110 hover:rotate-2"
            >
              <div className="text-5xl mb-3 animate-bounce-slow">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#0d47a1]">{feature.title}</h3>
              <p className="text-[#1565c0] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#90caf9] to-[#64b5f6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxOTc2ZDIiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white animate-fadeInUp relative z-10">
          Ready to Master English?
        </h2>
        <p className="text-[#e3f2fd] mb-8 max-w-xl mx-auto animate-fadeInUp animation-delay-200 relative z-10">
          Join thousands of learners improving their English skills every day with PrepTalk
        </p>
        <button className="bg-white text-[#1976d2] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#e3f2fd] shadow-[0_6px_24px_rgba(13,71,161,0.3)] transition-all duration-500 hover:shadow-[0_10px_32px_rgba(13,71,161,0.5)] hover:-translate-y-1 hover:scale-110 animate-fadeInUp animation-delay-400 relative z-10">
          Get Started Now — It's Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1976d2] to-[#1565c0] text-center py-6 text-white/90 border-t border-[#42a5f5]">
        © 2025 PrepTalk. All Rights Reserved.
      </footer>

      <style>{`
        @keyframes floatIcons {
          from { transform: translateX(-50%) translateY(0); }
          to { transform: translateX(-50%) translateY(20px); }
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
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
        
        .animate-wiggle:hover {
          animation: wiggle 0.5s ease-in-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
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
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
