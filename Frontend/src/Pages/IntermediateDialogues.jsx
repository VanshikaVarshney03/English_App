import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function IntermediateDialogues() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDialogue, setSelectedDialogue] = useState(null);
  const [completedDialogues, setCompletedDialogues] = useState([]);

  const dialogues = [
    {
      id: 1,
      title: "Job Interview",
      emoji: "💼",
      color: "from-blue-400 to-indigo-500",
      difficulty: "medium",
      scenario: "Professional interview at a tech company",
      dialogue: [
        { speaker: "Interviewer", text: "Tell me about yourself and your experience.", hindi: "अपने बारे में और अपने अनुभव के बारे में बताइए।" },
        { speaker: "Candidate", text: "I have 3 years of experience in software development, specializing in React and Node.js.", hindi: "मेरे पास सॉफ्टवेयर डेवलपमेंट में 3 साल का अनुभव है, रिएक्ट और नोड.जेएस में विशेषज्ञता।" },
        { speaker: "Interviewer", text: "What are your strengths and weaknesses?", hindi: "आपकी ताकत और कमजोरियां क्या हैं?" },
        { speaker: "Candidate", text: "My strength is problem-solving. As for weakness, I sometimes focus too much on details.", hindi: "मेरी ताकत समस्या-समाधान है। कमजोरी के लिए, मैं कभी-कभी विवरण पर बहुत अधिक ध्यान केंद्रित करता हूं।" },
        { speaker: "Interviewer", text: "Why do you want to work here?", hindi: "आप यहां क्यों काम करना चाहते हैं?" },
        { speaker: "Candidate", text: "I admire your company's innovation and would love to contribute to your team.", hindi: "मैं आपकी कंपनी के नवाचार की प्रशंसा करता हूं और आपकी टीम में योगदान देना पसंद करूंगा।" },
      ],
      keyPhrases: ["Tell me about yourself", "Strengths and weaknesses", "Why do you want to work here?"]
    },
    {
      id: 2,
      title: "Business Meeting",
      emoji: "📊",
      color: "from-green-400 to-teal-500",
      difficulty: "hard",
      scenario: "Discussing project deadlines with team",
      dialogue: [
        { speaker: "Manager", text: "Let's discuss the Q4 project timeline. Are we on track?", hindi: "चलिए Q4 प्रोजेक्ट टाइमलाइन पर चर्चा करते हैं। क्या हम ट्रैक पर हैं?" },
        { speaker: "Team Lead", text: "We're slightly behind schedule due to resource constraints.", hindi: "संसाधन की कमी के कारण हम शेड्यूल से थोड़ा पीछे हैं।" },
        { speaker: "Manager", text: "What do you need to get back on track?", hindi: "ट्रैक पर वापस आने के लिए आपको क्या चाहिए?" },
        { speaker: "Team Lead", text: "We need two more developers and extended deadline by two weeks.", hindi: "हमें दो और डेवलपर्स और दो सप्ताह की विस्तारित समय सीमा चाहिए।" },
        { speaker: "Manager", text: "I'll arrange for additional resources. Let's reconvene next Monday.", hindi: "मैं अतिरिक्त संसाधनों की व्यवस्था करूंगा। अगले सोमवार को फिर से मिलते हैं।" },
      ],
      keyPhrases: ["On track", "Resource constraints", "Extended deadline", "Reconvene"]
    },
    {
      id: 3,
      title: "Customer Complaint",
      emoji: "📞",
      color: "from-orange-400 to-red-500",
      difficulty: "medium",
      scenario: "Handling an upset customer professionally",
      dialogue: [
        { speaker: "Customer", text: "I ordered this product a week ago and it still hasn't arrived!", hindi: "मैंने यह उत्पाद एक सप्ताह पहले ऑर्डर किया था और यह अभी तक नहीं आया!" },
        { speaker: "Support", text: "I sincerely apologize for the inconvenience. Let me check your order status.", hindi: "असुविधा के लिए मैं ईमानदारी से क्षमा चाहता हूं। मुझे आपके ऑर्डर की स्थिति जांचने दें।" },
        { speaker: "Customer", text: "This is unacceptable! I needed it urgently.", hindi: "यह अस्वीकार्य है! मुझे इसकी तत्काल आवश्यकता थी।" },
        { speaker: "Support", text: "I completely understand your frustration. I'll personally ensure it's shipped today with express delivery.", hindi: "मैं आपकी निराशा को पूरी तरह से समझता हूं। मैं व्यक्तिगत रूप से सुनिश्चित करूंगा कि यह आज एक्सप्रेस डिलीवरी के साथ भेजा जाए।" },
        { speaker: "Customer", text: "Alright, I appreciate your help. Please make sure it arrives tomorrow.", hindi: "ठीक है, मैं आपकी मदद की सराहना करता हूं। कृपया सुनिश्चित करें कि यह कल आए।" },
      ],
      keyPhrases: ["I sincerely apologize", "I understand your frustration", "I'll personally ensure"]
    },
    {
      id: 4,
      title: "Negotiating Salary",
      emoji: "💰",
      color: "from-purple-400 to-pink-500",
      difficulty: "hard",
      scenario: "Discussing compensation package",
      dialogue: [
        { speaker: "HR", text: "Based on your experience, we're offering 15 lakhs per annum.", hindi: "आपके अनुभव के आधार पर, हम प्रति वर्ष 15 लाख की पेशकश कर रहे हैं।" },
        { speaker: "Candidate", text: "I appreciate the offer. However, given my 5 years of experience and specialized skills, I was expecting around 18 lakhs.", hindi: "मैं प्रस्ताव की सराहना करता हूं। हालाँकि, मेरे 5 साल के अनुभव और विशेष कौशल को देखते हुए, मुझे लगभग 18 लाख की उम्मीद थी।" },
        { speaker: "HR", text: "I understand. Let me discuss this with management. What are your other expectations?", hindi: "मैं समझता हूं। मुझे इस पर प्रबंधन से चर्चा करने दें। आपकी अन्य अपेक्षाएँ क्या हैं?" },
        { speaker: "Candidate", text: "Apart from salary, I'm also looking for performance bonuses and flexible work hours.", hindi: "वेतन के अलावा, मैं प्रदर्शन बोनस और लचीले काम के घंटे भी तलाश रहा हूं।" },
        { speaker: "HR", text: "We can accommodate flexible hours and quarterly bonuses. Let me get back to you on the salary revision.", hindi: "हम लचीले घंटों और त्रैमासिक बोनस को समायोजित कर सकते हैं। मुझे वेतन संशोधन पर आपके पास वापस आने दें।" },
      ],
      keyPhrases: ["I appreciate the offer", "Given my experience", "Let me discuss this", "Get back to you"]
    },
    {
      id: 5,
      title: "Networking Event",
      emoji: "🤝",
      color: "from-cyan-400 to-blue-500",
      difficulty: "medium",
      scenario: "Professional networking at a conference",
      dialogue: [
        { speaker: "Person A", text: "Hi! I'm Priya from Google. What brings you to this conference?", hindi: "नमस्ते! मैं गूगल से प्रिया हूं। आप इस सम्मेलन में क्यों आए हैं?" },
        { speaker: "Person B", text: "Hello! I'm Arjun, working in AI research at Microsoft. I'm here to learn about latest trends.", hindi: "नमस्ते! मैं अर्जुन हूं, माइक्रोसॉफ्ट में AI रिसर्च में काम कर रहा हूं। मैं नवीनतम रुझानों के बारे में जानने के लिए यहां हूं।" },
        { speaker: "Person A", text: "That's interesting! We're also exploring AI solutions. Would you like to exchange contact details?", hindi: "यह दिलचस्प है! हम भी AI समाधानों की खोज कर रहे हैं। क्या आप संपर्क विवरण का आदान-प्रदान करना चाहेंगे?" },
        { speaker: "Person B", text: "Absolutely! Here's my card. Let's stay in touch.", hindi: "बिल्कुल! यह मेरा कार्ड है। आइए संपर्क में रहें।" },
        { speaker: "Person A", text: "Great! I'll reach out next week to discuss potential collaboration.", hindi: "बढ़िया! मैं संभावित सहयोग पर चर्चा करने के लिए अगले सप्ताह संपर्क करूंगा।" },
      ],
      keyPhrases: ["What brings you here?", "Exchange contact details", "Stay in touch", "Potential collaboration"]
    },
    {
      id: 6,
      title: "Apartment Viewing",
      emoji: "🏠",
      color: "from-yellow-400 to-orange-500",
      difficulty: "medium",
      scenario: "Discussing rental apartment details",
      dialogue: [
        { speaker: "Agent", text: "This is a 2BHK apartment with all modern amenities. The rent is 25,000 per month.", hindi: "यह सभी आधुनिक सुविधाओं के साथ एक 2BHK अपार्टमेंट है। किराया प्रति माह 25,000 है।" },
        { speaker: "Client", text: "Is the maintenance included in the rent?", hindi: "क्या किराए में रखरखाव शामिल है?" },
        { speaker: "Agent", text: "No, maintenance is separate - about 2,000 per month. It includes water, security, and common area upkeep.", hindi: "नहीं, रखरखाव अलग है - लगभग 2,000 प्रति माह। इसमें पानी, सुरक्षा और सामान्य क्षेत्र का रखरखाव शामिल है।" },
        { speaker: "Client", text: "What about parking? And is it pet-friendly?", hindi: "पार्किंग के बारे में क्या? और क्या यह पालतू जानवरों के अनुकूल है?" },
        { speaker: "Agent", text: "Yes, one covered parking is included. Pets are allowed with prior approval from society.", hindi: "हां, एक कवर्ड पार्किंग शामिल है। समाज की पूर्व स्वीकृति के साथ पालतू जानवरों की अनुमति है।" },
      ],
      keyPhrases: ["Is it included?", "What about...?", "Pet-friendly", "Prior approval"]
    },
    {
      id: 7,
      title: "Medical Consultation",
      emoji: "🩺",
      color: "from-red-400 to-pink-500",
      difficulty: "medium",
      scenario: "Detailed health discussion with doctor",
      dialogue: [
        { speaker: "Doctor", text: "What symptoms have you been experiencing?", hindi: "आप किन लक्षणों का अनुभव कर रहे हैं?" },
        { speaker: "Patient", text: "I've had persistent headaches and fatigue for the past two weeks.", hindi: "पिछले दो हफ्तों से मुझे लगातार सिरदर्द और थकान हो रही है।" },
        { speaker: "Doctor", text: "Have you noticed any other symptoms? Changes in appetite or sleep pattern?", hindi: "क्या आपने कोई अन्य लक्षण देखे हैं? भूख या नींद के पैटर्न में बदलाव?" },
        { speaker: "Patient", text: "Yes, I haven't been sleeping well and my appetite has decreased.", hindi: "हां, मैं ठीक से सो नहीं पा रहा हूं और मेरी भूख कम हो गई है।" },
        { speaker: "Doctor", text: "I'd recommend some blood tests to rule out any deficiencies. Meanwhile, try to reduce stress and maintain regular sleep schedule.", hindi: "मैं किसी भी कमी को दूर करने के लिए कुछ रक्त परीक्षणों की सिफारिश करूंगा। इस बीच, तनाव कम करने और नियमित नींद की दिनचर्या बनाए रखने का प्रयास करें।" },
      ],
      keyPhrases: ["Persistent symptoms", "Rule out", "I'd recommend", "Meanwhile"]
    },
    {
      id: 8,
      title: "Travel Planning",
      emoji: "✈️",
      color: "from-teal-400 to-green-500",
      difficulty: "medium",
      scenario: "Planning vacation with travel agent",
      dialogue: [
        { speaker: "Agent", text: "Where would you like to travel and for how long?", hindi: "आप कहां यात्रा करना चाहेंगे और कितने समय के लिए?" },
        { speaker: "Client", text: "I'm planning a week-long trip to Europe, preferably visiting Paris and Rome.", hindi: "मैं यूरोप की एक सप्ताह लंबी यात्रा की योजना बना रहा हूं, अधिमानतः पेरिस और रोम जा रहा हूं।" },
        { speaker: "Agent", text: "Excellent choice! What's your budget and preferred travel dates?", hindi: "उत्कृष्ट विकल्प! आपका बजट और पसंदीदा यात्रा तिथियां क्या हैं?" },
        { speaker: "Client", text: "Around 2 lakhs for two people. I'm flexible with dates, but preferably in September.", hindi: "दो लोगों के लिए लगभग 2 लाख। मैं तारीखों के साथ लचीला हूं, लेकिन अधिमानतः सितंबर में।" },
        { speaker: "Agent", text: "Great! I'll prepare a detailed itinerary with flight options, hotels, and sightseeing packages.", hindi: "बढ़िया! मैं फ्लाइट विकल्पों, होटलों और दर्शनीय स्थलों के पैकेजों के साथ एक विस्तृत यात्रा कार्यक्रम तैयार करूंगा।" },
      ],
      keyPhrases: ["Preferably", "What's your budget?", "Flexible with dates", "Detailed itinerary"]
    },
    {
      id: 9,
      title: "Requesting Leave",
      emoji: "📅",
      color: "from-indigo-400 to-purple-500",
      difficulty: "easy",
      scenario: "Professional leave request to manager",
      dialogue: [
        { speaker: "Employee", text: "Sir, I need to request leave for next week for a family emergency.", hindi: "सर, मुझे एक पारिवारिक आपातकाल के लिए अगले सप्ताह की छुट्टी का अनुरोध करना है।" },
        { speaker: "Manager", text: "I understand. How many days do you need?", hindi: "मैं समझता हूं। आपको कितने दिन चाहिए?" },
        { speaker: "Employee", text: "I'll need 3 days - from Monday to Wednesday. I've already briefed my team about ongoing projects.", hindi: "मुझे 3 दिन चाहिए - सोमवार से बुधवार तक। मैंने पहले ही अपनी टीम को चल रहे प्रोजेक्ट्स के बारे में जानकारी दे दी है।" },
        { speaker: "Manager", text: "That's good planning. Who will handle your responsibilities during your absence?", hindi: "यह अच्छी योजना है। आपकी अनुपस्थिति के दौरान आपकी जिम्मेदारियों को कौन संभालेगा?" },
        { speaker: "Employee", text: "Rahul has agreed to cover for me. I'll also be available on phone if anything urgent comes up.", hindi: "राहुल ने मेरे लिए कवर करने पर सहमति जताई है। यदि कुछ जरूरी आता है तो मैं फोन पर भी उपलब्ध रहूंगा।" },
      ],
      keyPhrases: ["Request leave", "Family emergency", "Cover for me", "Available on phone"]
    },
    {
      id: 10,
      title: "Giving Presentation Feedback",
      emoji: "📊",
      color: "from-pink-400 to-rose-500",
      difficulty: "hard",
      scenario: "Constructive feedback on colleague's work",
      dialogue: [
        { speaker: "Manager", text: "Overall, your presentation was well-structured. However, I have a few suggestions.", hindi: "कुल मिलाकर, आपकी प्रस्तुति अच्छी तरह से संरचित थी। हालांकि, मेरे पास कुछ सुझाव हैं।" },
        { speaker: "Employee", text: "Thank you! I'm open to feedback. Please let me know what I can improve.", hindi: "धन्यवाद! मैं फीडबैक के लिए खुला हूं। कृपया मुझे बताएं कि मैं क्या सुधार कर सकता हूं।" },
        { speaker: "Manager", text: "The data analysis was excellent, but you could have spent more time on actionable recommendations.", hindi: "डेटा विश्लेषण उत्कृष्ट था, लेकिन आप कार्रवाई योग्य सिफारिशों पर अधिक समय बिता सकते थे।" },
        { speaker: "Employee", text: "I see. Should I prepare a follow-up document with detailed action points?", hindi: "मैं समझता हूं। क्या मुझे विस्तृत कार्य बिंदुओं के साथ एक अनुवर्ती दस्तावेज़ तैयार करना चाहिए?" },
        { speaker: "Manager", text: "That would be perfect. Also, consider adding more visual aids next time to engage the audience better.", hindi: "यह सही रहेगा। साथ ही, दर्शकों को बेहतर ढंग से शामिल करने के लिए अगली बार अधिक दृश्य सहायता जोड़ने पर विचार करें।" },
      ],
      keyPhrases: ["Well-structured", "I'm open to feedback", "Actionable recommendations", "Follow-up document"]
    },
  ];

  const toggleComplete = (id) => {
    if (completedDialogues.includes(id)) {
      setCompletedDialogues(completedDialogues.filter(d => d !== id));
    } else {
      setCompletedDialogues([...completedDialogues, id]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'easy') return darkMode ? 'text-green-400' : 'text-green-600';
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
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-blue-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">💬</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'}`}>
                {completedDialogues.length}/{dialogues.length}
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
          <div className="text-6xl mb-4">💬</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Real-Life Dialogues
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Practice professional conversations for work, business, and daily situations
          </p>
        </div>

        {/* Dialogues Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dialogues.map((dialogue) => (
            <div
              key={dialogue.id}
              onClick={() => setSelectedDialogue(dialogue)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-blue-400'
              } ${completedDialogues.includes(dialogue.id) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${dialogue.color} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">{dialogue.emoji}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(dialogue.id);
                    }}
                    className={`${completedDialogues.includes(dialogue.id) ? 'bg-white text-green-600' : 'bg-white/20'} p-1.5 rounded-full hover:scale-110 transition-all`}
                  >
                    {completedDialogues.includes(dialogue.id) ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-1">{dialogue.title}</h3>
                <p className="text-sm opacity-90">{dialogue.scenario}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-semibold ${getDifficultyColor(dialogue.difficulty)} uppercase`}>
                    {dialogue.difficulty}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                    {dialogue.dialogue.length} exchanges
                  </span>
                </div>
                <div className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} mb-3`}>
                  <strong>Key Phrases:</strong> {dialogue.keyPhrases.slice(0, 2).join(', ')}
                </div>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'} font-semibold`}>
                  Click to practice →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dialogue Detail Modal */}
      {selectedDialogue && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDialogue(null)}
        >
          <div 
            className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedDialogue.color} p-8 text-white text-center sticky top-0`}>
              <div className="text-6xl mb-4">{selectedDialogue.emoji}</div>
              <h2 className="text-3xl font-bold mb-2">{selectedDialogue.title}</h2>
              <p className="text-sm opacity-90">{selectedDialogue.scenario}</p>
            </div>
            <div className="p-8">
              <div className="space-y-4 mb-6">
                {selectedDialogue.dialogue.map((line, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-4 rounded-xl`}>
                    <div className="flex items-start gap-3">
                      <div className={`${darkMode ? 'bg-[#60a5fa]' : 'bg-blue-500'} text-white px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0`}>
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
              <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-blue-50'} p-4 rounded-xl mb-6`}>
                <h4 className={`font-semibold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                  Key Phrases to Remember:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDialogue.keyPhrases.map((phrase, idx) => (
                    <span key={idx} className={`${darkMode ? 'bg-[#1e293b] text-[#60a5fa]' : 'bg-white text-blue-600'} px-3 py-1 rounded-full text-sm font-medium`}>
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  toggleComplete(selectedDialogue.id);
                  setSelectedDialogue(null);
                }}
                className={`w-full ${
                  completedDialogues.includes(selectedDialogue.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${selectedDialogue.color}`
                } text-white font-bold py-4 rounded-full transition-all hover:scale-105`}
              >
                {completedDialogues.includes(selectedDialogue.id) ? '✓ Marked as Practiced' : 'Mark as Practiced'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
