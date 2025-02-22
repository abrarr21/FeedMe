import { Route, Routes } from "react-router-dom";
import RestuarantMenu from "../components/RestaurantMenu";
import Body from "../components/Body";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/restaurants/:resId" element={<RestuarantMenu />} />
    </Routes>
  );
};

export default Routing;
