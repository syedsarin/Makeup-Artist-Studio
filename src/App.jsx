import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BridalFeature from './components/BridalFeature';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import MakeupClasses from './components/MakeupClasses';
import AboutArtist from './components/AboutArtist';
import FinalCTA from './components/FinalCTA';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import { ARTIST_INFO } from './data/bridalData';

export function openWhatsApp(context = '') {
  const msg = context
    ? `Hello ${ARTIST_INFO.name}! I'm interested in your ${context} service. Please share more details.`
    : `Hello ${ARTIST_INFO.name}! I found you through your website and would love to know more about your bridal makeup services.`;
  const url = `https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#2C221E] font-sans selection:bg-[#9B4B5A] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <BridalFeature />
        <Services />
        <Portfolio />
        <Packages />
        <MakeupClasses />
        <AboutArtist />
        <FinalCTA />
        <Location />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
