import React, { useEffect, useState } from 'react';
import { Image as ImageIcon, Filter } from 'lucide-react';
import { mockGallery } from '../mock';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredGallery, setFilteredGallery] = useState([]);

  useEffect(() => {
    setGallery(mockGallery);
    setFilteredGallery(mockGallery);
  }, []);

  const handleFilter = (category) => {
    setFilter(category);
    if (category === 'all') {
      setFilteredGallery(gallery);
    } else {
      setFilteredGallery(gallery.filter(item => item.category === category));
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: '#DDF4E7' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp" style={{ color: '#124170' }}>
              Gallery
            </h1>
            <p className="text-lg md:text-xl animate-fadeInUp animation-delay-200" style={{ color: '#26667F' }}>
              Glimpses of our vibrant learning environment, student achievements, and memorable events.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5" style={{ color: '#67C090' }} />
              <span className="font-semibold" style={{ color: '#124170' }}>Filter:</span>
            </div>
            <button
              onClick={() => handleFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                filter === 'all' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleFilter('classes')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                filter === 'classes' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Classes
            </button>
            <button
              onClick={() => handleFilter('events')}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                filter === 'events' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Events
            </button>
          </div>

          {/* Gallery Grid */}
          {filteredGallery.length > 0 ? (
            <div className="gallery-grid">
              {filteredGallery.map((item, index) => (
                <div
                  key={item.id}
                  className="gallery-item animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold" style={{ color: '#124170' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm capitalize" style={{ color: '#67C090' }}>
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 mx-auto mb-4" style={{ color: '#DDF4E7' }} />
              <p className="text-lg" style={{ color: '#26667F' }}>
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
