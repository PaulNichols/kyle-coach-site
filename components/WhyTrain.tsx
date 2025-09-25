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
    <section id="why-train" className="py-20 sm:py-28 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Why Train with KN</h2>
            <h3 className="text-3xl font-semibold mb-4 text-zinc-100">Experience & Credentials</h3>
            <p className="mb-6 text-zinc-300 leading-relaxed">
              With over 8 years of competitive basketball experience, including playing at QSL level, and full accreditation from Basketball Australia. The journey began as a junior representative player before transitioning into coaching excellence, and also possessing a Certificate III in Sport & Business, currently studying a Diploma in Coaching with Australian Olympic legend Brian Kerle, and holding First Aid and Blue Card certifications.
            </p>
            <p className="mb-8 text-zinc-300 leading-relaxed">
              Certified in advanced player development techniques, specializing in fundamental skill building, game strategy, and mental performance coaching. A comprehensive understanding of the Australian basketball system ensures players receive world-class training. Also a certified basketball referee, bringing a deep understanding of game rules and strategy to coaching.
            </p>
            <ul className="space-y-3 text-zinc-300">
              {credentials.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src="/user_upload/image_3.jpeg"
              alt="Group of basketball referees" 
              className="rounded-lg shadow-2xl object-contain w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrain;