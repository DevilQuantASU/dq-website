import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Discord from './pages/redirects/Discord';
import SunDevilCentral from './pages/redirects/SunDevilCentral';
import LinkedIn from './pages/redirects/LinkedIn';

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/sundevilcentral" element={<SunDevilCentral />} />
          <Route path="/linkedin" element={<LinkedIn />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
