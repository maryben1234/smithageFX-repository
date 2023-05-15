import React from 'react';
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Home from './pages/landing-pages/Home';




function App() {
  return (
    <div>
      <Home />

      <About />
      <Services/>
      
    </div>
  );
}

export default App;
