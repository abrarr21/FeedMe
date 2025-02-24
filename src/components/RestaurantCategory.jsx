import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4  bg-gray-50 hover:bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>↓</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
