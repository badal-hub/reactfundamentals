import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { Img_url } from "./utils/mockData";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length === 0 ? (
    <h1 className="text-center font-bold text-xl p-2">No item in the cart Page</h1>
  ) : (
    <>
      <h1  className="text-center font-bold text-xl p-2"> Cart page</h1>
      <div className="flex justify-center items-center">
        <ItemList data={cartItems} />
      </div>
    </>
  );
};
export default Cart;
