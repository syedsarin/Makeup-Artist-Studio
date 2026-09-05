import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  ArrowRight,
  Star,
  Heart,
  Award,
} from 'lucide-react';

import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';
import heroBrideImg from '../assets/hero-bride-makeup.jpg';

export default function Hero() {
  const handlePortfolioClick = (e) => {
    e.preventDefault();

    const target = document.querySelector('#portfolio');

    if (target) {
      const navOffset = 70;

      const offsetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full aspect-[16/9] flex items-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* ================================================================
          HERO BACKGROUND IMAGE
      ================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroBrideImg}
          alt="Bride with professional bridal makeup kit"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Main soft overlay */}
        <div className="absolute inset-0 bg-[#FAF8F5]/55" />

        {/* Left-side readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/50 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FAF8F5]/60 to-transparent" />
      </div>

      {/* ================================================================
          HERO CONTENT
      ================================================================= */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-4 sm:mb-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A85C72]" />

                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium text-[#8D5366]">
                  {ARTIST_INFO.title}
                </span>

                <span className="h-px w-8 bg-[#A85C72]" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-[#2C221E]"
            >
              Your Dream Bridal Look,
              <br />

              <span className="italic text-[#A85C72] font-normal">
                Beautifully Yours.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#6E655F]"
            >
              {ARTIST_INFO.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                onClick={() => openWhatsApp()}
                className="btn btn-primary btn-lg group flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />

                <span>Book Your Look</span>

                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handlePortfolioClick}
                className="btn btn-secondary btn-lg group flex items-center gap-2"
              >
                <span>View Portfolio</span>

                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* ==========================================================
                TRUST STATS
            =========================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-6 sm:mt-10 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5"
            >
              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#E8E2DA]">
                  <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm sm:text-base text-[#2C221E]">
                      4.9
                    </span>

                    <Star className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                  </div>

                  <p className="text-[10px] sm:text-xs text-[#6E655F]">
                    280+ Reviews
                  </p>
                </div>
              </div>

              {/* Brides */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#E8E2DA]">
                  <Heart className="w-4 h-4 text-[#A85C72] fill-[#A85C72]" />
                </div>

                <div>
                  <div className="font-semibold text-sm sm:text-base text-[#2C221E]">
                    500+
                  </div>

                  <p className="text-[10px] sm:text-xs text-[#6E655F]">
                    Brides Happily Styled
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#E8E2DA]">
                  <Award className="w-4 h-4 text-[#C5A059]" />
                </div>

                <div>
                  <div className="font-semibold text-sm sm:text-base text-[#2C221E]">
                    5+
                  </div>

                  <p className="text-[10px] sm:text-xs text-[#6E655F]">
                    Years Master Artist
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================================================================
          RIGHT SIDE FLOATING BADGES
      ================================================================= */}

      {/* Badge 1 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.6,
        }}
        className="hidden lg:block absolute top-[18%] right-8 xl:right-16 z-20"
      >
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-[#E8E2DA] rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F7EFF1]">
            <Star className="w-4 h-4 text-[#A85C72] fill-[#A85C72]" />
          </div>

          <div>
            <div className="text-xs font-semibold text-[#2C221E]">
              4.9 / 5
            </div>

            <div className="text-[10px] text-[#6E655F]">
              Client Rating
            </div>
          </div>
        </div>
      </motion.div>

      {/* Badge 2 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.75,
        }}
        className="hidden lg:block absolute top-[48%] right-10 xl:right-20 z-20"
      >
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-[#E8E2DA] rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FAF5EB]">
            <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
          </div>

          <div>
            <div className="text-xs font-semibold text-[#2C221E]">
              500+
            </div>

            <div className="text-[10px] text-[#6E655F]">
              Happy Brides
            </div>
          </div>
        </div>
      </motion.div>

      {/* Badge 3 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.9,
        }}
        className="hidden lg:block absolute bottom-[12%] right-8 xl:right-16 z-20"
      >
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-[#E8E2DA] rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F7EFF1]">
            <Award className="w-4 h-4 text-[#A85C72]" />
          </div>

          <div>
            <div className="text-xs font-semibold text-[#2C221E]">
              5+ Years
            </div>

            <div className="text-[10px] text-[#6E655F]">
              Master Artist
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}