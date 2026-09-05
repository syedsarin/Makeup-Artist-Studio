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
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#1F1917] text-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9B4B5A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#E5D5BC] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 text-center leading-tight">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited Dates For Upcoming Wedding Season</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-5 sm:mb-6 leading-tight">
            Planning Your Wedding Look?
          </h2>

          <p className="text-base sm:text-xl text-[#D1C8C2] max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Tell us your wedding date and let's create your perfect bridal look. Message us on WhatsApp for instant availability confirmation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 sm:gap-6">
            <button
              onClick={() => openWhatsApp()}
              className="btn btn-primary btn-lg w-full sm:w-auto sm:min-w-[260px] shadow-rose justify-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Us Now</span>
            </button>

            <button
              onClick={handleCallDirect}
              className="btn btn-secondary btn-lg w-full sm:w-auto sm:min-w-[200px] border-white/40 text-white hover:bg-white hover:text-[#1F1917] justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-[#9A918A]">
            Instant response on WhatsApp — usually within 15 minutes
          </div>
        </motion.div>
      </div>
    </section>
  );
}
