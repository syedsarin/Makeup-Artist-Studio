import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { BRIDAL_FEATURE } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function BridalFeature() {
  const handleExplorePackages = (e) => {
    e.preventDefault();
    document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bridal" className="section bg-[#FAF8F5]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Image Side */}
          <motion.div
            className="lg:col-span-6 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-[#F4EFEA] rounded-[2rem] transform -rotate-2 pointer-events-none hidden sm:block" />
              <div className="relative rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl border border-[#E8E2DA] aspect-[4/3] sm:aspect-[4/5] group">
                <img
                  src={BRIDAL_FEATURE.image}
                  alt="Bridal Makeup Artistry"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#9B4B5A] block">Signature Finish</span>
                      <h4 className="font-serif text-lg font-semibold text-[#2C221E]">Long-Wear & Sweat-Proof HD Glow</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FAF5EB] text-[#C5A059] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="lg:col-span-6 text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow self-start"><span>{BRIDAL_FEATURE.eyebrow}</span></div>

            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C221E] mb-6">
              {BRIDAL_FEATURE.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#6E655F] mb-8 leading-relaxed">
              {BRIDAL_FEATURE.description}
            </p>

            <div className="space-y-4 mb-8">
              {BRIDAL_FEATURE.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E8E2DA] hover:border-[#C5A059]/50 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-[#F7EFF1] text-[#9B4B5A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#2C221E] mb-1">{highlight.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6E655F] leading-normal">{highlight.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => openWhatsApp('Bridal Makeup')}
                className="btn btn-primary btn-lg group"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </button>

              <a
                href="#packages"
                onClick={handleExplorePackages}
                className="btn btn-secondary btn-lg group"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
