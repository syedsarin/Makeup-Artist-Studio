import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ARTIST, ARTIST_INFO } from '../data/bridalData';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../App';

export default function AboutArtist() {
  return (
    <section id="about" className="section bg-[#FAF8F5]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Portrait Side */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-t-[10rem] rounded-b-3xl border-2 border-[#C5A059]/40 transform -rotate-2 pointer-events-none hidden sm:block" />
              <div className="relative rounded-t-[6rem] sm:rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[3/4] bg-[#F4EFEA]">
                <img
                  src={ABOUT_ARTIST.portrait}
                  alt={ARTIST_INFO.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-center border border-white/40 shadow-lg">
                  <span className="font-serif text-xl font-bold text-[#2C221E] block">{ARTIST_INFO.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9B4B5A]">Lead Bridal Stylist & Founder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow self-start"><span>{ABOUT_ARTIST.eyebrow}</span></div>

            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C221E] mb-6 leading-tight">
              {ABOUT_ARTIST.statement}
            </h2>

            <p className="text-base sm:text-lg text-[#6E655F] mb-8 leading-relaxed">
              {ABOUT_ARTIST.description}
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#E8E2DA] shadow-xs mb-8">
              {ABOUT_ARTIST.stats.map((stat, idx) => (
                <div key={idx} className="text-center border-r last:border-r-0 border-[#E8E2DA] px-2">
                  <div className="font-serif text-2xl sm:text-3xl sm:text-4xl font-bold text-[#9B4B5A]">{stat.value}</div>
                  <div className="text-xs text-[#6E655F] font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#2C221E]">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                <span>Certified Master Makeup & Hair Specialist</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#2C221E]">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                <span>Premium International Brands Only (Huda Beauty, Charlotte Tilbury, Dior, NARS)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#2C221E]">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                <span>Personalized Pre-Bridal Consultation Included</span>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp('Personal Consultation')}
              className="btn btn-primary btn-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp for Consultation</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
