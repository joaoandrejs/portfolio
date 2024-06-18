import {
  // BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/" element={<About />} />
          <Route path="/home" element={<About />} />
          <Route path="*" element={<About />} />
        </Routes>
      </div>
    </> 
  )
}

export default App
