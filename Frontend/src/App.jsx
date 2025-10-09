import { useState } from 'react'
import landingPage from './Pages/LandingPage.jsx'
import './App.css'
import LandingPage from './Pages/LandingPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
     

