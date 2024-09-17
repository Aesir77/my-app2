import './App.css';
import React from 'react';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/NotFound.js";
import Counter from './components/Counter.js';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <nav className='Navbar'>
<li>
<Link to="Home">Home </Link>
</li>
<li>
<Link to="About">About </Link>
</li>
<li>
<Link to="Contact">Contact</Link>
</li>
<li>
<Link to="Counter">Counter</Link>
</li>





      </nav>
      <Routes>
      <Route path="/Home" element={< Home />} />
      <Route path="/About" element={< About />}/>
      <Route path="/Contact" element={< Contact />}/>
      <Route path="/Counter" element={< Counter />}/>
      <Route path="/Error" element={< Error />}/>
      </Routes>
    </div>
    </Router>
  );
}
  

export default App;
