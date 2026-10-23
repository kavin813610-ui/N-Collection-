import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    topic: 'Inquire on a Watch in Stock',
    message: ''
  });

  const faqs = [
    {
      question: 'How does the 24-Hour Hold process work?',
      answer: 'When you find a piece you love, click "Reserve Watch" or send us a message. We place the watch on hold for 24 hours so nobody else can take it. We then send you a private high-definition video of the movement running and discuss delivery or payment preferences without any pressure.'
    },
    {
      question: 'What payment options do you accept without an online checkout?',
      answer: 'To keep prices lower by eliminating middleman gateway transaction fees, we accept UPI (Google Pay, PhonePe, Paytm), Direct Bank Transfer (NEFT/IMPS), and Cash for local handovers in Andaman & Nicobar Islands.'
    },
    {
      question: 'How do you ship and protect delicate mechanical watches?',
      answer: 'Every watch is placed in a protective watch pouch or its original box, multi-layer shockproof bubble-wrapped, and shipped with tamper-evident packaging across India via Insured Speed Post or Priority Courier with active tracking.'
    },
    {
      question: 'Do you buy watches or accept trades?',
      answer: 'Yes! We actively purchase and trade mechanical, vintage, and modern tool watches from brands like Seiko, Citizen, HMT, Tissot, Hamilton, and vintage makers. Send photos to n45349897@gmail.com.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
            <span>N Collection</span>
            <span>·</span>
            <span>Andaman & Nicobar Islands, India</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-display text-neutral-900 tracking-tight">
            Get in Touch with N Collection
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Have questions about a timepiece, need additional macro photos, or want to place a hold? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-neutral-200/80 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-lg font-serif-display font-semibold text-neutral-900">
                Direct Channels
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block font-medium">Email Inquiries</span>
                    <a href="mailto:n45349897@gmail.com" className="font-semibold text-neutral-900 hover:underline">
                      n45349897@gmail.com
                    </a>
                    <span className="block text-[11px] text-neutral-400 mt-0.5">Replies within 2–4 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block font-medium">Location</span>
                    <p className="font-semibold text-neutral-900">Andaman & Nicobar Islands, India</p>
                    <span className="block text-[11px] text-neutral-400 mt-0.5">Local handovers & Insured All-India shipping</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 text-xs text-neutral-600 leading-relaxed">
                <strong>Local Handovers:</strong> In-person viewings and hand delivery are available across Port Blair / Andaman Islands by prior arrangement.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-neutral-200/80 rounded-sm p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif-display font-semibold text-neutral-900">
                  Message Sent to N Collection
                </h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! We received your message and will reply to <strong>{contactForm.email}</strong> shortly from <strong>n45349897@gmail.com</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setContactForm({ name: '', email: '', topic: 'Inquire on a Watch in Stock', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-sm transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h2 className="text-lg font-serif-display font-semibold text-neutral-900">Send an Inquiry</h2>
                  <p className="text-xs text-neutral-500 mt-0.5">No automated bots. Every message is answered directly by N Collection.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-neutral-800 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Verma"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-800 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-semibold text-neutral-800 mb-1">Subject / Topic</label>
                  <select
                    value={contactForm.topic}
                    onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white cursor-pointer"
                  >
                    <option value="Inquire on a Watch in Stock">Inquire on a Watch in Stock</option>
                    <option value="Place a 24-Hour Hold">Place a 24-Hour Hold</option>
                    <option value="Sell or Trade My Watch">Sell or Trade My Watch</option>
                    <option value="Custom Sourcing Request">Custom Watch Sourcing Request</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="text-xs">
                  <label className="block font-semibold text-neutral-800 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what watch you're looking at, questions regarding condition, or your watch trade details..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Note</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-neutral-200/80 rounded-sm p-8 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <h2 className="text-2xl font-serif-display font-semibold text-neutral-900">Frequently Asked Questions</h2>
            <p className="text-xs text-neutral-500 mt-1">Everything you need to know about purchasing, reservations, and authenticity</p>
          </div>

          <div className="divide-y divide-neutral-100">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left cursor-pointer group"
                  >
                    <span className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700">{faq.question}</span>
                    <span className="p-1 text-neutral-400 group-hover:text-neutral-700">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs text-neutral-600 leading-relaxed pr-6">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};