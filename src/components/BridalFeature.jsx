import React from 'react';
import { Sparkles, Crown, Heart, Camera, Check, MessageCircle, Gem, Palette } from 'lucide-react';
import { BRIDAL_FEATURE } from '../data/bridalData';
import { openWhatsApp } from '../App';

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
    image: '../public/B11.png',
  },
  {
    label: 'Custom',
    count: '200+',
    desc: 'Bespoke Themes',
    icon: Palette,
    image: '../public/B8.png',
  },
];

const SERVICES = [
  { icon: Sparkles, title: 'HD & Airbrush', desc: 'Flawless, featherlight 4K camera finish.' },
  { icon: Crown, title: 'Hair Styling', desc: 'Custom bridal hairdos & dupatta setting.' },
  { icon: Heart, title: 'Draping', desc: 'Saree & lehenga pleating with secure pinning.' },
  { icon: Camera, title: 'Photo-Ready', desc: 'Flash-safe glam built to last 16+ hours.' },
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
  const image =
    BRIDAL_FEATURE?.image ||
    'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80';
  const price = BRIDAL_FEATURE?.startingPrice || '₹15,000';

  const sendWhatsApp = () => {
    const msg = 'Hi, I want to check bridal makeup availability and packages.';
    typeof openWhatsApp === 'function'
      ? openWhatsApp(msg)
      : window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="bridal" className="bg-[#FAF8F5] py-10 sm:py-12 border-b border-[#ECE6DE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* 0. CATEGORY STATS CARDS WITH IMAGES (Top, non-clickable) */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CATEGORY_STATS.map(({ label, count, desc, icon: Icon, image }) => (
            <div
              key={label}
              className="relative h-44 sm:h-48 overflow-hidden rounded-2xl border border-[#ECE6DE] bg-neutral-900 text-left shadow-xs flex flex-col justify-between p-3.5 sm:p-4"
            >
              {/* Background Image & Gradient */}
              <img
                src={image}
                alt={label}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

              {/* Top Row: Label & Icon */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD6E7]">
                  {label}
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-xs text-white">
                  <Icon className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Bottom: Count & Description */}
              <div className="relative z-10">
                <p className="font-serif text-2xl font-bold text-white leading-tight">
                  {count}
                </p>
                <p className="text-[11px] text-white/80">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 1. PHOTO & PRICING CARD */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-64 sm:h-72 overflow-hidden rounded-2xl border border-[#ECE6DE] bg-white">
            <img src={image} alt="Bridal Makeup" className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#ECE6DE] bg-white p-5 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B4B5A]">Bridal Package</span>
              <p className="mt-1 font-serif text-3xl font-bold text-[#1F1917]">{price}</p>
              <p className="mt-1 text-xs text-[#655E59]">Complete bridal makeover for your wedding ceremony.</p>
            </div>

            <button
              onClick={sendWhatsApp}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#A25345] py-3 text-xs font-semibold text-white transition hover:bg-[#8D4437]"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              Check Availability
            </button>
          </div>
        </div>

        {/* 2. SERVICES CARDS */}
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-[#ECE6DE] bg-white p-3.5 text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF5EB] text-[#C5A059]">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="mt-2 text-xs font-semibold text-[#1F1917]">{title}</h4>
                <p className="mt-1 text-[11px] text-[#655E59]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. WHAT'S INCLUDED CARDS */}
        <div className="mt-8">
          <h3 className="mb-3 text-left font-serif text-lg font-semibold text-[#1F1917]">
            What's Included
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {INCLUDES.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-[#ECE6DE] bg-white p-2.5 text-left">
                <Check className="h-3.5 w-3.5 shrink-0 text-[#C5A059]" />
                <span className="text-xs font-medium text-[#1F1917]">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}