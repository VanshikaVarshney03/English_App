import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function GrammarStarter() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  const grammarTopics = [
    {
      id: 1,
      title: "Nouns (संज्ञा)",
      emoji: "📦",
      color: "from-blue-400 to-indigo-500",
      difficulty: "easy",
      description: "Learn about people, places, things, and ideas",
      sections: [
        {
          title: "What is a Noun?",
          content: "A noun is a word that names a person, place, thing, or idea.",
          hindi: "संज्ञा एक शब्द है जो किसी व्यक्ति, स्थान, वस्तु या विचार का नाम बताता है।",
          examples: [
            { english: "Person: John, teacher, doctor", hindi: "व्यक्ति: जॉन, शिक्षक, डॉक्टर" },
            { english: "Place: Mumbai, school, park", hindi: "स्थान: मुंबई, स्कूल, पार्क" },
            { english: "Thing: book, car, phone", hindi: "वस्तु: किताब, कार, फोन" },
            { english: "Idea: love, happiness, freedom", hindi: "विचार: प्यार, खुशी, स्वतंत्रता" }
          ]
        },
        {
          title: "Types of Nouns",
          content: "Common Noun vs Proper Noun",
          hindi: "सामान्य संज्ञा बनाम व्यक्तिवाचक संज्ञा",
          examples: [
            { english: "Common: city, boy, book", hindi: "सामान्य: शहर, लड़का, किताब" },
            { english: "Proper: Delhi, Rahul, Gita", hindi: "व्यक्तिवाचक: दिल्ली, राहुल, गीता" }
          ]
        }
      ],
      practice: [
        { question: "Identify the noun: 'I love my dog.'", answer: "dog", hindi: "'मुझे अपने कुत्ते से प्यार है।' में संज्ञा बताओ।" },
        { question: "Is 'Mumbai' a common or proper noun?", answer: "Proper noun", hindi: "'मुंबई' सामान्य या व्यक्तिवाचक संज्ञा है?" }
      ]
    },
    {
      id: 2,
      title: "Pronouns (सर्वनाम)",
      emoji: "👤",
      color: "from-green-400 to-teal-500",
      difficulty: "easy",
      description: "Words that replace nouns (I, you, he, she, it)",
      sections: [
        {
          title: "What is a Pronoun?",
          content: "A pronoun replaces a noun to avoid repetition.",
          hindi: "सर्वनाम संज्ञा की जगह लेता है ताकि दोहराव न हो।",
          examples: [
            { english: "I, you, he, she, it, we, they", hindi: "मैं, तुम, वह (पुरुष), वह (स्त्री), यह, हम, वे" },
            { english: "Example: Rahul is smart. He is a student.", hindi: "उदाहरण: राहुल स्मार्ट है। वह एक छात्र है।" }
          ]
        },
        {
          title: "Personal Pronouns",
          content: "Subject vs Object Pronouns",
          hindi: "कर्ता सर्वनाम बनाम कर्म सर्वनाम",
          examples: [
            { english: "Subject: I, you, he, she, we, they", hindi: "कर्ता: मैं, तुम, वह, हम, वे" },
            { english: "Object: me, you, him, her, us, them", hindi: "कर्म: मुझे, तुम्हें, उसे, हमें, उन्हें" }
          ]
        }
      ],
      practice: [
        { question: "Replace with pronoun: 'Sara is happy. Sara is dancing.'", answer: "She is dancing", hindi: "सर्वनाम से बदलो: 'सारा खुश है। सारा नाच रही है।'" },
        { question: "Choose correct: 'Give the book to (I/me)'", answer: "me", hindi: "सही चुनो: 'किताब (मैं/मुझे) को दो'" }
      ]
    },
    {
      id: 3,
      title: "Verbs (क्रिया)",
      emoji: "🏃",
      color: "from-orange-400 to-red-500",
      difficulty: "easy",
      description: "Action words and state of being",
      sections: [
        {
          title: "What is a Verb?",
          content: "A verb shows action or state of being.",
          hindi: "क्रिया कार्य या स्थिति को दर्शाती है।",
          examples: [
            { english: "Action: run, eat, write, play", hindi: "क्रिया: दौड़ना, खाना, लिखना, खेलना" },
            { english: "State: is, am, are, was, were", hindi: "स्थिति: है, हूँ, हैं, था, थे" }
          ]
        },
        {
          title: "Types of Verbs",
          content: "Main Verb vs Helping Verb",
          hindi: "मुख्य क्रिया बनाम सहायक क्रिया",
          examples: [
            { english: "Main: I eat rice.", hindi: "मुख्य: मैं चावल खाता हूं।" },
            { english: "Helping: I am eating rice.", hindi: "सहायक: मैं चावल खा रहा हूं।" }
          ]
        }
      ],
      practice: [
        { question: "Find the verb: 'She writes a letter.'", answer: "writes", hindi: "क्रिया ढूंढो: 'वह एक पत्र लिखती है।'" },
        { question: "Is 'am' an action or helping verb?", answer: "Helping verb", hindi: "'am' क्रिया या सहायक क्रिया है?" }
      ]
    },
    {
      id: 4,
      title: "Adjectives (विशेषण)",
      emoji: "🎨",
      color: "from-pink-400 to-purple-500",
      difficulty: "easy",
      description: "Words that describe nouns",
      sections: [
        {
          title: "What is an Adjective?",
          content: "An adjective describes or modifies a noun.",
          hindi: "विशेषण संज्ञा का वर्णन या विशेषता बताता है।",
          examples: [
            { english: "Size: big, small, tall, short", hindi: "आकार: बड़ा, छोटा, लंबा, नाटा" },
            { english: "Color: red, blue, green, yellow", hindi: "रंग: लाल, नीला, हरा, पीला" },
            { english: "Quality: good, bad, beautiful, ugly", hindi: "गुण: अच्छा, बुरा, सुंदर, बदसूरत" }
          ]
        },
        {
          title: "Using Adjectives",
          content: "Adjective comes before noun",
          hindi: "विशेषण संज्ञा से पहले आता है",
          examples: [
            { english: "A beautiful flower", hindi: "एक सुंदर फूल" },
            { english: "The big house", hindi: "बड़ा घर" }
          ]
        }
      ],
      practice: [
        { question: "Find adjective: 'The red car is fast.'", answer: "red, fast", hindi: "विशेषण ढूंढो: 'लाल कार तेज़ है।'" },
        { question: "Add adjective: 'I have a ___ book.'", answer: "big/new/good", hindi: "विशेषण जोड़ो: 'मेरे पास एक ___ किताब है।'" }
      ]
    },
    {
      id: 5,
      title: "Present Tense (वर्तमान काल)",
      emoji: "⏰",
      color: "from-cyan-400 to-blue-500",
      difficulty: "medium",
      description: "Actions happening now or regularly",
      sections: [
        {
          title: "Simple Present",
          content: "Used for habits, facts, and regular actions",
          hindi: "आदतों, तथ्यों और नियमित क्रियाओं के लिए",
          examples: [
            { english: "I eat breakfast every day.", hindi: "मैं हर दिन नाश्ता करता हूं।" },
            { english: "She works in a bank.", hindi: "वह बैंक में काम करती है।" },
            { english: "The sun rises in the east.", hindi: "सूरज पूर्व में उगता है।" }
          ]
        },
        {
          title: "Present Continuous",
          content: "Actions happening right now (am/is/are + verb+ing)",
          hindi: "अभी हो रही क्रियाएं",
          examples: [
            { english: "I am reading a book.", hindi: "मैं एक किताब पढ़ रहा हूं।" },
            { english: "They are playing cricket.", hindi: "वे क्रिकेट खेल रहे हैं।" }
          ]
        }
      ],
      practice: [
        { question: "Fill: 'He ___ (go) to school daily.'", answer: "goes", hindi: "भरो: 'वह रोज़ स्कूल ___ (जाना)।'" },
        { question: "Make continuous: 'I write'", answer: "I am writing", hindi: "कंटीन्यूअस बनाओ: 'मैं लिखता हूं'" }
      ]
    },
    {
      id: 6,
      title: "Past Tense (भूतकाल)",
      emoji: "⏮️",
      color: "from-yellow-400 to-orange-500",
      difficulty: "medium",
      description: "Actions that happened in the past",
      sections: [
        {
          title: "Simple Past",
          content: "Actions completed in the past (verb+ed)",
          hindi: "भूतकाल में पूर्ण हुई क्रियाएं",
          examples: [
            { english: "I played cricket yesterday.", hindi: "मैंने कल क्रिकेट खेला।" },
            { english: "She visited Mumbai last year.", hindi: "उसने पिछले साल मुंबई का दौरा किया।" },
            { english: "They watched a movie.", hindi: "उन्होंने एक फिल्म देखी।" }
          ]
        },
        {
          title: "Irregular Verbs",
          content: "Some verbs don't follow +ed rule",
          hindi: "कुछ क्रियाएं +ed नियम नहीं मानतीं",
          examples: [
            { english: "go → went, eat → ate, write → wrote", hindi: "जाना → गया, खाना → खाया, लिखना → लिखा" },
            { english: "I went to the market.", hindi: "मैं बाजार गया।" }
          ]
        }
      ],
      practice: [
        { question: "Past of 'play'?", answer: "played", hindi: "'खेलना' का भूतकाल?" },
        { question: "Past of 'go'?", answer: "went", hindi: "'जाना' का भूतकाल?" }
      ]
    },
    {
      id: 7,
      title: "Future Tense (भविष्यकाल)",
      emoji: "⏭️",
      color: "from-purple-400 to-pink-500",
      difficulty: "medium",
      description: "Actions that will happen",
      sections: [
        {
          title: "Simple Future",
          content: "Use 'will' or 'shall' + base verb",
          hindi: "'will' या 'shall' + मूल क्रिया",
          examples: [
            { english: "I will go to Delhi tomorrow.", hindi: "मैं कल दिल्ली जाऊंगा।" },
            { english: "She will study hard.", hindi: "वह मेहनत से पढ़ेगी।" },
            { english: "We shall overcome.", hindi: "हम जीतेंगे।" }
          ]
        },
        {
          title: "Going to Future",
          content: "Use 'am/is/are going to' + verb",
          hindi: "'am/is/are going to' + क्रिया",
          examples: [
            { english: "I am going to buy a car.", hindi: "मैं एक कार खरीदने वाला हूं।" },
            { english: "It is going to rain.", hindi: "बारिश होने वाली है।" }
          ]
        }
      ],
      practice: [
        { question: "Make future: 'I play cricket'", answer: "I will play cricket", hindi: "भविष्यकाल बनाओ: 'मैं क्रिकेट खेलता हूं'" },
        { question: "Fill: 'She ___ visit us tomorrow.'", answer: "will", hindi: "भरो: 'वह कल हमसे मिलने ___ ।'" }
      ]
    },
    {
      id: 8,
      title: "Articles (लेख)",
      emoji: "📰",
      color: "from-teal-400 to-green-500",
      difficulty: "easy",
      description: "Using a, an, and the correctly",
      sections: [
        {
          title: "Indefinite Articles (a, an)",
          content: "Use for non-specific things",
          hindi: "गैर-विशिष्ट चीजों के लिए",
          examples: [
            { english: "Use 'a' before consonant sounds: a book, a car", hindi: "'a' व्यंजन ध्वनि से पहले: एक किताब, एक कार" },
            { english: "Use 'an' before vowel sounds: an apple, an hour", hindi: "'an' स्वर ध्वनि से पहले: एक सेब, एक घंटा" }
          ]
        },
        {
          title: "Definite Article (the)",
          content: "Use for specific things",
          hindi: "विशिष्ट चीजों के लिए",
          examples: [
            { english: "The book on the table", hindi: "मेज पर रखी किताब" },
            { english: "The sun, the moon", hindi: "सूरज, चांद" }
          ]
        }
      ],
      practice: [
        { question: "Fill: '___ elephant is big.'", answer: "An", hindi: "भरो: '___ हाथी बड़ा है।'" },
        { question: "Fill: 'I saw ___ movie yesterday.'", answer: "a", hindi: "भरो: 'मैंने कल ___ फिल्म देखी।'" }
      ]
    },
    {
      id: 9,
      title: "Prepositions (संबंध सूचक)",
      emoji: "📍",
      color: "from-red-400 to-pink-500",
      difficulty: "medium",
      description: "Words showing position or relationship",
      sections: [
        {
          title: "Common Prepositions",
          content: "in, on, at, under, over, between",
          hindi: "में, पर, को, के नीचे, के ऊपर, के बीच",
          examples: [
            { english: "The book is on the table.", hindi: "किताब मेज पर है।" },
            { english: "I live in Mumbai.", hindi: "मैं मुंबई में रहता हूं।" },
            { english: "Meet me at 5 PM.", hindi: "मुझसे 5 बजे मिलो।" }
          ]
        },
        {
          title: "Time Prepositions",
          content: "at (time), on (day), in (month/year)",
          hindi: "समय के लिए पूर्वसर्ग",
          examples: [
            { english: "at 6 o'clock, on Monday, in January", hindi: "6 बजे, सोमवार को, जनवरी में" }
          ]
        }
      ],
      practice: [
        { question: "Fill: 'The cat is ___ the bed.'", answer: "on/under", hindi: "भरो: 'बिल्ली बिस्तर ___ है।'" },
        { question: "Fill: 'I was born ___ 2000.'", answer: "in", hindi: "भरो: 'मैं 2000 ___ पैदा हुआ।'" }
      ]
    },
    {
      id: 10,
      title: "Conjunctions (संयोजक)",
      emoji: "🔗",
      color: "from-indigo-400 to-purple-500",
      difficulty: "easy",
      description: "Words that connect sentences (and, but, or)",
      sections: [
        {
          title: "Common Conjunctions",
          content: "and, but, or, so, because",
          hindi: "और, लेकिन, या, इसलिए, क्योंकि",
          examples: [
            { english: "I like tea and coffee.", hindi: "मुझे चाय और कॉफी पसंद है।" },
            { english: "He is rich but unhappy.", hindi: "वह अमीर है लेकिन दुखी है।" },
            { english: "Do you want tea or coffee?", hindi: "तुम्हें चाय या कॉफी चाहिए?" }
          ]
        },
        {
          title: "Complex Sentences",
          content: "Using because, so, when, if",
          hindi: "जटिल वाक्य बनाना",
          examples: [
            { english: "I stayed home because it was raining.", hindi: "मैं घर पर रहा क्योंकि बारिश हो रही थी।" },
            { english: "If you study, you will pass.", hindi: "अगर तुम पढ़ोगे, तो पास होगे।" }
          ]
        }
      ],
      practice: [
        { question: "Join: 'I like tea. I like coffee.'", answer: "I like tea and coffee", hindi: "जोड़ो: 'मुझे चाय पसंद है। मुझे कॉफी पसंद है।'" },
        { question: "Fill: 'He is tired ___ he worked hard.'", answer: "because", hindi: "भरो: 'वह थका है ___ उसने मेहनत की।'" }
      ]
    },
  ];

  const toggleComplete = (id) => {
    if (completedTopics.includes(id)) {
      setCompletedTopics(completedTopics.filter(t => t !== id));
    } else {
      setCompletedTopics([...completedTopics, id]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'easy') return darkMode ? 'text-green-400' : 'text-green-600';
    return darkMode ? 'text-yellow-400' : 'text-yellow-600';
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-[#0f1729]/90' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-[#2a3441]' : 'border-gray-200'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/easy-level')}
            className={`flex items-center gap-2 ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6]' : 'text-[#1976d2] hover:text-[#1565c0]'} font-semibold transition-all hover:scale-105`}
          >
            <span className="text-xl">←</span>
            <span>Back to Topics</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-orange-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">📝</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-orange-600'}`}>
                {completedTopics.length}/{grammarTopics.length}
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
          <div className="text-6xl mb-4">📝</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Grammar Starter Pack
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Master English grammar basics: Nouns, Verbs, Tenses & more with Hindi explanations
          </p>
        </div>

        {/* Grammar Topics Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grammarTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-orange-400'
              } ${completedTopics.includes(topic.id) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${topic.color} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">{topic.emoji}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(topic.id);
                    }}
                    className={`${completedTopics.includes(topic.id) ? 'bg-white text-green-600' : 'bg-white/20'} p-1.5 rounded-full hover:scale-110 transition-all`}
                  >
                    {completedTopics.includes(topic.id) ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-1">{topic.title}</h3>
                <p className="text-sm opacity-90">{topic.description}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-semibold ${getDifficultyColor(topic.difficulty)} uppercase`}>
                    {topic.difficulty}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                    {topic.sections.length} lessons
                  </span>
                </div>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-orange-600'} font-semibold`}>
                  Click to learn →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topic Detail Modal */}
      {selectedTopic && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTopic(null)}
        >
          <div 
            className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedTopic.color} p-8 text-white text-center sticky top-0`}>
              <div className="text-6xl mb-4">{selectedTopic.emoji}</div>
              <h2 className="text-3xl font-bold mb-2">{selectedTopic.title}</h2>
              <p className="text-sm opacity-90">{selectedTopic.description}</p>
            </div>
            <div className="p-8">
              {/* Lessons */}
              {selectedTopic.sections.map((section, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl mb-6`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                    {section.title}
                  </h3>
                  <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} mb-2`}>{section.content}</p>
                  <p className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-orange-600'} mb-4 italic`}>{section.hindi}</p>
                  <div className="space-y-2">
                    {section.examples.map((ex, i) => (
                      <div key={i} className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} p-3 rounded-lg`}>
                        <p className={`${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} font-medium`}>{ex.english}</p>
                        <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>{ex.hindi}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Practice Questions */}
              <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-orange-50'} p-6 rounded-xl mb-6`}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-4`}>
                  🎯 Practice Questions
                </h3>
                {selectedTopic.practice.map((q, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} p-4 rounded-lg mb-3`}>
                    <p className={`${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} font-medium mb-1`}>
                      Q{idx + 1}. {q.question}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-2 italic`}>
                      {q.hindi}
                    </p>
                    <details className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-orange-600'}`}>
                      <summary className="cursor-pointer font-semibold">Show Answer</summary>
                      <p className="mt-2 font-bold">✓ {q.answer}</p>
                    </details>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  toggleComplete(selectedTopic.id);
                  setSelectedTopic(null);
                }}
                className={`w-full ${
                  completedTopics.includes(selectedTopic.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${selectedTopic.color}`
                } text-white font-bold py-4 rounded-full transition-all hover:scale-105`}
              >
                {completedTopics.includes(selectedTopic.id) ? '✓ Marked as Completed' : 'Mark as Completed'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
