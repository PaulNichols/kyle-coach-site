import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-wider text-white">
          KN <span className="text-amber-400">Coaching</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-zinc-300 hover:text-amber-400 transition-colors duration-200 text-lg">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;