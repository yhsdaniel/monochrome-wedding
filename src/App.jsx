import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPages from "./pages/MainPages"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/:username' element={<MainPages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App