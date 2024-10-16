import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import music from './upload/music.mp3'
import MainPages from "./pages/MainPages"

function App() {
  let audioMusic = new Audio(music)
  useEffect(() => {
    audioMusic.play()
    window.scrollTo(0, 0)
  }, [])

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