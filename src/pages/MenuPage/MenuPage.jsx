import React, { useState } from 'react';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import FoodDisplay from '../FoodDisplay/FoodDisplay';

const MenuPage = () => {
  // State to manage the selected category.
  // 'All' is the default, matching your FoodDisplay logic.
  const [category, setCategory] = useState('All');

  return (
    <div className="menu-page">
      {/* 1. The ExploreMenu Carousel & Category Selector */}
      {/* We pass down the current category and the function to update it */}
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* 2. The Food Item Grid */}
      {/* FoodDisplay filters and shows items based on the selected category */}
      <FoodDisplay category={category} />

      {/* The FoodItem component is a child of FoodDisplay.
          It is rendered multiple times inside FoodDisplay's map function.
          We do not include it directly here. */}
    </div>
  );
};

export default MenuPage;