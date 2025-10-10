import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function IntermediateGrammar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  const grammarTopics = [
    {
      id: 1,
      title: "Clauses (उपवाक्य)",
      emoji: "🔗",
      color: "from-blue-400 to-indigo-500",
      difficulty: "medium",
      description: "Master independent and dependent clauses",
      sections: [
        {
          title: "Independent Clauses",
          content: "A complete sentence that can stand alone",
          hindi: "एक पूर्ण वाक्य जो अकेले खड़ा हो सकता है",
          examples: [
            { english: "I went to the market.", hindi: "मैं बाजार गया।" },
            { english: "She completed her homework.", hindi: "उसने अपना होमवर्क पूरा किया।" },
            { english: "They arrived on time.", hindi: "वे समय पर पहुंचे।" }
          ]
        },
        {
          title: "Dependent Clauses",
          content: "Cannot stand alone, needs main clause",
          hindi: "अकेले नहीं खड़ा हो सकता, मुख्य उपवाक्य की आवश्यकता है",
          examples: [
            { english: "Because it was raining, we stayed home.", hindi: "क्योंकि बारिश हो रही थी, हम घर पर रहे।" },
            { english: "When she called, I was sleeping.", hindi: "जब उसने फोन किया, मैं सो रहा था।" },
            { english: "If you study hard, you will pass.", hindi: "अगर तुम मेहनत से पढ़ोगे, तो पास हो जाओगे।" }
          ]
        }
      ],
      practice: [
        { question: "Identify: 'Although it was late, we continued working.'", answer: "Dependent: Although it was late, Independent: we continued working", hindi: "हालांकि देर हो चुकी थी - आश्रित, हमने काम जारी रखा - स्वतंत्र" },
        { question: "Combine: 'I was tired.' + 'I finished the project.'", answer: "Although I was tired, I finished the project.", hindi: "हालांकि मैं थक गया था, मैंने प्रोजेक्ट पूरा किया।" }
      ]
    },
    {
      id: 2,
      title: "Modal Verbs (सहायक क्रियाएं)",
      emoji: "🎭",
      color: "from-purple-400 to-pink-500",
      difficulty: "medium",
      description: "Can, could, may, might, must, should, would",
      sections: [
        {
          title: "Ability & Permission",
          content: "Can, could, may",
          hindi: "क्षमता और अनुमति",
          examples: [
            { english: "I can speak English fluently.", hindi: "मैं धाराप्रवाह अंग्रेजी बोल सकता हूं।" },
            { english: "Could you help me?", hindi: "क्या आप मेरी मदद कर सकते हैं?" },
            { english: "May I use your phone?", hindi: "क्या मैं आपका फोन इस्तेमाल कर सकता हूं?" }
          ]
        },
        {
          title: "Obligation & Advice",
          content: "Must, should, ought to",
          hindi: "दायित्व और सलाह",
          examples: [
            { english: "You must wear a seatbelt.", hindi: "आपको सीटबेल्ट पहननी चाहिए।" },
            { english: "You should exercise regularly.", hindi: "आपको नियमित रूप से व्यायाम करना चाहिए।" },
            { english: "We ought to respect elders.", hindi: "हमें बड़ों का सम्मान करना चाहिए।" }
          ]
        },
        {
          title: "Possibility",
          content: "May, might, could",
          hindi: "संभावना",
          examples: [
            { english: "It might rain tomorrow.", hindi: "कल बारिश हो सकती है।" },
            { english: "She may arrive late.", hindi: "वह देर से आ सकती है।" },
            { english: "This could be the solution.", hindi: "यह समाधान हो सकता है।" }
          ]
        }
      ],
      practice: [
        { question: "Fill: You ___ study hard for the exam. (advice)", answer: "should", hindi: "आपको परीक्षा के लिए मेहनत से पढ़ना चाहिए।" },
        { question: "Fill: She ___ be at the office now. (possibility)", answer: "might/may/could", hindi: "वह अभी ऑफिस में हो सकती है।" }
      ]
    },
    {
      id: 3,
      title: "Reported Speech (अप्रत्यक्ष कथन)",
      emoji: "💬",
      color: "from-green-400 to-teal-500",
      difficulty: "hard",
      description: "Converting direct speech to indirect speech",
      sections: [
        {
          title: "Statement Reporting",
          content: "He said (that)... / She told me (that)...",
          hindi: "कथन की रिपोर्टिंग",
          examples: [
            { english: "Direct: 'I am tired.' → Indirect: He said he was tired.", hindi: "प्रत्यक्ष: 'मैं थका हूं।' → अप्रत्यक्ष: उसने कहा कि वह थक गया था।" },
            { english: "Direct: 'I will come tomorrow.' → Indirect: She said she would come the next day.", hindi: "प्रत्यक्ष: 'मैं कल आऊंगा।' → अप्रत्यक्ष: उसने कहा कि वह अगले दिन आएगी।" }
          ]
        },
        {
          title: "Question Reporting",
          content: "He asked if/whether... / She asked what/when/where...",
          hindi: "प्रश्न की रिपोर्टिंग",
          examples: [
            { english: "Direct: 'Are you coming?' → Indirect: He asked if I was coming.", hindi: "प्रत्यक्ष: 'क्या तुम आ रहे हो?' → अप्रत्यक्ष: उसने पूछा कि क्या मैं आ रहा हूं।" },
            { english: "Direct: 'What is your name?' → Indirect: She asked what my name was.", hindi: "प्रत्यक्ष: 'आपका नाम क्या है?' → अप्रत्यक्ष: उसने पूछा कि मेरा नाम क्या है।" }
          ]
        },
        {
          title: "Command Reporting",
          content: "He told me to... / She asked me not to...",
          hindi: "आदेश की रिपोर्टिंग",
          examples: [
            { english: "Direct: 'Close the door.' → Indirect: He told me to close the door.", hindi: "प्रत्यक्ष: 'दरवाजा बंद करो।' → अप्रत्यक्ष: उसने मुझे दरवाजा बंद करने को कहा।" },
            { english: "Direct: 'Don't be late.' → Indirect: She told me not to be late.", hindi: "प्रत्यक्ष: 'देर मत करो।' → अप्रत्यक्ष: उसने मुझे देर न करने को कहा।" }
          ]
        }
      ],
      practice: [
        { question: "Convert: He said, 'I am reading a book.'", answer: "He said (that) he was reading a book.", hindi: "उसने कहा कि वह एक किताब पढ़ रहा था।" },
        { question: "Convert: She asked, 'Where do you live?'", answer: "She asked where I lived.", hindi: "उसने पूछा कि मैं कहां रहता हूं।" }
      ]
    },
    {
      id: 4,
      title: "Conditionals (शर्तें)",
      emoji: "⚖️",
      color: "from-orange-400 to-red-500",
      difficulty: "hard",
      description: "If-clauses: Zero, First, Second, Third conditional",
      sections: [
        {
          title: "Zero Conditional (General Truth)",
          content: "If + present, present (सामान्य सत्य)",
          hindi: "यदि + वर्तमान, वर्तमान",
          examples: [
            { english: "If you heat water, it boils.", hindi: "अगर आप पानी गर्म करते हैं, तो वह उबलता है।" },
            { english: "If it rains, the ground gets wet.", hindi: "अगर बारिश होती है, तो जमीन गीली हो जाती है।" }
          ]
        },
        {
          title: "First Conditional (Real Future)",
          content: "If + present, will + verb (वास्तविक भविष्य)",
          hindi: "यदि + वर्तमान, will + क्रिया",
          examples: [
            { english: "If I study hard, I will pass the exam.", hindi: "अगर मैं मेहनत से पढ़ूंगा, तो मैं परीक्षा पास कर लूंगा।" },
            { english: "If it rains tomorrow, we will cancel the picnic.", hindi: "अगर कल बारिश होती है, तो हम पिकनिक रद्द कर देंगे।" }
          ]
        },
        {
          title: "Second Conditional (Unreal Present)",
          content: "If + past, would + verb (काल्पनिक वर्तमान)",
          hindi: "यदि + भूत, would + क्रिया",
          examples: [
            { english: "If I had a million dollars, I would buy a house.", hindi: "अगर मेरे पास एक मिलियन डॉलर होते, तो मैं एक घर खरीदता।" },
            { english: "If I were you, I would accept the offer.", hindi: "अगर मैं तुम होता, तो मैं प्रस्ताव स्वीकार करता।" }
          ]
        },
        {
          title: "Third Conditional (Unreal Past)",
          content: "If + had + past participle, would have + past participle",
          hindi: "यदि + had + भूतकालिक, would have + भूतकालिक",
          examples: [
            { english: "If I had studied harder, I would have passed.", hindi: "अगर मैंने मेहनत से पढ़ा होता, तो मैं पास हो गया होता।" },
            { english: "If she had come early, she would have met him.", hindi: "अगर वह जल्दी आती, तो वह उससे मिलती।" }
          ]
        }
      ],
      practice: [
        { question: "Which conditional: 'If I win the lottery, I will travel the world.'", answer: "First Conditional (real future possibility)", hindi: "प्रथम शर्त (वास्तविक भविष्य की संभावना)" },
        { question: "Fill: If I ___ (be) rich, I would help the poor.", answer: "were", hindi: "अगर मैं अमीर होता, तो मैं गरीबों की मदद करता।" }
      ]
    },
    {
      id: 5,
      title: "Passive Voice (कर्मवाच्य)",
      emoji: "🔄",
      color: "from-cyan-400 to-blue-500",
      difficulty: "hard",
      description: "Converting active to passive voice",
      sections: [
        {
          title: "Present/Past Passive",
          content: "Subject receives the action",
          hindi: "विषय क्रिया प्राप्त करता है",
          examples: [
            { english: "Active: They build houses. → Passive: Houses are built by them.", hindi: "सक्रिय: वे घर बनाते हैं। → निष्क्रिय: घर उनके द्वारा बनाए जाते हैं।" },
            { english: "Active: She wrote a letter. → Passive: A letter was written by her.", hindi: "सक्रिय: उसने एक पत्र लिखा। → निष्क्रिय: एक पत्र उसके द्वारा लिखा गया था।" }
          ]
        },
        {
          title: "Future & Modal Passive",
          content: "Will be + past participle / Modal + be + past participle",
          hindi: "Will be + भूतकालिक / Modal + be + भूतकालिक",
          examples: [
            { english: "Active: They will complete the project. → Passive: The project will be completed.", hindi: "सक्रिय: वे परियोजना पूरी करेंगे। → निष्क्रिय: परियोजना पूरी की जाएगी।" },
            { english: "Active: You must submit the form. → Passive: The form must be submitted.", hindi: "सक्रिय: आपको फॉर्म जमा करना होगा। → निष्क्रिय: फॉर्म जमा किया जाना चाहिए।" }
          ]
        }
      ],
      practice: [
        { question: "Convert to passive: 'The chef cooks delicious food.'", answer: "Delicious food is cooked by the chef.", hindi: "स्वादिष्ट भोजन शेफ द्वारा पकाया जाता है।" },
        { question: "Convert to passive: 'They have finished the work.'", answer: "The work has been finished by them.", hindi: "काम उनके द्वारा समाप्त किया गया है।" }
      ]
    },
    {
      id: 6,
      title: "Relative Clauses (संबंध सूचक उपवाक्य)",
      emoji: "🔗",
      color: "from-yellow-400 to-orange-500",
      difficulty: "medium",
      description: "Using who, which, that, whose, where, when",
      sections: [
        {
          title: "Defining Relative Clauses",
          content: "Essential information, no commas",
          hindi: "आवश्यक जानकारी, कोई अल्पविराम नहीं",
          examples: [
            { english: "The man who called you is my friend.", hindi: "जिस आदमी ने आपको फोन किया वह मेरा दोस्त है।" },
            { english: "The book that I bought is interesting.", hindi: "जो किताब मैंने खरीदी वह दिलचस्प है।" },
            { english: "I know a place where we can eat.", hindi: "मैं एक जगह जानता हूं जहां हम खा सकते हैं।" }
          ]
        },
        {
          title: "Non-Defining Relative Clauses",
          content: "Extra information, use commas",
          hindi: "अतिरिक्त जानकारी, अल्पविराम का उपयोग करें",
          examples: [
            { english: "My brother, who lives in Delhi, is a doctor.", hindi: "मेरा भाई, जो दिल्ली में रहता है, एक डॉक्टर है।" },
            { english: "The Taj Mahal, which is in Agra, is beautiful.", hindi: "ताजमहल, जो आगरा में है, सुंदर है।" }
          ]
        }
      ],
      practice: [
        { question: "Join: 'I met a girl.' + 'She is from Mumbai.'", answer: "I met a girl who is from Mumbai.", hindi: "मैं एक लड़की से मिला जो मुंबई से है।" },
        { question: "Fill: The house ___ I grew up in was small.", answer: "that/which", hindi: "जिस घर में मैं बड़ा हुआ वह छोटा था।" }
      ]
    },
    {
      id: 7,
      title: "Perfect Tenses (पूर्ण काल)",
      emoji: "⏰",
      color: "from-pink-400 to-rose-500",
      difficulty: "medium",
      description: "Present, Past, and Future Perfect",
      sections: [
        {
          title: "Present Perfect",
          content: "Have/Has + past participle (अभी पूरा हुआ)",
          hindi: "Have/Has + भूतकालिक क्रिया",
          examples: [
            { english: "I have finished my homework.", hindi: "मैंने अपना होमवर्क पूरा कर लिया है।" },
            { english: "She has lived here for 5 years.", hindi: "वह यहां 5 साल से रह रही है।" },
            { english: "They have already eaten lunch.", hindi: "उन्होंने पहले ही दोपहर का भोजन कर लिया है।" }
          ]
        },
        {
          title: "Past Perfect",
          content: "Had + past participle (पहले पूरा हुआ)",
          hindi: "Had + भूतकालिक क्रिया",
          examples: [
            { english: "I had finished my work before he came.", hindi: "उसके आने से पहले मैंने अपना काम पूरा कर लिया था।" },
            { english: "She had already left when I arrived.", hindi: "जब मैं पहुंचा तो वह पहले ही चली गई थी।" }
          ]
        },
        {
          title: "Future Perfect",
          content: "Will have + past participle (भविष्य में पूरा होगा)",
          hindi: "Will have + भूतकालिक क्रिया",
          examples: [
            { english: "I will have completed the project by Friday.", hindi: "मैं शुक्रवार तक परियोजना पूरी कर लूंगा।" },
            { english: "They will have left by the time you arrive.", hindi: "जब तक आप पहुंचेंगे तब तक वे जा चुके होंगे।" }
          ]
        }
      ],
      practice: [
        { question: "Fill: I ___ (finish) my work before the deadline.", answer: "had finished", hindi: "समय सीमा से पहले मैंने अपना काम पूरा कर लिया था।" },
        { question: "Fill: By next year, she ___ (complete) her degree.", answer: "will have completed", hindi: "अगले साल तक, वह अपनी डिग्री पूरी कर लेगी।" }
      ]
    },
    {
      id: 8,
      title: "Gerunds & Infinitives",
      emoji: "🎯",
      color: "from-indigo-400 to-purple-500",
      difficulty: "hard",
      description: "Verb + ing vs to + verb",
      sections: [
        {
          title: "Gerunds (verb + ing)",
          content: "After certain verbs: enjoy, avoid, finish, suggest",
          hindi: "कुछ क्रियाओं के बाद",
          examples: [
            { english: "I enjoy reading books.", hindi: "मुझे किताबें पढ़ना पसंद है।" },
            { english: "She avoided meeting him.", hindi: "उसने उससे मिलने से परहेज किया।" },
            { english: "They finished working at 6 PM.", hindi: "उन्होंने शाम 6 बजे काम खत्म किया।" }
          ]
        },
        {
          title: "Infinitives (to + verb)",
          content: "After certain verbs: want, decide, plan, hope",
          hindi: "कुछ क्रियाओं के बाद",
          examples: [
            { english: "I want to learn Spanish.", hindi: "मैं स्पेनिश सीखना चाहता हूं।" },
            { english: "She decided to quit her job.", hindi: "उसने अपनी नौकरी छोड़ने का फैसला किया।" },
            { english: "They plan to travel next month.", hindi: "वे अगले महीने यात्रा करने की योजना बना रहे हैं।" }
          ]
        },
        {
          title: "Both Gerund & Infinitive",
          content: "Some verbs accept both: like, love, hate, start, begin",
          hindi: "कुछ क्रियाएं दोनों स्वीकार करती हैं",
          examples: [
            { english: "I like reading / I like to read.", hindi: "मुझे पढ़ना पसंद है।" },
            { english: "She started crying / She started to cry.", hindi: "वह रोने लगी।" }
          ]
        }
      ],
      practice: [
        { question: "Fill: I enjoy ___ (swim) in the ocean.", answer: "swimming", hindi: "मुझे समुद्र में तैरना पसंद है।" },
        { question: "Fill: She wants ___ (buy) a new car.", answer: "to buy", hindi: "वह एक नई कार खरीदना चाहती है।" }
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
    if (difficulty === 'medium') return darkMode ? 'text-yellow-400' : 'text-yellow-600';
    return darkMode ? 'text-red-400' : 'text-red-600';
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500`}>
      {/* Header */}
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
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-purple-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🧠</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'}`}>
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
          <div className="text-6xl mb-4">🧠</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Intermediate Grammar
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Master advanced grammar: Clauses, Modals, Reported Speech, Conditionals & more
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
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-purple-400'
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
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'} font-semibold`}>
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
                  <p className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'} mb-4 italic`}>{section.hindi}</p>
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
              <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-purple-50'} p-6 rounded-xl mb-6`}>
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
                    <details className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'}`}>
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
