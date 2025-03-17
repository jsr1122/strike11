import React from 'react'
import './App.css';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About US/About';
import FantasyCricket from './pages/FantasyCricket/FantasyCricket';
import ResponsibleGame from './pages/ResponsibleGaming/ResponsibleGame';
import TermAndCond from './pages/TermAndCond/TermAndCond';
import Privacy from './pages/privacyPolicy/Privacy';

const App = () => {
  return (

    <>
      <Router>
        {/* <Media/> */}
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fantasy" element={<FantasyCricket />} />
          <Route path="/responsible" element={<ResponsibleGame />} />
          <Route path="/term&cond" element={<TermAndCond />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
