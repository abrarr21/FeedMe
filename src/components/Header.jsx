import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  //subscribing to the store using a selector(cartItems)
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between border-b-2 border-t-2 shadow-lg m-2">
      <div className="logo-container">
        <img className="logo w-[200px] h-[100px] ml-32 mt-5 " src={LOGO_URL} />
      </div>

      <div className="nav-items px-20 py-5 font-bold">
        <ul className="flex text-[21px]">
          <li className="p-[10px] m-[10px]">
            Connection:{onlineStatus ? " 🟢" : " 🔴"}
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/">Home</Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/about">About</Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/cart">
              <i class="ri-shopping-cart-2-fill"></i> ({cartItems.length})
            </Link>
          </li>
          <button className="px-2 font-bold text-blue-600 cursor-pointer">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
