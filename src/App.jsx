import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PackagesPage from './pages/PackagesPage';
import CoursesPage from './pages/CoursesPage';

import { ARTIST_INFO } from './data/bridalData';

export function openWhatsApp(context = '') {
  const msg = context
    ? `Hello ${ARTIST_INFO.name}! I'm interested in your ${context} service. Please share more details.`
    : `Hello ${ARTIST_INFO.name}! I found you through your website and would love to know more about your bridal makeup services.`;
  const url = `https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#1F1917] font-sans selection:bg-[#1F1917] selection:text-[#E5D5BC] flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
}
