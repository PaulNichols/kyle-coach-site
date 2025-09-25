import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-24 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight text-white">
              Accredited Basketball Coach & Referee
            </h1>
            <p className="mt-6 text-lg text-zinc-300 max-w-lg">
              Elevating basketball skills across the Redlands with professional coaching expertise and personalized training programs
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 font-bold rounded-md transition-all duration-300 bg-amber-500 text-black hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
                aria-label="Start Training Now, navigates to contact section"
              >
                Start Training Now
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 font-bold rounded-md border border-amber-400 text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-black hover:shadow-lg hover:shadow-amber-400/30 transform hover:-translate-y-1"
                aria-label="View Services, navigates to showcase section"
              >
                View Services
              </a>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/user_upload/image_0.jpeg"
              alt="Kyle Nichols coaching his team from the bench" 
              className="rounded-lg shadow-2xl object-cover w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;