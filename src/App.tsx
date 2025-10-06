import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TryOn from './pages/TryOn';
import Measurement from './pages/Measurement';
import Consultation from './pages/Consultation';
import Education from './pages/Education';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#faf7f5]">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/try-on" element={<TryOn />} />
            <Route path="/measurement" element={<Measurement />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}