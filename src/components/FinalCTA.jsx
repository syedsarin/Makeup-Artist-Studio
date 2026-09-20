import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function FinalCTA() {
  const handleCallDirect = () => {
    window.location.href = `tel:${ARTIST_INFO.phone.replace(/\s+/g, '')}`;
  };

  return (
    <section className="relative py-8 sm:py-14 lg:py-18 overflow-hidden bg-[#1F1917] text-white">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] bg-[#9B4B5A]/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[400px] sm:h-[400px] bg-[#C5A059]/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#E5D5BC] text-[8.5px] sm:text-[10.5px] font-bold uppercase tracking-widest mb-3 sm:mb-4 text-center leading-tight">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span>Limited Dates For Upcoming Wedding Season</span>
          </div>

          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-white mb-2 sm:mb-3 leading-tight">
            Planning Your Wedding Look?
          </h2>

          <p className="text-xs sm:text-sm text-[#D1C8C2] max-w-xl mx-auto mb-4 sm:mb-6 font-normal leading-relaxed">
            Tell us your wedding date and let's create your perfect bridal look. Message us on WhatsApp for instant availability confirmation.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
            <button
              onClick={() => openWhatsApp()}
              className="btn btn-md w-full sm:w-auto sm:min-w-[200px] justify-center min-h-[40px] text-xs sm:text-sm bg-[#C5A059] hover:bg-[#B08D46] text-[#1F1917] font-bold border border-[#C5A059] shadow-gold hover:shadow-lg transition-all rounded-full"
            >
              <MessageCircle className="w-4 h-4 fill-[#1F1917]" />
              <span>WhatsApp Us Now</span>
            </button>

            <button
              onClick={handleCallDirect}
              className="btn btn-md w-full sm:w-auto sm:min-w-[160px] border border-white/30 text-white bg-white/5 hover:bg-white/15 backdrop-blur-xs justify-center min-h-[40px] text-xs sm:text-sm rounded-full transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </button>
          </div>

          <div className="mt-4 sm:mt-5 text-[10px] sm:text-[11px] text-[#9A918A]">
            Instant response on WhatsApp — usually within 15 minutes
          </div>
        </motion.div>
      </div>
    </section>
  );
}
