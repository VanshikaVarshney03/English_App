import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function BasicConversations() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [completedConversations, setCompletedConversations] = useState([]);

  const conversations = [
    {
      id: 1,
      title: "Meeting Someone New",
      emoji: "👋",
      color: "from-blue-400 to-cyan-500",
      difficulty: "easy",
      scenario: "At a social gathering",
      dialogue: [
        { speaker: "A", text: "Hi! I'm Sarah. Nice to meet you!", hindi: "[translate:नमस्ते! मैं सारा हूं। आपसे मिलकर खुशी हुई!]" },
        { speaker: "B", text: "Hello Sarah! I'm Raj. Nice to meet you too!", hindi: "[translate:नमस्ते सारा! मैं राज हूं। मुझे भी आपसे मिलकर खुशी हुई!]" },
        { speaker: "A", text: "So, where are you from?", hindi: "[translate:तो, आप कहां से हैं?]" },
        { speaker: "B", text: "I'm from Mumbai. How about you?", hindi: "[translate:मैं मुंबई से हूं। और आप?]" },
        { speaker: "A", text: "I'm from Delhi. What do you do?", hindi: "[translate:मैं दिल्ली से हूं। आप क्या करते हैं?]" },
        { speaker: "B", text: "I'm a software engineer. And you?", hindi: "[translate:मैं सॉफ्टवेयर इंजीनियर हूं। और आप?]" },
      ],
      keyPhrases: ["Nice to meet you", "Where are you from?", "What do you do?"]
    },
    {
      id: 2,
      title: "At a Restaurant",
      emoji: "🍽️",
      color: "from-orange-400 to-red-500",
      difficulty: "easy",
      scenario: "Ordering food",
      dialogue: [
        { speaker: "Waiter", text: "Good evening! Are you ready to order?", hindi: "[translate:शुभ संध्या! क्या आप ऑर्डर देने के लिए तैयार हैं?]" },
        { speaker: "Customer", text: "Yes, I'd like a pizza, please.", hindi: "[translate:हां, मुझे एक पिज़्ज़ा चाहिए, कृपया।]" },
        { speaker: "Waiter", text: "Which size would you prefer?", hindi: "[translate:आप कौन सा साइज़ पसंद करेंगे?]" },
        { speaker: "Customer", text: "Medium size, please.", hindi: "[translate:मीडियम साइज़, कृपया।]" },
        { speaker: "Waiter", text: "Anything to drink?", hindi: "[translate:कुछ पीने के लिए?]" },
        { speaker: "Customer", text: "Yes, a cold coffee, please.", hindi: "[translate:हां, एक कोल्ड कॉफी, कृपया।]" },
      ],
      keyPhrases: ["I'd like...", "Which size?", "Anything to drink?"]
    },
    {
      id: 3,
      title: "Asking for Directions",
      emoji: "🗺️",
      color: "from-green-400 to-teal-500",
      difficulty: "easy",
      scenario: "On the street",
      dialogue: [
        { speaker: "Tourist", text: "Excuse me, where is the nearest metro station?", hindi: "[translate:माफ़ कीजिए, सबसे नज़दीकी मेट्रो स्टेशन कहां है?]" },
        { speaker: "Local", text: "Go straight and take the first left.", hindi: "[translate:सीधे जाइए और पहला बायां मोड़ लीजिए।]" },
        { speaker: "Tourist", text: "How far is it from here?", hindi: "[translate:यहां से कितनी दूर है?]" },
        { speaker: "Local", text: "It's about 5 minutes walk.", hindi: "[translate:यह लगभग 5 मिनट की पैदल दूरी है।]" },
        { speaker: "Tourist", text: "Thank you so much!", hindi: "[translate:बहुत-बहुत धन्यवाद!]" },
        { speaker: "Local", text: "You're welcome! Have a nice day!", hindi: "[translate:स्वागत है! आपका दिन शुभ हो!]" },
      ],
      keyPhrases: ["Excuse me", "Go straight", "How far is it?"]
    },
    {
      id: 4,
      title: "At the Doctor's Office",
      emoji: "🏥",
      color: "from-purple-400 to-pink-500",
      difficulty: "medium",
      scenario: "Medical consultation",
      dialogue: [
        { speaker: "Doctor", text: "Hello! What brings you here today?", hindi: "[translate:नमस्ते! आज आप यहां क्यों आए हैं?]" },
        { speaker: "Patient", text: "I have a bad headache and fever.", hindi: "[translate:मुझे बहुत तेज़ सिरदर्द और बुखार है।]" },
        { speaker: "Doctor", text: "How long have you had these symptoms?", hindi: "[translate:आपको ये लक्षण कब से हैं?]" },
        { speaker: "Patient", text: "For about two days now.", hindi: "[translate:लगभग दो दिनों से।]" },
        { speaker: "Doctor", text: "Let me check your temperature.", hindi: "[translate:मैं आपका तापमान चेक करता हूं।]" },
        { speaker: "Patient", text: "Sure, thank you doctor.", hindi: "[translate:ज़रूर, धन्यवाद डॉक्टर।]" },
      ],
      keyPhrases: ["What brings you here?", "I have a...", "How long...?"]
    },
    {
      id: 5,
      title: "Shopping for Clothes",
      emoji: "👕",
      color: "from-pink-400 to-rose-500",
      difficulty: "easy",
      scenario: "At a clothing store",
      dialogue: [
        { speaker: "Customer", text: "Excuse me, do you have this shirt in large?", hindi: "[translate:माफ़ कीजिए, क्या यह शर्ट लार्ज साइज़ में है?]" },
        { speaker: "Staff", text: "Let me check. Yes, we do!", hindi: "[translate:मैं चेक करता हूं। हां, है!]" },
        { speaker: "Customer", text: "Can I try it on?", hindi: "[translate:क्या मैं इसे ट्राई कर सकता हूं?]" },
        { speaker: "Staff", text: "Of course! The fitting room is over there.", hindi: "[translate:बिल्कुल! फिटिंग रूम वहां है।]" },
        { speaker: "Customer", text: "Great! How much is this?", hindi: "[translate:बढ़िया! यह कितने का है?]" },
        { speaker: "Staff", text: "It's 1500 rupees.", hindi: "[translate:यह 1500 रुपये का है।]" },
      ],
      keyPhrases: ["Do you have...?", "Can I try it on?", "How much is this?"]
    },
    {
      id: 6,
      title: "Making a Phone Call",
      emoji: "📞",
      color: "from-indigo-400 to-blue-500",
      difficulty: "medium",
      scenario: "Business call",
      dialogue: [
        { speaker: "Caller", text: "Hello, may I speak to Mr. Sharma?", hindi: "[translate:नमस्ते, क्या मैं मिस्टर शर्मा से बात कर सकता हूं?]" },
        { speaker: "Receptionist", text: "May I know who's calling?", hindi: "[translate:मैं जान सकती हूं कि कौन बात कर रहा है?]" },
        { speaker: "Caller", text: "This is Rohit from Tech Solutions.", hindi: "[translate:मैं टेक सॉल्यूशंस से रोहित हूं।]" },
        { speaker: "Receptionist", text: "Please hold, I'll connect you.", hindi: "[translate:कृपया रुकें, मैं आपको कनेक्ट करती हूं।]" },
        { speaker: "Caller", text: "Thank you!", hindi: "[translate:धन्यवाद!]" },
        { speaker: "Mr. Sharma", text: "Hello Rohit! How can I help you?", hindi: "[translate:नमस्ते रोहित! मैं आपकी क्या मदद कर सकता हूं?]" },
      ],
      keyPhrases: ["May I speak to...?", "Who's calling?", "Please hold"]
    },
    {
      id: 7,
      title: "At the Airport",
      emoji: "✈️",
      color: "from-cyan-400 to-blue-500",
      difficulty: "medium",
      scenario: "Check-in counter",
      dialogue: [
        { speaker: "Staff", text: "Good morning! May I see your ticket?", hindi: "[translate:सुप्रभात! क्या मैं आपका टिकट देख सकता हूं?]" },
        { speaker: "Passenger", text: "Yes, here it is.", hindi: "[translate:हां, यह रहा।]" },
        { speaker: "Staff", text: "Do you have any luggage to check in?", hindi: "[translate:क्या आपके पास चेक-इन करने के लिए कोई सामान है?]" },
        { speaker: "Passenger", text: "Yes, one suitcase.", hindi: "[translate:हां, एक सूटकेस है।]" },
        { speaker: "Staff", text: "Please place it on the scale.", hindi: "[translate:कृपया इसे तराजू पर रखें।]" },
        { speaker: "Passenger", text: "Sure. Which gate is my flight?", hindi: "[translate:ज़रूर। मेरी फ्लाइट कौन से गेट से है?]" },
      ],
      keyPhrases: ["May I see...?", "Any luggage?", "Which gate?"]
    },
    {
      id: 8,
      title: "Introducing Family",
      emoji: "👨‍👩‍👧",
      color: "from-yellow-400 to-orange-500",
      difficulty: "easy",
      scenario: "Family gathering",
      dialogue: [
        { speaker: "A", text: "This is my wife, Priya.", hindi: "[translate:ये मेरी पत्नी, प्रिया हैं।]" },
        { speaker: "B", text: "Nice to meet you, Priya!", hindi: "[translate:आपसे मिलकर खुशी हुई, प्रिया!]" },
        { speaker: "Priya", text: "Likewise! And these are our kids.", hindi: "[translate:मुझे भी! और ये हमारे बच्चे हैं।]" },
        { speaker: "A", text: "This is Aarav, he's 8 years old.", hindi: "[translate:ये आरव हैं, ये 8 साल के हैं।]" },
        { speaker: "B", text: "Hi Aarav! What class are you in?", hindi: "[translate:नमस्ते आरव! तुम किस कक्षा में हो?]" },
        { speaker: "Aarav", text: "I'm in third grade!", hindi: "[translate:मैं तीसरी कक्षा में हूं!]" },
      ],
      keyPhrases: ["This is my...", "Nice to meet you", "How old are you?"]
    },
    {
      id: 9,
      title: "Booking a Hotel Room",
      emoji: "🏨",
      color: "from-teal-400 to-green-500",
      difficulty: "medium",
      scenario: "Hotel reception",
      dialogue: [
        { speaker: "Guest", text: "Hello, I'd like to book a room for two nights.", hindi: "[translate:नमस्ते, मैं दो रातों के लिए एक कमरा बुक करना चाहता हूं।]" },
        { speaker: "Staff", text: "Sure! Single or double room?", hindi: "[translate:ज़रूर! सिंगल या डबल रूम?]" },
        { speaker: "Guest", text: "Double room, please.", hindi: "[translate:डबल रूम, कृपया।]" },
        { speaker: "Staff", text: "May I have your ID proof?", hindi: "[translate:क्या मुझे आपका आईडी प्रूफ मिल सकता है?]" },
        { speaker: "Guest", text: "Yes, here's my passport.", hindi: "[translate:हां, यह मेरा पासपोर्ट है।]" },
        { speaker: "Staff", text: "Great! Your room number is 305.", hindi: "[translate:बढ़िया! आपका रूम नंबर 305 है।]" },
      ],
      keyPhrases: ["I'd like to book...", "Single or double?", "May I have...?"]
    },
    {
      id: 10,
      title: "Complaining Politely",
      emoji: "😕",
      color: "from-red-400 to-orange-500",
      difficulty: "medium",
      scenario: "Customer service",
      dialogue: [
        { speaker: "Customer", text: "Excuse me, I ordered this an hour ago.", hindi: "[translate:माफ़ कीजिए, मैंने इसे एक घंटे पहले ऑर्डर किया था।]" },
        { speaker: "Staff", text: "I'm very sorry for the delay.", hindi: "[translate:देरी के लिए मुझे बहुत खेद है।]" },
        { speaker: "Customer", text: "Also, this is not what I ordered.", hindi: "[translate:साथ ही, यह वह नहीं है जो मैंने ऑर्डर किया था।]" },
        { speaker: "Staff", text: "I apologize! Let me fix this right away.", hindi: "[translate:मुझे खेद है! मैं इसे तुरंत ठीक करता हूं।]" },
        { speaker: "Customer", text: "Thank you, I appreciate it.", hindi: "[translate:धन्यवाद, मैं इसकी सराहना करता हूं।]" },
        { speaker: "Staff", text: "We'll get your correct order immediately.", hindi: "[translate:हम तुरंत आपका सही ऑर्डर ले आएंगे।]" },
      ],
      keyPhrases: ["Excuse me", "I'm sorry for...", "I appreciate it"]
    },
  ];

  const filteredConversations = conversations;

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'easy') return darkMode ? 'text-green-400' : 'text-green-600';
    return darkMode ? 'text-yellow-400' : 'text-yellow-600';
  };

  const toggleComplete = (id) => {
    if (completedConversations.includes(id)) {
      setCompletedConversations(completedConversations.filter(c => c !== id));
    } else {
      setCompletedConversations([...completedConversations, id]);
    }
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
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-purple-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🗣️</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'}`}>
                {completedConversations.length}/{conversations.length}
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
          <div className="text-6xl mb-4">🗣️</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Basic Conversations
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Practice real-life dialogues with Hindi translations for everyday situations
          </p>
        </div>

        {/* Conversations Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-purple-400'
              } ${completedConversations.includes(conv.id) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${conv.color} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">{conv.emoji}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(conv.id);
                    }}
                    className={`${completedConversations.includes(conv.id) ? 'bg-white text-green-600' : 'bg-white/20'} p-1.5 rounded-full hover:scale-110 transition-all`}
                  >
                    {completedConversations.includes(conv.id) ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-1">{conv.title}</h3>
                <p className="text-sm opacity-90">{conv.scenario}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-semibold ${getDifficultyColor(conv.difficulty)} uppercase`}>
                    {conv.difficulty}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                    {conv.dialogue.length} lines
                  </span>
                </div>
                <div className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-3`}>
                  <strong>Key Phrases:</strong> {conv.keyPhrases.join(', ')}
                </div>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-purple-600'} font-semibold`}>
                  Click to practice →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversation Detail Modal */}
      {selectedConversation && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedConversation(null)}
        >
          <div 
            className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedConversation.color} p-8 text-white text-center sticky top-0`}>
              <div className="text-6xl mb-4">{selectedConversation.emoji}</div>
              <h2 className="text-3xl font-bold mb-2">{selectedConversation.title}</h2>
              <p className="text-sm opacity-90">{selectedConversation.scenario}</p>
            </div>
            <div className="p-8">
              <div className="space-y-4 mb-6">
                {selectedConversation.dialogue.map((line, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-4 rounded-xl`}>
                    <div className="flex items-start gap-3">
                      <div className={`${darkMode ? 'bg-[#60a5fa]' : 'bg-purple-500'} text-white px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0`}>
                        {line.speaker}
                      </div>
                      <div className="flex-1">
                        <p className={`${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} font-medium mb-1`}>
                          {line.text}
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                          {line.hindi}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-purple-50'} p-4 rounded-xl mb-6`}>
                <h4 className={`font-semibold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                  Key Phrases to Remember:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedConversation.keyPhrases.map((phrase, idx) => (
                    <span key={idx} className={`${darkMode ? 'bg-[#1e293b] text-[#60a5fa]' : 'bg-white text-purple-600'} px-3 py-1 rounded-full text-sm font-medium`}>
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  toggleComplete(selectedConversation.id);
                  setSelectedConversation(null);
                }}
                className={`w-full ${
                  completedConversations.includes(selectedConversation.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${selectedConversation.color}`
                } text-white font-bold py-4 rounded-full transition-all hover:scale-105`}
              >
                {completedConversations.includes(selectedConversation.id) ? '✓ Marked as Practiced' : 'Mark as Practiced'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
