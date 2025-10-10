import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function ChallengeMode() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isPaused, setIsPaused] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [showResult, setShowResult] = useState(false);
  
  // Voice Recognition States
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [analysis, setAnalysis] = useState(null);

  const challenges = [
    {
      id: 1,
      title: "Describe Your Dream Job",
      emoji: "💼",
      color: "from-blue-400 to-indigo-500",
      difficulty: "Medium",
      promptPoints: [
        "What would be your ideal profession?",
        "What skills would you need?",
        "Why does this job appeal to you?",
        "What impact would you want to make?",
        "Describe a typical day in this role"
      ],
      hindiPoints: [
        "आपका आदर्श पेशा क्या होगा?",
        "आपको किन कौशलों की आवश्यकता होगी?",
        "यह नौकरी आपको क्यों पसंद है?",
        "आप क्या प्रभाव डालना चाहेंगे?",
        "इस भूमिका में एक सामान्य दिन का वर्णन करें"
      ]
    },
    {
      id: 2,
      title: "A Memorable Travel Experience",
      emoji: "✈️",
      color: "from-green-400 to-teal-500",
      difficulty: "Easy",
      promptPoints: [
        "Where did you go and when?",
        "Who did you travel with?",
        "What did you see and do there?",
        "What was the most memorable moment?",
        "Would you recommend this place?"
      ],
      hindiPoints: [
        "आप कहां और कब गए थे?",
        "आप किसके साथ यात्रा किए थे?",
        "आपने वहां क्या देखा और क्या किया?",
        "सबसे यादगार पल क्या था?",
        "क्या आप इस जगह की सिफारिश करेंगे?"
      ]
    },
    {
      id: 3,
      title: "Technology and Society",
      emoji: "📱",
      color: "from-purple-400 to-pink-500",
      difficulty: "Hard",
      promptPoints: [
        "How has technology changed our lives?",
        "What are the positive impacts?",
        "What are the negative effects?",
        "How do you see technology in 10 years?",
        "What advice would you give about technology use?"
      ],
      hindiPoints: [
        "प्रौद्योगिकी ने हमारे जीवन को कैसे बदल दिया है?",
        "सकारात्मक प्रभाव क्या हैं?",
        "नकारात्मक प्रभाव क्या हैं?",
        "आप 10 साल में प्रौद्योगिकी को कैसे देखते हैं?",
        "प्रौद्योगिकी उपयोग के बारे में आप क्या सलाह देंगे?"
      ]
    },
    {
      id: 4,
      title: "Climate Change and Environment",
      emoji: "🌍",
      color: "from-orange-400 to-red-500",
      difficulty: "Hard",
      promptPoints: [
        "What is climate change?",
        "How does it affect our planet?",
        "What can individuals do to help?",
        "What role should governments play?",
        "Are you optimistic about the future?"
      ],
      hindiPoints: [
        "जलवायु परिवर्तन क्या है?",
        "यह हमारे ग्रह को कैसे प्रभावित करता है?",
        "व्यक्ति मदद के लिए क्या कर सकते हैं?",
        "सरकारों को क्या भूमिका निभानी चाहिए?",
        "क्या आप भविष्य के बारे में आशावादी हैं?"
      ]
    },
    {
      id: 5,
      title: "Your Favorite Hobby",
      emoji: "🎨",
      color: "from-yellow-400 to-orange-500",
      difficulty: "Easy",
      promptPoints: [
        "What is your hobby?",
        "When did you start and why?",
        "How often do you practice it?",
        "What have you learned from it?",
        "How does it make you feel?"
      ],
      hindiPoints: [
        "आपका शौक क्या है?",
        "आपने कब और क्यों शुरू किया?",
        "आप कितनी बार अभ्यास करते हैं?",
        "आपने इससे क्या सीखा है?",
        "यह आपको कैसा महसूस कराता है?"
      ]
    },
    {
      id: 6,
      title: "Education System",
      emoji: "🎓",
      color: "from-cyan-400 to-blue-500",
      difficulty: "Medium",
      promptPoints: [
        "What makes a good education system?",
        "How can we improve learning?",
        "Is online education effective?",
        "What subjects should be mandatory?",
        "How important are exams?"
      ],
      hindiPoints: [
        "एक अच्छी शिक्षा प्रणाली क्या बनाती है?",
        "हम सीखने में कैसे सुधार कर सकते हैं?",
        "क्या ऑनलाइन शिक्षा प्रभावी है?",
        "कौन से विषय अनिवार्य होने चाहिए?",
        "परीक्षाएं कितनी महत्वपूर्ण हैं?"
      ]
    },
    {
      id: 7,
      title: "A Person Who Inspires You",
      emoji: "⭐",
      color: "from-red-400 to-pink-500",
      difficulty: "Medium",
      promptPoints: [
        "Who is this person?",
        "How do you know them?",
        "What qualities do they have?",
        "What have they achieved?",
        "How have they influenced you?"
      ],
      hindiPoints: [
        "यह व्यक्ति कौन है?",
        "आप उन्हें कैसे जानते हैं?",
        "उनके पास कौन से गुण हैं?",
        "उन्होंने क्या हासिल किया है?",
        "उन्होंने आपको कैसे प्रभावित किया है?"
      ]
    },
    {
      id: 8,
      title: "Social Media Impact",
      emoji: "📲",
      color: "from-teal-400 to-green-500",
      difficulty: "Hard",
      promptPoints: [
        "How do you use social media?",
        "What are its benefits?",
        "What are its drawbacks?",
        "How has it changed communication?",
        "Should there be regulations?"
      ],
      hindiPoints: [
        "आप सोशल मीडिया का उपयोग कैसे करते हैं?",
        "इसके क्या लाभ हैं?",
        "इसकी क्या कमियां हैं?",
        "इसने संचार को कैसे बदल दिया है?",
        "क्या नियम होने चाहिए?"
      ]
    },
    {
      id: 9,
      title: "Healthy Lifestyle",
      emoji: "🏃",
      color: "from-pink-400 to-rose-500",
      difficulty: "Easy",
      promptPoints: [
        "What does a healthy lifestyle mean to you?",
        "What are your daily health habits?",
        "How important is exercise?",
        "What about diet and nutrition?",
        "What advice would you give others?"
      ],
      hindiPoints: [
        "आपके लिए स्वस्थ जीवनशैली का क्या अर्थ है?",
        "आपकी दैनिक स्वास्थ्य आदतें क्या हैं?",
        "व्यायाम कितना महत्वपूर्ण है?",
        "आहार और पोषण के बारे में क्या?",
        "आप दूसरों को क्या सलाह देंगे?"
      ]
    },
    {
      id: 10,
      title: "Future of Work",
      emoji: "💻",
      color: "from-indigo-400 to-purple-500",
      difficulty: "Hard",
      promptPoints: [
        "How is work changing?",
        "Will AI replace jobs?",
        "What skills will be important?",
        "Is remote work the future?",
        "How should we prepare?"
      ],
      hindiPoints: [
        "काम कैसे बदल रहा है?",
        "क्या AI नौकरियों को बदल देगा?",
        "कौन से कौशल महत्वपूर्ण होंगे?",
        "क्या रिमोट वर्क भविष्य है?",
        "हमें कैसे तैयार होना चाहिए?"
      ]
    }
  ];

  // Timer Logic
  useEffect(() => {
    let interval;
    if (challengeStarted && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (isRecording) stopRecording();
      setShowResult(true);
    }
    return () => clearInterval(interval);
  }, [challengeStarted, isPaused, timeLeft]);

  // Speech Recognition Setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';
      
      recognitionInstance.onresult = (event) => {
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPiece = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcriptPiece + ' ';
          }
        }
        
        if (finalTranscript) {
          setTranscript(prev => prev + finalTranscript);
          const words = (transcript + finalTranscript).trim().split(/\s+/).filter(w => w.length > 0);
          setWordCount(words.length);
        }
      };
      
      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (event.error !== 'no-speech') {
          setIsRecording(false);
        }
      };
      
      recognitionInstance.onend = () => {
        if (isRecording && challengeStarted && timeLeft > 0) {
          try {
            recognitionInstance.start();
          } catch (e) {
            console.error('Failed to restart recognition:', e);
          }
        }
      };
      
      setRecognition(recognitionInstance);
    }
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startChallenge = (topic) => {
    setSelectedTopic(topic);
    setTimeLeft(300);
    setChallengeStarted(true);
    setShowResult(false);
    setTranscript('');
    setWordCount(0);
    setAnalysis(null);
  };

  const startRecording = () => {
    if (recognition) {
      try {
        recognition.start();
        setIsRecording(true);
        setTranscript('');
        setWordCount(0);
      } catch (e) {
        console.error('Failed to start recording:', e);
      }
    }
  };

  const stopRecording = () => {
    if (recognition && isRecording) {
      recognition.stop();
      setIsRecording(false);
      analyzeTranscript();
    }
  };

    const analyzeTranscript = () => {
    const words = transcript.trim().split(/\s+/).filter(w => w.length > 0);
    const sentences = transcript.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    const commonErrors = [];
    const lowerTranscript = transcript.toLowerCase();
    
    if (words.length < 50) {
      commonErrors.push("Try to speak more (aim for 100+ words)");
    }
    if (sentences.length < 5) {
      commonErrors.push("Use more complete sentences");
    }
    if (!transcript.match(/[.!?]/)) {
      commonErrors.push("Add proper punctuation to end sentences");
    }
    if (words.length > 0 && new Set(words).size / words.length < 0.5) {
      commonErrors.push("Try using more diverse vocabulary");
    }
    
    const fluencyScore = Math.min(100, Math.floor((words.length / 150) * 100));
    const grammarScore = Math.max(50, 100 - (commonErrors.length * 12));
    const pronunciationScore = Math.floor(75 + Math.random() * 25);
    const overallScore = Math.floor((fluencyScore + grammarScore + pronunciationScore) / 3);
    
    setAnalysis({
      wordCount: words.length,
      sentenceCount: sentences.length,
      fluencyScore,
      grammarScore,
      pronunciationScore,
      overallScore,
      errors: commonErrors,
      avgWordsPerSentence: sentences.length > 0 ? (words.length / sentences.length).toFixed(1) : 0
    });
  };

  const completeChallenge = () => {
    if (isRecording) {
      stopRecording();
    }
    if (!completedChallenges.includes(selectedTopic.id)) {
      setCompletedChallenges([...completedChallenges, selectedTopic.id]);
    }
    if (!analysis && transcript) {
      analyzeTranscript();
    }
    setShowResult(true);
  };

  const resetChallenge = () => {
    if (isRecording) {
      recognition.stop();
    }
    setChallengeStarted(false);
    setSelectedTopic(null);
    setTimeLeft(300);
    setIsPaused(false);
    setShowResult(false);
    setIsRecording(false);
    setTranscript('');
    setWordCount(0);
    setAnalysis(null);
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'Easy') return darkMode ? 'text-green-400' : 'text-green-600';
    if (difficulty === 'Medium') return darkMode ? 'text-yellow-400' : 'text-yellow-600';
    return darkMode ? 'text-red-400' : 'text-red-600';
  };

  // Challenge Screen
  if (challengeStarted && selectedTopic && !showResult) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500 p-4`}>
        <div className="max-w-6xl mx-auto py-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Timer & Controls */}
            <div>
              <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-8 shadow-2xl mb-6`}>
                <div className="text-center mb-6">
                  <div className={`inline-block ${timeLeft <= 60 ? 'animate-pulse' : ''}`}>
                    <div className={`text-6xl font-bold ${timeLeft <= 60 ? 'text-red-500' : darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>
                      {formatTime(timeLeft)}
                    </div>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mt-2`}>
                    Time Remaining
                  </div>
                </div>

                <div className={`w-full ${darkMode ? 'bg-[#0f1729]' : 'bg-gray-200'} rounded-full h-3 mb-6`}>
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      timeLeft <= 60 ? 'bg-red-500' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
                    }`}
                    style={{width: `${(timeLeft / 300) * 100}%`}}
                  ></div>
                </div>

                <div className="flex gap-3 justify-center mb-6">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105`}
                  >
                    {isPaused ? '▶ Resume' : '⏸ Pause'}
                  </button>
                  <button
                    onClick={resetChallenge}
                    className={`${darkMode ? 'bg-[#1e293b] text-[#60a5fa] border-2 border-[#60a5fa]' : 'bg-white text-indigo-600 border-2 border-indigo-600'} px-8 py-3 rounded-full font-semibold transition-all hover:scale-105`}
                  >
                    ✕ Exit
                  </button>
                </div>

                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-indigo-50'} p-6 rounded-xl`}>
                  <div className="text-center mb-4">
                    <div className={`text-4xl mb-2 ${isRecording ? 'animate-pulse' : ''}`}>
                      {isRecording ? '🎤' : '🎙️'}
                    </div>
                    <div className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>
                      {isRecording ? 'Recording...' : 'Ready to Record'}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mt-1`}>
                      Words spoken: {wordCount}
                    </div>
                  </div>
                  
                  {!isRecording ? (
                    <button
                      onClick={startRecording}
                      className={`w-full ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white py-3 rounded-full font-bold transition-all hover:scale-105`}
                    >
                      🎤 Start Speaking
                    </button>
                  ) : (
                    <button
                      onClick={stopRecording}
                      className={`w-full ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white py-3 rounded-full font-bold transition-all hover:scale-105`}
                    >
                      ⏹ Stop Recording
                    </button>
                  )}
                </div>
              </div>

              {transcript && (
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-6 shadow-2xl`}>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-3 flex items-center gap-2`}>
                    📝 Your Speech Transcript
                  </h3>
                  <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-4 rounded-xl max-h-64 overflow-y-auto`}>
                    <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} leading-relaxed`}>
                      {transcript || 'Start speaking to see your words here...'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Topic & Prompts */}
            <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-8 shadow-2xl`}>
              <div className={`bg-gradient-to-br ${selectedTopic.color} p-6 rounded-2xl text-white mb-6`}>
                <div className="text-5xl mb-3">{selectedTopic.emoji}</div>
                <h2 className="text-3xl font-bold mb-2">{selectedTopic.title}</h2>
                <span className={`inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold`}>
                  {selectedTopic.difficulty}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-4`}>
                    💡 Points to Cover:
                  </h3>
                  <div className="space-y-3">
                    {selectedTopic.promptPoints.map((point, idx) => (
                      <div key={idx} className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-4 rounded-xl`}>
                        <div className="flex items-start gap-3">
                          <div className={`${darkMode ? 'bg-[#60a5fa]' : 'bg-indigo-600'} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <p className={`${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} font-medium mb-1`}>
                              {point}
                            </p>
                            <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                              {selectedTopic.hindiPoints[idx]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-blue-50'} p-6 rounded-xl`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'} mb-2`}>
                    📌 Speaking Tips:
                  </h4>
                  <ul className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} space-y-1`}>
                    <li>• Speak clearly and naturally</li>
                    <li>• Use examples to support points</li>
                    <li>• Don't worry about mistakes</li>
                    <li>• Try to cover all points</li>
                    <li>• Express your opinions</li>
                  </ul>
                </div>

                <button
                  onClick={completeChallenge}
                  disabled={!transcript || wordCount < 20}
                  className={`w-full ${
                    !transcript || wordCount < 20 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : darkMode ? 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb]' : 'bg-gradient-to-r from-green-500 to-emerald-600'
                  } text-white py-4 rounded-full text-lg font-bold transition-all hover:scale-105`}
                >
                  ✓ I've Finished Speaking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult && selectedTopic) {
    const timeSpent = 300 - timeLeft;
    
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500 p-4`}>
        <div className="max-w-4xl mx-auto py-8">
          <div className="text-center mb-8">
            <div className="text-9xl mb-6">
              {analysis?.overallScore >= 80 ? '🏆' : analysis?.overallScore >= 60 ? '🎉' : '💪'}
            </div>
            <h1 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Challenge Completed!
            </h1>
            <p className={`text-xl ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-8`}>
              You spoke for {formatTime(timeSpent)}
            </p>
          </div>

          {analysis && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-blue-500 mb-2">{analysis.overallScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Overall Score</div>
                </div>
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-green-500 mb-2">{analysis.fluencyScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Fluency</div>
                </div>
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-purple-500 mb-2">{analysis.grammarScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Grammar</div>
                </div>
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{analysis.pronunciationScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Pronunciation</div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-8 mb-8`}>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-6`}>
                  📊 Detailed Analysis
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl`}>
                    <h4 className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'} mb-3`}>
                      📝 Speech Statistics
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Total Words:</span>
                        <span className={`font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>{analysis.wordCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Sentences:</span>
                        <span className={`font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>{analysis.sentenceCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Avg Words/Sentence:</span>
                        <span className={`font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>{analysis.avgWordsPerSentence}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Speaking Rate:</span>
                        <span className={`font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>
                          {timeSpent > 0 ? Math.floor(analysis.wordCount / (timeSpent / 60)) : 0} words/min
                        </span>
                      </div>
                    </div>
                  </div>

                  {analysis.errors.length > 0 && (
                    <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-orange-50'} p-6 rounded-xl`}>
                      <h4 className={`font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'} mb-3`}>
                        ⚠️ Areas to Improve
                      </h4>
                      <ul className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} space-y-2`}>
                        {analysis.errors.map((error, idx) => (
                          <li key={idx}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {transcript && (
                  <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-blue-50'} p-6 rounded-xl`}>
                    <h4 className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'} mb-3`}>
                      📝 Your Complete Transcript
                    </h4>
                    <div className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} text-sm leading-relaxed max-h-64 overflow-y-auto`}>
                      {transcript}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="flex gap-4">
            <button
              onClick={resetChallenge}
              className={`flex-1 ${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105`}
            >
              Try Another Topic 🔄
            </button>
            <button
              onClick={() => navigate('/intermediate-level')}
              className={`flex-1 ${darkMode ? 'bg-[#1e293b] text-[#60a5fa] border-2 border-[#60a5fa]' : 'bg-white text-indigo-600 border-2 border-indigo-600'} px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105`}
            >
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Selection Screen
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500`}>
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-[#0f1729]/90' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-[#2a3441]' : 'border-gray-200'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/intermediate-level')}
            className={`flex items-center gap-2 ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6]' : 'text-[#1976d2] hover:text-[#1565c0]'} font-semibold transition-all hover:scale-105`}
          >
            <span className="text-xl">←</span>
            <span>Back to Topics</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-indigo-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">⚡</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>
                {completedChallenges.length}/{challenges.length}
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⚡</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Challenge Mode
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto mb-6`}>
            Practice speaking for 5 minutes on random topics to boost your fluency
          </p>

          <div className={`inline-block ${darkMode ? 'bg-[#1e293b]' : 'bg-indigo-100'} px-6 py-3 rounded-full`}>
            <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-indigo-600'}`}>
              🕐 Each challenge: 5 minutes | 🎤 Voice recognition enabled
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`group rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-indigo-400'
              } ${completedChallenges.includes(challenge.id) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${challenge.color} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">{challenge.emoji}</span>
                  {completedChallenges.includes(challenge.id) && (
                    <span className="bg-white text-green-600 p-1.5 rounded-full">✓</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-1">{challenge.title}</h3>
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                  {challenge.difficulty}
                </span>
              </div>
              <div className="p-4">
                <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-4`}>
                  {challenge.promptPoints.length} points to cover
                </p>
                <button
                  onClick={() => startChallenge(challenge)}
                  className={`w-full bg-gradient-to-r ${challenge.color} text-white font-semibold py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                >
                  <span>Start Challenge</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
