import React from 'react';
import { CONTACT_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-8">
      <div className="container mx-auto px-6 text-center text-zinc-400">
        <div className="flex justify-center items-center space-x-6 mb-6">
          {CONTACT_LINKS.filter(link => link.name.startsWith('@')).map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-zinc-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110"
            >
              {React.cloneElement(link.icon, { className: 'h-7 w-7' })}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} KN Coaching. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;