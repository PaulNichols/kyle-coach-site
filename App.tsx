import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyTrain from './components/WhyTrain';
import Programs from './components/Programs';
import OneOnOne from './components/OneOnOne';
import PlayerDevelopment from './components/PlayerDevelopment';
import WhyAccredited from './components/WhyAccredited';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-200 font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyTrain />
        <Programs />
        <OneOnOne />
        <PlayerDevelopment />
        <WhyAccredited />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;