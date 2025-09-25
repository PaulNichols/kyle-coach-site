import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="relative bg-slate-900 p-8 rounded-lg text-center transition-transform transform hover:-translate-y-2 duration-300 group">
                <div className="absolute -inset-px bg-gradient-to-r from-fuchsia-600 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm"></div>
                <div className="relative z-10 flex flex-col items-center">
                    {stat.icon}
                    <p className="text-5xl font-bold text-white mt-4">{stat.value}</p>
                    <p className="text-lg text-slate-400 mt-2">{stat.label}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;