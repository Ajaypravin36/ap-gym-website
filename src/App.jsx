import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Location from './pages/Location';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white selection:bg-brand-red selection:text-white">
      {/* Scroll to Top on Page Route Change */}
      <ScrollToTop />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Multi-Page Route Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
