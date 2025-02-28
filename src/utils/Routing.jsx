import { Route, Routes } from "react-router-dom";
import RestuarantMenu from "../components/RestaurantMenu";
import Body from "../components/Body";
import About from "../components/About";
import Cart from "../components/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/restaurants/:resId" element={<RestuarantMenu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
