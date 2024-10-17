import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPages from "./pages/MainPages"
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/:username' element={<MainPages />} />
        </Routes>
      </Router>

      <Toaster position='top center'/>
    </>
  )
}

export default App