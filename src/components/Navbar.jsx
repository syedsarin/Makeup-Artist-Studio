import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'bridal', 'services', 'portfolio', 'packages', 'classes', 'about', 'location'];
      const scrollPosition = window.scrollY + 120;

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Bridal', href: '#bridal', id: 'bridal' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Courses', href: '#classes', id: 'classes' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const navOffset = 70;
      const offsetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E8E2DA]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex flex-col text-left group"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#2C221E] group-hover:text-[#9B4B5A] transition-colors">
            {ARTIST_INFO.name}
          </span>
          <span className="text-[10px] font-sans tracking-[0.25em] text-[#C5A059] uppercase font-bold">
            {ARTIST_INFO.title}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-[#9B4B5A] font-semibold'
                  : 'text-[#6E655F] hover:text-[#2C221E]'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9B4B5A] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => openWhatsApp()}
            className="btn btn-primary btn-sm group"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => openWhatsApp()}
            className="btn btn-primary text-xs px-3 py-2 rounded-full flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C221E] hover:text-[#9B4B5A]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-[#E8E2DA] shadow-xl px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-medium py-2 border-b border-[#F4EFEA] ${
                  activeSection === link.id ? 'text-[#9B4B5A] font-semibold' : 'text-[#2C221E]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}
                className="btn btn-primary w-full justify-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
