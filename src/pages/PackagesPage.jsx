import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Packages from '../components/Packages';
import { openWhatsApp } from '../App';

export default function PackagesPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Minimal Luxury Page Header */}
      <PageHeader
        breadcrumb="Packages"
        eyebrow="INVESTMENT"
        title="Bridal &amp; Occasion Packages"
        subtitle="Transparent, all-inclusive packages for your special celebrations."
      />

      {/* The Full Packages Component with Photos & Category Filters */}
      <Packages />

      {/* Quick Custom Package Action */}
      <section className="py-10 sm:py-14 bg-white border-t border-[#ECE6DE]">
        <div className="container max-w-3xl text-center">
          <div className="p-6 rounded-2xl bg-[#FAF5EB] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1F1917]">
                Destination or Multi-Day Wedding?
              </h3>
              <p className="text-xs text-[#655E59] mt-0.5">
                Contact us on WhatsApp for a custom package tailored to your wedding itinerary.
              </p>
            </div>

            <button
              onClick={() => openWhatsApp('Custom Destination Package')}
              className="btn btn-primary btn-md shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Request Custom Quote</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
