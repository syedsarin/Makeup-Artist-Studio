import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Star, Heart, Award } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function Hero() {
  const handlePortfolioClick = (e) => {
    e.preventDefault();
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-[100px] pb-12 lg:pt-[130px] lg:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F7EFF1] rounded-full blur-3xl opacity-60 pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#FAF5EB] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            className="lg:col-span-6 flex flex-col text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow self-start">
              <span>{ARTIST_INFO.title}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2C221E] font-medium leading-[1.12] mb-6 tracking-tight">
              Your Dream Bridal Look, <br />
              <span className="italic text-[#9B4B5A] font-normal">Beautifully Yours.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6E655F] mb-8 max-w-xl font-normal leading-relaxed">
              {ARTIST_INFO.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => openWhatsApp()}
                className="btn btn-primary btn-lg"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </button>

              <a
                href="#portfolio"
                onClick={handlePortfolioClick}
                className="btn btn-secondary btn-lg group"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E8E2DA] flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Star className="w-4 h-4 fill-[#C5A059]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2C221E]">★ 4.9 Rating</div>
                  <div className="text-[11px] text-[#9A918A]">280+ Reviews</div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-[#E8E2DA] hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F7EFF1] border border-[#9B4B5A]/30 flex items-center justify-center text-[#9B4B5A]">
                  <Heart className="w-4 h-4 fill-[#9B4B5A]/20" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2C221E]">500+ Brides</div>
                  <div className="text-[11px] text-[#9A918A]">Happily Styled</div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-[#E8E2DA] hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2C221E]">5+ Years</div>
                  <div className="text-[11px] text-[#9A918A]">Master Artist</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#C5A059]/30 transform rotate-1 pointer-events-none hidden sm:block" />

              <div className="relative rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85"
                  alt="Ayesha Malik Luxury Bridal Look"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#E5D5BC] mb-1">
                    Signature Couture Bridal
                  </div>
                  <p className="text-xs text-white/90 font-light">Customized HD Airbrush & Dupatta Setting</p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md border border-[#E8E2DA] p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#9B4B5A] text-white flex items-center justify-center text-lg font-serif">✨</div>
                <div>
                  <div className="text-xs font-bold text-[#2C221E]">100% Customized</div>
                  <div className="text-[10px] text-[#6E655F]">Personalized Skin Prep</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md border border-[#E8E2DA] p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="flex text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#2C221E]">Top Rated Bridal Studio</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
