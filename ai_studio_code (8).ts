import React from 'react';
import { useWatches } from '../context/WatchContext';
import { Mail, SlidersHorizontal, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNav: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNav }) => {
  const { setIsManagerOpen } = useWatches();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/file_000000002ef0820b8edda173d14b057e_cc9b04ca.png"
                alt="N Collection Logo"
                className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-white/20 shadow-xs"
              />
              <span className="font-serif-display text-xl tracking-widest text-white uppercase block">
                N Collection
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed text-xs">
              Independent timepiece curation, authentications, and direct enthusiast exchange based in Andaman & Nicobar Islands, India. Every piece is hand-inspected under optical magnification and regulated for precision.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="mailto:n45349897@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>n45349897@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Explore</p>
            <ul className="space-y-2">
              <li><button onClick={() => onNav('home')} className="hover:text-white transition-colors cursor-pointer">Home Showcase</button></li>
              <li><button onClick={() => onNav('shop')} className="hover:text-white transition-colors cursor-pointer">Shop Available Watches</button></li>
              <li><button onClick={() => onNav('about')} className="hover:text-white transition-colors cursor-pointer">Founder Story & Standard</button></li>
              <li><button onClick={() => onNav('contact')} className="hover:text-white transition-colors cursor-pointer">Contact & 24h Holds</button></li>
            </ul>
          </div>

          {/* Our Promise */}
          <div className="space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Our Promise</p>
            <ul className="space-y-2 text-neutral-400">
              <li>100% Verified Authentic</li>
              <li>Timegrapher Amplitude Check</li>
              <li>Free Fully Insured Speed Post</li>
              <li>Complimentary 24-Hour Hold</li>
              <li className="pt-2">
                <button
                  onClick={() => setIsManagerOpen(true)}
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-200 border border-neutral-800 hover:border-neutral-700 px-2.5 py-1 rounded-xs transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Stock Manager Portal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} N Collection. All rights reserved. Andaman & Nicobar Islands, India.</p>
          <div className="flex items-center gap-6">
            <span>No payment gateway fees · Direct peer exchange</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};