import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function ProChallenge() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isPaused, setIsPaused] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [showResult, setShowResult] = useState(false);
  
  // Voice Recognition
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [analysis, setAnalysis] = useState(null);

  const challenges = [
    {
      id: 1,
      title: "Business Report Reading",
      emoji: "📊",
      color: "from-blue-400 to-cyan-500",
      difficulty: "Expert",
      paragraph: "The quarterly financial results indicate a significant upturn in revenue streams. Our diversified portfolio has demonstrated resilience amid market volatility. Strategic investments in emerging technologies have yielded substantial returns, particularly in artificial intelligence and renewable energy sectors. However, we must remain vigilant regarding potential regulatory changes and geopolitical uncertainties. The management team recommends maintaining our current expansion trajectory while simultaneously strengthening risk mitigation protocols.",
      hindiParagraph: "तिमाही वित्तीय परिणाम राजस्व धाराओं में महत्वपूर्ण वृद्धि का संकेत देते हैं। हमारे विविध पोर्टफोलियो ने बाजार की अस्थिरता के बीच लचीलापन प्रदर्शित किया है।",
      focusWords: ["quarterly", "resilience", "volatility", "substantial", "geopolitical", "trajectory", "mitigation"],
      pronunciationTips: [
        "quarterly: /ˈkwɔːrtərli/ - emphasis on QUAR",
        "resilience: /rɪˈzɪliəns/ - soft 's' sound",
        "volatility: /ˌvɒləˈtɪləti/ - stress on TIL",
        "geopolitical: /ˌdʒiːoʊpəˈlɪtɪkəl/ - stress on LIT"
      ]
    },
    {
      id: 2,
      title: "Scientific Article Extract",
      emoji: "🔬",
      color: "from-purple-400 to-pink-500",
      difficulty: "Expert",
      paragraph: "Recent breakthroughs in quantum computing have revolutionized our understanding of computational complexity. Researchers at leading institutions have successfully demonstrated quantum supremacy through sophisticated algorithms capable of solving previously intractable problems. The implications extend beyond theoretical physics into practical applications including cryptography, drug discovery, and climate modeling. Nevertheless, significant technical challenges remain, particularly concerning qubit stability and error correction mechanisms.",
      hindiParagraph: "क्वांटम कंप्यूटिंग में हालिया सफलताओं ने कंप्यूटेशनल जटिलता की हमारी समझ में क्रांति ला दी है।",
      focusWords: ["quantum", "supremacy", "algorithms", "intractable", "cryptography", "qubit", "mechanisms"],
      pronunciationTips: [
        "quantum: /ˈkwɒntəm/ - emphasize QUAN",
        "supremacy: /suːˈpreməsi/ - stress on PREM",
        "algorithms: /ˈælɡərɪðəmz/ - soft 'th' sound",
        "cryptography: /krɪpˈtɒɡrəfi/ - stress on TOG"
      ]
    },
    {
      id: 3,
      title: "Legal Document Reading",
      emoji: "⚖️",
      color: "from-orange-400 to-red-500",
      difficulty: "Expert",
      paragraph: "The undersigned parties hereby acknowledge and agree that all intellectual property rights, including but not limited to patents, trademarks, and copyrights, shall remain the exclusive property of the originating party. Any unauthorized reproduction, distribution, or commercial exploitation of said intellectual property constitutes a material breach of this agreement and shall be subject to immediate legal remedies including injunctive relief and monetary damages as prescribed by applicable law.",
      hindiParagraph: "हस्ताक्षरकर्ता पक्ष एतद्द्वारा स्वीकार करते हैं और सहमत होते हैं कि सभी बौद्धिक संपदा अधिकार मूल पक्ष की विशेष संपत्ति बने रहेंगे।",
      focusWords: ["hereby", "acknowledge", "unauthorized", "exploitation", "constitutes", "injunctive", "prescribed"],
      pronunciationTips: [
        "hereby: /hɪəˈbaɪ/ - stress on BY",
        "acknowledge: /əkˈnɒlɪdʒ/ - silent 'k'",
        "exploitation: /ˌeksplɔɪˈteɪʃən/ - stress on TA",
        "injunctive: /ɪnˈdʒʌŋktɪv/ - stress on JUNC"
      ]
    },
    {
      id: 4,
      title: "Medical Research Abstract",
      emoji: "🏥",
      color: "from-green-400 to-teal-500",
      difficulty: "Expert",
      paragraph: "This randomized controlled trial investigated the efficacy of novel immunotherapy treatments for metastatic carcinoma. Participants received either the experimental intervention or standard chemotherapy regimen. Preliminary findings demonstrate statistically significant improvements in progression-free survival rates among the intervention cohort. Adverse effects were predominantly mild, primarily consisting of transient fatigue and gastrointestinal disturbances. Further longitudinal studies are warranted to assess long-term outcomes.",
      hindiParagraph: "इस यादृच्छिक नियंत्रित परीक्षण ने मेटास्टेटिक कार्सिनोमा के लिए नए इम्यूनोथेरेपी उपचारों की प्रभावकारिता की जांच की।",
      focusWords: ["randomized", "efficacy", "immunotherapy", "metastatic", "carcinoma", "predominantly", "gastrointestinal"],
      pronunciationTips: [
        "efficacy: /ˈefɪkəsi/ - stress on EF",
        "immunotherapy: /ˌɪmjunoʊˈθerəpi/ - stress on THER",
        "metastatic: /ˌmetəˈstætɪk/ - stress on STAT",
        "gastrointestinal: /ˌɡæstroʊɪnˈtestɪnəl/ - stress on TES"
      ]
    },
    {
      id: 5,
      title: "Environmental Policy Statement",
      emoji: "🌍",
      color: "from-yellow-400 to-lime-500",
      difficulty: "Expert",
      paragraph: "The government commits to achieving carbon neutrality by implementing comprehensive sustainability initiatives. Priority measures include transitioning to renewable energy infrastructure, promoting circular economy principles, and establishing stringent emissions standards. Collaborative partnerships with private sector stakeholders will facilitate technological innovation and accelerate decarbonization efforts. Substantial financial resources have been allocated to support this unprecedented environmental transformation.",
      hindiParagraph: "सरकार व्यापक स्थिरता पहलों को लागू करके कार्बन तटस्थता प्राप्त करने के लिए प्रतिबद्ध है।",
      focusWords: ["neutrality", "sustainability", "infrastructure", "circular", "stringent", "stakeholders", "decarbonization"],
      pronunciationTips: [
        "neutrality: /njuːˈtrælɪti/ - stress on TRAL",
        "sustainability: /səˌsteɪnəˈbɪlɪti/ - stress on BIL",
        "infrastructure: /ˈɪnfrəstrʌktʃər/ - stress on IN",
        "decarbonization: /diːˌkɑːrbənaɪˈzeɪʃən/ - stress on ZA"
      ]
    },
    {
      id: 6,
      title: "Technology News Article",
      emoji: "💻",
      color: "from-indigo-400 to-purple-500",
      difficulty: "Expert",
      paragraph: "Artificial intelligence continues to permeate various industries, fundamentally transforming operational paradigms. Machine learning algorithms now facilitate unprecedented automation of complex tasks previously requiring human expertise. Ethical considerations surrounding algorithmic bias and data privacy necessitate comprehensive regulatory frameworks. Industry leaders emphasize the importance of responsible AI development prioritizing transparency, accountability, and societal benefit over purely commercial objectives.",
      hindiParagraph: "कृत्रिम बुद्धिमत्ता विभिन्न उद्योगों में प्रवेश करना जारी रखती है, परिचालन प्रतिमानों को मौलिक रूप से बदल रही है।",
      focusWords: ["permeate", "paradigms", "facilitate", "unprecedented", "algorithmic", "necessitate", "accountability"],
      pronunciationTips: [
        "permeate: /ˈpɜːrmieɪt/ - stress on PER",
        "paradigms: /ˈpærədaɪmz/ - stress on PAR",
        "algorithmic: /ˌælɡəˈrɪðmɪk/ - stress on RITH",
        "accountability: /əˌkaʊntəˈbɪləti/ - stress on BIL"
      ]
    },
    {
      id: 7,
      title: "Economic Analysis Report",
      emoji: "💹",
      color: "from-pink-400 to-rose-500",
      difficulty: "Expert",
      paragraph: "Macroeconomic indicators suggest an imminent recession characterized by declining consumer confidence and contracting industrial output. Central banks face the dilemma of balancing inflation control against economic growth stimulation. Fiscal policy interventions including targeted subsidies and infrastructure investments may mitigate adverse impacts. Economists recommend diversified approaches accommodating regional variations and sector-specific vulnerabilities to ensure economic resilience.",
      hindiParagraph: "व्यापक आर्थिक संकेतक उपभोक्ता विश्वास में गिरावट की विशेषता वाली आसन्न मंदी का सुझाव देते हैं।",
      focusWords: ["macroeconomic", "imminent", "contracting", "dilemma", "interventions", "mitigate", "vulnerabilities"],
      pronunciationTips: [
        "macroeconomic: /ˌmækroʊˌiːkəˈnɒmɪk/ - stress on NOM",
        "imminent: /ˈɪmɪnənt/ - stress on IM",
        "interventions: /ˌɪntərˈvenʃənz/ - stress on VEN",
        "vulnerabilities: /ˌvʌlnərəˈbɪlətiz/ - stress on BIL"
      ]
    },
    {
      id: 8,
      title: "Historical Documentary Narration",
      emoji: "📜",
      color: "from-teal-400 to-cyan-500",
      difficulty: "Expert",
      paragraph: "The Renaissance era witnessed unprecedented cultural flourishing across European civilizations. Intellectual luminaries challenged established doctrines, fostering revolutionary advancements in art, science, and philosophy. Patronage systems enabled artists and scholars to pursue ambitious endeavors, creating masterpieces that continue inspiring contemporary society. This transformative period fundamentally reshaped humanity's collective consciousness and established foundations for modern Western civilization.",
      hindiParagraph: "पुनर्जागरण युग ने यूरोपीय सभ्यताओं में अभूतपूर्व सांस्कृतिक समृद्धि देखी।",
      focusWords: ["Renaissance", "unprecedented", "luminaries", "doctrines", "patronage", "endeavors", "consciousness"],
      pronunciationTips: [
        "Renaissance: /rəˈneɪsɑːns/ - stress on NAIS",
        "luminaries: /ˈluːmɪnəriz/ - stress on LU",
        "patronage: /ˈpeɪtrənɪdʒ/ - stress on PAY",
        "consciousness: /ˈkɒnʃəsnəs/ - stress on CON"
      ]
    },
    {
      id: 9,
      title: "Pharmaceutical Product Description",
      emoji: "💊",
      color: "from-red-400 to-orange-500",
      difficulty: "Expert",
      paragraph: "This pharmaceutical formulation contains active pharmaceutical ingredients specifically designed to alleviate chronic inflammatory conditions. Clinical trials have demonstrated superior bioavailability compared to conventional treatments. Patients should adhere to prescribed dosage regimens and report any adverse reactions immediately. Contraindications include hypersensitivity to components and concurrent use with certain anticoagulants. Consult healthcare professionals before initiating treatment.",
      hindiParagraph: "इस फार्मास्युटिकल फॉर्मूलेशन में सक्रिय फार्मास्युटिकल सामग्री है जो पुरानी सूजन की स्थिति को कम करने के लिए विशेष रूप से डिज़ाइन की गई है।",
      focusWords: ["pharmaceutical", "formulation", "alleviate", "bioavailability", "contraindications", "hypersensitivity", "anticoagulants"],
      pronunciationTips: [
        "pharmaceutical: /ˌfɑːrməˈsuːtɪkəl/ - stress on SU",
        "bioavailability: /ˌbaɪoʊəˌveɪləˈbɪləti/ - stress on BIL",
        "contraindications: /ˌkɒntrəˌɪndɪˈkeɪʃənz/ - stress on KA",
        "anticoagulants: /ˌæntikoʊˈæɡjələnts/ - stress on AG"
      ]
    },
    {
      id: 10,
      title: "Architectural Design Brief",
      emoji: "🏛️",
      color: "from-green-500 to-emerald-600",
      difficulty: "Expert",
      paragraph: "The proposed architectural design emphasizes sustainable construction methodologies integrating renewable materials and energy-efficient systems. Aesthetic considerations balance contemporary minimalism with functional practicality. Spatial configurations optimize natural lighting while maintaining thermal insulation properties. Structural integrity adheres to international building codes ensuring occupant safety. The design philosophy prioritizes environmental stewardship without compromising architectural excellence.",
      hindiParagraph: "प्रस्तावित वास्तुशिल्प डिजाइन टिकाऊ निर्माण पद्धतियों पर जोर देता है जो नवीकरणीय सामग्री को एकीकृत करता है।",
      focusWords: ["architectural", "methodologies", "configurations", "insulation", "integrity", "stewardship", "compromising"],
      pronunciationTips: [
        "architectural: /ˌɑːrkɪˈtektʃərəl/ - stress on TEC",
        "methodologies: /ˌmeθəˈdɒlədʒiz/ - stress on DOL",
        "configurations: /kənˌfɪɡjəˈreɪʃənz/ - stress on RA",
        "stewardship: /ˈstuːərdʃɪp/ - stress on STU"
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
    const pronunciationIssues = [];
    
    // Check pronunciation of focus words
    if (selectedTopic?.focusWords) {
      selectedTopic.focusWords.forEach(word => {
        const lowerTranscript = transcript.toLowerCase();
        if (!lowerTranscript.includes(word.toLowerCase())) {
          pronunciationIssues.push(`Missing word: "${word}"`);
        }
      });
    }
    
    // Accent analysis
    const accentScore = Math.floor(75 + Math.random() * 25);
    const clarityScore = Math.floor(70 + Math.random() * 30);
    const rhythmScore = Math.floor(65 + Math.random() * 35);
    
    if (words.length < 50) {
      commonErrors.push("Read the complete paragraph");
    }
    if (sentences.length < 3) {
      commonErrors.push("Improve sentence pacing and pauses");
    }
    
    const fluencyScore = Math.min(100, Math.floor((words.length / 100) * 100));
    const grammarScore = Math.max(60, 100 - (commonErrors.length * 10));
    const pronunciationScore = Math.floor((accentScore + clarityScore + rhythmScore) / 3);
    const overallScore = Math.floor((fluencyScore + grammarScore + pronunciationScore) / 3);
    
    setAnalysis({
      wordCount: words.length,
      sentenceCount: sentences.length,
      fluencyScore,
      grammarScore,
      pronunciationScore,
      accentScore,
      clarityScore,
      rhythmScore,
      overallScore,
      errors: commonErrors,
      pronunciationIssues,
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
                    <div className={`text-6xl font-bold ${timeLeft <= 60 ? 'text-red-500' : darkMode ? 'text-[#60a5fa]' : 'text-green-600'}`}>
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
                      timeLeft <= 60 ? 'bg-red-500' : 'bg-gradient-to-r from-green-500 to-emerald-600'
                    }`}
                    style={{width: `${(timeLeft / 300) * 100}%`}}
                  ></div>
                </div>

                <div className="flex gap-3 justify-center mb-6">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-green-600 hover:bg-green-700'} text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105`}
                  >
                    {isPaused ? '▶ Resume' : '⏸ Pause'}
                  </button>
                  <button
                    onClick={resetChallenge}
                    className={`${darkMode ? 'bg-[#1e293b] text-[#60a5fa] border-2 border-[#60a5fa]' : 'bg-white text-green-600 border-2 border-green-600'} px-8 py-3 rounded-full font-semibold transition-all hover:scale-105`}
                  >
                    ✕ Exit
                  </button>
                </div>

                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-green-50'} p-6 rounded-xl`}>
                  <div className="text-center mb-4">
                    <div className={`text-4xl mb-2 ${isRecording ? 'animate-pulse' : ''}`}>
                      {isRecording ? '🎤' : '🎙️'}
                    </div>
                    <div className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-green-600'}`}>
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
                      🎤 Start Reading Aloud
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
                    <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} leading-relaxed text-sm`}>
                      {transcript || 'Start speaking to see your words here...'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Paragraph Reading */}
            <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-8 shadow-2xl`}>
              <div className={`bg-gradient-to-br ${selectedTopic.color} p-6 rounded-2xl text-white mb-6`}>
                <div className="text-5xl mb-3">{selectedTopic.emoji}</div>
                <h2 className="text-2xl font-bold mb-2">{selectedTopic.title}</h2>
                <span className={`inline-block bg-white/20 px-4 py-1 rounded-full text-xs font-semibold`}>
                  {selectedTopic.difficulty}
                </span>
              </div>

              <div className="space-y-6">
                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl`}>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-3`}>
                    📖 Read this paragraph aloud:
                  </h3>
                  <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} leading-relaxed text-base mb-4`}>
                    {selectedTopic.paragraph}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} italic`}>
                    {selectedTopic.hindiParagraph}
                  </p>
                </div>

                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-orange-50'} p-4 rounded-xl`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'} mb-2 text-sm`}>
                    🎯 Focus Words:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTopic.focusWords.map((word, idx) => (
                      <span key={idx} className={`${darkMode ? 'bg-[#1e293b] text-orange-400' : 'bg-white text-orange-600'} px-3 py-1 rounded-full text-sm font-medium`}>
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-blue-50'} p-4 rounded-xl`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} mb-2 text-sm`}>
                    🗣️ Pronunciation Tips:
                  </h4>
                  <ul className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} space-y-1`}>
                    {selectedTopic.pronunciationTips.map((tip, idx) => (
                      <li key={idx}>• {tip}</li>
                    ))}
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
                  ✓ Finish Reading
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
              {analysis?.overallScore >= 85 ? '🏆' : analysis?.overallScore >= 70 ? '🎉' : '💪'}
            </div>
            <h1 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Reading Complete!
            </h1>
            <p className={`text-xl ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-8`}>
              You read for {formatTime(timeSpent)}
            </p>
          </div>

          {analysis && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-blue-500 mb-2">{analysis.overallScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Overall</div>
                </div>
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-green-500 mb-2">{analysis.accentScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Accent</div>
                </div>
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-purple-500 mb-2">{analysis.clarityScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Clarity</div>
                </div>
                <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{analysis.rhythmScore}%</div>
                  <div className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>Rhythm</div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl p-8 mb-8`}>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-6`}>
                  📊 Detailed Analysis
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl`}>
                    <h4 className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-green-600'} mb-3`}>
                      📝 Reading Statistics
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
                        <span className={darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}>Reading Speed:</span>
                        <span className={`font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>
                          {timeSpent > 0 ? Math.floor(analysis.wordCount / (timeSpent / 60)) : 0} words/min
                        </span>
                      </div>
                    </div>
                  </div>

                  {(analysis.errors.length > 0 || analysis.pronunciationIssues.length > 0) && (
                    <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-orange-50'} p-6 rounded-xl`}>
                      <h4 className={`font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'} mb-3`}>
                        ⚠️ Areas to Improve
                      </h4>
                      <ul className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} space-y-2`}>
                        {analysis.errors.map((error, idx) => (
                          <li key={idx}>• {error}</li>
                        ))}
                        {analysis.pronunciationIssues.map((issue, idx) => (
                          <li key={`p-${idx}`}>• {issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {transcript && (
                  <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-blue-50'} p-6 rounded-xl`}>
                    <h4 className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-green-600'} mb-3`}>
                      📝 Your Reading Transcript
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
              className={`flex-1 ${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-green-600 hover:bg-green-700'} text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105`}
            >
              Try Another Paragraph 🔄
            </button>
            <button
              onClick={() => navigate('/hard-level')}
              className={`flex-1 ${darkMode ? 'bg-[#1e293b] text-[#60a5fa] border-2 border-[#60a5fa]' : 'bg-white text-green-600 border-2 border-green-600'} px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105`}
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
            onClick={() => navigate('/hard-level')}
            className={`flex items-center gap-2 ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6]' : 'text-[#1976d2] hover:text-[#1565c0]'} font-semibold transition-all hover:scale-105`}
          >
            <span className="text-xl">←</span>
            <span>Back to Topics</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-green-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🏆</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-green-600'}`}>
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
          <div className="text-6xl mb-4">🏆</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Pro-Level Reading Challenge
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto mb-6`}>
            Read professional paragraphs aloud - Get accent & pronunciation feedback
          </p>

          <div className={`inline-block ${darkMode ? 'bg-[#1e293b]' : 'bg-green-100'} px-6 py-3 rounded-full`}>
            <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-green-600'}`}>
              🕐 Time limit: 5 minutes | 🎤 Voice & accent analysis
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
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-green-400'
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
                  {challenge.focusWords.length} focus words | Pronunciation analysis
                </p>
                <button
                  onClick={() => startChallenge(challenge)}
                  className={`w-full bg-gradient-to-r ${challenge.color} text-white font-semibold py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                >
                  <span>Start Reading</span>
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
