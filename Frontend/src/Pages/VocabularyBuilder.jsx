import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function VocabularyBuilder() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [completedItems, setCompletedItems] = useState([]);
  const [activeTab, setActiveTab] = useState('idioms'); // 'idioms' or 'phrasal'

  const idioms = [
    {
      id: 1,
      idiom: "Break the ice",
      meaning: "To start a conversation in a social setting",
      hindi: "बातचीत शुरू करना, बर्फ तोड़ना",
      example: "He told a joke to break the ice at the meeting.",
      exampleHindi: "उसने बैठक में बर्फ तोड़ने के लिए एक चुटकुला सुनाया।",
      category: "Social",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 2,
      idiom: "Piece of cake",
      meaning: "Something very easy to do",
      hindi: "बहुत आसान काम",
      example: "The exam was a piece of cake for her.",
      exampleHindi: "परीक्षा उसके लिए बहुत आसान थी।",
      category: "Common",
      color: "from-green-400 to-teal-500"
    },
    {
      id: 3,
      idiom: "Hit the nail on the head",
      meaning: "To describe exactly what is causing a situation or problem",
      hindi: "बिल्कुल सही बात कहना",
      example: "You hit the nail on the head with that analysis.",
      exampleHindi: "आपने उस विश्लेषण से बिल्कुल सही बात कही।",
      category: "Work",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      idiom: "Cost an arm and a leg",
      meaning: "Very expensive",
      hindi: "बहुत महंगा",
      example: "That designer bag must have cost an arm and a leg.",
      exampleHindi: "वह डिजाइनर बैग बहुत महंगा रहा होगा।",
      category: "Money",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 5,
      idiom: "Once in a blue moon",
      meaning: "Very rarely",
      hindi: "बहुत कम, कभी-कभार",
      example: "I only see him once in a blue moon.",
      exampleHindi: "मैं उसे बहुत कम देखता हूं।",
      category: "Time",
      color: "from-indigo-400 to-blue-500"
    },
    {
      id: 6,
      idiom: "Spill the beans",
      meaning: "To reveal a secret",
      hindi: "राज़ खोल देना",
      example: "Don't spill the beans about the surprise party!",
      exampleHindi: "सरप्राइज पार्टी के बारे में राज़ मत बताओ!",
      category: "Social",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 7,
      idiom: "Burn the midnight oil",
      meaning: "To work late into the night",
      hindi: "देर रात तक काम करना",
      example: "She burned the midnight oil to finish the project.",
      exampleHindi: "उसने प्रोजेक्ट खत्म करने के लिए देर रात तक काम किया।",
      category: "Work",
      color: "from-red-400 to-pink-500"
    },
    {
      id: 8,
      idiom: "Under the weather",
      meaning: "Feeling ill or sick",
      hindi: "बीमार महसूस करना",
      example: "I'm feeling under the weather today.",
      exampleHindi: "मैं आज बीमार महसूस कर रहा हूं।",
      category: "Health",
      color: "from-teal-400 to-green-500"
    },
    {
      id: 9,
      idiom: "Bite off more than you can chew",
      meaning: "To take on more responsibility than you can handle",
      hindi: "अपनी क्षमता से अधिक जिम्मेदारी लेना",
      example: "I think I bit off more than I could chew with this project.",
      exampleHindi: "मुझे लगता है कि मैंने इस परियोजना में अपनी क्षमता से अधिक ले लिया।",
      category: "Work",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 10,
      idiom: "Let the cat out of the bag",
      meaning: "To accidentally reveal a secret",
      hindi: "गलती से राज़ बता देना",
      example: "He let the cat out of the bag about the merger.",
      exampleHindi: "उसने विलय के बारे में गलती से राज़ बता दिया।",
      category: "Social",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const phrasalVerbs = [
    {
      id: 11,
      verb: "Break down",
      meaning: "1. Stop functioning (machine) 2. Lose control emotionally",
      hindi: "1. खराब हो जाना 2. भावनात्मक रूप से टूट जाना",
      examples: [
        { english: "My car broke down on the highway.", hindi: "मेरी कार हाईवे पर खराब हो गई।" },
        { english: "She broke down in tears.", hindi: "वह रो पड़ी।" }
      ],
      category: "Common",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 12,
      verb: "Give up",
      meaning: "To stop trying, to quit",
      hindi: "हार मान लेना, छोड़ देना",
      examples: [
        { english: "Don't give up on your dreams.", hindi: "अपने सपनों को मत छोड़ो।" },
        { english: "He gave up smoking last year.", hindi: "उसने पिछले साल धूम्रपान छोड़ दिया।" }
      ],
      category: "Common",
      color: "from-green-400 to-teal-500"
    },
    {
      id: 13,
      verb: "Look forward to",
      meaning: "To be excited about something in the future",
      hindi: "किसी चीज़ का इंतज़ार करना, उत्सुक होना",
      examples: [
        { english: "I'm looking forward to the weekend.", hindi: "मैं सप्ताहांत का इंतज़ार कर रहा हूं।" },
        { english: "We look forward to meeting you.", hindi: "हम आपसे मिलने के लिए उत्सुक हैं।" }
      ],
      category: "Emotions",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 14,
      verb: "Put off",
      meaning: "To postpone, delay",
      hindi: "टालना, स्थगित करना",
      examples: [
        { english: "Let's put off the meeting until tomorrow.", hindi: "चलो बैठक को कल तक टाल देते हैं।" },
        { english: "Don't put off what you can do today.", hindi: "आज का काम कल पर मत टालो।" }
      ],
      category: "Time",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 15,
      verb: "Run into",
      meaning: "To meet someone unexpectedly",
      hindi: "अचानक किसी से मिलना",
      examples: [
        { english: "I ran into an old friend at the mall.", hindi: "मैं मॉल में एक पुराने दोस्त से मिला।" },
        { english: "We ran into some problems with the project.", hindi: "परियोजना में हमें कुछ समस्याएं आईं।" }
      ],
      category: "Social",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 16,
      verb: "Turn down",
      meaning: "To reject or refuse an offer",
      hindi: "अस्वीकार करना, मना करना",
      examples: [
        { english: "She turned down the job offer.", hindi: "उसने नौकरी का प्रस्ताव अस्वीकार कर दिया।" },
        { english: "Please turn down the music.", hindi: "कृपया संगीत की आवाज़ कम करो।" }
      ],
      category: "Communication",
      color: "from-red-400 to-pink-500"
    },
    {
      id: 17,
      verb: "Come across",
      meaning: "To find something by chance",
      hindi: "संयोग से कुछ मिल जाना",
      examples: [
        { english: "I came across an interesting article.", hindi: "मुझे एक दिलचस्प लेख मिला।" },
        { english: "He comes across as very confident.", hindi: "वह बहुत आत्मविश्वासी लगता है।" }
      ],
      category: "Discovery",
      color: "from-teal-400 to-green-500"
    },
    {
      id: 18,
      verb: "Take off",
      meaning: "1. Remove clothing 2. Airplane leaves ground 3. Become successful",
      hindi: "1. कपड़े उतारना 2. विमान उड़ान भरना 3. सफल होना",
      examples: [
        { english: "Please take off your shoes.", hindi: "कृपया अपने जूते उतारें।" },
        { english: "The plane will take off in 10 minutes.", hindi: "विमान 10 मिनट में उड़ान भरेगा।" },
        { english: "His career really took off last year.", hindi: "पिछले साल उनका करियर वास्तव में सफल हो गया।" }
      ],
      category: "Multi-meaning",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 19,
      verb: "Carry on",
      meaning: "To continue doing something",
      hindi: "जारी रखना",
      examples: [
        { english: "Please carry on with your work.", hindi: "कृपया अपना काम जारी रखें।" },
        { english: "Carry on, I'm listening.", hindi: "जारी रखो, मैं सुन रहा हूं।" }
      ],
      category: "Action",
      color: "from-indigo-400 to-purple-500"
    },
    {
      id: 20,
      verb: "Figure out",
      meaning: "To understand or solve something",
      hindi: "समझना, हल करना",
      examples: [
        { english: "I can't figure out this problem.", hindi: "मैं इस समस्या को हल नहीं कर सकता।" },
        { english: "Did you figure out the answer?", hindi: "क्या आपने उत्तर समझ लिया?" }
      ],
      category: "Thinking",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const allItems = activeTab === 'idioms' ? idioms : phrasalVerbs;

  const toggleComplete = (id) => {
    if (completedItems.includes(id)) {
      setCompletedItems(completedItems.filter(i => i !== id));
    } else {
      setCompletedItems([...completedItems, id]);
    }
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
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-green-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">📘</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-green-600'}`}>
                {completedItems.length}/{allItems.length}
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
          <div className="text-6xl mb-4">📘</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Vocabulary Builder
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto mb-6`}>
            Master idioms and phrasal verbs to speak like a native
          </p>

          {/* Tab Switcher */}
          <div className={`inline-flex ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-200'} rounded-full p-1`}>
            <button
              onClick={() => setActiveTab('idioms')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'idioms'
                  ? darkMode ? 'bg-[#60a5fa] text-white' : 'bg-white text-gray-900 shadow'
                  : darkMode ? 'text-[#94a3b8]' : 'text-gray-600'
              }`}
            >
              Idioms ({idioms.length})
            </button>
            <button
              onClick={() => setActiveTab('phrasal')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'phrasal'
                  ? darkMode ? 'bg-[#60a5fa] text-white' : 'bg-white text-gray-900 shadow'
                  : darkMode ? 'text-[#94a3b8]' : 'text-gray-600'
              }`}
            >
              Phrasal Verbs ({phrasalVerbs.length})
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-green-400'
              } ${completedItems.includes(item.id) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${item.color} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className={`${darkMode ? 'bg-white/20' : 'bg-white/30'} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {item.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(item.id);
                    }}
                    className={`${completedItems.includes(item.id) ? 'bg-white text-green-600' : 'bg-white/20'} p-1.5 rounded-full hover:scale-110 transition-all`}
                  >
                    {completedItems.includes(item.id) ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-1">{activeTab === 'idioms' ? item.idiom : item.verb}</h3>
                <p className="text-sm opacity-90">{item.hindi}</p>
              </div>
              <div className="p-4">
                <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} mb-3`}>
                  {item.meaning}
                </p>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-green-600'} font-semibold`}>
                  Click for examples →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedItem.color} p-8 text-white text-center sticky top-0`}>
              <div className="text-6xl mb-4">📘</div>
              <h2 className="text-3xl font-bold mb-2">{activeTab === 'idioms' ? selectedItem.idiom : selectedItem.verb}</h2>
              <p className="text-lg opacity-90">{selectedItem.hindi}</p>
            </div>
            <div className="p-8">
              <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl mb-6`}>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                  Meaning:
                </h3>
                <p className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'}`}>
                  {selectedItem.meaning}
                </p>
              </div>

              <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-green-50'} p-6 rounded-xl mb-6`}>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-4`}>
                  Examples:
                </h3>
                {activeTab === 'idioms' ? (
                  <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} p-4 rounded-lg`}>
                    <p className={`${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} font-medium mb-2`}>
                      {selectedItem.example}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                      {selectedItem.exampleHindi}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedItem.examples.map((ex, idx) => (
                      <div key={idx} className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} p-4 rounded-lg`}>
                        <p className={`${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} font-medium mb-2`}>
                          {ex.english}
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                          {ex.hindi}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  toggleComplete(selectedItem.id);
                  setSelectedItem(null);
                }}
                className={`w-full ${
                  completedItems.includes(selectedItem.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${selectedItem.color}`
                } text-white font-bold py-4 rounded-full transition-all hover:scale-105`}
              >
                {completedItems.includes(selectedItem.id) ? '✓ Marked as Learned' : 'Mark as Learned'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
