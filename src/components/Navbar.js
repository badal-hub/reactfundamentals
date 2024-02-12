import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import food from "../../assets/food.png";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
const Navbar = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { name } = useContext(UserContext);
  const appData = useSelector((store) => store.cart.items);
  console.log(appData);

  return (
    <div className="flex bg-gray-300 justify-between">
      <div className="w-48">
        <img src={food} alt="foodLover" className="foodImg" />
      </div>
      <div className="flex items-center">
        <div className="flex m-4">
          <div className={onlineStatus ? "bg-green-200" : "bg-red-200"}>
            {onlineStatus ? "Online" : "Offline"}
          </div>
          <div className="px-4 font-bold">
            <Link to="/">Home</Link>
          </div>
          <div className="font-bold">
            {" "}
            <Link to="/about">About Us</Link>
          </div>
          <div className="px-4 font-bold">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="font-bold">
            <Link to="/grocery">Grocery</Link>
          </div>
          <Link to="/cart" className="px-4 font-bold text-xl">
            Cart Item - {appData.length}
          </Link>
          <div className="px-4 font-bold">{name}</div>
          <button
            onClick={() => {
              btnName === "login" ? setBtnName("Logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
