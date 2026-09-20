import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function MobileBottomBar() {
  const handleCallDirect = () => {
    window.location.href = `tel:${ARTIST_INFO.phone.replace(/\s+/g, '')}`;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#ECE6DE] px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(31,25,23,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={handleCallDirect}
          className="btn btn-secondary text-xs font-semibold min-h-[38px] py-2 flex-1 border-[#ECE6DE] text-[#1F1917] justify-center rounded-xl active:scale-[0.98] transition-transform cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call Now</span>
        </button>

        <button
          onClick={() => openWhatsApp()}
          className="btn btn-primary text-xs font-semibold min-h-[38px] py-2 flex-[2] justify-center rounded-xl shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp Us</span>
        </button>
      </div>
    </div>
  );
}
