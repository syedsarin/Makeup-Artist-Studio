import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import MakeupClasses from '../components/MakeupClasses';
import { openWhatsApp } from '../App';

import makeupToolkitImg from '../assets/makeup-toolkit.jpg';
import heroBrideMakeupImg from '../assets/hero-bride-makeup.jpg';
import catHairImg from '../assets/cat-hair.jpg';
import heroBrideHaloImg from '../assets/hero-bride-halo.jpg';

const COURSE_HERO_IMAGES = [
  '/course/C1.png',
  '/course/C2.png',
  '/course/C3.png',
  '/course/C4.png',
  '/course/C5.png',
  '/course/C6.png',
];

export default function CoursesPage() {
  const [heroSlide, setHeroSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setHeroSlide((prev) => (prev + 1) % COURSE_HERO_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setHeroSlide((prev) => (prev - 1 + COURSE_HERO_IMAGES.length) % COURSE_HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const trainingPhotos = [
    {
      title: 'Pro Vanity & Brushes',
      img: makeupToolkitImg,
    },
    {
      title: 'Live Bridal Demos',
      img: heroBrideMakeupImg,
    },
    {
      title: 'Hair & Dupatta Architecture',
      img: catHairImg,
    },
    {
      title: 'Portfolio Photoshoot',
      img: heroBrideHaloImg,
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">

      {/* =====================================================
          ACADEMY HERO SECTION (WIDE, THIN BORDERS, CLEAR IMAGES)
      ===================================================== */}
      <section className="relative w-full bg-[#FAF8F5] py-5 sm:py-7 lg:py-9 border-b border-[#ECE6DE]">
        <div className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8">

          {/* Framed Hero Card with Thin Luxury Borders */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#ECE6DE] bg-white p-4 sm:p-7 lg:p-9 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

              {/* LEFT COLUMN: Organized Typography & Action */}
              <div className="lg:col-span-5 text-left flex flex-col justify-center">
                {/* Eyebrow Badge with Thin Border */}
                <div className="mb-2.5 sm:mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#A25345]/20 text-[#A25345] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#A25345]" />
                    <span>ACADEMY &amp; MASTERCLASSES</span>
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1F1917] tracking-tight leading-[1.12]">
                  Makeup Courses &amp;
                  <span className="block italic font-normal text-[#A25345] mt-1 sm:mt-1.5">
                    Professional Certification
                  </span>
                </h1>

                {/* Concise Description */}
                <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm text-[#655E59] leading-relaxed max-w-md">
                  Master the art of <span className="font-semibold text-[#1F1917]">luxury bridal makeup</span> under the personal mentorship of <span className="font-semibold text-[#A25345]">Ayesha Malik</span>.
                </p>

                {/* Enquire CTA Button with Controlled Width & Thin Border */}
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={() => openWhatsApp('Academy Course Enrollment Enquiry')}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A25345] hover:bg-[#8D4437] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[13px] font-semibold shadow-md shadow-[#A25345]/25 border border-[#A25345] hover:border-[#8D4437] active:scale-98 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
                    <span>Enquire About Courses</span>
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Wider Crystal-Clear Image Showcase with Thin Border */}
              <div className="lg:col-span-7 w-full">
                <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full min-h-[260px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden rounded-xl sm:rounded-2xl border border-[#ECE6DE] shadow-xs bg-[#FAF8F5]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={COURSE_HERO_IMAGES[heroSlide]}
                      src={COURSE_HERO_IMAGES[heroSlide]}
                      alt="Ayesha Malik Makeup Academy Live Session"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.7, ease: 'easeOut' },
                      }}
                      className="absolute inset-0 h-full w-full object-cover object-center filter brightness-105 contrast-[1.02]"
                    />
                  </AnimatePresence>

                  {/* Bottom Controls Bar with Clean Thin Border Styling */}
                  <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between">
                    {/* Slide Dots */}
                    <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20 shadow-xs">
                      {COURSE_HERO_IMAGES.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setHeroSlide(index)}
                          aria-label={`Show academy slide ${index + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${heroSlide === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                        />
                      ))}
                    </div>

                    {/* Prev / Next Arrows with Thin Border */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white text-[#1F1917] hover:text-[#A25345] border border-[#ECE6DE] shadow-xs flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white text-[#1F1917] hover:text-[#A25345] border border-[#ECE6DE] shadow-xs flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          COURSES LIST
      ===================================================== */}
      <MakeupClasses />

      {/* =====================================================
          INSIDE THE ACADEMY
      ===================================================== */}
      <section className="border-t border-[#ECE6DE] bg-white py-10 sm:py-14">
        <div className="container max-w-5xl">

          {/* Section Header */}
          <div className="mb-6 flex items-center justify-between text-left">

            <div>
              <div className="eyebrow mb-1">
                <span>INSIDE THE ACADEMY</span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#1F1917] sm:text-2xl">
                Masterclass Studio &amp; Hands-On Training
              </h3>
            </div>

            <button
              onClick={() =>
                openWhatsApp('Academy Next Batch Inquiry')
              }
              className="btn btn-secondary btn-sm hidden items-center gap-1.5 sm:flex"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#A25345]" />
              <span>Next Batch Dates</span>
            </button>

          </div>

          {/* Training Photos */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">

            {trainingPhotos.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#ECE6DE] bg-[#FAF8F5] shadow-2xs sm:rounded-2xl"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-2.5">
                  <span className="text-[11px] font-medium text-white">
                    {item.title}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK BATCH RESERVATION CTA
      ===================================================== */}
      <section className="border-t border-[#ECE6DE] bg-[#FFF2F5] py-8 sm:py-10">

        <div className="container max-w-3xl text-center">

          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#A25345]/20 bg-white p-5 text-center shadow-2xs sm:flex-row sm:text-left">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#A25345]">
                Limited to 6 Students
              </p>

              <h4 className="font-serif text-base font-semibold text-[#1F1917]">
                Reserve Your Seat for Upcoming Cohort
              </h4>
            </div>

            <button
              onClick={() =>
                openWhatsApp('Academy Course Enrollment Enquiry')
              }
              className="btn btn-primary btn-md flex shrink-0 items-center gap-2"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>WhatsApp for Syllabus PDF</span>
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}