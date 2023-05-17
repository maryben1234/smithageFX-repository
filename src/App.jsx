import React from 'react';
import './App.css';
import About from './components/About';
import Academy from './components/Academy';
import Services from './components/Services';
import Home from './pages/landing-pages/Home';




function App() {
  return (
    <div>
      <Home />

      <About />
      <Services/>
      <Academy/>
      
    </div>
  );
}

export default App;
