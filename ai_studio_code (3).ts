import React, { useState } from 'react';
import { Menu, X, SlidersHorizontal } from 'lucide-react';
import { useWatches } from '../context/WatchContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { watches, setIsManagerOpen, setInquiryWatch } = useWatches();

  const availableCount = watches.filter(w => w.status === 'available').length;

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGeneralInquiry = () => {
    setInquiryWatch(null);
    handleNav('contact');
  };

  return (
    <header className="sticky top-0 z-40 bg-neutral-900 text-neutral-100 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand wordmark with official logo */}
          <button
            onClick={() => handleNav('home')}
            className="text-left cursor-pointer group focus:outline-none flex items-center gap-2.5 shrink-0"
            aria-label="N Collection Home"
          >
            <img
              src="/assets/aistudio/file_000000002ef0820b8edda173d14b057e_cc9b04ca.png"
              alt="N Collection Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shrink-0 ring-1 ring-white/25 shadow-xs"
            />
            <span className="font-serif-display text-xl sm:text-2xl tracking-widest font-normal text-white uppercase whitespace-nowrap shrink-0">
              N Collection
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button
              onClick={() => handleNav('home')}
              className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
                activeTab === 'home' ? 'text-white border-b-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('shop')}
              className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 flex items-center gap-1.5 ${
                activeTab === 'shop' ? 'text-white border-b-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Shop Collection</span>
              <span className="text-xs font-mono text-neutral-400 tabular-nums">
                ({availableCount})
              </span>
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
                activeTab === 'about' ? 'text-white border-b-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Our Story & Standard
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
                activeTab === 'contact' ? 'text-white border-b-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Contact & Inquiries
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsManagerOpen(true)}
              title="Update Inventory & Prices"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded-sm border border-neutral-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Update Stock</span>
            </button>

            <button
              onClick={handleOpenGeneralInquiry}
              className="px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-900 bg-white hover:bg-neutral-200 transition-colors rounded-sm whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              Hold a Watch
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-900 px-4 pt-3 pb-6 space-y-2">
          <button onClick={() => handleNav('home')} className={`w-full text-left py-3 px-3 text-base font-medium rounded-sm min-h-[44px] flex items-center ${activeTab === 'home' ? 'bg-neutral-800 text-white' : 'text-neutral-300'}`}>
            Home
          </button>
          <button onClick={() => handleNav('shop')} className={`w-full text-left py-3 px-3 text-base font-medium rounded-sm min-h-[44px] flex items-center justify-between ${activeTab === 'shop' ? 'bg-neutral-800 text-white' : 'text-neutral-300'}`}>
            <span>Shop Collection</span>
            <span className="text-xs font-mono text-neutral-400 tabular-nums">{availableCount} Available</span>
          </button>
          <button onClick={() => handleNav('about')} className={`w-full text-left py-3 px-3 text-base font-medium rounded-sm min-h-[44px] flex items-center ${activeTab === 'about' ? 'bg-neutral-800 text-white' : 'text-neutral-300'}`}>
            Our Story & Standard
          </button>
          <button onClick={() => handleNav('contact')} className={`w-full text-left py-3 px-3 text-base font-medium rounded-sm min-h-[44px] flex items-center ${activeTab === 'contact' ? 'bg-neutral-800 text-white' : 'text-neutral-300'}`}>
            Contact & Inquiries
          </button>
          <div className="pt-2 border-t border-neutral-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsManagerOpen(true);
              }}
              className="flex-1 py-3 px-3 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-sm flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Owner Stock Manager</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};