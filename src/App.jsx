import './App.css'
import MainPages from "./pages/MainPages"
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/:username' element={<MainPages />} />
        </Routes>
      </Router> */}
      <MainPages />

      <Toaster position='top center'/>
    </>
  )
}

export default App