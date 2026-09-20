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
    { title: 'Pro Vanity & Brushes', img: makeupToolkitImg },
    { title: 'Live Bridal Demos', img: heroBrideMakeupImg },
    { title: 'Hair & Dupatta Architecture', img: catHairImg },
    { title: 'Portfolio Photoshoot', img: heroBrideHaloImg },
  ];

  return (
    <div className="bg-[#FAF8F5]">

      {/* ─────────────────────────────────────────
          Academy Hero Header
      ───────────────────────────────────────── */}
      <section className="relative min-h-[330px] sm:min-h-[400px] lg:min-h-[450px] overflow-hidden">

        {/* Background Image Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={COURSE_HERO_IMAGES[heroSlide]}
            src={COURSE_HERO_IMAGES[heroSlide]}
            alt="Ayesha Malik Makeup Academy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/65" />

        {/* Hero Content */}
        <div className="relative z-10 min-h-[330px] sm:min-h-[400px] lg:min-h-[450px] flex items-center justify-center px-5 text-center">
          <div className="max-w-3xl mx-auto">

            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-7 bg-[#E5C98A]" />

              <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E5C98A]">
                ACADEMY COURSES
              </span>

              <span className="h-px w-7 bg-[#E5C98A]" />
            </div>

            {/* Eyebrow */}
            <p className="text-[9px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-white/85 mb-2">
              CERTIFICATION
            </p>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              Ayesha Malik
              <span className="block italic font-normal text-[#F3DFAE]">
                Makeup Academy
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 max-w-xl mx-auto text-xs sm:text-sm lg:text-base leading-relaxed text-white/85">
              Hands-on bridal makeup masterclasses with personal mentorship.
            </p>

            {/* CTA */}
            <button
              onClick={() => openWhatsApp('Academy Course Enrollment Enquiry')}
              className="mt-5 sm:mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-[11px] sm:text-xs font-semibold tracking-wide text-[#1F1917] shadow-lg transition-all duration-300 hover:bg-[#F3DFAE] hover:scale-[1.02]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Enquire About Courses
            </button>

          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {COURSE_HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              aria-label={`Show academy image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${heroSlide === index
                  ? 'w-7 bg-white'
                  : 'w-1.5 bg-white/60'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Courses List with Syllabus & Tuition */}
      <MakeupClasses />

      {/* Studio Masterclass & Training Photos */}
      <section className="py-10 sm:py-14 bg-white border-t border-[#ECE6DE]">
        <div className="container max-w-5xl">

          <div className="flex items-center justify-between mb-6 text-left">
            <div>
              <div className="eyebrow mb-1">
                <span>INSIDE THE ACADEMY</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1F1917]">
                Masterclass Studio &amp; Hands-On Training
              </h3>
            </div>

            <button
              onClick={() => openWhatsApp('Academy Next Batch Inquiry')}
              className="btn btn-secondary btn-sm hidden sm:flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#A25345]" />
              <span>Next Batch Dates</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {trainingPhotos.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE6DE] bg-[#FAF8F5] shadow-2xs"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-white">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Batch Reservation CTA */}
      <section className="py-8 sm:py-10 bg-[#FFF2F5] border-t border-[#ECE6DE]">
        <div className="container max-w-3xl text-center">
          <div className="p-5 rounded-2xl bg-white border border-[#A25345]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">

            <div>
              <p className="text-[9px] uppercase tracking-wider font-bold text-[#A25345]">
                Limited to 6 Students
              </p>

              <h4 className="font-serif text-base font-semibold text-[#1F1917]">
                Reserve Your Seat for Upcoming Cohort
              </h4>
            </div>

            <button
              onClick={() => openWhatsApp('Academy Course Enrollment Enquiry')}
              className="btn btn-primary btn-md shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp for Syllabus PDF</span>
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}