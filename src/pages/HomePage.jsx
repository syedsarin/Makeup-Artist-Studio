import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Heart,
  Crown,
  Camera,
  MessageCircle,
  GraduationCap,
  Users,
  Check,
} from 'lucide-react';

import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutArtist from '../components/AboutArtist';
import BridalFeature from '../components/BridalFeature';
import Location from '../components/Location';
import FinalCTA from '../components/FinalCTA';
import PackageCard from '../components/PackageCard';
import { CourseCard } from '../components/MakeupClasses';

import {
  ARTIST_INFO,
  PORTFOLIO_ITEMS,
  PACKAGES,
  MAKEUP_CLASSES,
} from '../data/bridalData';
import { openWhatsApp } from '../App';

export default function HomePage() {
  // Show 4 curated real bride photos on Home page
  const homePortfolioPhotos = PORTFOLIO_ITEMS.slice(0, 4);

  // Show exactly 3 featured packages on Home page
  const homeFeaturedPackages = [
    PACKAGES.find((p) => p.id === 'bridal-signature') || PACKAGES[0],
    PACKAGES.find((p) => p.id === 'engagement-signature') || PACKAGES[1],
    PACKAGES.find((p) => p.id === 'bridal-royal') || PACKAGES[2],
  ];

  // Show top courses preview on Home page
  const homeCourses = MAKEUP_CLASSES.slice(0, 2);

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. TRUST STATS STRIP */}
      <TrustStrip />

      {/* 3. ABOUT THE ARTIST */}
      <AboutArtist />

      {/* 4. SIGNATURE BRIDAL ATELIER & SERVICES (WHAT WE OFFER) */}
      <BridalFeature />

      {/* 5. PACKAGES PREVIEW */}
      <section id="packages" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#ECE6DE]">
        <div className="container">
          {/* Centered Section Badge: PRICING & PACKAGES */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#A25345]/20 text-[#A25345] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#A25345]" />
              <span>PRICING &amp; PACKAGES</span>
            </div>
          </div>

          {/* Header with top-right button */}
          <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
            <div className="text-left">
              <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-[#1F1917]">
                Curated Makeup Packages
              </h2>
              <p className="text-xs sm:text-sm text-[#655E59] mt-1 max-w-xl hidden sm:block">
                Choose from our most popular bridal, engagement, and wedding packages crafted for every celebration.
              </p>
            </div>
            <Link
              to="/services"
              state={{ scrollTo: 'service-packages' }}
              className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#A25345] hover:bg-[#8D4437] text-white text-[11px] sm:text-xs font-semibold shadow-md shadow-[#A25345]/25 transition-all duration-200 normal-case tracking-normal active:scale-98"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>

          {/* Mobile subtitle */}
          <p className="text-xs text-[#655E59] -mt-4 mb-5 sm:hidden">
            Crafted bridal, engagement &amp; wedding packages for every celebration.
          </p>

          {/* Clean 3-Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start max-w-5xl mx-auto pt-2">
            {homeFeaturedPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="w-full"
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COURSES PREVIEW */}
      <section id="classes" className="py-12 sm:py-16 bg-white border-b border-[#ECE6DE]">
        <div className="container max-w-5xl">
          {/* Centered Section Badge: ACADEMY & MASTERCLASSES */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#A25345]/20 text-[#A25345] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#A25345]" />
              <span>ACADEMY &amp; MASTERCLASSES</span>
            </div>
          </div>

          {/* Header with top-right button */}
          <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
            <div className="text-left">
              <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-[#1F1917]">
                Professional Makeup Courses
              </h2>
              <p className="text-xs sm:text-sm text-[#655E59] mt-1 max-w-xl hidden sm:block">
                Learn luxury bridal makeup under the personal mentorship of <span className="font-semibold text-[#1F1917]">Ayesha Malik</span>.
              </p>
            </div>
            <Link
              to="/courses"
              className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#A25345] hover:bg-[#8D4437] text-white text-[11px] sm:text-xs font-semibold shadow-md shadow-[#A25345]/25 transition-all duration-200 normal-case tracking-normal active:scale-98"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>

          {/* Mobile subtitle */}
          <p className="text-xs text-[#655E59] -mt-4 mb-5 sm:hidden">
            Mentored by Ayesha Malik — professional certification courses.
          </p>

          {/* Academy Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 max-w-4xl mx-auto">
            {[
              { label: 'Live Model Practice', icon: Users },
              { label: 'Max 6 Per Batch', icon: GraduationCap },
              { label: 'Accredited Diploma', icon: Sparkles },
              { label: 'Kit &amp; Product Guide', icon: Check },
            ].map(({ label, icon: Icon }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-2.5 py-1.5 bg-[#FAF8F5] border border-[#ECE6DE] rounded-xl text-left"
              >
                <div className="w-5 h-5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#1F1917] line-clamp-1">{label}</span>
              </div>
            ))}
          </div>

          {/* Courses Preview Cards Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-6 items-start max-w-3xl mx-auto">
            {homeCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO GALLERY PREVIEW */}
      <section id="portfolio" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#ECE6DE]">
        <div className="container">
          {/* Centered Section Badge: PORTFOLIO HIGHLIGHTS */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#A25345]/20 text-[#A25345] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#A25345]" />
              <span>PORTFOLIO HIGHLIGHTS</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-left">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1917]">
                Real Brides Gallery
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#A25345] hover:bg-[#8D4437] text-white text-[11px] sm:text-xs font-semibold shadow-md shadow-[#A25345]/25 transition-all duration-200 normal-case tracking-normal self-start sm:self-end active:scale-98"
            >
              <span>See Full Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>

          {/* 4-Photo Preview Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {homePortfolioPhotos.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <Link
                  to="/portfolio"
                  className="group relative block aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl border border-[#ECE6DE] bg-white shadow-2xs hover:border-[#C5A059]/60 hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5 text-left">
                    <span className="text-[9px] uppercase tracking-wider text-[#E5D5BC] font-bold">
                      {item.category}
                    </span>
                    <p className="text-white text-xs sm:text-sm font-serif font-semibold mt-0.5">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-white/80 font-sans mt-1 flex items-center gap-1">
                      <span>Open Fullscreen Lightbox</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. STUDIO LOCATION */}
      <Location />

      {/* 9. SEASONAL FINAL CTA STRIP */}
      <FinalCTA />
    </div>
  );
}
