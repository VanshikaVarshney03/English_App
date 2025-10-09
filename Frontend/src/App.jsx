import { useState } from 'react'
import landingPage from './Pages/LandingPage.jsx'
import './App.css'
import LandingPage from './Pages/LandingPage.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'


import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
           <Route path="/signup" element={<SignupPage />} />
           <Route path="/login" element={<LoginPage />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
