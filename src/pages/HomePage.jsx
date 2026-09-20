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

      {/* 4. SIGNATURE BRIDAL ATELIER & SERVICES */}
      <BridalFeature />

      {/* 5. PORTFOLIO GALLERY PREVIEW (Home preview with option 'See Full Portfolio') */}
      <section id="portfolio" className="py-12 sm:py-16 bg-white border-b border-[#ECE6DE]">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-left">
            <div>
              <div className="eyebrow mb-1">
                <span>PORTFOLIO HIGHLIGHTS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1917]">
                Real Brides Gallery
              </h2>
              <p className="text-xs sm:text-sm text-[#655E59] mt-1">
                A glimpse of our signature bridal transformations, soft glam engagements, and festive looks.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="btn btn-secondary btn-sm flex items-center gap-1.5 self-start sm:self-end font-semibold text-xs"
            >
              <span>See Full Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
                  className="group relative block aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl border border-[#ECE6DE] bg-[#FAF8F5] shadow-2xs hover:border-[#C5A059]/60 hover:shadow-md transition-all duration-300"
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

          {/* Option: See Full Portfolio Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/portfolio"
              className="btn btn-primary btn-md inline-flex items-center gap-2 shadow-xs"
            >
              <span>See Full Portfolio &amp; Fullscreen Viewer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PACKAGES PREVIEW (3 Packages with option 'View All Packages') */}
      <section id="packages" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#ECE6DE]">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span>PRICING &amp; PACKAGES</span>
            </div>
            <h2 className="section-title">
              Curated Makeup Packages
            </h2>
            <p className="section-subtitle">
              Choose from our most popular bridal, engagement, and wedding packages crafted for every celebration.
            </p>
          </div>

          {/* Clean 3-Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch max-w-5xl mx-auto pt-2">
            {homeFeaturedPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex h-full w-full"
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>

          {/* Option: View All Packages Button */}
          <div className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/packages"
              className="btn btn-primary btn-md inline-flex items-center gap-2 shadow-xs"
            >
              <span>View All Packages &amp; Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openWhatsApp('Package Consultation')}
              className="btn btn-secondary btn-md inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#A25345]" />
              <span>WhatsApp for Custom Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. COURSES PREVIEW (Courses on Home with option 'View All Courses') */}
      <section id="classes" className="py-12 sm:py-16 bg-white border-b border-[#ECE6DE]">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="eyebrow justify-center mb-1">
              <span>ACADEMY &amp; MASTERCLASSES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1917] mb-2">
              Professional Makeup Courses
            </h2>
            <p className="text-xs sm:text-sm text-[#655E59] leading-relaxed">
              Learn luxury bridal makeup, product formulation, and business mastery under the personal mentorship of <span className="font-semibold text-[#1F1917]">Ayesha Malik</span>.
            </p>
          </div>

          {/* Academy Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 max-w-4xl mx-auto">
            {[
              { label: 'Live Model Practice', icon: Users },
              { label: 'Max 6 Per Batch', icon: GraduationCap },
              { label: 'Accredited Diploma', icon: Sparkles },
              { label: 'Kit & Product Guide', icon: Check },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch max-w-3xl mx-auto">
            {homeCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex h-full w-full"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          {/* Option: View All Courses Button */}
          <div className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/courses"
              className="btn btn-primary btn-md inline-flex items-center gap-2 shadow-xs"
            >
              <span>View All Courses &amp; Full Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openWhatsApp('Academy Course Syllabus')}
              className="btn btn-secondary btn-md inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#A25345]" />
              <span>Enquire for Next Batch</span>
            </button>
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
