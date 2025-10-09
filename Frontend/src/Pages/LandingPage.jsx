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
    <div className="bg-[#0a0f1a] text-white overflow-x-hidden min-h-screen font-[Poppins]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[rgba(10,15,26,0.8)] backdrop-blur-md px-8 md:px-16 py-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-[#4f9cff]">LinguaLearn</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-[#4f9cff] transition">Home</a>
          <a href="#features" className="hover:text-[#4f9cff] transition">Features</a>
          <a href="#" className="hover:text-[#4f9cff] transition">Community</a>
          <a href="#" className="hover:text-[#4f9cff] transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-[radial-gradient(circle_at_20%_20%,#122040_0%,#0a0f1a_100%)]">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex gap-16 animate-[floatIcons_6s_ease-in-out_infinite_alternate]">
          <img src="https://cdn-icons-png.flaticon.com/512/4762/4762313.png" alt="icon" className="w-14 opacity-80 drop-shadow-[0_0_10px_#4f9cff]" />
          <img src="https://cdn-icons-png.flaticon.com/512/3094/3094850.png" alt="icon" className="w-14 opacity-80 drop-shadow-[0_0_10px_#4f9cff]" />
          <img src="https://cdn-icons-png.flaticon.com/512/4762/4762322.png" alt="icon" className="w-14 opacity-80 drop-shadow-[0_0_10px_#4f9cff]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
          Learn English to <span className="text-[#4f9cff] border-r-2 border-[#4f9cff] animate-pulse">{text}</span>
        </h2>
        <p className="max-w-2xl text-[#c8d6ff]">
          AI-powered practice, grammar correction, and gamified learning — all in one app.
        </p>
        <button className="mt-8 bg-[#4f9cff] text-white px-8 py-3 rounded-full text-lg hover:bg-[#1b66ff] shadow-[0_0_20px_#4f9cff] transition">
          Start Learning
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-28 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl text-[#4f9cff] font-semibold mb-12">
          Our Core & Unique Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "AI Conversation Partner", desc: "Chat in real-time with your AI tutor to improve fluency and grammar." },
            { title: "Pronunciation Practice", desc: "Use voice input to get instant pronunciation accuracy feedback." },
            { title: "Daily Challenges", desc: "Keep your learning streak alive with fun daily goals and rewards." },
            { title: "Progress Dashboard", desc: "Visualize your vocabulary growth and skill improvement easily." },
            { title: "Topic-based Rooms", desc: "Practice ‘Interview English’ or ‘Travel English’ with real scenarios." }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="reveal-card bg-[#10182c] p-8 rounded-xl shadow-[0_0_15px_rgba(79,156,255,0.2)] opacity-0 translate-y-8 transition duration-700 hover:shadow-[0_0_25px_rgba(79,156,255,0.5)] hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#c8d6ff] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#10182c] text-center py-6 text-[#c8d6ff]">
        © 2025 LinguaLearn. All Rights Reserved.
      </footer>

      <style>{`
        @keyframes floatIcons {
          from { transform: translateX(-50%) translateY(0); }
          to { transform: translateX(-50%) translateY(20px); }
        }
      `}</style>
    </div>
  );
}