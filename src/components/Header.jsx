import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header flex justify-between border border-black m-2">
      <div className="logo-container">
        <img className="logo w-[150px] h-[100px] ml-32" src={LOGO_URL} />
      </div>

      <div className="nav-items px-20 py-5 font-semibold">
        <ul className="flex text-[20px]">
          <li className="p-[10px] m-[10px]">Home</li>
          <li className="p-[10px] m-[10px]">About</li>
          <li className="p-[10px] m-[10px]">Contact</li>
          <li className="p-[10px] m-[10px]">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
