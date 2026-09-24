import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ARTIST_INFO } from '../data/bridalData';
import { Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    // Separate page routes
    if (href === '/portfolio') {
      navigate('/portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/packages') {
      navigate('/packages');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/courses') {
      navigate('/courses');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Homepage sections
    if (href.startsWith('#')) {
      const sectionId = href.replace('#', '');

      if (sectionId === 'hero') {
        if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          navigate('/');
        }
        return;
      }

      if (location.pathname === '/') {
        const targetEl =
          document.getElementById(sectionId) ||
          (sectionId === 'contact' ? document.getElementById('location') : null);

        if (targetEl) {
          const navOffset = 70;

          const offsetPosition =
            targetEl.getBoundingClientRect().top +
            window.pageYOffset -
            navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } else {
        navigate('/', {
          state: {
            scrollTo: sectionId,
          },
        });
      }

      return;
    }

    // Fallback
    navigate(href);
  };

  return (
    <footer className="border-t border-[#E8CDD2]/60 bg-[#FFF7F8] pt-6 text-[#2B2422] sm:pt-8">
      <div className="container mx-auto px-4 pb-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-6 border-b border-[#E8CDD2]/60 pb-5 text-left sm:gap-7 md:grid-cols-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="mb-2 inline-block"
            >
              <span className="font-serif text-lg font-semibold tracking-wider text-[#2B2422] sm:text-xl">
                {ARTIST_INFO.name}
              </span>

              <span className="mt-0.5 block font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#A25345]">
                {ARTIST_INFO.title}
              </span>
            </a>

            <p className="mb-3 max-w-sm text-[11px] font-normal leading-relaxed text-[#766B68] sm:text-xs">
              Creating timeless, bespoke bridal looks that accentuate your
              authentic grace. Specialized in HD Airbrush makeup, hair
              extensions, and couture dupatta draping.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={ARTIST_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E4C8CE] bg-white/70 text-[#6F555A] transition-colors hover:border-[#A25345] hover:text-[#A25345]"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>

              <a
                href={ARTIST_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E4C8CE] bg-white/70 text-[#6F555A] transition-colors hover:border-[#A25345] hover:text-[#A25345]"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>

              <a
                href={ARTIST_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E4C8CE] bg-white/70 text-[#6F555A] transition-colors hover:border-[#A25345] hover:text-[#A25345]"
              >
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="mb-2 font-serif text-sm font-semibold text-[#7D4F57] sm:text-base">
              Quick Navigation
            </h4>

            <ul className="space-y-1 text-[11px] text-[#766B68] sm:text-xs">

              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '#bridal')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Bridal Makeup
                </a>
              </li>

              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '#bridal')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Occasion Services
                </a>
              </li>

              <li>
                <a
                  href="/portfolio"
                  onClick={(e) => handleNavClick(e, '/portfolio')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Bridal Portfolio
                </a>
              </li>

              <li>
                <a
                  href="/packages"
                  onClick={(e) => handleNavClick(e, '/packages')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Pricing & Packages
                </a>
              </li>

              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  About The Artist
                </a>
              </li>

              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '#location')}
                  className="inline-block py-0.5 transition-colors hover:text-[#A25345]"
                >
                  Studio Location
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="mb-2 font-serif text-sm font-semibold text-[#7D4F57] sm:text-base">
              Signature Services
            </h4>

            <ul className="space-y-1 text-[11px] text-[#766B68] sm:text-xs">
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
        <div className="flex flex-col items-center justify-between gap-2 pt-4 text-[10px] text-[#958589] sm:flex-row">
          <p>
            © {currentYear} {ARTIST_INFO.name} Bridal Artistry. All Rights
            Reserved.
          </p>

          <p className="flex items-center gap-1">
            Crafted with
            <Heart className="h-3 w-3 fill-current text-[#C77B8A]" />
            for Luxury Brides
          </p>
        </div>

      </div>
    </footer>
  );
}