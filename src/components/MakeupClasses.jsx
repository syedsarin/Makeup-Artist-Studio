import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Calendar, MessageCircle, Check, ChevronDown, ChevronUp,
  GraduationCap, Users, Sparkles, Send, CheckCircle2, AlertCircle, User, Mail, Phone, FileText
} from 'lucide-react';
import { MAKEUP_CLASSES, ARTIST_INFO, WEB3FORMS_KEY } from '../data/bridalData';
import { openWhatsApp } from '../App';

/* ─────────────────────────────────────────────
   Single Course Card
───────────────────────────────────────────── */
function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);
  const isPopular = course.popular;

  return (
    <motion.div
      layout
      className={`relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 ${isPopular
          ? 'border-2 border-[#9B4B5A] shadow-xl'
          : 'border border-[#E8E2DA] hover:border-[#C5A059]/50 hover:shadow-md'
        }`}
    >
      {/* Badge */}
      <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${course.badgeColor === 'rose'
          ? 'bg-[#9B4B5A] text-white'
          : 'bg-[#C5A059] text-white'
        }`}>
        {isPopular ? <Sparkles className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
        {course.badge}
      </div>

      {/* Course Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#F4EFEA]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Price Tag Floating */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50">
          <span className="font-serif text-2xl font-bold text-[#2C221E]">{course.price}</span>
          <span className="text-[10px] text-[#6E655F] block text-right">full course</span>
        </div>
      </div>

      {/* Card Body */}
      <div className={`flex flex-col flex-grow p-6 ${isPopular ? 'bg-gradient-to-b from-white to-[#FFF9F6]' : 'bg-white'}`}>

        <h3 className={`font-serif text-xl sm:text-2xl font-semibold mb-2 ${isPopular ? 'text-[#9B4B5A]' : 'text-[#2C221E]'}`}>
          {course.title}
        </h3>
        <p className="text-xs text-[#6E655F] mb-5 leading-relaxed">{course.tagline}</p>

        {/* Course Meta Chips */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="flex flex-col items-center text-center bg-[#FAF8F5] border border-[#E8E2DA] rounded-xl p-3">
            <Calendar className="w-4 h-4 text-[#C5A059] mb-1" />
            <span className="text-[10px] text-[#9A918A] font-medium uppercase tracking-wider">Duration</span>
            <span className="text-xs font-bold text-[#2C221E] mt-0.5">{course.duration}</span>
          </div>
          <div className="flex flex-col items-center text-center bg-[#FAF8F5] border border-[#E8E2DA] rounded-xl p-3">
            <Users className="w-4 h-4 text-[#C5A059] mb-1" />
            <span className="text-[10px] text-[#9A918A] font-medium uppercase tracking-wider">Sessions</span>
            <span className="text-xs font-bold text-[#2C221E] mt-0.5">{course.sessions}</span>
          </div>
          <div className="flex flex-col items-center text-center bg-[#FAF8F5] border border-[#E8E2DA] rounded-xl p-3">
            <Clock className="w-4 h-4 text-[#C5A059] mb-1" />
            <span className="text-[10px] text-[#9A918A] font-medium uppercase tracking-wider">Per Class</span>
            <span className="text-xs font-bold text-[#2C221E] mt-0.5">{course.sessionLength}</span>
          </div>
        </div>

        {/* Course Content - Collapsed / Expanded */}
        <div className="mb-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full text-left text-xs font-bold uppercase tracking-wider text-[#9B4B5A] py-2 border-b border-[#E8E2DA] mb-3"
          >
            <span>Course Content ({course.highlights.length} Topics)</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-2 pt-1">
                  {course.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPopular ? 'bg-[#9B4B5A] text-white' : 'bg-[#FAF5EB] text-[#C5A059]'
                        }`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs text-[#2C221E] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Preview first 3 when collapsed */}
          {!expanded && (
            <div className="space-y-2">
              {course.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPopular ? 'bg-[#9B4B5A] text-white' : 'bg-[#FAF5EB] text-[#C5A059]'
                    }`}>
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs text-[#2C221E] leading-snug">{item}</span>
                </div>
              ))}
              {course.highlights.length > 3 && (
                <button
                  onClick={() => setExpanded(true)}
                  className="text-[11px] font-semibold text-[#9B4B5A] hover:underline pl-6.5"
                >
                  + {course.highlights.length - 3} more topics...
                </button>
              )}
            </div>
          )}
        </div>

        {/* WhatsApp Enquiry */}
        <div className="mt-auto pt-4 border-t border-[#E8E2DA]">
          <button
            onClick={() => openWhatsApp(`${course.title} Enquiry`)}
            className={`btn w-full justify-center ${isPopular ? 'btn-primary' : 'btn-secondary'}`}
          >
            <MessageCircle className={`w-4 h-4 ${isPopular ? 'fill-white' : ''}`} />
            <span>WhatsApp for Details</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Enquiry Form  (Web3Forms — no backend)
───────────────────────────────────────────── */
function EnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Makeup Classes Enquiry from ${form.name}`,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: ARTIST_INFO.email,
          botcheck: '',   // honeypot spam guard
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl border border-[#E8E2DA] shadow-lg p-6 sm:p-8"
      >
        <div className="text-center mb-8">
          <div className="eyebrow mb-2"><span>GET IN TOUCH</span></div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C221E]">
            Course Enquiry Form
          </h3>
          <p className="text-sm text-[#6E655F] mt-2">
            Fill in your details and we'll get back to you with a complete course brochure and batch dates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A918A]" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] placeholder:text-[#9A918A] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1.5">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A918A]" />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] placeholder:text-[#9A918A] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1.5">
            Contact Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A918A]" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] placeholder:text-[#9A918A] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1.5">
            Message / Course Interest *
          </label>
          <div className="relative">
            <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-[#9A918A]" />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="e.g. I'm interested in the Advanced Bridal course. Please share batch schedule and payment options..."
              value={form.message}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] placeholder:text-[#9A918A] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn btn-primary btn-lg w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-5 flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 text-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">Enquiry sent successfully! 🎉</p>
                <p className="text-xs font-normal text-green-700">
                  We've received your details and will get back to you within 24 hours with course info and batch dates.
                </p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-5 flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm"
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">Something went wrong.</p>
                <p className="text-xs font-normal text-red-700">
                  Please try again or reach us directly on{' '}
                  <button
                    type="button"
                    onClick={() => openWhatsApp('Course Enquiry')}
                    className="font-bold underline hover:text-red-900"
                  >
                    WhatsApp
                  </button>.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-4 text-center text-[10px] text-[#9A918A]">
          Your details are only used to respond to your enquiry. Never shared with third parties.
        </p>
      </form>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main MakeupClasses Section
───────────────────────────────────────────── */
export default function MakeupClasses() {
  return (
    <section id="classes" className="section bg-[#FAF8F5] border-y border-[#E8E2DA]">
      <div className="container">

        {/* Section Header */}
        <div className="mb-10 sm:mb-14">

          {/* Centered Heading Block */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="eyebrow justify-center"><span>LEARN FROM THE BEST</span></div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C221E] leading-tight mb-4">
              Makeup Courses &{' '}
              <br className="hidden sm:block" />
              <span className="italic font-normal text-[#9B4B5A]">Professional Certification</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E655F] leading-relaxed">
              Master the art of <span className="font-semibold text-[#2C221E]">luxury bridal makeup</span> under
              the personal mentorship of <span className="font-semibold text-[#9B4B5A]">Ayesha Malik</span>.
            </p>
            <p className="text-sm sm:text-base text-[#6E655F] leading-relaxed mt-2">
              From <span className="font-semibold text-[#2C221E]">beginner fundamentals</span> to{' '}
              <span className="font-semibold text-[#2C221E]">professional artist certification</span> — learn
              at our <span className="font-semibold text-[#C5A059]">Bandra studio</span> with real-world
              practice on live models.
            </p>
          </div>

          {/* 4-Pillar Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { tag: 'Hands-On Live Practice', icon: <Users className="w-4 h-4 text-[#9B4B5A]" />, bg: 'bg-[#F7EFF1]' },
              { tag: 'Small Batch Sizes', icon: <GraduationCap className="w-4 h-4 text-[#C5A059]" />, bg: 'bg-[#FAF5EB]' },
              { tag: 'Certificate Provided', icon: <Sparkles className="w-4 h-4 text-[#9B4B5A]" />, bg: 'bg-[#F7EFF1]' },
              { tag: 'Kit Included in Pro Course', icon: <Check className="w-4 h-4 text-[#C5A059]" />, bg: 'bg-[#FAF5EB]' },
            ].map(({ tag, icon, bg }) => (
              <div key={tag} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-[#E8E2DA] rounded-xl shadow-xs hover:border-[#C5A059]/40 hover:shadow-sm transition-colors">
                <div className={`w-7 h-7 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                  {icon}
                </div>
                <span className="text-xs font-semibold text-[#2C221E] leading-snug">{tag}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {MAKEUP_CLASSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xl mx-auto mb-12">
          <div className="h-[1px] flex-1 bg-[#E8E2DA]" />
          <div className="flex items-center gap-2 text-[#C5A059]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#6E655F]">Course Enquiry</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="h-[1px] flex-1 bg-[#E8E2DA]" />
        </div>

        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <EnquiryForm />
        </motion.div>

      </div>
    </section>
  );
}
