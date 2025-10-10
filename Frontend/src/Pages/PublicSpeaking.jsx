import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function PublicSpeaking() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);

  const modules = [
    {
      id: 1,
      title: "Presentation Skills (प्रस्तुति कौशल)",
      emoji: "📊",
      color: "from-purple-400 to-indigo-500",
      difficulty: "hard",
      description: "Master professional presentations with confidence",
      lessons: [
        {
          title: "Opening Strategies",
          content: "How to grab audience attention from the start",
          hindi: "शुरुआत से दर्शकों का ध्यान कैसे आकर्षित करें",
          techniques: [
            { name: "Powerful Question", example: "What if I told you that...", hindi: "क्या होगा अगर मैं आपसे कहूं कि..." },
            { name: "Shocking Statistic", example: "Did you know that 90% of people...", hindi: "क्या आप जानते हैं कि 90% लोग..." },
            { name: "Personal Story", example: "Five years ago, I faced a challenge...", hindi: "पांच साल पहले, मुझे एक चुनौती का सामना करना पड़ा..." }
          ]
        },
        {
          title: "Body Language",
          content: "Non-verbal communication for impact",
          hindi: "प्रभाव के लिए गैर-मौखिक संचार",
          techniques: [
            { name: "Eye Contact", example: "Maintain 3-5 seconds with individuals", hindi: "व्यक्तियों के साथ 3-5 सेकंड बनाए रखें" },
            { name: "Gestures", example: "Use open palms to show honesty", hindi: "ईमानदारी दिखाने के लिए खुली हथेलियों का उपयोग करें" },
            { name: "Posture", example: "Stand tall with feet shoulder-width apart", hindi: "पैरों को कंधे की चौड़ाई के बराबर रखकर सीधे खड़े हों" }
          ]
        },
        {
          title: "Closing with Impact",
          content: "Leave a lasting impression",
          hindi: "स्थायी प्रभाव छोड़ें",
          techniques: [
            { name: "Call to Action", example: "I urge you to take the first step today...", hindi: "मैं आपसे आग्रह करता हूं कि आज पहला कदम उठाएं..." },
            { name: "Memorable Quote", example: "As Winston Churchill said...", hindi: "जैसा कि विंस्टन चर्चिल ने कहा था..." },
            { name: "Circle Back", example: "Remember the question I asked at the start?", hindi: "याद है मैंने शुरुआत में जो सवाल पूछा था?" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Debate Techniques (बहस तकनीक)",
      emoji: "⚖️",
      color: "from-red-400 to-pink-500",
      difficulty: "hard",
      description: "Argue effectively and persuasively",
      lessons: [
        {
          title: "Constructing Arguments",
          content: "Build logical and persuasive arguments",
          hindi: "तार्किक और प्रेरक तर्क बनाएं",
          techniques: [
            { name: "Claim-Evidence-Reasoning", example: "Claim: X is better. Evidence: Studies show... Reasoning: Therefore...", hindi: "दावा: X बेहतर है। साक्ष्य: अध्ययन दिखाते हैं... तर्क: इसलिए..." },
            { name: "Analogies", example: "Just as a ship needs a captain, a company needs...", hindi: "जैसे जहाज को कप्तान की जरूरत होती है, कंपनी को..." },
            { name: "Expert Testimony", example: "According to Dr. Smith, renowned in this field...", hindi: "डॉ. स्मिथ के अनुसार, जो इस क्षेत्र में प्रसिद्ध हैं..." }
          ]
        },
        {
          title: "Rebuttal Strategies",
          content: "Counter opposing arguments effectively",
          hindi: "विपक्षी तर्कों का प्रभावी ढंग से जवाब दें",
          techniques: [
            { name: "Point Out Logical Fallacies", example: "That's a false dichotomy because...", hindi: "यह एक झूठी द्विभाजन है क्योंकि..." },
            { name: "Use Counter-Evidence", example: "However, recent research contradicts this...", hindi: "हालांकि, हालिया शोध इसका खंडन करता है..." },
            { name: "Concede and Counter", example: "While I agree with X, I must point out that Y...", hindi: "जबकि मैं X से सहमत हूं, मुझे यह बताना होगा कि Y..." }
          ]
        },
        {
          title: "Persuasive Language",
          content: "Words and phrases that convince",
          hindi: "शब्द और वाक्यांश जो मनाते हैं",
          techniques: [
            { name: "Modal Verbs", example: "We must, should, ought to consider...", hindi: "हमें विचार करना चाहिए, करना होगा..." },
            { name: "Rhetorical Questions", example: "Can we really afford to ignore this?", hindi: "क्या हम सच में इसे नजरअंदाज कर सकते हैं?" },
            { name: "Emotive Language", example: "This devastating impact affects millions...", hindi: "यह विनाशकारी प्रभाव लाखों को प्रभावित करता है..." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Handling Q&A (प्रश्नोत्तर संभालना)",
      emoji: "🙋",
      color: "from-blue-400 to-cyan-500",
      difficulty: "hard",
      description: "Respond to questions confidently",
      lessons: [
        {
          title: "Types of Questions",
          content: "Identify and handle different question types",
          hindi: "विभिन्न प्रश्न प्रकारों की पहचान और प्रबंधन",
          techniques: [
            { name: "Clarifying Questions", example: "That's a great question. Let me clarify...", hindi: "यह एक अच्छा सवाल है। मुझे स्पष्ट करने दें..." },
            { name: "Hostile Questions", example: "I understand your concern. However...", hindi: "मैं आपकी चिंता समझता हूं। हालांकि..." },
            { name: "Complex Questions", example: "That's multifaceted. Let me address each part...", hindi: "यह बहुआयामी है। मुझे प्रत्येक भाग को संबोधित करने दें..." }
          ]
        },
        {
          title: "Buying Time Techniques",
          content: "Pause and think before answering",
          hindi: "जवाब देने से पहले रुकें और सोचें",
          techniques: [
            { name: "Repeat the Question", example: "So you're asking about...", hindi: "तो आप पूछ रहे हैं..." },
            { name: "Bridge Phrases", example: "That's an interesting point. What I can say is...", hindi: "यह एक दिलचस्प बिंदु है। मैं जो कह सकता हूं वह है..." },
            { name: "Acknowledge Before Answering", example: "Thank you for that question. Here's my view...", hindi: "उस सवाल के लिए धन्यवाद। यह मेरा दृष्टिकोण है..." }
          ]
        },
        {
          title: "Handling Difficult Situations",
          content: "Manage challenging interactions",
          hindi: "चुनौतीपूर्ण बातचीत का प्रबंधन करें",
          techniques: [
            { name: "I Don't Know", example: "That's outside my expertise, but I'll find out...", hindi: "यह मेरी विशेषज्ञता से बाहर है, लेकिन मैं पता लगाऊंगा..." },
            { name: "Deflect Gracefully", example: "While that's important, let me focus on...", hindi: "जबकि यह महत्वपूर्ण है, मुझे ध्यान केंद्रित करने दें..." },
            { name: "Stay Calm", example: "I appreciate your passion. Let's discuss this respectfully...", hindi: "मैं आपके जोश की सराहना करता हूं। आइए इस पर सम्मानपूर्वक चर्चा करें..." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Voice Modulation (आवाज़ मॉड्यूलेशन)",
      emoji: "🎵",
      color: "from-green-400 to-emerald-500",
      difficulty: "hard",
      description: "Use your voice as a powerful tool",
      lessons: [
        {
          title: "Pace & Rhythm",
          content: "Control speaking speed for effect",
          hindi: "प्रभाव के लिए बोलने की गति को नियंत्रित करें",
          techniques: [
            { name: "Slow for Emphasis", example: "This... is... crucial.", hindi: "यह... बहुत... महत्वपूर्ण है।" },
            { name: "Quick for Excitement", example: "And suddenly everything changed!", hindi: "और अचानक सब कुछ बदल गया!" },
            { name: "Strategic Pauses", example: "Consider this. (pause) What would you do?", hindi: "इस पर विचार करें। (विराम) आप क्या करेंगे?" }
          ]
        },
        {
          title: "Pitch & Tone",
          content: "Vary pitch to maintain interest",
          hindi: "रुचि बनाए रखने के लिए पिच में बदलाव करें",
          techniques: [
            { name: "Rising Intonation", example: "Can we really accept this?", hindi: "क्या हम सच में इसे स्वीकार कर सकते हैं?" },
            { name: "Falling Intonation", example: "We must take action now.", hindi: "हमें अभी कार्रवाई करनी चाहिए।" },
            { name: "Enthusiastic Tone", example: "This is an incredible opportunity!", hindi: "यह एक अविश्वसनीय अवसर है!" }
          ]
        },
        {
          title: "Volume Control",
          content: "Adjust volume strategically",
          hindi: "रणनीतिक रूप से वॉल्यूम समायोजित करें",
          techniques: [
            { name: "Louder for Emphasis", example: "THIS is what matters!", hindi: "यही महत्वपूर्ण है!" },
            { name: "Softer for Intimacy", example: "Let me share something personal...", hindi: "मुझे कुछ व्यक्तिगत साझा करने दें..." },
            { name: "Whisper for Drama", example: "(whisper) This changed everything.", hindi: "(फुसफुसाहट) इसने सब कुछ बदल दिया।" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Storytelling in Speeches (भाषणों में कहानी कहना)",
      emoji: "📖",
      color: "from-yellow-400 to-orange-500",
      difficulty: "hard",
      description: "Engage audiences through narrative",
      lessons: [
        {
          title: "Story Structure",
          content: "Build compelling narratives",
          hindi: "आकर्षक कथाएं बनाएं",
          techniques: [
            { name: "Setup-Conflict-Resolution", example: "I faced X problem, struggled with Y, then discovered Z", hindi: "मुझे X समस्या का सामना करना पड़ा, Y के साथ संघर्ष किया, फिर Z की खोज की" },
            { name: "The Hero's Journey", example: "I started in doubt, faced challenges, emerged transformed", hindi: "मैंने संदेह में शुरुआत की, चुनौतियों का सामना किया, परिवर्तित होकर उभरा" },
            { name: "Before-After", example: "Before this, I believed X. After, I realized Y", hindi: "इससे पहले, मुझे X पर विश्वास था। बाद में, मुझे Y का एहसास हुआ" }
          ]
        },
        {
          title: "Sensory Details",
          content: "Make stories vivid and memorable",
          hindi: "कहानियों को जीवंत और यादगार बनाएं",
          techniques: [
            { name: "Visual Details", example: "The room was dimly lit, shadows dancing...", hindi: "कमरा मंद प्रकाश था, छाया नृत्य कर रही थी..." },
            { name: "Emotional Connection", example: "My heart pounded as I realized...", hindi: "जब मुझे एहसास हुआ तो मेरा दिल धड़क उठा..." },
            { name: "Dialogue", example: "She looked at me and said, 'You can do this.'", hindi: "उसने मुझे देखा और कहा, 'तुम यह कर सकते हो।'" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Impromptu Speaking (तात्कालिक भाषण)",
      emoji: "⚡",
      color: "from-pink-400 to-rose-500",
      difficulty: "hard",
      description: "Speak confidently without preparation",
      lessons: [
        {
          title: "Quick Structuring",
          content: "Organize thoughts in seconds",
          hindi: "सेकंडों में विचारों को व्यवस्थित करें",
          techniques: [
            { name: "PREP Method", example: "Point-Reason-Example-Point", hindi: "बिंदु-कारण-उदाहरण-बिंदु" },
            { name: "Past-Present-Future", example: "Where we were, where we are, where we're going", hindi: "हम कहां थे, हम कहां हैं, हम कहां जा रहे हैं" },
            { name: "Problem-Solution", example: "Here's the issue, here's my proposal", hindi: "यह मुद्दा है, यह मेरा प्रस्ताव है" }
          ]
        },
        {
          title: "Filler Elimination",
          content: "Avoid um, uh, like, you know",
          hindi: "um, uh, like, you know से बचें",
          techniques: [
            { name: "Embrace Silence", example: "Pause instead of filling with sounds", hindi: "ध्वनि से भरने के बजाय रुकें" },
            { name: "Breath Control", example: "Breathe at natural breaks", hindi: "प्राकृतिक ब्रेक पर सांस लें" },
            { name: "Think Then Speak", example: "Organize thought before vocalizing", hindi: "बोलने से पहले विचार व्यवस्थित करें" }
          ]
        }
      ]
    }
  ];

  const toggleComplete = (id) => {
    if (completedModules.includes(id)) {
      setCompletedModules(completedModules.filter(m => m !== id));
    } else {
      setCompletedModules([...completedModules, id]);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-[#0f1729]/90' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-[#2a3441]' : 'border-gray-200'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/hard-level')}
            className={`flex items-center gap-2 ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6]' : 'text-[#1976d2] hover:text-[#1565c0]'} font-semibold transition-all hover:scale-105`}
          >
            <span className="text-xl">←</span>
            <span>Back to Topics</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-purple-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🎙️</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'}`}>
                {completedModules.length}/{modules.length}
              </span>
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎙️</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Public Speaking & Debates
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Master professional presentations, debates, and persuasive communication
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-purple-400'
              } ${completedModules.includes(module.id) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${module.color} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">{module.emoji}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(module.id);
                    }}
                    className={`${completedModules.includes(module.id) ? 'bg-white text-green-600' : 'bg-white/20'} p-1.5 rounded-full hover:scale-110 transition-all`}
                  >
                    {completedModules.includes(module.id) ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-1">{module.title}</h3>
                <p className="text-sm opacity-90">{module.description}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-semibold ${darkMode ? 'text-red-400' : 'text-red-600'} uppercase`}>
                    {module.difficulty}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                    {module.lessons.length} techniques
                  </span>
                </div>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'} font-semibold`}>
                  Click to learn →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Module Detail Modal */}
      {selectedModule && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedModule(null)}
        >
          <div 
            className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedModule.color} p-8 text-white text-center sticky top-0`}>
              <div className="text-6xl mb-4">{selectedModule.emoji}</div>
              <h2 className="text-3xl font-bold mb-2">{selectedModule.title}</h2>
              <p className="text-sm opacity-90">{selectedModule.description}</p>
            </div>
            <div className="p-8">
              {selectedModule.lessons.map((lesson, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl mb-6`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                    {lesson.title}
                  </h3>
                  <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} mb-2`}>{lesson.content}</p>
                  <p className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'} mb-4 italic`}>{lesson.hindi}</p>
                  <div className="space-y-3">
                    {lesson.techniques.map((tech, i) => (
                      <div key={i} className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} p-4 rounded-lg`}>
                        <h4 className={`font-semibold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                          {tech.name}
                        </h4>
                        <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} mb-1 italic`}>
                          "{tech.example}"
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'}`}>
                          {tech.hindi}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  toggleComplete(selectedModule.id);
                  setSelectedModule(null);
                }}
                className={`w-full ${
                  completedModules.includes(selectedModule.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${selectedModule.color}`
                } text-white font-bold py-4 rounded-full transition-all hover:scale-105`}
              >
                {completedModules.includes(selectedModule.id) ? '✓ Marked as Completed' : 'Mark as Completed'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
