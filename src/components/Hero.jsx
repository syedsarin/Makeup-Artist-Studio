
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Star, Heart, Award } from 'lucide-react';
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
      className="relative min-h-[calc(100vh-70px)] flex items-center py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Full Hero Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src={heroBrideImg}
          alt="Bride with professional bridal makeup kit"
          className="w-full h-full object-cover object-[65%_center] md:object-[right_25%] opacity-40 transition-opacity duration-300"
        />

        {/* Mobile Soft Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-[#FAF8F5]/30 to-[#FAF8F5]/90 md:hidden" />

        {/* Desktop Soft Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/80 via-[#FAF8F5]/30 to-transparent hidden md:block" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Text Content Layered on Top of Background Image */}
          <motion.div
            className="lg:col-span-7 flex flex-col text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="eyebrow self-start">
              <span>{ARTIST_INFO.title}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2C221E] font-medium leading-[1.12] mb-6 tracking-tight">
              Your Dream Bridal Look, <br />
              <span className="italic text-[#9B4B5A] font-normal">
                Beautifully Yours.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#6E655F] mb-8 max-w-xl font-normal leading-relaxed">
              {ARTIST_INFO.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => openWhatsApp()}
                className="btn btn-primary btn-lg shadow-rose"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </button>

              <a
                href="#portfolio"
                onClick={handlePortfolioClick}
                className="btn btn-secondary btn-lg group bg-white/70 backdrop-blur-sm"
              >
                <span>View Portfolio</span>

                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E8E2DA] flex flex-wrap items-center gap-6 sm:gap-8">

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-xs">
                  <Star className="w-4 h-4 fill-[#C5A059]" />
                </div>

                <div>
                  <div className="text-sm font-bold text-[#2C221E]">
                    ★ 4.9 Rating
                  </div>

                  <div className="text-[11px] text-[#9A918A]">
                    280+ Reviews
                  </div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-[#E8E2DA] hidden sm:block" />

              {/* Brides */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F7EFF1] border border-[#9B4B5A]/30 flex items-center justify-center text-[#9B4B5A] shadow-xs">
                  <Heart className="w-4 h-4 fill-[#9B4B5A]/20" />
                </div>

                <div>
                  <div className="text-sm font-bold text-[#2C221E]">
                    500+ Brides
                  </div>

                  <div className="text-[11px] text-[#9A918A]">
                    Happily Styled
                  </div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-[#E8E2DA] hidden sm:block" />

              {/* Experience */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-xs">
                  <Award className="w-4 h-4" />
                </div>

                <div>
                  <div className="text-sm font-bold text-[#2C221E]">
                    5+ Years
                  </div>

                  <div className="text-[11px] text-[#9A918A]">
                    Master Artist
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            className="lg:col-span-5 hidden lg:flex flex-col gap-3.5 items-end justify-start self-start pt-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Customized */}
            <div className="bg-white/95 backdrop-blur-md border border-[#E8E2DA] p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#9B4B5A] text-white flex items-center justify-center text-lg font-serif shadow-xs">
                ✨
              </div>

              <div className="text-left">
                <div className="text-xs font-bold text-[#2C221E]">
                  100% Customized
                </div>

                <div className="text-[10px] text-[#6E655F]">
                  Personalized Skin Prep
                </div>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="bg-white/95 backdrop-blur-md border border-[#E8E2DA] p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                  />
                ))}
              </div>

              <span className="text-xs font-bold text-[#2C221E]">
                Top Rated Bridal Studio
              </span>
            </div>

            {/* Signature Badge */}
            <div className="bg-black/45 backdrop-blur-md text-white border border-white/25 p-4 rounded-2xl shadow-xl text-left max-w-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#E5D5BC] mb-1">
                Signature Couture Bridal
              </div>

              <p className="text-xs text-white/90 font-light">
                Customized HD Airbrush & Dupatta Setting
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
