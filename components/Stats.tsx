import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-zinc-900 p-8 rounded-lg text-center transition-all duration-300 border border-zinc-800 hover:border-amber-400/50 hover:-translate-y-2">
                <div className="flex flex-col items-center">
                    {stat.icon}
                    <p className="text-5xl font-bold text-white mt-4">{stat.value}</p>
                    <p className="text-lg text-zinc-400 mt-2">{stat.label}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;