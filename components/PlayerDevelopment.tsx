import React from 'react';

const ShootingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.494h18" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.494h18" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 4.879A9 9 0 114.879 9.879m0-5a9 9 0 015 0" /></svg>;
const DribblingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18v-6m0-4v.01" /></svg>;
const DefenseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-3.5-3.5m0 0L12 8m-3.5 3.5h7M3 12h18" /></svg>;
const ConditioningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;


const PlayerDevelopment: React.FC = () => {
    const programs = [
        {
            title: 'Shooting Excellence',
            description: 'Master proper shooting form, accuracy, and consistency. From free throws to three-pointers, develop reliable shooting technique that translates to game success.',
            icon: <ShootingIcon />
        },
        {
            title: 'Ball Handling Mastery',
            description: 'Advanced dribbling techniques, ball control, and court vision development. Build confidence handling the ball under pressure and create scoring opportunities.',
            icon: <DribblingIcon/>
        },
        {
            title: 'Defensive Skills',
            description: 'Learn positioning, footwork, and anticipation techniques. Develop into a complete player with strong defensive fundamentals and game awareness.',
            icon: <DefenseIcon/>
        },
        {
            title: 'Athletic Conditioning',
            description: 'Sport-specific fitness training to improve speed, agility, and endurance. Build the physical foundation necessary for peak basketball performance.',
            icon: <ConditioningIcon/>
        }
    ];

  return (
    <section id="programs" className="py-20 sm:py-28 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-white">Player Development Programs</h2>
                 <div className="space-y-8">
                     {programs.map(program => (
                        <div key={program.title} className="flex items-start">
                            <div className="flex-shrink-0 text-amber-400">{program.icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-white">{program.title}</h3>
                                <p className="text-zinc-300">{program.description}</p>
                            </div>
                        </div>
                     ))}
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
            <div className="flex justify-center">
                 <img 
                    src="/user_upload/image_4.jpeg" 
                    alt="Player dunking a basketball, showcasing peak athletic development"
                    className="rounded-lg shadow-2xl object-cover w-full max-w-md"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerDevelopment;