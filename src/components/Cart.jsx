import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;

  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-1/2 m-auto text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        {cartItems.length !== 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 && (
          <h1 className="mt-16">Add Items to your cart to Order</h1>
        )}
        <ItemList items={cartItems} />
        {cartItems.length !== 0 && (
          <div className="h-28">
            <p className="text-right mr-16 text-2xl">
              Total : ₹
              {cartItems.reduce(
                (total, item) =>
                  total +
                  (item?.card?.info?.price ||
                    item?.card?.info?.defaultPrice ||
                    0) /
                    100,
                0,
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
