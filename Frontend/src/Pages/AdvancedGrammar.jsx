import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AdvancedGrammar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  const grammarTopics = [
    {
      id: 1,
      title: "Subjunctive Mood (काल्पनिक मनोदशा)",
      emoji: "🎭",
      color: "from-red-400 to-pink-500",
      difficulty: "hard",
      description: "Express wishes, hypothetical situations, and demands",
      sections: [
        {
          title: "Present Subjunctive",
          content: "Used for suggestions, demands, and recommendations",
          hindi: "सुझाव, मांग और सिफारिशों के लिए",
          examples: [
            { english: "I suggest that he be present at the meeting.", hindi: "मैं सुझाव देता हूं कि वह बैठक में उपस्थित हो।" },
            { english: "It's important that she arrive on time.", hindi: "यह महत्वपूर्ण है कि वह समय पर पहुंचे।" },
            { english: "The boss insists that we work overtime.", hindi: "बॉस जोर देता है कि हम ओवरटाइम काम करें।" }
          ]
        },
        {
          title: "Past Subjunctive",
          content: "Used for hypothetical past situations",
          hindi: "काल्पनिक भूतकाल स्थितियों के लिए",
          examples: [
            { english: "If I were you, I would accept the offer.", hindi: "अगर मैं तुम होता, तो मैं प्रस्ताव स्वीकार करता।" },
            { english: "I wish I were taller.", hindi: "काश मैं लंबा होता।" },
            { english: "He acts as if he were the boss.", hindi: "वह ऐसे व्यवहार करता है जैसे वह बॉस हो।" }
          ]
        }
      ],
      practice: [
        { question: "Fill: I recommend that he ___ (study) harder.", answer: "study", hindi: "मैं सिफारिश करता हूं कि वह मेहनत से पढ़े।" },
        { question: "Correct or incorrect: 'I wish I was rich.'", answer: "Incorrect - should be 'I wish I were rich'", hindi: "गलत - 'I wish I were rich' होना चाहिए" }
      ]
    },
    {
      id: 2,
      title: "Inversion (उलटफेर)",
      emoji: "🔄",
      color: "from-purple-400 to-indigo-500",
      difficulty: "hard",
      description: "Advanced sentence structure with inverted word order",
      sections: [
        {
          title: "Negative Inversion",
          content: "Inverting subject and verb after negative adverbs",
          hindi: "नकारात्मक क्रियाविशेषण के बाद विषय और क्रिया को उलटना",
          examples: [
            { english: "Never have I seen such a beautiful sight.", hindi: "मैंने कभी ऐसा सुंदर दृश्य नहीं देखा।" },
            { english: "Rarely does he arrive on time.", hindi: "वह शायद ही कभी समय पर पहुंचता है।" },
            { english: "Not only did she win, but she also broke the record.", hindi: "न केवल उसने जीत हासिल की, बल्कि उसने रिकॉर्ड भी तोड़ा।" }
          ]
        },
        {
          title: "Conditional Inversion",
          content: "Omitting 'if' in conditionals",
          hindi: "शर्तों में 'if' को हटाना",
          examples: [
            { english: "Had I known, I would have come earlier.", hindi: "अगर मुझे पता होता, तो मैं पहले आता।" },
            { english: "Should you need help, call me.", hindi: "अगर आपको मदद चाहिए, तो मुझे फोन करें।" },
            { english: "Were I in your position, I'd resign.", hindi: "अगर मैं आपकी जगह होता, तो मैं इस्तीफा दे देता।" }
          ]
        }
      ],
      practice: [
        { question: "Rewrite with inversion: 'I have never been so insulted.'", answer: "Never have I been so insulted.", hindi: "मेरा कभी इस तरह अपमान नहीं हुआ।" },
        { question: "Rewrite: 'If I were rich, I would travel.'", answer: "Were I rich, I would travel.", hindi: "अगर मैं अमीर होता, तो मैं यात्रा करता।" }
      ]
    },
    {
      id: 3,
      title: "Cleft Sentences (विभाजित वाक्य)",
      emoji: "✂️",
      color: "from-blue-400 to-cyan-500",
      difficulty: "hard",
      description: "Emphasize specific parts of sentences",
      sections: [
        {
          title: "It-Cleft Sentences",
          content: "Using 'It is/was... that/who...' for emphasis",
          hindi: "जोर देने के लिए 'It is/was... that/who...' का उपयोग",
          examples: [
            { english: "It was John who broke the window.", hindi: "जॉन ने ही खिड़की तोड़ी थी।" },
            { english: "It is English that I'm studying, not French.", hindi: "मैं अंग्रेजी पढ़ रहा हूं, फ्रेंच नहीं।" },
            { english: "It was yesterday that I saw her.", hindi: "कल ही मैंने उसे देखा था।" }
          ]
        },
        {
          title: "What-Cleft Sentences",
          content: "Using 'What... is/was...' for emphasis",
          hindi: "जोर देने के लिए 'What... is/was...' का उपयोग",
          examples: [
            { english: "What I need is a vacation.", hindi: "मुझे जो चाहिए वह छुट्टी है।" },
            { english: "What she said was absolutely true.", hindi: "उसने जो कहा वह बिल्कुल सच था।" },
            { english: "What matters most is your health.", hindi: "सबसे महत्वपूर्ण आपका स्वास्थ्य है।" }
          ]
        }
      ],
      practice: [
        { question: "Make cleft: 'I want peace, not money.'", answer: "What I want is peace, not money.", hindi: "मुझे जो चाहिए वह शांति है, पैसा नहीं।" },
        { question: "Make it-cleft: 'The noise disturbed me.'", answer: "It was the noise that disturbed me.", hindi: "शोर ने ही मुझे परेशान किया।" }
      ]
    },
    {
      id: 4,
      title: "Participle Clauses (पार्टिसिपल उपवाक्य)",
      emoji: "⚙️",
      color: "from-green-400 to-emerald-500",
      difficulty: "hard",
      description: "Advanced sentence reduction using participles",
      sections: [
        {
          title: "Present Participle Clauses",
          content: "Using -ing form to show simultaneous actions",
          hindi: "समकालीन क्रियाओं को दिखाने के लिए -ing का उपयोग",
          examples: [
            { english: "Walking down the street, I saw an old friend.", hindi: "सड़क पर चलते हुए, मैंने एक पुराने दोस्त को देखा।" },
            { english: "Being tired, she went to bed early.", hindi: "थकी हुई होने के कारण, वह जल्दी सो गई।" },
            { english: "Having finished the work, he left the office.", hindi: "काम खत्म करने के बाद, वह कार्यालय से चला गया।" }
          ]
        },
        {
          title: "Past Participle Clauses",
          content: "Using past participle for passive meaning",
          hindi: "निष्क्रिय अर्थ के लिए पास्ट पार्टिसिपल का उपयोग",
          examples: [
            { english: "Written in simple language, the book is easy to read.", hindi: "सरल भाषा में लिखी गई, किताब पढ़ने में आसान है।" },
            { english: "Shocked by the news, she couldn't speak.", hindi: "समाचार से स्तब्ध, वह बोल नहीं सकी।" },
            { english: "Built in 1990, the building needs renovation.", hindi: "1990 में बनी, इमारत को नवीनीकरण की आवश्यकता है।" }
          ]
        }
      ],
      practice: [
        { question: "Combine: 'She was feeling sick. She stayed home.'", answer: "Feeling sick, she stayed home.", hindi: "बीमार महसूस करते हुए, वह घर पर रही।" },
        { question: "Reduce: 'The letter which was written by her was touching.'", answer: "The letter written by her was touching.", hindi: "उसके द्वारा लिखा गया पत्र मार्मिक था।" }
      ]
    },
    {
      id: 5,
      title: "Nominal Clauses (नामिक उपवाक्य)",
      emoji: "📛",
      color: "from-yellow-400 to-orange-500",
      difficulty: "hard",
      description: "Clauses functioning as nouns",
      sections: [
        {
          title: "That-Clauses",
          content: "Using 'that' clauses as subjects or objects",
          hindi: "'that' उपवाक्यों को विषय या कर्म के रूप में उपयोग करना",
          examples: [
            { english: "That he succeeded surprised everyone.", hindi: "कि वह सफल हुआ सभी को आश्चर्यचकित कर दिया।" },
            { english: "I believe that honesty is the best policy.", hindi: "मेरा मानना है कि ईमानदारी सबसे अच्छी नीति है।" },
            { english: "It's obvious that she's talented.", hindi: "यह स्पष्ट है कि वह प्रतिभाशाली है।" }
          ]
        },
        {
          title: "Wh-Clauses",
          content: "Using question words as clause introducers",
          hindi: "प्रश्न शब्दों को उपवाक्य परिचयकर्ता के रूप में उपयोग करना",
          examples: [
            { english: "What matters is how we respond.", hindi: "महत्वपूर्ण यह है कि हम कैसे प्रतिक्रिया देते हैं।" },
            { english: "I don't know why he left.", hindi: "मुझे नहीं पता वह क्यों चला गया।" },
            { english: "Where you go is your decision.", hindi: "आप कहां जाते हैं यह आपका निर्णय है।" }
          ]
        }
      ],
      practice: [
        { question: "Make nominal clause: 'His success was surprising.'", answer: "That he succeeded was surprising.", hindi: "कि वह सफल हुआ आश्चर्यजनक था।" },
        { question: "Fill: ___ she said made sense.", answer: "What", hindi: "उसने जो कहा उसका अर्थ था।" }
      ]
    },
    {
      id: 6,
      title: "Ellipsis & Substitution (लोप और प्रतिस्थापन)",
      emoji: "✏️",
      color: "from-pink-400 to-rose-500",
      difficulty: "hard",
      description: "Advanced techniques to avoid repetition",
      sections: [
        {
          title: "Ellipsis",
          content: "Omitting words that are understood from context",
          hindi: "संदर्भ से समझे जाने वाले शब्दों को छोड़ना",
          examples: [
            { english: "A: Are you coming? B: I might (come).", hindi: "A: क्या तुम आ रहे हो? B: शायद (आऊं)।" },
            { english: "She can speak French and I can too (speak French).", hindi: "वह फ्रेंच बोल सकती है और मैं भी (बोल सकता हूं)।" },
            { english: "I asked him to help, but he didn't want to (help).", hindi: "मैंने उससे मदद करने को कहा, लेकिन वह नहीं चाहता था (मदद करना)।" }
          ]
        },
        {
          title: "Substitution",
          content: "Using 'one', 'do', 'so' to replace words",
          hindi: "शब्दों को बदलने के लिए 'one', 'do', 'so' का उपयोग",
          examples: [
            { english: "I need a pen. Do you have one?", hindi: "मुझे एक पेन चाहिए। क्या आपके पास है?" },
            { english: "She works hard and so does he.", hindi: "वह मेहनत करती है और वह भी करता है।" },
            { english: "A: Will it rain? B: I think so.", hindi: "A: क्या बारिश होगी? B: मुझे ऐसा लगता है।" }
          ]
        }
      ],
      practice: [
        { question: "Reduce: 'I wanted to go but I couldn't go.'", answer: "I wanted to go but I couldn't.", hindi: "मैं जाना चाहता था लेकिन नहीं जा सका।" },
        { question: "Fill with substitution: 'These shoes are old. I need new ___.'", answer: "ones", hindi: "ये जूते पुराने हैं। मुझे नए चाहिए।" }
      ]
    },
    {
      id: 7,
      title: "Fronting & Postponement (आगे लाना और पीछे करना)",
      emoji: "🔀",
      color: "from-indigo-400 to-purple-500",
      difficulty: "hard",
      description: "Moving sentence elements for emphasis",
      sections: [
        {
          title: "Fronting",
          content: "Moving elements to the beginning for emphasis",
          hindi: "जोर देने के लिए तत्वों को शुरुआत में ले जाना",
          examples: [
            { english: "Beautiful though she is, she's not friendly.", hindi: "सुंदर होने के बावजूद, वह मित्रवत नहीं है।" },
            { english: "In the garden stood a magnificent oak tree.", hindi: "बगीचे में एक शानदार ओक का पेड़ खड़ा था।" },
            { english: "This solution, I cannot accept.", hindi: "यह समाधान, मैं स्वीकार नहीं कर सकता।" }
          ]
        },
        {
          title: "Postponement",
          content: "Delaying information for dramatic effect",
          hindi: "नाटकीय प्रभाव के लिए जानकारी में देरी करना",
          examples: [
            { english: "It's amazing that he survived.", hindi: "यह आश्चर्यजनक है कि वह बच गया।" },
            { english: "I find it difficult to wake up early.", hindi: "मुझे जल्दी उठना मुश्किल लगता है।" },
            { english: "There's no point arguing about it.", hindi: "इस बारे में बहस करने का कोई मतलब नहीं है।" }
          ]
        }
      ],
      practice: [
        { question: "Front for emphasis: 'I will never forget this day.'", answer: "This day I will never forget.", hindi: "इस दिन को मैं कभी नहीं भूलूंगा।" },
        { question: "Use 'it' postponement: 'To learn new things is exciting.'", answer: "It's exciting to learn new things.", hindi: "नई चीजें सीखना रोमांचक है।" }
      ]
    },
    {
      id: 8,
      title: "Discourse Markers (प्रवचन चिह्न)",
      emoji: "🔗",
      color: "from-teal-400 to-cyan-500",
      difficulty: "hard",
      description: "Advanced connectors for sophisticated writing",
      sections: [
        {
          title: "Addition & Contrast",
          content: "Furthermore, Moreover, Nevertheless, Nonetheless",
          hindi: "इसके अलावा, फिर भी, तथापि",
          examples: [
            { english: "Furthermore, the evidence supports this claim.", hindi: "इसके अलावा, साक्ष्य इस दावे का समर्थन करते हैं।" },
            { english: "Nevertheless, we must proceed with caution.", hindi: "फिर भी, हमें सावधानी से आगे बढ़ना चाहिए।" },
            { english: "The plan was risky; nonetheless, it succeeded.", hindi: "योजना जोखिम भरी थी; फिर भी, यह सफल रही।" }
          ]
        },
        {
          title: "Result & Inference",
          content: "Consequently, Hence, Thus, Thereby",
          hindi: "परिणामस्वरूप, इसलिए, इस प्रकार",
          examples: [
            { english: "He studied hard; consequently, he passed.", hindi: "उसने कड़ी मेहनत की; परिणामस्वरूप, वह पास हो गया।" },
            { english: "Hence, we can conclude that...", hindi: "इसलिए, हम यह निष्कर्ष निकाल सकते हैं कि..." },
            { english: "The evidence was insufficient; thus, he was acquitted.", hindi: "सबूत अपर्याप्त थे; इस प्रकार, उसे बरी कर दिया गया।" }
          ]
        }
      ],
      practice: [
        { question: "Connect: 'The weather was bad. We continued our journey.'", answer: "The weather was bad; nevertheless, we continued our journey.", hindi: "मौसम खराब था; फिर भी, हमने अपनी यात्रा जारी रखी।" },
        { question: "Fill: 'He worked overtime; ___, he finished the project.'", answer: "consequently/thus/hence", hindi: "उसने ओवरटाइम काम किया; परिणामस्वरूप, उसने परियोजना पूरी की।" }
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
    return darkMode ? 'text-red-400' : 'text-red-600';
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
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-red-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🧭</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-red-600'}`}>
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
          <div className="text-6xl mb-4">🧭</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Advanced Grammar Mastery
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Master complex structures: Subjunctive, Inversion, Cleft Sentences & more
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
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-red-400'
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
                    {topic.sections.length} sections
                  </span>
                </div>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-red-600'} font-semibold`}>
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
                  <p className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-red-600'} mb-4 italic`}>{section.hindi}</p>
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
              <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-red-50'} p-6 rounded-xl mb-6`}>
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
                    <details className={`text-sm ${darkMode ? 'text-[#60a5fa]' : 'text-red-600'}`}>
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
