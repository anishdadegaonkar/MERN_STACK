// src/components/TourCard.js
import React from 'react';

const TourCard = ({ tour, onDelete }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem', position: 'relative', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
      <div className="card-img" style={{ height: '300px', backgroundImage: `url(${tour.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}></div>
      <div className="card-body text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <h5 className="card-title">{tour.title}</h5>
        <p className="card-text">{tour.description}</p>
        <button className="btn btn-danger" onClick={() => onDelete(tour.id)}>Delete</button>
      </div>
      <style jsx>{`
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }
        .card-img {
          filter: brightness(70%);
        }
        .card:hover .card-img {
          filter: brightness(50%);
        }
      `}</style>
    </div>
  );
};

export default TourCard;
