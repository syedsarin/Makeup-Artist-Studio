import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Award,
  Crown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { openWhatsApp } from '../App';

import heroBrideHaloImg from '../assets/hero-bride-halo.jpg';
import catBridalImg from '../assets/cat-bridal.jpg';
import heroBrideMakeupImg from '../assets/hero-bride-makeup.jpg';
import catEngagementImg from '../assets/cat-engagement.jpg';
import catHairImg from '../assets/cat-hair.jpg';
import makeupToolkitImg from '../assets/makeup-toolkit.jpg';

const BRIDAL_SLIDES = [
  {
    id: 1,
    image: heroBrideHaloImg,
    alt: 'Timeless Bridal Elegance in Champagne Couture',
    title: 'Signature Couture Bridal',
  },
  {
    id: 2,
    image: catBridalImg,
    alt: 'Flawless HD Royal Bridal Look with Floral Veil',
    title: 'Royal Ivory & Gold Bride',
  },
  {
    id: 3,
    image: makeupToolkitImg,
    alt: 'Professional Luxury Bridal Makeup Vanity Toolkit',
    title: 'Luxury Artist Makeup Toolkit',
  },
  {
    id: 4,
    image: heroBrideMakeupImg,
    alt: 'Royal Red Bridal Makeup Application in Progress',
    title: 'Crimson Red Bridal Artistry',
  },
  {
    id: 5,
    image: catEngagementImg,
    alt: 'Soft Romantic Pastel Engagement Glam',
    title: 'Romantic Pastel Glam',
  },
  {
    id: 6,
    image: catHairImg,
    alt: 'Intricate Bridal Hair Styling & Dupatta Draping',
    title: 'Couture Hair & Dupatta Draping',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BRIDAL_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + BRIDAL_SLIDES.length) % BRIDAL_SLIDES.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  const handlePrev = (e) => {
    e.stopPropagation();
    prevSlide();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    nextSlide();
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#portfolio');

    if (target) {
      const navOffset = 70;
      const offsetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex w-full items-center overflow-hidden bg-[#FFF2F5] py-10 sm:py-14 lg:py-16"
    >
      {/* Soft Rose Blush Ambient Studio Auras */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-[400px] w-[400px] rounded-full bg-[#FFD6E7]/40 blur-[100px] sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute -bottom-36 -left-28 h-[400px] w-[400px] rounded-full bg-[#FFE8F0]/60 blur-[100px] sm:h-[550px] sm:w-[550px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">

          {/* LEFT SIDE: TEXT CONTENT & CTAS */}
          <div className="relative z-10 text-left lg:col-span-5">
            {/* Subtle Ambient Makeup Toolkit Glow behind Text */}
            <div className="pointer-events-none absolute -inset-4 -z-10 overflow-hidden rounded-3xl opacity-20">
              <img
                src={makeupToolkitImg}
                alt=""
                className="h-full w-full object-cover object-center filter blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFF2F5]/95 via-[#FFF2F5]/85 to-[#FFF2F5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFF2F5] via-transparent to-[#FFF2F5]" />
            </div>

            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#A25345]/15 bg-white/80 px-3.5 py-1 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#A25345]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A25345] sm:text-xs">
                Luxury Bridal &amp; Couture Artistry
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="leading-none text-left"
            >
              <h1 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight text-[#1F1917] sm:text-5xl lg:text-[62px]">
                Timeless
              </h1>
              <span className="-mt-1 block font-script text-5xl font-normal leading-[0.9] text-[#A25345] sm:-mt-2.5 sm:text-6xl lg:text-[76px]">
                Elegance
              </span>
            </motion.div>

            {/* Tagline */}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-8 sm:gap-5"
            >
              {/* WhatsApp */}
              <button
                onClick={() => openWhatsApp('Hero WhatsApp Enquiry')}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-[#A25345] px-6 py-2.5 text-xs font-medium text-white shadow-md shadow-[#A25345]/30 transition-all hover:bg-[#8D4437] hover:gap-2.5 active:scale-[0.98] sm:px-7 sm:py-3 sm:text-sm"
              >
                <span>Book Appointment</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              {/* View Portfolio */}
              <button
                onClick={handlePortfolioClick}
                className="group flex cursor-pointer items-center gap-2.5 text-xs font-medium text-[#1F1917] transition-colors hover:text-[#A25345] sm:text-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8DCD1] bg-white shadow-sm transition-transform group-hover:scale-105 sm:h-9 sm:w-9">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-[#1F1917]" />
                </div>
                <span>View Portfolio</span>
              </button>
            </motion.div>

            {/* Trust Mini Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 flex items-center gap-6 border-t border-[#1F1917]/10 pt-5 sm:mt-10 sm:gap-8"
            >
              <div>
                <p className="font-serif text-lg font-bold text-[#1F1917] sm:text-xl">800+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#786E66] sm:text-[11px]">Royal Brides</p>
              </div>
              <div className="h-6 w-px bg-[#1F1917]/10" />
              <div>
                <p className="font-serif text-lg font-bold text-[#1F1917] sm:text-xl">HD &amp; Airbrush</p>
                <p className="text-[10px] uppercase tracking-wider text-[#786E66] sm:text-[11px]">Specialist</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: IMAGE SLIDER */}
          <div className="flex w-full items-center justify-center lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mx-auto flex aspect-[4/3] w-full items-center justify-center"
            >
              {/* Glowing Halo Ring */}
              <div className="pointer-events-none absolute z-0 aspect-square w-[86%] rounded-full border-[3px] border-white/95 shadow-[0_0_50px_rgba(255,225,185,0.9),0_0_100px_rgba(255,190,140,0.5),inset_0_0_30px_rgba(255,255,255,0.8)]" />

              {/* Slider Box */}
              <div className="group relative z-10 h-full w-full overflow-hidden rounded-[26px] border-4 border-white/90 bg-[#F4EBE3] shadow-2xl sm:rounded-[34px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={BRIDAL_SLIDES[currentIndex].id}
                    src={BRIDAL_SLIDES[currentIndex].image}
                    alt={BRIDAL_SLIDES[currentIndex].alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="eager"
                  />
                </AnimatePresence>

                {/* Subtle Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />

                {/* Current Slide Label Tag */}
                <div className="pointer-events-none absolute bottom-10 left-4 z-20 hidden sm:block">
                  <span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                    {BRIDAL_SLIDES[currentIndex].title}
                  </span>
                </div>

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-[#1F1917] opacity-0 shadow-sm transition-all duration-200 hover:bg-white group-hover:opacity-100 sm:h-9 sm:w-9"
                  aria-label="Previous Bridal Image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-[#1F1917] opacity-0 shadow-sm transition-all duration-200 hover:bg-white group-hover:opacity-100 sm:h-9 sm:w-9"
                  aria-label="Next Bridal Image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Bottom Pagination Dots */}
                <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 backdrop-blur-sm">
                  {BRIDAL_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${currentIndex === idx
                        ? 'w-5 bg-white'
                        : 'w-1.5 bg-white/50 hover:bg-white/80'
                        }`}
                      aria-label={`Slide to ${slide.title}`}
                    />
                  ))}
                </div>
              </div>

              {/* Quality Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="absolute -left-2 top-4 z-20 flex items-center gap-1.5 rounded-full border border-[#F0E6DD] bg-white/95 px-3 py-1 shadow-md backdrop-blur-md sm:-left-4 sm:top-6 sm:px-3.5 sm:py-1.5"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#A25345]/10">
                  <Award className="h-2.5 w-2.5 text-[#A25345]" />
                </div>
                <span className="text-[11px] font-semibold text-[#1F1917] sm:text-xs">
                  HD Certified
                </span>
              </motion.div>


            </motion.div>
          </div>

        </div>
      </div>
    </section >
  );
}