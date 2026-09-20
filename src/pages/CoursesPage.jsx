import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
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
];

export default function CoursesPage() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % COURSE_HERO_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
          ACADEMY HERO SLIDER
      ===================================================== */}
      <section className="relative w-full min-h-[560px] overflow-hidden bg-[#1F1917] sm:min-h-[620px] lg:min-h-[680px]">

        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.img
            key={COURSE_HERO_IMAGES[heroSlide]}
            src={COURSE_HERO_IMAGES[heroSlide]}
            alt="Ayesha Malik Makeup Academy"
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 1.2,
                ease: 'easeOut',
              },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Left Readability Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        {/* Bottom Readability Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[560px] items-center sm:min-h-[620px] lg:min-h-[680px]">

          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">

            <div className="max-w-xl text-left">

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#E5C98A]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F3DFAE] drop-shadow-md sm:text-[11px]">
                  ACADEMY COURSES
                </span>
              </div>

              {/* Small Label */}
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/90 drop-shadow-lg sm:text-xs">
                PROFESSIONAL CERTIFICATION
              </p>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] sm:text-5xl lg:text-6xl xl:text-7xl">
                Ayesha Malik

                <span className="mt-2 block italic font-normal text-[#F3DFAE] drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]">
                  Makeup Academy
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_9px_rgba(0,0,0,0.9)] sm:text-base">
                Hands-on bridal makeup masterclasses with personal mentorship.
              </p>

              {/* CTA */}
              <button
                onClick={() =>
                  openWhatsApp('Academy Course Enrollment Enquiry')
                }
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-wide text-[#1F1917] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#F3DFAE]"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire About Courses
              </button>

            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-7 left-6 z-20 flex items-center gap-2 sm:left-10 lg:left-16 xl:left-24">
          {COURSE_HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              aria-label={`Show academy image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${heroSlide === index
                  ? 'w-10 bg-white shadow-md'
                  : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
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