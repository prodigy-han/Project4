import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from './components/CatCard';
import BanList from './components/BanList';
import CatHistory from './components/CatHistory'; // Import the new CatHistory component
import './index.css';

const API_KEY = 'live_gEX8HXhdCJuJwUImiEAr4iiNcqaSbuXkE9bFFTQ1xuiLE5xko72Im60ceANvLqxp';

const App = () => {
  const [catData, setCatData] = useState(null);
  const [banList, setBanList] = useState([]);
  const [viewedCats, setViewedCats] = useState([]); // State to track viewed cats

  const fetchCatData = async () => {
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1`, {
        headers: { 'x-api-key': API_KEY }
      });
      const cat = response.data[0];

      if (cat.breeds && cat.breeds.length > 0) {
        const breedName = cat.breeds[0].name;
        const origin = cat.breeds[0].origin;
        const temperament = cat.breeds[0].temperament;

        // Check if any of the cat's attributes are in the ban list
        if (![breedName, origin, temperament].some(attr => banList.includes(attr))) {
          setCatData(cat);
          setViewedCats(prev => [...prev, cat]); // Add the viewed cat to history
        } else {
          fetchCatData(); // Fetch a new cat if any attribute is banned
        }
      } else {
        fetchCatData(); // Retry if no breed information is available
      }
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };

  const addToBanList = (breed) => {
    setBanList([...banList, breed]);
  };

  const removeFromBanList = (breed) => {
    setBanList(banList.filter(item => item !== breed));
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <div className="app-container">
      <h1>Discover New Cats!</h1>
      <button onClick={fetchCatData}>Find a New Cat</button>
      {catData && <CatCard catData={catData} addToBanList={addToBanList} />}
      <BanList banList={banList} removeFromBanList={removeFromBanList} />
      <CatHistory viewedCats={viewedCats} /> {/* Render the CatHistory component */}
    </div>
  );
};

export default App;