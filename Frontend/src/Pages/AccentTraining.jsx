import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AccentTraining() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  const lessons = [
    {
      id: 1,
      title: "Vowel Sounds Mastery (स्वर ध्वनि महारत)",
      emoji: "🅰️",
      color: "from-blue-400 to-cyan-500",
      difficulty: "hard",
      description: "Perfect English vowel pronunciation",
      exercises: [
        {
          sound: "Short 'i' vs Long 'ee'",
          examples: [
            { word: "ship", phonetic: "/ʃɪp/", hindi: "जहाज़", contrast: "sheep /ʃiːp/ - भेड़" },
            { word: "bit", phonetic: "/bɪt/", hindi: "थोड़ा", contrast: "beat /biːt/ - पीटना" },
            { word: "sit", phonetic: "/sɪt/", hindi: "बैठना", contrast: "seat /siːt/ - सीट" }
          ],
          tip: "Short 'i': Tongue relaxed, mouth slightly open. Long 'ee': Tongue high, teeth showing in a smile.",
          hindiTip: "छोटा 'i': जीभ आराम से, मुंह थोड़ा खुला। लंबा 'ee': जीभ ऊपर, दांत दिखते हुए।"
        },
        {
          sound: "Short 'a' vs Long 'ay'",
          examples: [
            { word: "hat", phonetic: "/hæt/", hindi: "टोपी", contrast: "hate /heɪt/ - नफरत" },
            { word: "cap", phonetic: "/kæp/", hindi: "टोपी", contrast: "cape /keɪp/ - केप" },
            { word: "mad", phonetic: "/mæd/", hindi: "पागल", contrast: "made /meɪd/ - बनाया" }
          ],
          tip: "Short 'a': Mouth wide, jaw drops. Long 'ay': Starts with 'eh', glides to 'ee'.",
          hindiTip: "छोटा 'a': मुंह चौड़ा, जबड़ा गिरता है। लंबा 'ay': 'एह' से शुरू, 'ई' तक ग्लाइड।"
        },
        {
          sound: "Schwa Sound /ə/",
          examples: [
            { word: "about", phonetic: "/əˈbaʊt/", hindi: "के बारे में", stress: "Unstressed first syllable" },
            { word: "banana", phonetic: "/bəˈnænə/", hindi: "केला", stress: "First and last syllables unstressed" },
            { word: "camera", phonetic: "/ˈkæmərə/", hindi: "कैमरा", stress: "Middle and last syllables unstressed" }
          ],
          tip: "The most common vowel in English! Very short, relaxed, neutral sound like 'uh'.",
          hindiTip: "अंग्रेजी में सबसे आम स्वर! बहुत छोटा, आरामदायक, तटस्थ ध्वनि जैसे 'अ'।"
        }
      ]
    },
    {
      id: 2,
      title: "Consonant Clusters (व्यंजन समूह)",
      emoji: "🔤",
      color: "from-purple-400 to-pink-500",
      difficulty: "hard",
      description: "Master difficult consonant combinations",
      exercises: [
        {
          cluster: "TH Sounds - /θ/ and /ð/",
          examples: [
            { word: "think", phonetic: "/θɪŋk/", hindi: "सोचना", type: "Voiceless /θ/ - tongue between teeth" },
            { word: "this", phonetic: "/ðɪs/", hindi: "यह", type: "Voiced /ð/ - tongue between teeth, vibration" },
            { word: "three", phonetic: "/θriː/", hindi: "तीन", type: "Voiceless" },
            { word: "mother", phonetic: "/ˈmʌðər/", hindi: "माँ", type: "Voiced" }
          ],
          tip: "Place tongue between teeth, blow air for /θ/, add voice for /ð/. Don't say 't' or 'd'!",
          hindiTip: "जीभ दांतों के बीच रखें, /θ/ के लिए हवा फूंकें, /ð/ के लिए आवाज जोड़ें। 'त' या 'द' मत बोलें!"
        },
        {
          cluster: "R Sound - /r/",
          examples: [
            { word: "red", phonetic: "/red/", hindi: "लाल", position: "Beginning" },
            { word: "berry", phonetic: "/ˈberɪ/", hindi: "बेरी", position: "Middle" },
            { word: "car", phonetic: "/kɑːr/", hindi: "कार", position: "End (American)" }
          ],
          tip: "Curl tongue back without touching roof of mouth. Lips slightly rounded.",
          hindiTip: "जीभ को मुंह की छत को छुए बिना पीछे मोड़ें। होंठ थोड़े गोल।"
        },
        {
          cluster: "L Sound - /l/",
          examples: [
            { word: "light", phonetic: "/laɪt/", hindi: "प्रकाश", type: "Clear L - tongue tip on ridge" },
            { word: "ball", phonetic: "/bɔːl/", hindi: "गेंद", type: "Dark L - tongue back raised" },
            { word: "million", phonetic: "/ˈmɪljən/", hindi: "मिलियन", type: "Clear L in middle" }
          ],
          tip: "Clear L: Tongue tip touches ridge behind teeth. Dark L: Back of tongue raised.",
          hindiTip: "स्पष्ट L: जीभ की नोक दांतों के पीछे रिज को छूती है। गहरा L: जीभ का पिछला हिस्सा उठा हुआ।"
        }
      ]
    },
    {
      id: 3,
      title: "Word Stress Patterns (शब्द बल पैटर्न)",
      emoji: "📍",
      color: "from-orange-400 to-red-500",
      difficulty: "hard",
      description: "Learn correct stress placement",
      exercises: [
        {
          pattern: "Two-Syllable Nouns",
          rule: "Usually stress on FIRST syllable",
          examples: [
            { word: "TAble", phonetic: "/ˈteɪbəl/", hindi: "मेज़", stressed: "TA" },
            { word: "PICture", phonetic: "/ˈpɪktʃər/", hindi: "तस्वीर", stressed: "PIC" },
            { word: "MUsic", phonetic: "/ˈmjuːzɪk/", hindi: "संगीत", stressed: "MU" }
          ],
          tip: "Make first syllable LOUDER and LONGER. Second syllable uses schwa /ə/.",
          hindiTip: "पहले अक्षर को तेज़ और लंबा बनाएं। दूसरे अक्षर में schwa /ə/ का उपयोग करें।"
        },
        {
          pattern: "Two-Syllable Verbs",
          rule: "Usually stress on SECOND syllable",
          examples: [
            { word: "beGIN", phonetic: "/bɪˈɡɪn/", hindi: "शुरू करना", stressed: "GIN" },
            { word: "forGET", phonetic: "/fərˈɡet/", hindi: "भूल जाना", stressed: "GET" },
            { word: "reLAX", phonetic: "/rɪˈlæks/", hindi: "आराम करना", stressed: "LAX" }
          ],
          tip: "Second syllable is LOUDER. First syllable often uses schwa.",
          hindiTip: "दूसरा अक्षर तेज़ है। पहले अक्षर में अक्सर schwa का उपयोग होता है।"
        },
        {
          pattern: "Word Pairs - Noun vs Verb",
          rule: "Same spelling, different stress changes meaning",
          examples: [
            { word: "REcord (noun)", phonetic: "/ˈrekɔːrd/", hindi: "रिकॉर्ड", meaning: "a disc" },
            { word: "reCORD (verb)", phonetic: "/rɪˈkɔːrd/", hindi: "रिकॉर्ड करना", meaning: "to save audio" },
            { word: "PREsent (noun)", phonetic: "/ˈprezənt/", hindi: "उपहार", meaning: "a gift" },
            { word: "preSENT (verb)", phonetic: "/prɪˈzent/", hindi: "प्रस्तुत करना", meaning: "to show" }
          ],
          tip: "Stress changes meaning completely! Practice both versions.",
          hindiTip: "बल का स्थान अर्थ को पूरी तरह बदल देता है! दोनों संस्करणों का अभ्यास करें।"
        }
      ]
    },
    {
      id: 4,
      title: "Sentence Intonation (वाक्य स्वरमान)",
      emoji: "📈",
      color: "from-green-400 to-teal-500",
      difficulty: "hard",
      description: "Master rising and falling tones",
      exercises: [
        {
          pattern: "Falling Intonation ↓",
          usage: "Statements, commands, wh-questions",
          examples: [
            { sentence: "I live in Mumbai. ↓", hindi: "मैं मुंबई में रहता हूं।", tone: "Falls at end" },
            { sentence: "Close the door. ↓", hindi: "दरवाज़ा बंद करो।", tone: "Command - falls" },
            { sentence: "Where do you work? ↓", hindi: "आप कहाँ काम करते हैं?", tone: "Wh-question - falls" }
          ],
          tip: "Voice goes DOWN at the end. Sounds confident and definite.",
          hindiTip: "आवाज़ अंत में नीचे जाती है। आत्मविश्वास और निश्चित लगती है।"
        },
        {
          pattern: "Rising Intonation ↑",
          usage: "Yes/No questions, uncertainty, lists",
          examples: [
            { sentence: "Are you coming? ↑", hindi: "क्या तुम आ रहे हो?", tone: "Rises at end" },
            { sentence: "Really? ↑", hindi: "सच में?", tone: "Shows surprise" },
            { sentence: "I need bread, milk, eggs... ↑", hindi: "मुझे रोटी, दूध, अंडे चाहिए...", tone: "List continues" }
          ],
          tip: "Voice goes UP at the end. Sounds like a question or incomplete thought.",
          hindiTip: "आवाज़ अंत में ऊपर जाती है। प्रश्न या अधूरे विचार की तरह लगती है।"
        },
        {
          pattern: "Compound Intonation ↑↓",
          usage: "Choice questions, contrasts",
          examples: [
            { sentence: "Do you want tea ↑ or coffee? ↓", hindi: "क्या आप चाय चाहते हैं या कॉफी?", tone: "Up then down" },
            { sentence: "I like it, ↑ but it's expensive. ↓", hindi: "मुझे यह पसंद है, लेकिन यह महंगा है।", tone: "Contrast" }
          ],
          tip: "First option rises, final option/answer falls.",
          hindiTip: "पहला विकल्प ऊपर जाता है, अंतिम विकल्प/उत्तर नीचे जाता है।"
        }
      ]
    },
    {
      id: 5,
      title: "Linking & Connected Speech (लिंकिंग)",
      emoji: "🔗",
      color: "from-yellow-400 to-orange-500",
      difficulty: "hard",
      description: "Speak smoothly like native speakers",
      exercises: [
        {
          technique: "Consonant to Vowel Linking",
          rule: "Connect final consonant to next vowel",
          examples: [
            { written: "an apple", spoken: "a-napple", phonetic: "/ən ˈæpəl/", hindi: "एक सेब" },
            { written: "turn it on", spoken: "tur-ni-ton", phonetic: "/tɜːn ɪt ɒn/", hindi: "इसे चालू करो" },
            { written: "take it easy", spoken: "ta-ki-tea-sy", phonetic: "/teɪk ɪt ˈiːzi/", hindi: "आराम करो" }
          ],
          tip: "Don't pause between words. Final consonant 'jumps' to next word.",
          hindiTip: "शब्दों के बीच रुकें नहीं। अंतिम व्यंजन अगले शब्द में 'कूदता' है।"
        },
        {
          technique: "Vowel to Vowel Linking",
          rule: "Add /w/ or /j/ sound between vowels",
          examples: [
            { written: "go away", spoken: "go-w-away", phonetic: "/ɡəʊ wəˈweɪ/", hindi: "चले जाओ", link: "/w/ sound" },
            { written: "see it", spoken: "see-y-it", phonetic: "/siː jɪt/", hindi: "इसे देखो", link: "/j/ sound" },
            { written: "two apples", spoken: "two-w-apples", phonetic: "/tuː wˈæpəlz/", hindi: "दो सेब", link: "/w/ sound" }
          ],
          tip: "Add tiny /w/ or /j/ glide to connect vowels smoothly.",
          hindiTip: "स्वरों को सुचारू रूप से जोड़ने के लिए छोटा /w/ या /j/ जोड़ें।"
        },
        {
          technique: "Elision - Dropping Sounds",
          rule: "Some sounds disappear in fast speech",
          examples: [
            { written: "next day", spoken: "nex day", phonetic: "/neks deɪ/", dropped: "/t/ dropped", hindi: "अगला दिन" },
            { written: "must be", spoken: "mus be", phonetic: "/mʌs biː/", dropped: "/t/ dropped", hindi: "होना चाहिए" },
            { written: "probably", spoken: "probly", phonetic: "/ˈprɒbli/", dropped: "/ə/ dropped", hindi: "शायद" }
          ],
          tip: "Native speakers drop sounds for speed. Listen and imitate!",
          hindiTip: "देशी वक्ता गति के लिए ध्वनियाँ छोड़ देते हैं। सुनें और अनुकरण करें!"
        }
      ]
    },
    {
      id: 6,
      title: "Rhythm & Timing (लय और समय)",
      emoji: "🎵",
      color: "from-pink-400 to-rose-500",
      difficulty: "hard",
      description: "Develop natural English rhythm",
      exercises: [
        {
          concept: "Content Words vs Function Words",
          rule: "Stress content words, reduce function words",
          examples: [
            { 
              sentence: "I WANT to GO to the STORE.",
              stressed: "WANT, GO, STORE",
              unstressed: "I, to, to, the",
              hindi: "मैं दुकान जाना चाहता हूं।",
              pattern: "da-DA-da-DA-da-da-DA"
            },
            {
              sentence: "She's WORKing on a PROject for her BOSS.",
              stressed: "WORK, PRO, BOSS",
              unstressed: "She's, -ing, on, a, -ject, for, her",
              hindi: "वह अपने बॉस के लिए एक प्रोजेक्ट पर काम कर रही है।",
              pattern: "da-DA-da-da-DA-da-da-da-DA"
            }
          ],
          tip: "Content words = nouns, verbs, adjectives. Function words = articles, prepositions.",
          hindiTip: "सामग्री शब्द = संज्ञा, क्रिया, विशेषण। कार्य शब्द = लेख, पूर्वसर्ग।"
        },
        {
          concept: "Stress-Timed Rhythm",
          rule: "Equal time between stressed syllables",
          examples: [
            { 
              phrase: "CATS eat FISH.",
              timing: "1 beat - 1 beat - 1 beat",
              hindi: "बिल्लियाँ मछली खाती हैं।"
            },
            {
              phrase: "The CATS are EATing the FISH.",
              timing: "1 beat - 1 beat - 1 beat",
              unstressed: "The, are, -ing, the (squeezed between beats)",
              hindi: "बिल्लियाँ मछली खा रही हैं।"
            }
          ],
          tip: "Stressed syllables are like a drum beat - keep them evenly spaced!",
          hindiTip: "बलयुक्त अक्षर ड्रम बीट की तरह हैं - उन्हें समान रूप से रखें!"
        }
      ]
    }
  ];

  const toggleComplete = (id) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(l => l !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
    }
  };

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
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-blue-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🧑‍🏫</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'}`}>
                {completedLessons.length}/{lessons.length}
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
          <div className="text-6xl mb-4">🧑‍🏫</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Accent & Intonation Training
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Perfect your pronunciation and speak with natural rhythm
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-blue-400'
              } ${completedLessons.includes(lesson.id) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${lesson.color} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">{lesson.emoji}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(lesson.id);
                    }}
                    className={`${completedLessons.includes(lesson.id) ? 'bg-white text-green-600' : 'bg-white/20'} p-1.5 rounded-full hover:scale-110 transition-all`}
                  >
                    {completedLessons.includes(lesson.id) ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-1">{lesson.title}</h3>
                <p className="text-sm opacity-90">{lesson.description}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-semibold ${darkMode ? 'text-red-400' : 'text-red-600'} uppercase`}>
                    {lesson.difficulty}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                    {lesson.exercises.length} exercises
                  </span>
                </div>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} font-semibold`}>
                  Click to practice →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedLesson && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLesson(null)}
        >
          <div 
            className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedLesson.color} p-8 text-white text-center sticky top-0`}>
              <div className="text-6xl mb-4">{selectedLesson.emoji}</div>
              <h2 className="text-3xl font-bold mb-2">{selectedLesson.title}</h2>
              <p className="text-sm opacity-90">{selectedLesson.description}</p>
            </div>
            <div className="p-8">
              {selectedLesson.exercises.map((exercise, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl mb-6`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-3`}>
                    {exercise.sound || exercise.cluster || exercise.pattern || exercise.technique || exercise.concept}
                  </h3>
                  {exercise.rule && (
                    <p className={`${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} text-sm font-semibold mb-3`}>
                      📌 {exercise.rule}
                    </p>
                  )}
                  {exercise.usage && (
                    <p className={`${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} text-sm font-semibold mb-3`}>
                      📌 Usage: {exercise.usage}
                    </p>
                  )}
                  <div className="space-y-3 mb-4">
                    {exercise.examples.map((ex, i) => (
                      <div key={i} className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} p-4 rounded-lg`}>
                        <p className={`text-lg font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-1`}>
                          {ex.word || ex.sentence || ex.written || ex.phrase}
                        </p>
                        {ex.phonetic && (
                          <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} font-mono mb-1`}>
                            {ex.phonetic}
                          </p>
                        )}
                        {ex.spoken && (
                          <p className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} mb-1`}>
                            Spoken: {ex.spoken}
                          </p>
                        )}
                        {ex.hindi && (
                          <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                            Hindi: {ex.hindi}
                          </p>
                        )}
                        {ex.contrast && (
                          <p className={`text-sm ${darkMode ? 'text-orange-400' : 'text-orange-600'} mt-1`}>
                            ↔ {ex.contrast}
                          </p>
                        )}
                        {ex.type && (
                          <p className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} mt-1`}>
                            {ex.type}
                          </p>
                        )}
                        {ex.stressed && (
                          <p className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'} mt-1`}>
                            Stress: {ex.stressed}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-blue-50'} p-4 rounded-lg`}>
                    <p className={`text-sm ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                      💡 {exercise.tip}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                      {exercise.hindiTip}
                    </p>
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  toggleComplete(selectedLesson.id);
                  setSelectedLesson(null);
                }}
                className={`w-full ${
                  completedLessons.includes(selectedLesson.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${selectedLesson.color}`
                } text-white font-bold py-4 rounded-full transition-all hover:scale-105`}
              >
                {completedLessons.includes(selectedLesson.id) ? '✓ Marked as Completed' : 'Mark as Completed'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
