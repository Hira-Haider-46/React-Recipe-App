import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Contact from './Pages/Contact';
import About from './Pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<h1>recipes</h1>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;