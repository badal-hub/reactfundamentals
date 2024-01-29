import { useState } from "react";
import { Link } from "react-router-dom";
import food from "../../assets/food.png";
import useOnlineStatus from "./utils/useOnlineStatus";
const Navbar = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="navbarCom">
      <div>
        <img src={food} alt="foodLover" className="foodImg" />
      </div>
      <div className="navItem">
        <div className="items">
        <div>
            {
              onlineStatus? "Online":"Offline"
            }
        &nbsp;
          </div>
          <div>
            &nbsp;
            <Link to="/">Home</Link>
          </div>
          <div className="spacingNavItem">
            {" "}
            <Link to="/about">About Us</Link>
          </div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            &nbsp;&nbsp;
          <Link to="/grocery">Grocery</Link>

          </div>
          <div className="spacingNavItem">Cart Item</div>
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
