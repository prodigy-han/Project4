import React from 'react';

const CatHistory = ({ viewedCats }) => {
  return (
    <div className="cat-history">
      <h3>Viewed Cats</h3>
      <ul>
        {viewedCats.map((cat, index) => (
          <li key={index}>
            <img src={cat.url} alt={cat.breeds[0]?.name} style={{ width: '100px', height: 'auto' }} />
            <div>
              <h4>{cat.breeds[0]?.name || 'Unknown Breed'}</h4>
              <p>Origin: {cat.breeds[0]?.origin || 'Unknown Origin'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatHistory;