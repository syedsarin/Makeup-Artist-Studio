import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Calendar, MessageCircle, Check, ChevronDown, ChevronUp,
  GraduationCap, Users, Sparkles
} from 'lucide-react';
import { MAKEUP_CLASSES } from '../data/bridalData';
import { openWhatsApp } from '../App';

/* ─────────────────────────────────────────────
   Single Course Card (Compact 2-Column Ready)
───────────────────────────────────────────── */
export function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);
  const isPopular = course.popular;

  return (
    <div
      className={`relative flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 h-full justify-between bg-white ${
        isPopular
          ? 'border-2 border-[#C5A059] bg-gradient-to-b from-white via-[#FDFBF7] to-[#FAF8F5] shadow-xs'
          : 'border border-[#ECE6DE] hover:border-[#C5A059]/50 hover:shadow-xs'
      }`}
    >
      {/* Top Academy Floating Badge */}
      <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-widest flex items-center gap-1 bg-[#1F1917] text-[#E5D5BC] border border-[#C5A059]/40 shadow-xs">
        {isPopular ? <Sparkles className="w-2 h-2 text-[#C5A059]" /> : <GraduationCap className="w-2 h-2 text-[#C5A059]" />}
        <span>{course.badge}</span>
      </div>

      {/* Course Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-75" />

        {/* Floating Academy Tuition Price */}
        <div className="absolute bottom-1.5 right-1.5 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-xs border border-white/70">
          <span className="font-serif text-xs sm:text-base font-bold text-[#1F1917]">{course.price}</span>
          <span className="text-[7px] sm:text-[8px] text-[#958D86] block text-right leading-none uppercase font-semibold">Tuition</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-2.5 sm:p-3.5 text-left">
        <div>
          <h3 className="font-serif text-xs sm:text-base font-semibold line-clamp-1 mb-0.5 text-[#1F1917]">
            {course.title}
          </h3>
          <p className="text-[9.5px] sm:text-xs text-[#655E59] mb-2 leading-tight line-clamp-2">{course.tagline}</p>

          {/* Course Meta Chips */}
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div className="flex flex-col items-center text-center bg-[#FAF8F5] border border-[#ECE6DE] rounded-lg p-1">
              <Calendar className="w-2.5 h-2.5 text-[#C5A059] mb-0.5" />
              <span className="text-[6.5px] sm:text-[7.5px] text-[#958D86] uppercase font-bold tracking-wider">Duration</span>
              <span className="text-[8.5px] sm:text-[10px] font-bold text-[#1F1917] mt-0.5">{course.duration}</span>
            </div>
            <div className="flex flex-col items-center text-center bg-[#FAF8F5] border border-[#ECE6DE] rounded-lg p-1">
              <Users className="w-2.5 h-2.5 text-[#C5A059] mb-0.5" />
              <span className="text-[6.5px] sm:text-[7.5px] text-[#958D86] uppercase font-bold tracking-wider">Format</span>
              <span className="text-[8.5px] sm:text-[10px] font-bold text-[#1F1917] mt-0.5">{course.sessions}</span>
            </div>
            <div className="flex flex-col items-center text-center bg-[#FAF8F5] border border-[#ECE6DE] rounded-lg p-1">
              <Clock className="w-2.5 h-2.5 text-[#C5A059] mb-0.5" />
              <span className="text-[6.5px] sm:text-[7.5px] text-[#958D86] uppercase font-bold tracking-wider">Per Class</span>
              <span className="text-[8.5px] sm:text-[10px] font-bold text-[#1F1917] mt-0.5">{course.sessionLength}</span>
            </div>
          </div>

          {/* Course Content Topics Preview */}
          <div className="mb-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center justify-between w-full text-left text-[8.5px] sm:text-[10px] font-bold uppercase tracking-widest text-[#9B4B5A] py-1 border-b border-[#ECE6DE] mb-1.5 cursor-pointer"
            >
              <span>{course.highlights.length} Syllabus Modules</span>
              {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden space-y-1 pt-0.5"
                >
                  {course.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-1.5 h-1.5 stroke-[3]" />
                      </div>
                      <span className="text-[9.5px] sm:text-xs text-[#1F1917] leading-tight line-clamp-1">{item}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!expanded && (
              <div className="space-y-1">
                {course.highlights.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-1.5 h-1.5 stroke-[3]" />
                    </div>
                    <span className="text-[9.5px] sm:text-xs text-[#1F1917] leading-tight line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="pt-2 border-t border-[#ECE6DE] mt-auto">
          <button
            onClick={() => openWhatsApp(`${course.title} Enquiry`)}
            className={`btn w-full justify-center min-h-[32px] sm:min-h-[36px] py-1 px-2 text-[10px] sm:text-xs rounded-lg ${
              isPopular ? 'btn-primary shadow-xs' : 'btn-secondary'
            }`}
          >
            <MessageCircle className={`w-3 h-3 ${isPopular ? 'fill-white' : 'text-[#1F1917]'}`} />
            <span>Enquire Course</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main MakeupClasses Section
───────────────────────────────────────────── */
export default function MakeupClasses() {
  return (
    <section id="classes" className="section bg-[#FAF8F5] border-y border-[#ECE6DE] py-7 sm:py-11 lg:py-16">
      <div className="container">

        {/* Section Header */}
        <div className="mb-5 sm:mb-8">

          {/* Centered Heading Block */}
          <div className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-5">
            <div className="eyebrow justify-center"><span>ACADEMY & MASTERCLASSES</span></div>
            <h2 className="section-title text-xl sm:text-3xl lg:text-[34px] font-serif text-[#1F1917] leading-tight mb-1.5 sm:mb-2">
              Makeup Courses &{' '}
              <br className="hidden sm:block" />
              <span className="italic font-normal text-[#9B4B5A]">Professional Certification</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#655E59] leading-relaxed">
              Master the art of <span className="font-semibold text-[#1F1917]">luxury bridal makeup</span> under
              the personal mentorship of <span className="font-semibold text-[#9B4B5A]">Ayesha Malik</span>.
            </p>
          </div>

          {/* 4-Pillar Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 max-w-4xl mx-auto">
            {[
              { tag: 'Live Hands-On Practice', icon: <Users className="w-3 h-3 text-[#C5A059]" /> },
              { tag: 'Small Cohort Mentorship', icon: <GraduationCap className="w-3 h-3 text-[#C5A059]" /> },
              { tag: 'Accredited Certification', icon: <Sparkles className="w-3 h-3 text-[#C5A059]" /> },
              { tag: 'Pro Vanity Kit Option', icon: <Check className="w-3 h-3 text-[#C5A059]" /> },
            ].map(({ tag, icon }) => (
              <div key={tag} className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-white border border-[#ECE6DE] rounded-xl shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-[#1F1917] leading-tight line-clamp-1">{tag}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Course Cards - Clean 2-Column Grid on Mobile, Responsive 3-col on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-5 items-stretch">
          {MAKEUP_CLASSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex h-full w-full"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
