import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import Packages from '../components/Packages';
import { openWhatsApp } from '../App';

const SERVICES_HERO_IMAGES = [
  {
    image: '/B3.png',
    title: 'Signature Royal Bridal',
  },
  {
    image: '/B14.png',
    title: 'Romantic Engagement Glam',
  },
  {
    image: '/B11.png',
    title: 'Reception & Party Styling',
  },
];

export default function ServicesPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % SERVICES_HERO_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + SERVICES_HERO_IMAGES.length) % SERVICES_HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-[#FAF8F5]">

      {/* =====================================================
          SERVICES HERO SECTION (TEXT, 3-IMAGE SLIDER & THIN BORDERS)
      ===================================================== */}
      <section className="relative w-full bg-[#FAF8F5] py-5 sm:py-7 lg:py-9 border-b border-[#ECE6DE]">
        <div className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8">

          {/* Framed Hero Card with Thin Luxury Borders */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ECE6DE] bg-white p-5 sm:p-7 lg:p-10 shadow-xs text-center">

            {/* Subtle Ambient Luxury Auras */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#FAF5EB]/80 blur-[80px]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-[280px] w-[280px] rounded-full bg-[#FAF5EB]/80 blur-[80px]" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Eyebrow Badge with Thin Border */}
              <div className="flex justify-center mb-2.5 sm:mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#A25345]/20 text-[#A25345] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
                  <Sparkles className="w-3 h-3 text-[#A25345]" />
                  <span>SERVICES &amp; PACKAGES</span>
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1F1917] tracking-tight leading-[1.12]">
                Bridal &amp; Occasion{' '}
                <span className="italic font-normal text-[#A25345]">
                  Artistry Services
                </span>
              </h1>

              {/* Concise Description */}
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#655E59] leading-relaxed max-w-2xl mx-auto">
                Bespoke HD &amp; Airbrush bridal artistry, couture hairstyling, and precision draping crafted for weddings, engagements, receptions, and grand celebrations.
              </p>

              {/* 3-Image Slider Showcase with Thin Borders (Replaced 4 Cards) */}
              <div className="mt-5 sm:mt-6 w-full max-w-3xl mx-auto">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full min-h-[220px] sm:min-h-[300px] lg:min-h-[360px] overflow-hidden rounded-xl sm:rounded-2xl border border-[#ECE6DE] shadow-xs bg-[#FAF8F5]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={SERVICES_HERO_IMAGES[slideIndex].image}
                      src={SERVICES_HERO_IMAGES[slideIndex].image}
                      alt={SERVICES_HERO_IMAGES[slideIndex].title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.7, ease: 'easeOut' },
                      }}
                      className="absolute inset-0 h-full w-full object-cover object-center filter brightness-105 contrast-[1.02]"
                    />
                  </AnimatePresence>

                  {/* Floating Caption Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-20">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[9.5px] sm:text-xs font-semibold uppercase tracking-wider shadow-xs">
                      {SERVICES_HERO_IMAGES[slideIndex].title}
                    </span>
                  </div>

                  {/* Bottom Controls Bar with Clean Thin Border Styling */}
                  <div className="absolute inset-x-2.5 bottom-2.5 sm:inset-x-3 sm:bottom-3 z-20 flex items-center justify-between">
                    {/* Slide Dots for 3 Images */}
                    <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20 shadow-xs">
                      {SERVICES_HERO_IMAGES.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSlideIndex(index)}
                          aria-label={`Show service image ${index + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            slideIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Prev / Next Arrows */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white text-[#1F1917] hover:text-[#A25345] border border-[#ECE6DE] shadow-xs flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white text-[#1F1917] hover:text-[#A25345] border border-[#ECE6DE] shadow-xs flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enquire CTA Action at Bottom in One Row */}
              <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2.5 sm:gap-4 flex-nowrap">
                <button
                  onClick={() => openWhatsApp('Services & Packages Enquiry')}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#A25345] hover:bg-[#8D4437] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-[13px] font-semibold shadow-md shadow-[#A25345]/25 border border-[#A25345] hover:border-[#8D4437] active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white shrink-0" />
                  <span className="hidden min-[380px]:inline">Enquire on WhatsApp</span>
                  <span className="min-[380px]:hidden">WhatsApp</span>
                </button>

                <a
                  href="#service-packages"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1F1917] hover:text-[#A25345] px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-[13px] font-semibold border border-[#ECE6DE] hover:border-[#A25345]/40 shadow-xs active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden min-[380px]:inline">Explore Packages</span>
                  <span className="min-[380px]:hidden">Packages</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Full Services & Packages Component with Photos & Category Filters */}
      <Packages />

      {/* Quick Custom Package Action */}
      <section className="py-10 sm:py-14 bg-white border-t border-[#ECE6DE]">
        <div className="container max-w-3xl text-center">
          <div className="p-6 rounded-2xl bg-[#FAF5EB] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1F1917]">
                Destination or Multi-Day Wedding?
              </h3>
              <p className="text-xs text-[#655E59] mt-0.5">
                Contact us on WhatsApp for a custom package tailored to your wedding itinerary.
              </p>
            </div>

            <button
              onClick={() => openWhatsApp('Custom Destination Package')}
              className="btn btn-primary btn-md shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Request Custom Quote</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
