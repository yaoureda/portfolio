
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Formation from "./pages/Formation"


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
