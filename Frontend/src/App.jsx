import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import LearningPaths from './Pages/LearningPaths.jsx';
import EasyLevel from './Pages/EasyLevel.jsx';
import DailyWords from './Pages/DailyWords.jsx';
import BasicConversations from './Pages/BasicConversations.jsx';
import GrammarStarter from './Pages/GrammarStarter.jsx';
import MiniQuiz from './Pages/MiniQuiz.jsx';
import IntermediateLevel from './Pages/IntermediateLevel.jsx';
import IntermediateDialogues from './Pages/IntermediateDialogues.jsx';
import IntermediateGrammar from './Pages/IntermediateGrammar.jsx';
import VocabularyBuilder from './Pages/VocabularyBuilder.jsx';
import ChallengeMode from './Pages/ChallengeMode.jsx';
import HardLevel from './Pages/HardLevel.jsx';  // ✅ NEW
import AdvancedGrammar from './Pages/AdvancedGrammar.jsx'; 
import PublicSpeaking from './Pages/PublicSpeaking.jsx';
import ProfessionalWriting from './Pages/ProfessionalWriting.jsx';
import AccentTraining from './Pages/AccentTraining.jsx';
import ProChallenge from './Pages/ProChallenge.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/easy-level" element={<EasyLevel />} />
        <Route path="/daily-words" element={<DailyWords />} />
        <Route path="/basic-conversations" element={<BasicConversations />} />
        <Route path="/grammar-starter" element={<GrammarStarter />} />
        <Route path="/mini-quiz" element={<MiniQuiz />} />
        <Route path="/intermediate-level" element={<IntermediateLevel />} />
        <Route path="/intermediate-dialogues" element={<IntermediateDialogues />} />
        <Route path="/intermediate-grammar" element={<IntermediateGrammar />} />
        <Route path="/vocabulary" element={<VocabularyBuilder />} />
        <Route path="/challenge-mode" element={<ChallengeMode />} />
        <Route path="/hard-level" element={<HardLevel />} />  {/* ✅ NEW */}
        <Route path="/advanced-grammar" element={<AdvancedGrammar />} />
        <Route path="/public-speaking" element={<PublicSpeaking />} /> 
        <Route path="/professional-writing" element={<ProfessionalWriting />} />  
        <Route path="/accent-training" element={<AccentTraining />} />
        <Route path="/pro-challenge" element={<ProChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

