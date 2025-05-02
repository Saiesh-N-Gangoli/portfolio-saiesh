import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Contact';
import About from './Components/About';
import MainPage from './Resuable/MainPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
