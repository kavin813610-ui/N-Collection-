import React, { useState } from 'react';
import { Watch } from '../types/watch';
import { X, CheckCircle2, Send, Mail } from 'lucide-react';
import { useWatches } from '../context/WatchContext';

interface InquiryModalProps {
  watch: Watch | null;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ watch, onClose }) => {
  const { toggleStatus } = useWatches();
  const [submitted, setSubmitted] = useState(false);
  const [placeHoldImmediately, setPlaceHoldImmediately] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactMethod: 'email' as 'email' | 'instagram' | 'whatsapp',
    contactValue: '',
    paymentPreference: 'UPI (Google Pay / PhonePe / Paytm)',
    shippingCity: '',
    notes: ''
  });

  if (!watch) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (placeHoldImmediately && watch.status === 'available') {
      toggleStatus(watch.id, 'reserved');
    }
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm max-w-lg w-full overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200 border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-900 text-white">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400">
              Direct Reservation & Inquiry
            </span>
            <h3 className="text-base font-semibold text-white">
              {watch.brand} — {watch.model}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close inquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-serif-display text-neutral-900">
              Inquiry Received & Hold Registered
            </h4>
            <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-neutral-900">{formData.name || 'Collector'}</span>.
              {placeHoldImmediately ? (
                <> A <strong>24-hour complimentary hold</strong> has been placed on <strong>{watch.model}</strong>.</>
              ) : null}{' '}
              I will personally reach out via {formData.contactMethod} within 2–4 hours with video walk-around and arrangement details.
            </p>

            <div className="mt-6 p-4 bg-neutral-50 rounded-sm text-left border border-neutral-200 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Timepiece:</span>
                <span className="font-semibold text-neutral-900">{watch.brand} {watch.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Agreed Price:</span>
                <span className="font-mono font-bold text-neutral-900 tabular-nums">₹{watch.price.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Reference:</span>
                <span className="font-mono text-neutral-600">{watch.reference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Delivery:</span>
                <span className="text-neutral-800">Tracked & Insured Express (All-India & Andaman)</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-sm transition-colors cursor-pointer"
              >
                Back to Collection
              </button>
              <a
                href={`mailto:n45349897@gmail.com?subject=Inquiry on ${encodeURIComponent(watch.brand + ' ' + watch.model + ' ' + watch.reference)}&body=Hi N Collection, I just submitted an inquiry for ${watch.model} (₹${watch.price.toLocaleString('en-IN')}). My name is ${encodeURIComponent(formData.name)}.`}
                className="py-2.5 px-4 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="flex items-center gap-3 p-3 bg-neutral-50 border border-neutral-200 rounded-sm">
              <img
                src={watch.imageUrl}
                alt={watch.model}
                className="w-14 h-14 object-cover rounded-sm border border-neutral-200 shrink-0"
              />
              <div className="flex-1 min-w-0 text-xs">
                <p className="font-semibold text-neutral-900 truncate">{watch.model}</p>
                <p className="text-neutral-500 font-mono">Ref. {watch.reference} · {watch.condition}</p>
                <p className="text-neutral-900 font-bold font-mono tabular-nums mt-0.5">₹{watch.price.toLocaleString('en-IN')}</p>
              </div>
            </div>

            <div className="text-[11px] text-neutral-600 bg-neutral-50/70 p-3 rounded-sm border border-neutral-100 leading-relaxed">
              <strong>How our hold process works:</strong> We don't take automated credit card payments on the site to keep prices 10–15% lower. Submitting this form places a 24h courtesy hold while N Collection sends you a macro video and finalizes payment securely (UPI / GPay / NetBanking or local handover in Andaman).
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Phone or WhatsApp</label>
                  <input
                    type="text"
                    value={formData.contactValue}
                    onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Preferred Payment</label>
                  <select
                    value={formData.paymentPreference}
                    onChange={(e) => setFormData({ ...formData, paymentPreference: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-white"
                  >
                    <option value="UPI (Google Pay / PhonePe / Paytm)">UPI (Google Pay / PhonePe / Paytm)</option>
                    <option value="Direct Bank Transfer (NEFT / IMPS)">Direct Bank Transfer (NEFT / IMPS)</option>
                    <option value="Cash / Local Handover (Andaman)">Cash / Local Handover (Andaman)</option>
                    <option value="Wire / International Transfer">Wire / International Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Destination City / State</label>
                  <input
                    type="text"
                    value={formData.shippingCity}
                    onChange={(e) => setFormData({ ...formData, shippingCity: e.target.value })}
                    placeholder="e.g. Port Blair, Mumbai, Delhi, Bengaluru..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Questions or Sizing Notes</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Need wrist shot, specific bracelet sizing, or box photos? Let me know here."
                  className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={placeHoldImmediately}
                  onChange={(e) => setPlaceHoldImmediately(e.target.checked)}
                  className="rounded-xs text-neutral-900 focus:ring-neutral-900"
                />
                <span className="text-neutral-700">
                  Place this watch on temporary 24-hour hold for me now
                </span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Reservation Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};