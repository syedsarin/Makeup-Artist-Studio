import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function MobileBottomBar() {
  const handleCallDirect = () => {
    window.location.href = `tel:${ARTIST_INFO.phone.replace(/\s+/g, '')}`;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#E8E2DA] p-3 px-4 shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={handleCallDirect}
          className="btn btn-secondary text-xs font-bold py-3 flex-1 border-[#E8E2DA] text-[#2C221E] justify-center rounded-xl"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </button>

        <button
          onClick={() => openWhatsApp()}
          className="btn btn-primary text-xs font-bold py-3 flex-[2] justify-center rounded-xl shadow-rose"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Us</span>
        </button>
      </div>
    </div>
  );
}
