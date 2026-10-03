import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, ChevronRight } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();

  /* =========================================
     Scroll + Active Section
  ========================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      if (location.pathname !== '/') return;

      const sections = [
        'hero',
        'about',
        'bridal',
        'packages',
        'classes',
        'portfolio',
        'location',
      ];

      const scrollPosition = window.scrollY + 130;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  /* =========================================
     Reliable Section Navigation (User Action Only)
  ========================================= */
  const lastScrolledKeyRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== '/') return;

    // Only scroll if explicitly requested via in-app user navigation state
    // NEVER auto-scroll from URL hash on initial page load / link open
    const targetId = location.state?.scrollTo;

    if (!targetId) return;

    const scrollKey = `${location.key || 'init'}_${targetId}`;
    if (lastScrolledKeyRef.current === scrollKey) return;
    lastScrolledKeyRef.current = scrollKey;

    let attempts = 0;
    let cancelled = false;

    const scrollToTarget = () => {
      if (cancelled) return;

      const target =
        document.getElementById(targetId) ||
        (targetId === 'contact' ? document.getElementById('location') : null);

      if (target) {
        const navOffset = 70;

        const offsetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });

        // Clean up navigation state completely WITHOUT setting hash in URL
        // Use native history replacement so React Router does not fire a REPLACE navigation
        // which triggers ScrollToTop and resets scroll to 0 (Hero).
        try {
          window.history.replaceState(null, '', '/');
        } catch {
          // ignore
        }

        // Secondary subtle alignment after page entrance animation completes
        const settleTimer = setTimeout(() => {
          if (cancelled) return;
          const updatedTarget =
            document.getElementById(targetId) ||
            (targetId === 'contact' ? document.getElementById('location') : null);
          if (updatedTarget) {
            const currentOffset = updatedTarget.getBoundingClientRect().top - navOffset;
            if (Math.abs(currentOffset) > 20) {
              window.scrollBy({
                top: currentOffset,
                behavior: 'smooth',
              });
            }
          }
        }, 400);

        return () => clearTimeout(settleTimer);
      }

      // Wait until homepage sections are rendered (up to ~1.5s for Framer Motion exit+entry)
      attempts++;

      if (attempts < 80) {
        requestAnimationFrame(scrollToTarget);
      }
    };

    // Start after the route has rendered
    const timer = setTimeout(() => {
      requestAnimationFrame(scrollToTarget);
    }, 50);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [
    location.pathname,
    location.key,
    location.state,
  ]);

  /* =========================================
     Navigation Links
  ========================================= */
  const navLinks = [
    {
      name: 'Home',
      type: 'scroll',
      hash: '#hero',
      route: '/',
    },
    {
      name: 'About',
      type: 'scroll',
      hash: '#about',
      route: '/',
    },
    {
      name: 'Services',
      type: 'page',
      route: '/services',
    },
    {
      name: 'Gallery',
      type: 'page',
      route: '/portfolio',
    },
    {
      name: 'Courses',
      type: 'page',
      route: '/courses',
    },
    {
      name: 'Contact',
      type: 'scroll',
      hash: '#location',
      route: '/',
    },
  ];

  /* =========================================
     Handle Navigation
  ========================================= */
  const handleNavAction = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    /* Separate Pages */
    if (link.type === 'page') {
      navigate(link.route);
      return;
    }

    /* Home */
    if (link.hash === '#hero') {
      if (location.pathname === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        navigate('/');
      }

      return;
    }

    /* Already on Homepage */
    if (location.pathname === '/') {
      const targetId = link.hash.replace('#', '');
      const targetEl =
        document.getElementById(targetId) ||
        (targetId === 'contact' ? document.getElementById('location') : null);

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

      return;
    }

    /* =========================================
       From Portfolio / Packages / Courses
       Navigate DIRECTLY to required section
    ========================================= */
    navigate('/', {
      state: {
        scrollTo: link.hash.replace('#', ''),
      },
    });
  };

  /* =========================================
     Active Link
  ========================================= */
  const isLinkActive = (link) => {
    if (link.type === 'page') {
      return location.pathname === link.route;
    }

    if (location.pathname !== '/') {
      return false;
    }

    if (
      link.hash === '#hero' &&
      (activeSection === 'hero' || window.scrollY < 100)
    ) {
      return true;
    }

    if (
      link.hash === '#about' &&
      activeSection === 'about'
    ) {
      return true;
    }

    if (
      link.hash === '#bridal' &&
      activeSection === 'bridal'
    ) {
      return true;
    }

    if (
      link.hash === '#location' &&
      activeSection === 'location'
    ) {
      return true;
    }

    return false;
  };

  return (
    <>
      {/* =========================================
          FIXED NAVBAR
      ========================================= */}
      <header
        className={`fixed left-0 right-0 top-0 z-[100] w-full border-b border-[#ECE6DE] bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled
          ? 'py-2 shadow-md'
          : 'py-2.5 shadow-xs sm:py-3'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Brand */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();

                setMobileMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }
            }}
            className="group flex shrink-0 flex-col text-left"
          >
            <span className="whitespace-nowrap font-serif text-lg font-semibold leading-tight tracking-wider text-[#1F1917] transition-colors group-hover:text-[#A25345] sm:text-xl">
              {ARTIST_INFO.name}
            </span>

            <span className="mt-0.5 whitespace-nowrap font-sans text-[7.5px] font-bold uppercase tracking-[0.24em] text-[#C5A059] sm:text-[8.5px]">
              {ARTIST_INFO.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex md:gap-3 lg:gap-6">
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              return (
                <a
                  key={link.name}
                  href={link.route}
                  onClick={(e) =>
                    handleNavAction(e, link)
                  }
                  className={`relative cursor-pointer py-1 text-xs tracking-wide transition-colors lg:text-[13px] ${active
                    ? 'font-semibold text-[#1F1917]'
                    : 'font-medium text-[#655E59] hover:text-[#1F1917]'
                    }`}
                >
                  <span>{link.name}</span>

                  {active && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#A25345]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 md:flex">

            {/* 1. Liquid Glass Call Now Button First */}
            <a
              href={`tel:${ARTIST_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-[#1F1917]/15 hover:border-[#A25345]/50 text-[#1F1917] hover:text-[#A25345] px-3.5 py-1.5 text-xs font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 active:scale-95 group"
            >
              <Phone className="h-3.5 w-3.5 text-[#A25345] transition-transform group-hover:scale-110" />
              <span>Call Now</span>
            </a>

            {/* 2. WhatsApp Button Second */}
            <button
              onClick={() =>
                openWhatsApp('Navbar WhatsApp Booking')
              }
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-1.5 text-xs font-semibold shadow-xs shadow-[#25D366]/25 transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </button>

          </div>

          {/* Mobile Actions: Compact 50% reduced width, Call first then WhatsApp */}
          <div className="flex items-center gap-1.5 md:hidden shrink-0">

            {/* 1. Liquid Glass Call Button */}
            <a
              href={`tel:${ARTIST_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-[#1F1917]/15 hover:border-[#A25345]/50 text-[#1F1917] hover:text-[#A25345] px-2.5 py-1 text-[10.5px] font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_4px_rgba(0,0,0,0.04)] whitespace-nowrap leading-none transition-all active:scale-95"
            >
              <Phone className="h-2.5 w-2.5 text-[#A25345] shrink-0" />
              <span>Call Now</span>
            </a>

            {/* 2. WhatsApp Button */}
            <button
              onClick={() =>
                openWhatsApp('Mobile Navbar Booking')
              }
              className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-gradient-to-b from-[#2CDD6F] to-[#1EBD58] border border-[#1BA84E] text-white px-2.5 py-1 text-[10.5px] font-semibold shadow-[0_2px_6px_rgba(37,211,102,0.3),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.12)] whitespace-nowrap leading-none transition-all active:scale-95"
            >
              <MessageCircle className="h-2.5 w-2.5 fill-white shrink-0" />
              <span>WhatsApp</span>
            </button>

            {/* 3. Hamburger Menu */}
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="flex h-8.5 w-8.5 cursor-pointer items-center justify-center text-[#1F1917] hover:text-[#A25345] transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

          </div>
        </div>

        {/* =========================================
            MOBILE MENU (3D Floating Card)
        ========================================= */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-[58px] z-40 bg-black/35 backdrop-blur-xs md:hidden"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            />

            <div className="relative z-50 mx-3 mt-2 max-h-[calc(100vh-80px)] overflow-y-auto rounded-2xl border border-[#E8DFD8] bg-gradient-to-b from-[#FFF9F6] via-[#FAF5F0] to-[#F5EDE6] p-4 shadow-[0_20px_45px_-12px_rgba(162,83,69,0.18),0_8px_18px_-4px_rgba(0,0,0,0.07),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.02)] backdrop-blur-xl md:hidden">

              <div className="flex flex-col gap-2">

                {navLinks.map((link) => {
                  const active = isLinkActive(link);

                  return (
                    <a
                      key={link.name}
                      href={link.route}
                      onClick={(e) =>
                        handleNavAction(e, link)
                      }
                      className={`group flex min-h-[46px] cursor-pointer items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-all duration-200 ${active
                        ? 'bg-gradient-to-r from-[#A25345] to-[#8E4437] font-semibold text-white shadow-[0_4px_12px_rgba(162,83,69,0.32),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_0_rgba(0,0,0,0.15)]'
                        : 'border border-[#ECE4DC]/80 bg-white/75 font-medium text-[#1F1917] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.03)] hover:border-[#D9CBC0] hover:bg-white active:translate-y-[1px] active:shadow-xs'
                        }`}
                    >
                      <span className="tracking-wide">{link.name}</span>

                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 ${active
                          ? 'text-white'
                          : 'text-[#A25345]/50 group-hover:translate-x-0.5 group-hover:text-[#A25345]'
                          }`}
                      />
                    </a>
                  );
                })}

                <div className="mt-2.5 flex flex-col gap-2.5 border-t border-[#E8DDD4] pt-3.5">

                  {/* Call & WhatsApp Row: 3D Buttons */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* 3D Pearl Call Button */}
                    <a
                      href={`tel:${ARTIST_INFO.phone.replace(/\s+/g, '')}`}
                      className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#E2D4C8] bg-gradient-to-b from-white via-[#FCFAF8] to-[#F3EBE4] text-xs font-semibold text-[#1F1917] shadow-[0_3px_8px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.05)] transition-all hover:text-[#A25345] active:translate-y-[1px] active:shadow-xs"
                    >
                      <Phone className="h-4 w-4 text-[#A25345]" />
                      <span>Call Now</span>
                    </a>

                    {/* 3D Emerald WhatsApp Button */}
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openWhatsApp('Mobile Menu Booking');
                      }}
                      className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#1BA84E] bg-gradient-to-b from-[#2CDD6F] to-[#1EBD58] text-xs font-semibold text-white shadow-[0_4px_12px_rgba(37,211,102,0.35),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.15)] transition-all active:translate-y-[1px] active:shadow-xs"
                    >
                      <MessageCircle className="h-4 w-4 fill-white" />
                      <span>WhatsApp Us</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Fixed Navbar Spacer */}
      <div className="h-[58px] sm:h-[64px]" />
    </>
  );
}