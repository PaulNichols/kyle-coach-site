import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-24 md:py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-fuchsia-500">Kyle Nichols</h3>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight text-white">
              Accredited Basketball Coach & Referee
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-lg">
              Elevating basketball skills across the Redlands with professional coaching expertise and personalized training programs
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 font-bold rounded-md transition-all duration-300 bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg hover:shadow-fuchsia-600/40 transform hover:-translate-y-1"
                aria-label="Start Training Now, navigates to contact section"
              >
                Start Training Now
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 font-bold rounded-md border border-fuchsia-500 text-fuchsia-500 transition-all duration-300 hover:bg-fuchsia-500 hover:text-white hover:shadow-lg hover:shadow-fuchsia-500/40 transform hover:-translate-y-1"
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