import React from 'react';

const BanList = ({ banList, removeFromBanList }) => (
  <div className="ban-list">
    <h3>Banned Breeds</h3>
    <ul>
      {banList.map((breed, index) => (
        <li key={index}>
          <button onClick={() => removeFromBanList(breed)}>{breed}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BanList;