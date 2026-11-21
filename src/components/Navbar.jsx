import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import Logo from './Logo';
import { GYM_CONFIG } from '../data/gymData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Location', path: '/location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md py-3.5 shadow-xl border-b border-[#222222]'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#A6A6A6] hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {/* Active Bottom Red Underline Accent */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-red rounded-full transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg transform hover:-translate-y-0.5 group"
            >
              <span>Join Now</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/contact"
              className="px-3.5 py-1.5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover"
            >
              Join
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#181818] text-white hover:text-brand-red border border-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-brand-red"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[460px] opacity-100 border-b border-[#222222]' : 'max-h-0 opacity-0'
        } bg-[#0B0B0B]/98 backdrop-blur-xl px-4`}
      >
        <div className="py-4 space-y-2 border-t border-[#1F1F1F] mt-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[#181818] text-brand-red font-semibold border-l-4 border-brand-red'
                    : 'text-[#A6A6A6] hover:bg-[#151515] hover:text-white'
                }`
              }
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </NavLink>
          ))}

          <div className="pt-3 pb-2">
            <Link
              to="/contact"
              className="flex items-center justify-center w-full py-3.5 rounded-xl bg-brand-red text-white font-bold tracking-wider uppercase text-sm shadow-glow-red hover:bg-brand-red-hover"
            >
              <span>Join AP GYM Today</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="pt-2 text-center text-xs text-[#888888] flex items-center justify-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>Hotline: {GYM_CONFIG.phoneDisplay}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
