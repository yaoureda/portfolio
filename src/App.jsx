
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Formation from "./pages/Formation"
import Projects from "./pages/Projects"
import Experiences from "./pages/Experiences"


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
