import React from 'react';
import { MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Portfolio from '../components/Portfolio';
import { openWhatsApp } from '../App';

export default function PortfolioPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Minimal Header */}
      <PageHeader
        breadcrumb="Gallery"
        eyebrow="REAL BRIDES"
        title="Signature Bridal Gallery"
        subtitle="Click any photograph to view in fullscreen lightbox mode."
      />

      {/* The Image-Focused Gallery & Fullscreen Lightbox Modal */}
      <Portfolio />

      {/* Clean Quick WhatsApp Action */}
      <div className="py-8 bg-white border-t border-[#ECE6DE] text-center">
        <button
          onClick={() => openWhatsApp('Portfolio Gallery Consultation')}
          className="btn btn-primary btn-md inline-flex items-center gap-2 shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp for Availability &amp; Booking</span>
        </button>
      </div>
    </div>
  );
}
