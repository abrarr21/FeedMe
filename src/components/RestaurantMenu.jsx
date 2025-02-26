import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const [restroMenu, setRestroMenu] = useState(null);

  const [showIndex, setShowIndex] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    //console.log(json);
    setRestroMenu(json.data);
  };

  if (restroMenu === null)
    return (
      <h1 className="flex justify-center items-center h-screen font-bold text-3xl">
        Loading....
      </h1>
    );

  const { name, cuisines } = restroMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  //console.log(itemCards);
  //console.log(restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  //console.log(categories);

  return (
    <div className="text-center p-4">
      <button
        className="filter-btn px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleClick}
      >
        Go Back
      </button>
      <h1 className="text-5xl font-bold mt-5">{name}</h1>
      <p className="mt-1 font-bold">{cuisines.join(", ")}</p>
      <h2 className="mt-4 text-3xl font-semibold">- MENU -</h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestuarantMenu;
