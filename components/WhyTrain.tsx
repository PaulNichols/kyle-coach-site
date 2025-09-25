import React from 'react';

const WhyTrain: React.FC = () => {
  const credentials = [
    'Basketball Australia Accredited Coach',
    'Association Level Coach Certification',
    'Certified Basketball Referee',
    '8+ years competitive playing experience',
    'Plays at QSL level',
    'Youth development specialist',
    'Certificate III in Sport & Business',
    'Currently studying Diploma in Coaching with Brian Kerle',
    'First Aid certified',
    'Blue Card holder',
  ];

  return (
    <section id="why-train" className="py-20 sm:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Why Train with Kyle</h2>
            <h3 className="text-3xl font-semibold mb-4 text-slate-100">Experience & Credentials</h3>
            <p className="mb-6 text-slate-300 leading-relaxed">
              Kyle brings over 8 years of competitive basketball experience, including playing at QSL level, and holds full accreditation from Basketball Australia. His journey began as a junior representative player before transitioning into coaching excellence. Kyle also possesses a Certificate III in Sport & Business, is currently studying a Diploma in Coaching with Australian Olympic legend Brian Kerle, and holds First Aid and Blue Card certifications.
            </p>
            <p className="mb-8 text-slate-300 leading-relaxed">
              Certified in advanced player development techniques, Kyle specializes in fundamental skill building, game strategy, and mental performance coaching. His comprehensive understanding of the Australian basketball system ensures players receive world-class training. He is also a certified basketball referee, bringing a deep understanding of game rules and strategy to his coaching.
            </p>
            <ul className="space-y-3 text-slate-300">
              {credentials.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src="/user_upload/image_3.jpeg"
              alt="Kyle Nichols with a group of basketball referees" 
              className="rounded-lg shadow-2xl object-contain w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrain;