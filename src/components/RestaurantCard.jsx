import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card w-[350px] hover:border hover:border-black rounded-md hover:cursor-pointer hover:bg-gray-300 p-3 bg-gray-200 m-2">
      <img
        className="w-[100%] rounded-lg"
        alt="image"
        src={CON_URL + cloudinaryImageId}
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <h4>{cuisines.join(" , ")}</h4>

      <h4 className="mt-3">{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
