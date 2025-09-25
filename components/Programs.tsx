import React from 'react';

const SchoolIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const ClubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const TrophyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m5 14v4m-2-2h4M12 3v10m0 0l-3-3m3 3l3-3m-3 3V3" /><path d="M12 3v10m0 0l-3-3m3 3l3-3m-3 3V3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21h6m-6 0a9 9 0 01-9-9V7a3 3 0 013-3h12a3 3 0 013 3v5a9 9 0 01-9 9z" /></svg>;


const Programs: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="/user_upload/image_6.jpeg" 
              alt="Player perfecting a jump shot during a training program"
              className="rounded-lg shadow-2xl object-cover w-full max-w-md"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-white">Programs Available</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-lg bg-zinc-950">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 bg-zinc-800 text-amber-400">
                    <SchoolIcon/>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">School Programs</h3>
                  <p className="text-zinc-300">Comprehensive basketball programs for primary and secondary schools. From PE curriculum support to competitive team coaching, building skills and school spirit.</p>
                </div>
                <div className="p-8 rounded-lg bg-zinc-950">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 bg-zinc-800 text-amber-400">
                    <ClubIcon/>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Club Coaching</h3>
                  <p className="text-zinc-300">Professional coaching for local basketball clubs including junior development, senior teams, and representative squad preparation. Structured training for all skill levels.</p>
                </div>
              </div>
              <div className="p-8 rounded-lg bg-zinc-950">
                <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 bg-zinc-800 text-amber-400">
                    <TrophyIcon/>
                  </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Competition Prep</h3>
                <p className="text-zinc-300">Specialized coaching for tournaments and competitions. Game strategy development, team coordination, and performance optimization for competitive success.</p>
              </div>
            </div>
            <div className="mt-10">
               <a 
                href="#contact" 
                className="px-8 py-3 font-bold rounded-md transition-all duration-300 bg-amber-500 text-black hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
                aria-label="Start Training Now"
              >
                Start Training Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;