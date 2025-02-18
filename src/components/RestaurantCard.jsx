const RestaurantCard = () => {
  return (
    <div className="res-card w-[250px] h-[300px] hover:border hover:border-black p-3 bg-gray-200 m-2">
      <img
        className="w-[100%]"
        alt="image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q3oyvdxdoexcrmmffyet"
      />
      <h2>Meghna Kitchens</h2>
      <h4>Biryani, North India, Asia</h4>

      <h4>4.3 Stars</h4>
      <h4>34 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
