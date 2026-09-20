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
        'home-portfolio',
        'home-packages',
        'home-courses',
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
     Reliable Section Navigation
  ========================================= */
  useEffect(() => {
    if (location.pathname !== '/') return;

    const targetId =
      location.state?.scrollTo ||
      (location.hash
        ? location.hash.replace('#', '')
        : null);

    if (!targetId) return;

    let attempts = 0;
    let cancelled = false;

    const scrollToTarget = () => {
      if (cancelled) return;

      const target = document.getElementById(targetId);

      if (target) {
        const navOffset = 70;

        const offsetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Remove navigation state after successful scroll
        if (location.state?.scrollTo) {
          navigate(
            {
              pathname: '/',
              hash: `#${targetId}`,
            },
            {
              replace: true,
              state: {},
            }
          );
        }

        return;
      }

      // Wait until homepage sections are rendered
      attempts++;

      if (attempts < 30) {
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
    location.hash,
    location.state,
    navigate,
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
      route: '/#about',
    },
    {
      name: 'Services',
      type: 'scroll',
      hash: '#bridal',
      route: '/#bridal',
    },
    {
      name: 'Gallery',
      type: 'page',
      route: '/portfolio',
    },
    {
      name: 'Packages',
      type: 'page',
      route: '/packages',
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
      route: '/#location',
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
      const targetEl = document.getElementById(targetId);

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

            <a
              href="/#location"
              onClick={(e) =>
                handleNavAction(e, {
                  type: 'scroll',
                  hash: '#location',
                  route: '/#location',
                })
              }
              className="btn btn-secondary btn-sm group flex cursor-pointer items-center gap-1.5"
            >
              <Mail className="h-3.5 w-3.5 text-[#A25345]" />
              <span>Enquiry</span>
            </a>

            <button
              onClick={() =>
                openWhatsApp('Navbar WhatsApp Booking')
              }
              className="btn btn-primary btn-sm group flex cursor-pointer items-center gap-1.5"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </button>

          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">

            <button
              onClick={() =>
                openWhatsApp('Mobile Navbar Booking')
              }
              className="btn btn-primary flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] shadow-xs"
            >
              <MessageCircle className="h-3 w-3 fill-white" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-[#1F1917] transition-colors hover:bg-[#FAF8F5] hover:text-[#A25345]"
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
            MOBILE MENU
        ========================================= */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-[58px] z-40 bg-black/40 backdrop-blur-xs md:hidden"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            />

            <div className="relative z-50 max-h-[calc(100vh-58px)] overflow-y-auto border-b border-[#ECE6DE] bg-white/98 px-5 py-5 shadow-xl backdrop-blur-xl md:hidden">

              <div className="flex flex-col gap-1">

                {navLinks.map((link) => {
                  const active = isLinkActive(link);

                  return (
                    <a
                      key={link.name}
                      href={link.route}
                      onClick={(e) =>
                        handleNavAction(e, link)
                      }
                      className={`flex min-h-[44px] cursor-pointer items-center rounded-xl px-3 py-3 text-sm font-medium transition-colors ${active
                          ? 'border-l-3 border-[#A25345] bg-[#FAF5EB] font-semibold text-[#1F1917]'
                          : 'text-[#1F1917] hover:bg-[#FAF8F5]'
                        }`}
                    >
                      {link.name}
                    </a>
                  );
                })}

                <div className="mt-2 flex flex-col gap-2.5 border-t border-[#ECE6DE] pt-3">

                  {/* Contact */}
                  <a
                    href="/#location"
                    onClick={(e) =>
                      handleNavAction(e, {
                        type: 'scroll',
                        hash: '#location',
                        route: '/#location',
                      })
                    }
                    className="btn btn-secondary flex min-h-[42px] w-full cursor-pointer justify-center text-xs font-semibold"
                  >
                    <Mail className="h-4 w-4 text-[#A25345]" />
                    <span>
                      Book Consultation &amp; Directions
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openWhatsApp('Mobile Menu Booking');
                    }}
                    className="btn btn-primary flex min-h-[42px] w-full cursor-pointer justify-center text-xs font-semibold"
                  >
                    <MessageCircle className="h-4 w-4 fill-white" />
                    <span>WhatsApp Us</span>
                  </button>

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