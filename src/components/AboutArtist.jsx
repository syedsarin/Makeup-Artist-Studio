import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ARTIST, ARTIST_INFO } from '../data/bridalData';
import { Sparkles, Wand2, Clock } from 'lucide-react';

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
    <section id="about" className="py-10 sm:py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#ECE6DE]">
      <div className="container">

        {/* =====================================================
            MOBILE HEADER: First Heading "THE ARTIST" & "Beauty, Personalised."
            Displayed before image on mobile view (< lg)
        ====================================================== */}
        <div className="block lg:hidden text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 mb-2">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span className="text-[10px] font-semibold tracking-[0.22em] text-[#C5A059] uppercase">
              THE ARTIST
            </span>
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#1F1917] tracking-tight leading-[1.1]">
            Beauty, Personalised.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =====================================================
              LEFT COLUMN: ARTIST PORTRAIT
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
                    Lead Bridal Stylist &amp; Founder
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT COLUMN: EDITORIAL CONTENT & PILLARS
          ====================================================== */}
          <motion.div
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Desktop Heading (Hidden on mobile since mobile header is rendered first above image) */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A059] uppercase">
                  THE ARTIST
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1F1917] tracking-tight leading-[1.1] mb-3 sm:mb-4">
                Beauty, Personalised.
              </h2>
            </div>

            {/* Desktop / Tablet View: Editorial Paragraph */}
            <p className="hidden sm:block text-xs sm:text-sm text-[#655E59] leading-relaxed mb-5 sm:mb-6 font-normal max-w-xl">
              {ABOUT_ARTIST.description}
            </p>

            {/* Mobile View: All Points in ONE Badge */}
            <div className="sm:hidden p-3.5 rounded-2xl bg-white border border-[#ECE6DE] shadow-2xs mb-5 text-left space-y-2.5">
              {(ABOUT_ARTIST.points || [ABOUT_ARTIST.description]).map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5"
                >
                  <div className="w-4 h-4 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#C5A059]">
                    <span className="text-[9px] leading-none">✦</span>
                  </div>
                  <p className="text-[11px] text-[#524B46] leading-relaxed font-normal">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Existing Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-[#ECE6DE] shadow-2xs mb-5 sm:mb-6 max-w-lg">
              {ABOUT_ARTIST.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center px-1 sm:px-2 ${
                    idx !== ABOUT_ARTIST.stats.length - 1 ? 'border-r border-[#ECE6DE]' : ''
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

            {/* 3 Pillars: Fits in ONE SCREEN on mobile without slider */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-6 sm:mb-7">
              {THREE_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-2 sm:p-3.5 rounded-xl bg-white border border-[#ECE6DE] hover:border-[#C5A059]/50 transition-colors shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-1.5 shrink-0">
                        <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2]" />
                      </div>
                      <h4 className="font-serif text-[10.5px] sm:text-sm font-semibold text-[#1F1917] mb-0.5 sm:mb-1 leading-tight line-clamp-2">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[8px] sm:text-[11px] text-[#655E59] leading-tight line-clamp-3 sm:line-clamp-none">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Signature */}
            <div className="pt-3 border-t border-[#ECE6DE]">
              <span className="text-[10px] text-[#958D86] uppercase tracking-wider block font-sans">
                Master Bridal Artist
              </span>
              <span className="font-script text-3xl sm:text-4xl text-[#1F1917] leading-tight block -mt-1">
                Ayesha Malik
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
