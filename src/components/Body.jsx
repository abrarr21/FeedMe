import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BODY_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_URL);

    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are offline!! Connect to Internet</h1>;

  if (listOfRestaurant.length === 0) {
    return (
      <h1 className="flex justify-center items-center h-screen font-bold text-3xl">
        Loading....
      </h1>
    );
  }

  const handleClearBtn = () => {
    setSearchText("");
  };

  return (
    <div className="body m-5">
      <div className="fiter-bar flex gap-5">
        <div className="search-bar">
          <input
            className="border border-black rounded-lg p-1"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText.length !== 0 && (
            <i
              onClick={handleClearBtn}
              className="ri-close-line mr-1 text-xl cursor-pointer"
            ></i>
          )}
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => {
              const searchedFilter = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()),
              );

              setFilterRestaurant(searchedFilter);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4.4,
            );

            console.log(filterList);
            setFilterRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
