import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();

  // Track active section on Home page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'bridal', 'home-portfolio', 'home-packages', 'home-courses', 'location'];
        const scrollPosition = window.scrollY + 130;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle hash scrolling after navigating from another route
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          const navOffset = 70;
          const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', type: 'scroll', hash: '#hero', route: '/' },
    { name: 'About', type: 'scroll', hash: '#about', route: '/#about' },
    { name: 'Services', type: 'scroll', hash: '#bridal', route: '/#bridal' },
    { name: 'Gallery', type: 'page', route: '/portfolio' },
    { name: 'Packages', type: 'page', route: '/packages' },
    { name: 'Courses', type: 'page', route: '/courses' },
    { name: 'Contact', type: 'scroll', hash: '#location', route: '/#location' },
  ];

  const handleNavAction = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.type === 'page') {
      navigate(link.route);
      return;
    }

    // It's a scroll link
    if (location.pathname === '/') {
      if (link.hash === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetEl = document.querySelector(link.hash);
      if (targetEl) {
        const navOffset = 70;
        const offsetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      navigate(link.route);
    }
  };

  const isLinkActive = (link) => {
    if (link.type === 'page') {
      return location.pathname === link.route;
    }
    if (location.pathname === '/') {
      if (link.hash === '#hero' && (activeSection === 'hero' || window.scrollY < 100)) return true;
      if (link.hash === '#about' && activeSection === 'about') return true;
      if (link.hash === '#bridal' && activeSection === 'bridal') return true;
      if (link.hash === '#location' && activeSection === 'location') return true;
    }
    return false;
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#ECE6DE] transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-xs' : 'py-2.5 sm:py-3 shadow-xs'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex flex-col text-left group shrink-0"
        >
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-wider text-[#1F1917] group-hover:text-[#A25345] transition-colors whitespace-nowrap leading-tight">
            {ARTIST_INFO.name}
          </span>
          <span className="text-[7.5px] sm:text-[8.5px] font-sans tracking-[0.24em] text-[#C5A059] uppercase font-bold whitespace-nowrap mt-0.5">
            {ARTIST_INFO.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center md:gap-3 lg:gap-6">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <a
                key={link.name}
                href={link.route}
                onClick={(e) => handleNavAction(e, link)}
                className={`text-xs lg:text-[13px] tracking-wide transition-colors relative py-1 cursor-pointer ${
                  active
                    ? 'text-[#1F1917] font-semibold'
                    : 'text-[#655E59] font-medium hover:text-[#1F1917]'
                }`}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A25345] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/#location"
            onClick={(e) => handleNavAction(e, { type: 'scroll', hash: '#location', route: '/#location' })}
            className="btn btn-secondary btn-sm group flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#A25345]" />
            <span>Enquiry</span>
          </a>
          <button
            onClick={() => openWhatsApp('Navbar WhatsApp Booking')}
            className="btn btn-primary btn-sm group flex items-center gap-1.5 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => openWhatsApp('Mobile Navbar Booking')}
            className="btn btn-primary text-[11px] px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-3 h-3 fill-white" />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#1F1917] hover:text-[#A25345] rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[54px] bg-black/40 backdrop-blur-xs z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden relative z-50 bg-white/98 backdrop-blur-xl border-b border-[#ECE6DE] shadow-xl px-5 py-5 max-h-[calc(100vh-60px)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <a
                    key={link.name}
                    href={link.route}
                    onClick={(e) => handleNavAction(e, link)}
                    className={`text-sm font-medium py-3 px-3 rounded-xl flex items-center transition-colors min-h-[44px] cursor-pointer ${
                      active
                        ? 'text-[#1F1917] font-semibold bg-[#FAF5EB] border-l-3 border-[#A25345]'
                        : 'text-[#1F1917] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[#ECE6DE] flex flex-col gap-2.5">
                <a
                  href="/#location"
                  onClick={(e) => handleNavAction(e, { type: 'scroll', hash: '#location', route: '/#location' })}
                  className="btn btn-secondary w-full justify-center min-h-[42px] text-xs font-semibold cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#A25345]" />
                  <span>Book Consultation &amp; Directions</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWhatsApp('Mobile Menu Booking');
                  }}
                  className="btn btn-primary w-full justify-center min-h-[42px] text-xs font-semibold cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
