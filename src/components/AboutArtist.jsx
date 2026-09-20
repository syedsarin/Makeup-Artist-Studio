import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ARTIST, ARTIST_INFO } from '../data/bridalData';
import { Sparkles, Wand2, Clock, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../App';

export default function AboutArtist() {
  const THREE_PILLARS = [
    {
      icon: Sparkles,
      title: "Personalised Looks",
      desc: "Tailored to complement your bridal couture, facial features, and personal aesthetic."
    },
    {
      icon: Wand2,
      title: "Refined Techniques",
      desc: "Ultra-fine HD and airbrush artistry creating seamless, weightless, camera-ready skin."
    },
    {
      icon: Clock,
      title: "Lasting Finish",
      desc: "Sweat-resistant, long-wear formulations designed to stay luminous for 16+ hours."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE6DE]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =====================================================
              LEFT COLUMN: ARTIST PORTRAIT (IMAGE FIRST ON MOBILE)
              Preserved exact existing photo design
          ====================================================== */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto max-w-[240px] sm:max-w-[280px] lg:max-w-xs">
              {/* Subtle thin champagne border / offset frame */}
              <div className="absolute -inset-3 rounded-t-[7rem] rounded-b-2xl border-2 border-[#C5A059]/40 transform -rotate-2 pointer-events-none hidden sm:block" />

              {/* Arched Portrait Frame */}
              <div className="relative rounded-t-[5rem] sm:rounded-t-[7rem] rounded-b-2xl overflow-hidden shadow-xl border-3 border-white aspect-[3/4] bg-[#F4EFEA]">
                <img
                  src={ABOUT_ARTIST.portrait}
                  alt={ARTIST_INFO.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Name Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl text-center border border-white/70 shadow-md">
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1F1917] block">
                    {ARTIST_INFO.name}
                  </span>
                  <span className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest text-[#9B4B5A]">
                    Lead Bridal Stylist & Founder
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT COLUMN: EDITORIAL CONTENT
          ====================================================== */}
          <motion.div
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Small Eyebrow: THE ARTIST */}
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A059] uppercase">
                THE ARTIST
              </span>
            </div>

            {/* Heading: Beauty, Personalised. */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1F1917] tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Beauty, Personalised.
            </h2>

            {/* Editorial Paragraph */}
            <p className="text-xs sm:text-sm text-[#655E59] leading-relaxed mb-5 sm:mb-6 font-normal max-w-xl">
              {ABOUT_ARTIST.description}
            </p>

            {/* Existing Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-[#ECE6DE] shadow-2xs mb-5 sm:mb-6 max-w-lg">
              {ABOUT_ARTIST.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center px-1 sm:px-2 ${idx !== ABOUT_ARTIST.stats.length - 1 ? 'border-r border-[#ECE6DE]' : ''
                    }`}
                >
                  <div className="font-serif text-lg sm:text-2xl font-bold text-[#1F1917] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-[#786E66] font-medium mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Compact Editorial Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-7">
              {THREE_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#ECE6DE] hover:border-[#C5A059]/50 transition-colors shadow-2xs"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-2">
                      <Icon className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-[#1F1917] mb-1 leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-[#655E59] leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Signature & Consultation Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#ECE6DE]">
              {/* Subtle Signature-Style Ayesha Malik */}
              <div>
                <span className="text-[10px] text-[#958D86] uppercase tracking-wider block font-sans">
                  Master Bridal Artist
                </span>
                <span className="font-script text-3xl sm:text-4xl text-[#1F1917] leading-tight block -mt-1">
                  Ayesha Malik
                </span>
              </div>

              {/* Consultation CTA */}
              <button
                onClick={() => openWhatsApp('Personal Bridal Consultation with Ayesha')}
                className="btn btn-primary btn-md rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp for Consultation</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
