import React from 'react';
import { HIGHLIGHT_VIDEOS, GALLERY_IMAGES } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section id="showcase" className="py-20 bg-black sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Coaching Showcase</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Explore my coaching methods, drill breakdowns, and player success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HIGHLIGHT_VIDEOS.map((video) => (
            <div key={video.youtubeId} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
            <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-white">Gallery</h3>
                <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">A glimpse into training sessions, games, and team moments.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {GALLERY_IMAGES.map((image, index) => (
                    <div key={index} className="group relative">
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                            <p className="text-white text-center p-4">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Highlights;