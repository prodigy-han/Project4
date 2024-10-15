import React from 'react';

const CatCard = ({ catData, addToBanList }) => {
  const { url, breeds } = catData;
  const breed = breeds[0]?.name || "Unknown Breed";
  const origin = breeds[0]?.origin || "Unknown Origin";
  const description = breeds[0]?.description || "No description available.";
  const weight = breeds[0]?.weight?.imperial || "Not available"; // Get weight info in imperial units

  return (
    <div className="cat-card">
      <img src={url} alt={breed} />
      <p>{description}</p>
      <button onClick={() => addToBanList(breed)}>{breed}</button>
      <button onClick={() => addToBanList(origin)}>{origin}</button>
      <button onClick={() => addToBanList(weight)}> {weight} lbs</button> {/* Change temperament to weight */}
    </div>
  );
};

export default CatCard;