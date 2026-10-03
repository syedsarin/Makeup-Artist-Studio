import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Crown, Heart, Check, Gem, Palette, ArrowRight } from 'lucide-react';

const CATEGORY_STATS = [
  {
    label: 'Bride',
    count: '500+',
    desc: 'Royal & Couture',
    icon: Crown,
    image: "/B3.png",
  },
  {
    label: 'Engagement',
    count: '350+',
    desc: 'Soft Romantic Glam',
    icon: Heart,
    image: "/B14.png",
  },
  {
    label: 'Party',
    count: '800+',
    desc: 'Chic & Editorial',
    icon: Gem,
    image: "/B11.png",
  },
  {
    label: 'Custom',
    count: '200+',
    desc: 'Bespoke Themes',
    icon: Palette,
    image: "/B8.png",
  },
];


const INCLUDES = [
  'Skin prep & hydration',
  'HD/Airbrush base',
  'Signature eye glam & lashes',
  'Bridal hair styling',
  'Dupatta & saree draping',
  'Jewelry placement',
  'Sweat-proof setting',
  'Final touch-up kit',
];

export default function BridalFeature() {
  return (
    <section id="bridal" className="bg-white py-10 sm:py-12 border-b border-[#ECE6DE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Centered Section Badge: WHAT WE OFFER */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#A25345]/20 text-[#A25345] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#A25345]" />
            <span>WHAT WE OFFER</span>
          </div>
        </div>

        {/* Section Header: Left Content & Right Button */}
        <div className="mb-4 sm:mb-8 flex items-center justify-between gap-3">
          <div className="text-left">
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-[#1F1917]">
              Our Signature Services
            </h2>
            <p className="text-xs sm:text-sm text-[#655E59] mt-1 max-w-xl hidden sm:block">
              Luxury bridal, engagement, and occasion artistry tailored to your style.
            </p>
          </div>

          <Link
            to="/services"
            className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#A25345] hover:bg-[#8D4437] text-white text-[11px] sm:text-xs font-semibold shadow-md shadow-[#A25345]/25 transition-all duration-200 normal-case tracking-normal active:scale-98"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

        {/* Mobile Subtitle */}
        <p className="text-xs text-[#655E59] -mt-2 mb-5 sm:hidden text-left">
          Luxury bridal, engagement, and occasion artistry tailored to your style.
        </p>

        {/* 0. CATEGORY STATS CARDS WITH IMAGES (2-Column Grid on Mobile, 4-Column on Desktop) */}
        <div className="mb-8 grid grid-cols-2 gap-2.5 sm:gap-4 sm:grid-cols-4">
          {CATEGORY_STATS.map(({ label, count, desc, icon: Icon, image }) => (
            <div
              key={label}
              className="group relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-[#ECE6DE] bg-[#FAF8F5] text-left shadow-xs flex flex-col justify-between p-3 sm:p-4 hover:shadow-md transition-all duration-300"
            >
              {/* Crisp, Vibrant Bridal Photo */}
              <img
                src={image}
                alt={label}
                className="absolute inset-0 h-full w-full object-cover object-top filter brightness-105 contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="eager"
              />

              {/* Soft Bottom-Only Gradient Scrim (Leaves face & makeup bright, protects text readability) */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

              {/* Top Row: Floating Frosted Badge & Mini Icon */}
              <div className="relative z-10 flex items-center justify-between gap-1">
                <span className="px-2 py-0.5 rounded-md bg-black/45 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                  {label}
                </span>
                <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#E5D5BC] shrink-0 shadow-xs">
                  <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>
              </div>

              {/* Bottom: Count & Description with Drop Shadow for 100% Crisp Legibility */}
              <div className="relative z-10">
                <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  {count}
                </p>
                <p className="text-[10px] sm:text-[11px] text-white/95 font-medium leading-tight line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* 3. WHAT'S INCLUDED CARDS (Two lines in mobile view: 1st row 4, 2nd row 4) */}
        <div className="mt-8">
          <h3 className="mb-3 text-left font-serif text-lg font-semibold text-[#1F1917]">
            What's Included
          </h3>
          <div className="grid grid-cols-4 gap-1 sm:gap-2">
            {INCLUDES.map((item) => (
              <div key={item} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2 rounded-lg sm:rounded-xl border border-[#ECE6DE] bg-white p-1.5 sm:p-2.5">
                <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-[#C5A059]" />
                <span className="text-[8px] sm:text-xs font-medium text-[#1F1917] leading-tight line-clamp-2">{item}</span>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}