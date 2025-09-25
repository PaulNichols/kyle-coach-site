import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Coaching Philosophy</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Building smarter, tougher, and more skilled players from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img 
              src="/images/about-coach-huddle.jpeg" 
              alt="Kyle Nichols coaching team in a huddle" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-semibold text-white mb-4">From Player to Mentor</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey on the court has taught me that success is forged through discipline, intelligence, and relentless hard work. After a competitive playing career, I've transitioned my passion into coaching, where I'm dedicated to developing the next generation of athletes. My philosophy is rooted in mastering fundamentals, elevating basketball IQ, and building the mental fortitude required to excel under pressure.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I offer personalized, one-on-one training sessions and strategic team consulting. My approach involves detailed film analysis, customized drill progressions, and mentorship that extends beyond the court. I am committed to helping every player unlock their full potential and achieve their basketball aspirations, whether that's making the varsity team or competing at the collegiate level.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-gray-800/50 p-6 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300">
                  {stat.icon}
                  <p className="text-4xl font-bold text-white mt-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;