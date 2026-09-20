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
    <footer className="bg-[#FFF7F8] text-[#2B2422] border-t border-[#E8CDD2]/60 pt-6 sm:pt-8 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-6 pb-5 sm:gap-7 md:grid-cols-12 md:gap-8 border-b border-[#E8CDD2]/60 text-left">

          {/* Brand Col */}
          <div className="md:col-span-5">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="inline-block mb-2"
            >
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wider text-[#2B2422]">
                {ARTIST_INFO.name}
              </span>

              <span className="block text-[9px] font-sans tracking-[0.25em] text-[#A25345] uppercase font-bold mt-0.5">
                {ARTIST_INFO.title}
              </span>
            </a>

            <p className="text-[11px] sm:text-xs text-[#766B68] max-w-sm font-normal leading-relaxed mb-3">
              Creating timeless, bespoke bridal looks that accentuate your authentic grace. Specialized in HD Airbrush makeup, hair extensions, and couture dupatta draping.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={ARTIST_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E4C8CE] bg-white/70 text-[#6F555A] transition-colors hover:border-[#A25345] hover:text-[#A25345]"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>

              <a
                href={ARTIST_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E4C8CE] bg-white/70 text-[#6F555A] transition-colors hover:border-[#A25345] hover:text-[#A25345]"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>

              <a
                href={ARTIST_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E4C8CE] bg-white/70 text-[#6F555A] transition-colors hover:border-[#A25345] hover:text-[#A25345]"
                aria-label="Youtube"
              >
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm sm:text-base font-semibold text-[#7D4F57] mb-2">
              Quick Navigation
            </h4>

            <ul className="space-y-1 text-[11px] sm:text-xs text-[#766B68]">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#bridal"
                  onClick={(e) => handleNavClick(e, '#bridal')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Bridal Makeup
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Occasion Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Bridal Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleNavClick(e, '#packages')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Pricing & Packages
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  About The Artist
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  onClick={(e) => handleNavClick(e, '#location')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Studio Location
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm sm:text-base font-semibold text-[#7D4F57] mb-2">
              Signature Services
            </h4>

            <ul className="space-y-1 text-[11px] sm:text-xs text-[#766B68]">
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
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-[#958589]">
          <p>
            © {currentYear} {ARTIST_INFO.name} Bridal Artistry. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1">
            Crafted with
            <Heart className="h-3 w-3 text-[#C77B8A] fill-current" />
            for Luxury Brides
          </p>
        </div>

      </div>
    </footer>
  );
}