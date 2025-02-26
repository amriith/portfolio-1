import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CursorShadow from './pages/Glow'
import ApologeticBow from './pages/WorkInProgress'

function App() {
  return (
    <BrowserRouter>
      <CursorShadow> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work-in-progress" element={<ApologeticBow />} />
        </Routes>
      </CursorShadow>
    </BrowserRouter>
  )
}

export default App