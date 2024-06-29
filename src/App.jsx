import {
  // BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from "./pages/Home";
// import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </> 
  )
}

export default App
