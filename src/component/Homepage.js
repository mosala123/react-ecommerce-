import React from 'react';
import './Homepage.css';

const Homepage = () => {
  // استخدام صور حقيقية من Unsplash
  const images = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format', // سماعات
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format', // ساعة
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format', // حذاء أحمر
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format', // نظارة شمسية
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format'  // كاميرا
  ];

  return (
    <div className="homepage-container container-fluid">
      <div className="container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade mt-3">
          {/* Indicators */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel inner */}
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img 
                  src={img} 
                  className="d-block w-100" 
                  alt={`Product ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;