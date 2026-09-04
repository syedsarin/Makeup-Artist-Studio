import React from 'react';
import { ARTIST_INFO } from '../data/bridalData';
import { Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1F1917] text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="inline-block mb-4">
                <span className="font-serif text-2xl font-semibold tracking-wider text-white">
                  {ARTIST_INFO.name}
                </span>
                <span className="block text-[10px] font-sans tracking-[0.25em] text-[#C5A059] uppercase font-bold mt-0.5">
                  {ARTIST_INFO.title}
                </span>
              </a>

              <p className="text-xs sm:text-sm text-[#D1C8C2] max-w-sm font-normal leading-relaxed mb-6">
                Creating timeless, bespoke bridal looks that accentuate your authentic grace. Specialized in HD Airbrush makeup, hair extensions, and couture dupatta draping.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={ARTIST_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:border-[#C5A059] text-white hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ARTIST_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:border-[#C5A059] text-white hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ARTIST_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:border-[#C5A059] text-white hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-[#E5D5BC] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C8C2]">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#bridal" onClick={(e) => handleNavClick(e, '#bridal')} className="hover:text-white transition-colors">Bridal Makeup</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Occasion Services</a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-white transition-colors">Bridal Portfolio</a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="hover:text-white transition-colors">Pricing & Packages</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">About The Artist</a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-white transition-colors">Studio Location</a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg font-semibold text-[#E5D5BC] mb-4">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C8C2]">
              <li>• HD & Airbrush Bridal Makeover</li>
              <li>• Pre-Wedding Mehendi & Sangeet Looks</li>
              <li>• Soft Glam Engagement & Sagan Styling</li>
              <li>• Reception & Evening Party Glam</li>
              <li>• Advanced Dupatta Draping & Hair Extensions</li>
              <li>• Pre-Bridal Skin Consultation & Facial Prep</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9A918A]">
          <p>© {currentYear} {ARTIST_INFO.name} Bridal Artistry. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#9B4B5A] fill-current" /> for Luxury Brides
          </p>
        </div>
      </div>
    </footer>
  );
}
