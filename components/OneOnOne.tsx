import React from 'react';

const OneOnOne: React.FC = () => {
  const steps = [
    {
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of current abilities and identification of improvement areas',
    },
    {
      title: 'Custom Program',
      description: 'Personalized training plan designed to target specific skills and goals',
    },
    {
      title: 'Progress Tracking',
      description: 'Regular monitoring and adjustment of training methods for optimal results',
    },
  ];

  return (
    <section id="one-on-one" className="py-20 sm:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-white">One-on-One Training Excellence</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-slate-100">Personalized Basketball Development</h3>
            <p className="mb-6 text-slate-300 leading-relaxed">
              Individual coaching sessions tailored to each player's unique needs and goals. Whether you're a beginner learning fundamentals or an advanced player refining technique, Kyle's one-on-one sessions deliver results.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Sessions focus on skill development, confidence building, and game performance enhancement through personalized attention and customized training programs.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/user_upload/image_5.jpeg" 
              alt="Close up of a player taking a jump shot during a game"
              className="rounded-lg shadow-2xl object-cover w-full max-w-md"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {steps.map((step, index) => (
            <div key={index} className="relative pt-8 border-t-2 border-slate-700">
               <span className="absolute top-0 left-0 -mt-4 bg-slate-950 px-2 font-serif text-2xl text-fuchsia-500">
                0{index + 1}
              </span>
              <h4 className="text-2xl font-bold mb-2 text-white">{step.title}</h4>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneOnOne;