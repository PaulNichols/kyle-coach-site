import React from 'react';
import { CONTACT_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
          Ready to elevate your game? Contact me to schedule a 1:1 session or discuss coaching opportunities.
        </p>

        <div className="mt-12 flex flex-col items-center space-y-4">
          {CONTACT_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-sm flex items-center justify-center space-x-4 text-lg text-slate-200 hover:text-fuchsia-500 transition-colors duration-300 px-6 py-4 rounded-lg bg-slate-950 hover:bg-slate-800"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;