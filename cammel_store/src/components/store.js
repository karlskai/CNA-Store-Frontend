// src/components/Store.js

import React from 'react';
import FetchCamels from './fetchCamels';

//https://react-bootstrap.netlify.app/docs/components/placeholder/
//import Card from 'react-bootstrap/Card';

const Store = () => {
  return (
    <div>
      <h2>Store Page</h2>
      <p>Welcome to our store! Products will be listed here.</p>

      {/* fetch data from product API*/}
      <FetchCamels />

    </div>
  );
};

export default Store;
