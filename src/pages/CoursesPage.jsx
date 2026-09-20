import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import MakeupClasses from '../components/MakeupClasses';
import { openWhatsApp } from '../App';

import makeupToolkitImg from '../assets/makeup-toolkit.jpg';
import heroBrideMakeupImg from '../assets/hero-bride-makeup.jpg';
import catHairImg from '../assets/cat-hair.jpg';
import heroBrideHaloImg from '../assets/hero-bride-halo.jpg';

export default function CoursesPage() {
  const trainingPhotos = [
    { title: 'Pro Vanity & Brushes', img: makeupToolkitImg },
    { title: 'Live Bridal Demos', img: heroBrideMakeupImg },
    { title: 'Hair & Dupatta Architecture', img: catHairImg },
    { title: 'Portfolio Photoshoot', img: heroBrideHaloImg },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Minimal Luxury Page Header */}
      <PageHeader
        breadcrumb="Academy Courses"
        eyebrow="CERTIFICATION"
        title="Ayesha Malik Makeup Academy"
        subtitle="Hands-on bridal makeup masterclasses with personal mentorship."
      />

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
              <p className="text-[9px] uppercase tracking-wider font-bold text-[#A25345]">Limited to 6 Students</p>
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
