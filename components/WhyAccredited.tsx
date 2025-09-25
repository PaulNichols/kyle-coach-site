import React from 'react';

const ProfessionalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-4a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MethodsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const ResultsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;


const WhyAccredited: React.FC = () => {
  const benefits = [
    {
      icon: <ProfessionalIcon />,
      title: 'Professional Standards',
      description: 'Basketball Australia accreditation ensures coaching meets national standards for safety, skill development, and player welfare. You\'re guaranteed quality instruction.',
    },
    {
      icon: <MethodsIcon />,
      title: 'Proven Methods',
      description: 'Evidence-based coaching techniques developed through rigorous training and certification processes. Modern approaches that maximize player development potential.',
    },
    {
      icon: <ResultsIcon />,
      title: 'Measurable Results',
      description: 'Structured programs with clear progression pathways and performance benchmarks. Track improvement through systematic skill development and regular assessments.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose Accredited Coaching?</h2>
          <p className="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
            Choosing an accredited coach means you're investing in a structured, safe, and professional development pathway recognized by Australia's national basketball authority.
          </p>
        </div>

        <div className="my-16 flex justify-center">
            <img 
              src="/user_upload/accreditation-framework.png" 
              alt="Basketball Australia Coach Accreditation Framework diagram"
              className="rounded-lg shadow-2xl object-contain w-full max-w-4xl bg-zinc-800/50 p-4 backdrop-blur-sm"
            />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {benefits.map((item) => (
            <div key={item.title} className="bg-zinc-900 p-8 rounded-lg">
                <div className="flex-shrink-0 text-amber-400 mb-4">
                   {item.icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-zinc-300">{item.description}</p>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAccredited;