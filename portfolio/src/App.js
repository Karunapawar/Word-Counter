import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'; // Adjust the path as needed
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
