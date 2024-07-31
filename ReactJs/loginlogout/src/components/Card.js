import React from 'react';

const Card = ({onLogout}) => {
  return (
    <div className="card mx-auto" style={{ maxWidth: '600px', padding: '20px' }}>
      <h2 className="card-title text-center">Products</h2>
      <button onClick={onLogout} className="btn btn-danger w-100 mb-3">Logout</button>
      <ul className="list-group">
        <li className="list-group-item">Product 1</li>
        <li className="list-group-item">Product 2</li>
        <li className="list-group-item">Product 3</li>
      </ul>
    </div>
  );
};

export default Card;
