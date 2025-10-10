import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function ProfessionalWriting() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);

  const modules = [
    {
      id: 1,
      title: "Business Emails (व्यावसायिक ईमेल)",
      emoji: "📧",
      color: "from-orange-400 to-red-500",
      difficulty: "hard",
      description: "Master professional email communication",
      templates: [
        {
          type: "Formal Request",
          subject: "Request for Meeting - Project Update",
          body: "Dear Mr. Johnson,\n\nI hope this email finds you well. I am writing to request a meeting to discuss the progress of the Q4 marketing campaign.\n\nWould you be available for a 30-minute call next week? I am flexible with timing and can adjust to your schedule.\n\nI have prepared a brief presentation highlighting key metrics and proposed next steps.\n\nI look forward to your response.\n\nBest regards,\nSarah Mitchell",
          hindi: "विषय: बैठक का अनुरोध - परियोजना अपडेट\n\nप्रिय श्री जॉनसन,\n\nमुझे आशा है कि यह ईमेल आपको अच्छी तरह से मिलेगा। मैं Q4 मार्केटिंग अभियान की प्रगति पर चर्चा करने के लिए बैठक का अनुरोध करने के लिए लिख रहा हूं।\n\nक्या आप अगले सप्ताह 30 मिनट की कॉल के लिए उपलब्ध होंगे? मैं समय के साथ लचीला हूं।\n\nसादर,\nसारा मिशेल"
        },
        {
          type: "Follow-up Email",
          subject: "Following Up: Proposal Submission",
          body: "Dear Ms. Chen,\n\nI wanted to follow up on the proposal I submitted last week regarding the website redesign project.\n\nHave you had a chance to review it? I would be happy to discuss any questions or provide additional information.\n\nPlease let me know if you need any clarification.\n\nThank you for your consideration.\n\nWarm regards,\nDavid Park",
          hindi: "विषय: अनुवर्ती: प्रस्ताव प्रस्तुति\n\nप्रिय सुश्री चेन,\n\nमैं पिछले सप्ताह प्रस्तुत वेबसाइट रीडिज़ाइन प्रोजेक्ट के प्रस्ताव पर अनुवर्ती करना चाहता था।\n\nक्या आपको इसकी समीक्षा करने का मौका मिला? मैं किसी भी प्रश्न पर चर्चा करने या अतिरिक्त जानकारी प्रदान करने में खुश हूं।\n\nसादर,\nडेविड पार्क"
        },
        {
          type: "Complaint Email",
          subject: "Concern Regarding Service Quality",
          body: "Dear Customer Service Team,\n\nI am writing to express my concern about the recent service experience with order #12345.\n\nThe product arrived damaged and significantly later than the promised delivery date. This has caused considerable inconvenience.\n\nI would appreciate a prompt resolution, either through a replacement or full refund.\n\nI have attached photos documenting the issue.\n\nI look forward to your swift response.\n\nSincerely,\nEmily Rodriguez",
          hindi: "विषय: सेवा गुणवत्ता के बारे में चिंता\n\nप्रिय ग्राहक सेवा टीम,\n\nमैं ऑर्डर #12345 के साथ हाल के सेवा अनुभव के बारे में अपनी चिंता व्यक्त करने के लिए लिख रहा हूं।\n\nउत्पाद क्षतिग्रस्त आया और वादा की गई डिलीवरी तिथि से काफी बाद में। इससे काफी असुविधा हुई है।\n\nमैं प्रतिस्थापन या पूर्ण धनवापसी के माध्यम से शीघ्र समाधान की सराहना करूंगा।\n\nभवदीय,\nएमिली रोड्रिगेज"
        }
      ]
    },
    {
      id: 2,
      title: "Reports & Proposals (रिपोर्ट और प्रस्ताव)",
      emoji: "📊",
      color: "from-blue-400 to-cyan-500",
      difficulty: "hard",
      description: "Create compelling business documents",
      templates: [
        {
          type: "Executive Summary",
          content: "EXECUTIVE SUMMARY\n\nProject: Digital Marketing Initiative Q4 2025\n\nObjective: Increase brand awareness and drive online sales through targeted digital campaigns.\n\nKey Findings:\n- Current digital presence shows 40% engagement gap compared to competitors\n- Mobile traffic accounts for 65% of website visits\n- Customer acquisition cost has increased 22% year-over-year\n\nRecommendations:\n1. Invest in mobile-first website redesign\n2. Implement AI-driven personalization\n3. Expand social media presence\n\nExpected Outcomes:\n- 30% increase in online conversions\n- 15% reduction in customer acquisition cost\n- ROI of 250% within 12 months\n\nBudget Required: $150,000\nTimeline: 6 months\n\nConclusion: This initiative addresses critical market gaps and positions us for sustainable growth.",
          hindi: "कार्यकारी सारांश\n\nपरियोजना: डिजिटल मार्केटिंग पहल Q4 2025\n\nउद्देश्य: लक्षित डिजिटल अभियानों के माध्यम से ब्रांड जागरूकता बढ़ाना।\n\nमुख्य निष्कर्ष:\n- प्रतिस्पर्धियों की तुलना में 40% जुड़ाव अंतर\n- मोबाइल ट्रैफ़िक 65% वेबसाइट विज़िट\n\nसिफारिशें:\n1. मोबाइल-फर्स्ट वेबसाइट रीडिज़ाइन\n2. AI-संचालित वैयक्तिकरण\n\nअपेक्षित परिणाम:\n- ऑनलाइन रूपांतरण में 30% वृद्धि\n- 12 महीनों में 250% ROI"
        },
        {
          type: "Project Proposal",
          content: "PROJECT PROPOSAL\n\nTitle: Implementation of Cloud-Based CRM System\n\n1. INTRODUCTION\nThis proposal outlines the implementation of a comprehensive Customer Relationship Management (CRM) system to streamline sales operations.\n\n2. PROBLEM STATEMENT\nCurrent manual processes lead to:\n- Data inconsistencies across departments\n- Delayed response times to customer inquiries\n- Limited visibility into sales pipeline\n\n3. PROPOSED SOLUTION\nImplement Salesforce CRM with customized modules for:\n- Lead management and tracking\n- Automated workflow processes\n- Real-time analytics dashboard\n\n4. IMPLEMENTATION PLAN\nPhase 1 (Month 1-2): System setup and customization\nPhase 2 (Month 3): Team training\nPhase 3 (Month 4): Full deployment\nPhase 4 (Month 5-6): Optimization and support\n\n5. BUDGET BREAKDOWN\nSoftware licenses: $50,000\nImplementation: $30,000\nTraining: $15,000\nTotal: $95,000\n\n6. EXPECTED BENEFITS\n- 40% reduction in data entry time\n- 25% increase in sales productivity\n- Improved customer satisfaction scores",
          hindi: "परियोजना प्रस्ताव\n\nशीर्षक: क्लाउड-आधारित CRM प्रणाली का कार्यान्वयन\n\n1. परिचय\nयह प्रस्ताव बिक्री संचालन को सुव्यवस्थित करने के लिए एक व्यापक CRM प्रणाली के कार्यान्वयन की रूपरेखा प्रस्तुत करता है।\n\n2. समस्या कथन\nवर्तमान मैनुअल प्रक्रियाएं:\n- विभागों में डेटा असंगतता\n- ग्राहक पूछताछ में देरी\n\n3. प्रस्तावित समाधान\nSalesforce CRM लागू करें"
        }
      ]
    },
    {
      id: 3,
      title: "Academic Essays (शैक्षणिक निबंध)",
      emoji: "📝",
      color: "from-purple-400 to-pink-500",
      difficulty: "hard",
      description: "Write scholarly and analytical essays",
      templates: [
        {
          type: "Argumentative Essay",
          content: "TITLE: The Impact of Artificial Intelligence on Employment\n\nINTRODUCTION\nArtificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century. While proponents argue that AI will create new job opportunities, critics contend that automation threatens millions of jobs globally. This essay examines both perspectives and argues that strategic policy interventions are essential to maximize benefits while mitigating adverse effects.\n\nTHESIS STATEMENT\nAlthough AI-driven automation will displace certain job categories, comprehensive reskilling programs and regulatory frameworks can facilitate a transition that ultimately expands employment opportunities in emerging sectors.\n\nBODY PARAGRAPH 1: Job Displacement Concerns\nStudies by McKinsey & Company (2023) estimate that up to 30% of current jobs could be automated by 2030. Manufacturing, data entry, and customer service roles face particular vulnerability. For instance, automotive assembly lines now utilize robots that perform tasks previously requiring human workers, leading to significant workforce reductions.\n\nBODY PARAGRAPH 2: New Opportunities\nConversely, AI creates demand for data scientists, AI ethicists, and machine learning engineers. The World Economic Forum projects that AI will generate 97 million new roles by 2025. Furthermore, AI enhances productivity, enabling businesses to expand and hire additional staff in creative and strategic positions.\n\nBODY PARAGRAPH 3: Policy Interventions\nGovernments must implement proactive measures including universal basic income pilot programs, tax incentives for companies investing in employee retraining, and educational curriculum reforms emphasizing digital literacy and critical thinking.\n\nCONCLUSION\nThe AI revolution presents both challenges and opportunities. Through strategic planning and collaborative efforts between government, industry, and education sectors, society can harness AI's potential while ensuring inclusive economic growth.",
          hindi: "शीर्षक: रोजगार पर कृत्रिम बुद्धिमत्ता का प्रभाव\n\nपरिचय\nकृत्रिम बुद्धिमत्ता (AI) 21वीं सदी की सबसे परिवर्तनकारी तकनीकों में से एक के रूप में उभरी है।\n\nथीसिस कथन\nयद्यपि AI-संचालित स्वचालन कुछ नौकरी श्रेणियों को विस्थापित करेगा, व्यापक पुनर्कौशल कार्यक्रम अंततः उभरते क्षेत्रों में रोजगार के अवसरों का विस्तार कर सकते हैं।"
        }
      ]
    },
    {
      id: 4,
      title: "Creative Writing (रचनात्मक लेखन)",
      emoji: "✍️",
      color: "from-green-400 to-emerald-500",
      difficulty: "hard",
      description: "Develop storytelling and narrative skills",
      templates: [
        {
          type: "Short Story Opening",
          content: "The rain had been falling for three days straight when Marcus finally decided to leave.\n\nHe stood at the window of his studio apartment, watching rivulets trace paths down the glass like tears on a weathered face. The city below was a blur of grey—buildings, streets, people all melding into one indistinct mass. He'd always found comfort in the rain, in its rhythmic persistence, but not today.\n\nToday, the rain felt accusatory.\n\nHis phone buzzed on the coffee table behind him. He didn't need to check it to know it was her. It had been her for the past seventy-two hours—calls, texts, voicemails that started angry and dissolved into desperate pleas. He'd listened to exactly one of them before deciding that some bridges, once burned, should stay that way.\n\nThe apartment smelled of stale coffee and regret. His suitcase lay open on the unmade bed, half-packed with the essentials: clothes, toiletries, the leather journal his mother had given him before she died. Everything else—the books, the records, the photographs—he would leave behind. They belonged to a version of himself he no longer recognized.\n\nMarcus pulled on his coat and picked up the suitcase. At the door, he paused, one hand on the knob, and looked back at the space that had been his home for five years. No nostalgia came. Only relief.\n\nHe stepped into the hallway and didn't look back.",
          hindi: "तीन दिनों से लगातार बारिश हो रही थी जब मार्कस ने आखिरकार जाने का फैसला किया।\n\nवह अपने स्टूडियो अपार्टमेंट की खिड़की पर खड़ा था, कांच पर बहती धाराओं को देख रहा था। नीचे का शहर धूसर रंग का धुंधला था—इमारतें, सड़कें, लोग सब एक अस्पष्ट द्रव्यमान में मिल रहे थे।\n\nआज, बारिश आरोपात्मक लग रही थी।\n\nउसके फोन ने कॉफी टेबल पर बज उठा। यह जानने के लिए उसे चेक करने की जरूरत नहीं थी कि यह वह थी।"
        }
      ]
    },
    {
      id: 5,
      title: "Cover Letters & Resumes (कवर पत्र और रिज्यूमे)",
      emoji: "💼",
      color: "from-yellow-400 to-orange-500",
      difficulty: "hard",
      description: "Craft compelling job applications",
      templates: [
        {
          type: "Cover Letter",
          content: "Sarah Johnson\n123 Main Street, Boston, MA 02115\nsarah.johnson@email.com | (555) 123-4567\n\nMarch 15, 2025\n\nHiring Manager\nTech Innovations Inc.\n456 Innovation Drive\nSan Francisco, CA 94103\n\nDear Hiring Manager,\n\nI am writing to express my strong interest in the Senior Product Manager position at Tech Innovations Inc., as advertised on LinkedIn. With over seven years of experience leading cross-functional teams and launching successful digital products, I am confident in my ability to drive innovation and contribute to your company's mission of revolutionizing the fintech industry.\n\nIn my current role as Product Manager at Digital Solutions Corp, I spearheaded the development and launch of a mobile banking app that achieved 500,000 downloads within six months and received a 4.8-star rating. This success resulted from:\n\n• Conducting comprehensive market research to identify user pain points\n• Collaborating with engineering teams to implement agile development processes\n• Utilizing data analytics to optimize user experience and increase retention by 35%\n\nYour company's commitment to user-centric design and cutting-edge technology aligns perfectly with my professional philosophy. I am particularly impressed by your recent AI-powered investment platform and would be thrilled to contribute to similar innovative initiatives.\n\nI bring a unique combination of technical expertise, strategic thinking, and leadership skills. My MBA from MIT Sloan, coupled with hands-on experience in product lifecycle management, positions me to make immediate contributions to your team.\n\nI would welcome the opportunity to discuss how my background, skills, and enthusiasm can benefit Tech Innovations Inc. I am available for an interview at your convenience and can be reached at (555) 123-4567 or sarah.johnson@email.com.\n\nThank you for considering my application. I look forward to the possibility of contributing to your team's success.\n\nSincerely,\nSarah Johnson",
          hindi: "सारा जॉनसन\n123 मेन स्ट्रीट, बोस्टन\n\n15 मार्च, 2025\n\nनियुक्ति प्रबंधक\nटेक इनोवेशंस इंक।\n\nप्रिय नियुक्ति प्रबंधक,\n\nमैं टेक इनोवेशंस इंक। में सीनियर प्रोडक्ट मैनेजर पद में अपनी गहरी रुचि व्यक्त करने के लिए लिख रहा हूं। क्रॉस-फंक्शनल टीमों का नेतृत्व करने और सफल डिजिटल उत्पादों को लॉन्च करने के सात साल से अधिक के अनुभव के साथ, मुझे विश्वास है कि मैं नवाचार को आगे बढ़ा सकता हूं।"
        }
      ]
    },
    {
      id: 6,
      title: "Technical Documentation (तकनीकी दस्तावेज़ीकरण)",
      emoji: "📚",
      color: "from-pink-400 to-rose-500",
      difficulty: "hard",
      description: "Create clear technical guides",
      templates: [
        {
          type: "User Manual",
          content: "USER MANUAL: Smart Home Hub Installation Guide\n\nTable of Contents:\n1. Introduction\n2. Package Contents\n3. System Requirements\n4. Installation Steps\n5. Configuration\n6. Troubleshooting\n\n1. INTRODUCTION\nThank you for purchasing the SmartHub Pro. This device centralizes control of all your smart home devices through a single, intuitive interface.\n\n2. PACKAGE CONTENTS\n- SmartHub Pro device\n- Power adapter (12V, 2A)\n- Ethernet cable (5ft)\n- Mounting bracket and screws\n- Quick start guide\n- Warranty card\n\n3. SYSTEM REQUIREMENTS\n- Wi-Fi router (2.4GHz or 5GHz)\n- Smartphone or tablet (iOS 13+ or Android 9+)\n- Internet connection (minimum 10 Mbps)\n\n4. INSTALLATION STEPS\n\nStep 1: Choose Location\n- Place hub in central location within 30 feet of router\n- Ensure adequate ventilation (2 inches clearance on all sides)\n- Avoid direct sunlight and moisture\n\nStep 2: Physical Connection\na) Connect power adapter to hub\nb) Plug adapter into wall outlet\nc) Wait for LED indicator to turn solid blue (30-60 seconds)\n\nStep 3: Network Setup\na) Download SmartHub app from App Store or Google Play\nb) Open app and tap 'Add New Device'\nc) Follow on-screen instructions to connect hub to Wi-Fi\nd) Create admin account with strong password\n\n5. CONFIGURATION\n\nAdding Devices:\n1. Navigate to 'Devices' tab in app\n2. Tap '+' icon in top-right corner\n3. Select device type from list\n4. Follow manufacturer-specific pairing instructions\n5. Assign device to room for easy organization\n\nCreating Automation:\n1. Go to 'Automations' section\n2. Tap 'Create New Automation'\n3. Define trigger (time, sensor, or manual)\n4. Select actions (turn on lights, adjust temperature, etc.)\n5. Save and enable automation\n\n6. TROUBLESHOOTING\n\nIssue: Hub won't power on\nSolution:\n- Verify power adapter is properly connected\n- Try different wall outlet\n- Contact support if LED remains off after 2 minutes\n\nIssue: Can't connect to Wi-Fi\nSolution:\n- Ensure router is within range\n- Verify Wi-Fi password is correct\n- Restart hub and router\n- Check for firmware updates in app\n\nFor additional support:\nEmail: support@smarthubpro.com\nPhone: 1-800-SMART-HUB\nWebsite: www.smarthubpro.com/support",
          hindi: "उपयोगकर्ता मैनुअल: स्मार्ट होम हब इंस्टॉलेशन गाइड\n\nविषय-सूची:\n1. परिचय\n2. पैकेज सामग्री\n3. सिस्टम आवश्यकताएं\n4. इंस्टॉलेशन चरण\n\n1. परिचय\nSmartHub Pro खरीदने के लिए धन्यवाद। यह डिवाइस एक ही इंटरफ़ेस के माध्यम से आपके सभी स्मार्ट होम उपकरणों को नियंत्रित करता है।\n\n2. पैकेज सामग्री\n- SmartHub Pro डिवाइस\n- पावर एडाप्टर\n- ईथरनेट केबल\n\n4. इंस्टॉलेशन चरण\nचरण 1: स्थान चुनें\n- हब को राउटर के 30 फीट के भीतर केंद्रीय स्थान पर रखें"
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
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-orange-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🧾</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-orange-600'}`}>
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🧾</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            Professional Writing
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Master business emails, reports, essays, and professional documents
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-orange-400'
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
                    {module.templates?.length || module.sections?.length} templates
                  </span>
                </div>
                <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-orange-600'} font-semibold`}>
                  Click to view →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

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
              {selectedModule.templates?.map((template, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-50'} p-6 rounded-xl mb-6`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-4`}>
                    {template.type || template.subject}
                  </h3>
                  <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} p-4 rounded-lg mb-4`}>
                    <pre className={`${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} text-sm whitespace-pre-wrap font-mono`}>
                      {template.body || template.content}
                    </pre>
                  </div>
                  <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-orange-50'} p-4 rounded-lg`}>
                    <p className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-orange-600'} font-semibold mb-2`}>
                      Hindi Translation:
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'}`}>
                      {template.hindi}
                    </p>
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
