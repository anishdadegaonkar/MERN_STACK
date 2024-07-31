// src/App.js
import React, { useState } from 'react';
import TourCard from './components/TourCard';
const App = () => {
  const [tours, setTours] = useState([
    { id: 1, title: 'Beach Getaway', description: 'Enjoy a relaxing beach vacation.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8fHwxNjI2MTcyMzg0&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 2, title: 'Mountain Adventure', description: 'Hike the beautiful mountains.', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vdW50YWluJTIwaGlraW5nfGVufDB8fHx8MTYyNjE3MjM4NA&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 3, title: 'City Exploration', description: 'Discover the hidden gems of the city.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHl8ZW58MHx8fHwxNjI2MTcyMzg0&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 4, title: 'Mountain Adventure', description: 'Hike the beautiful mountains.', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vdW50YWluJTIwaGlraW5nfGVufDB8fHx8MTYyNjE3MjM4NA&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 5, title: 'Desert Expedition', description: 'Explore the vast desert landscapes.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8fHwxNjI2MTcyMzg0&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 6, title: 'Cultural Tour', description: 'Immerse yourself in rich cultural experiences.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHl8ZW58MHx8fHwxNjI2MTcyMzg0&ixlib=rb-1.2.1&q=80&w=400' }
  ]);

  const deleteTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="container" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607607023217-4b9f0c29b3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhY2tncm91bmR8ZW58MHx8fDE2MjcwNDE2NTk&ixlib=rb-1.2.1&q=80&w=1600)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem', minHeight: '100vh' }}>
      <h1 className="my-4 text-center text-white">Tour Planner</h1>
      <div className="row">
        {tours.map(tour => (
          <div key={tour.id} className="col-md-4 mb-4">
            <TourCard tour={tour} onDelete={deleteTour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
