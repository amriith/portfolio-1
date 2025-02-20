import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CursorShadow from './pages/Glow'

function App() {
  return (
    <BrowserRouter>
      <CursorShadow> 
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </CursorShadow>
    </BrowserRouter>
  )
}

export default App