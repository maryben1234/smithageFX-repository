import React from 'react';
import './index.css';
import { Router, Routes, Route } from 'react-router';
import Contact from './pages/contact/Contact';
import Home from './pages/landing-pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Home />}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
