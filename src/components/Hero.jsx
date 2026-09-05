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
      className="relative w-full overflow-hidden bg-[#FAF8F5]"
    >
      {/* =========================================================
          HERO IMAGE
          Keep original 16:9 ratio.
          This prevents Chrome Android Desktop Site from creating
          an extremely tall image container.
      ========================================================== */}

      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={heroBrideImg}
          alt="Bride with professional bridal makeup kit"
          className="absolute inset-0 w-full h-full object-contain object-center"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-[#FAF8F5]/35" />

        {/* Left readability overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#FAF8F5]/85
            via-[#FAF8F5]/45
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-1/3
            bg-gradient-to-t
            from-[#FAF8F5]/65
            to-transparent
          "
        />

        {/* =====================================================
            HERO CONTENT OVER IMAGE
        ====================================================== */}

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3 sm:mb-4"
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#A85C72]" />

                  <span
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-[#8D5366]
                      sm:text-xs
                    "
                  >
                    {ARTIST_INFO.title}
                  </span>

                  <span className="h-px w-8 bg-[#A85C72]" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="
                  font-['Cormorant_Garamond']
                  text-3xl
                  font-medium
                  leading-[0.95]
                  text-[#2C2522]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Your Dream Bridal Look,
                <br />

                <span className="font-normal italic text-[#A85C72]">
                  Beautifully Yours.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="
                  mt-3
                  max-w-xl
                  text-xs
                  leading-relaxed
                  text-[#5F5753]
                  sm:mt-5
                  sm:text-base
                  md:text-lg
                "
              >
                {ARTIST_INFO.subtitle}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-4 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3"
              >
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#A85C72]
                    px-4
                    py-2.5
                    text-[10px]
                    font-semibold
                    tracking-wide
                    text-white
                    shadow-lg
                    shadow-[#A85C72]/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#934C62]
                    sm:px-6
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </button>

                {/* Portfolio */}
                <button
                  type="button"
                  onClick={handlePortfolioClick}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#8D817A]/40
                    bg-white/60
                    px-4
                    py-2.5
                    text-[10px]
                    font-semibold
                    tracking-wide
                    text-[#403733]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-white/85
                    sm:px-6
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  View Portfolio

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>

              {/* Trust stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-4 border-t border-[#8D817A]/25 pt-3 sm:mt-8 sm:pt-5"
              >
                <div className="flex flex-wrap items-center gap-y-3">

                  {/* Rating */}
                  <div className="flex items-center gap-2 pr-4 sm:gap-3 sm:pr-7">
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D8CBC4]
                        bg-white/75
                        sm:h-8
                        sm:w-8
                      "
                    >
                      <Star
                        size={14}
                        className="fill-[#B98A3C] text-[#B98A3C]"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-semibold text-[#3C3430] sm:text-xs">
                        4.9 Rating
                      </div>

                      <div className="text-[8px] text-[#81756F] sm:text-[9px]">
                        280+ Reviews
                      </div>
                    </div>
                  </div>

                  {/* Brides */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-l
                      border-[#8D817A]/20
                      px-4
                      sm:gap-3
                      sm:px-7
                    "
                  >
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D8CBC4]
                        bg-white/75
                        sm:h-8
                        sm:w-8
                      "
                    >
                      <Heart
                        size={14}
                        className="text-[#A85C72]"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-semibold text-[#3C3430] sm:text-xs">
                        500+ Brides
                      </div>

                      <div className="text-[8px] text-[#81756F] sm:text-[9px]">
                        Happily Styled
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-l
                      border-[#8D817A]/20
                      pl-4
                      sm:gap-3
                      sm:pl-7
                    "
                  >
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D8CBC4]
                        bg-white/75
                        sm:h-8
                        sm:w-8
                      "
                    >
                      <Award
                        size={14}
                        className="text-[#A85C72]"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] font-semibold text-[#3C3430] sm:text-xs">
                        5+ Years
                      </div>

                      <div className="text-[8px] text-[#81756F] sm:text-[9px]">
                        Master Artist
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FLOATING BADGES
            Only real large desktop.
        ====================================================== */}

        {/* Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute right-8 top-[15%] z-20 hidden 2xl:block"
        >
          <div
            className="
              rounded-2xl
              border
              border-white/60
              bg-white/65
              px-5
              py-4
              shadow-xl
              backdrop-blur-md
            "
          >
            <div className="text-[9px] uppercase tracking-[0.18em] text-[#8D5366]">
              100% Customized
            </div>

            <div className="mt-1 text-sm font-medium text-[#3C3430]">
              Personalized Skin Prep
            </div>
          </div>
        </motion.div>

        {/* Middle Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-8 top-[47%] z-20 hidden 2xl:block"
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/60
              bg-white/65
              px-5
              py-3
              shadow-xl
              backdrop-blur-md
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#A85C72]
                text-white
              "
            >
              <Star size={14} fill="currentColor" />
            </div>

            <div>
              <div className="text-[9px] uppercase tracking-[0.15em] text-[#8D5366]">
                Top Rated
              </div>

              <div className="text-sm font-medium text-[#3C3430]">
                Bridal Studio
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute bottom-[10%] right-8 z-20 hidden 2xl:block"
        >
          <div
            className="
              max-w-[260px]
              rounded-2xl
              border
              border-white/60
              bg-white/65
              px-5
              py-4
              shadow-xl
              backdrop-blur-md
            "
          >
            <div className="text-[9px] uppercase tracking-[0.15em] text-[#8D5366]">
              Signature Couture Bridal
            </div>

            <div className="mt-1 text-sm font-medium leading-relaxed text-[#3C3430]">
              Customized HD Airbrush & Dupatta Setting
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}