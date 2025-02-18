import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body m-5">
      <div className="search-bar">SEARCH</div>
      <div className="res-container flex flex-wrap">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
