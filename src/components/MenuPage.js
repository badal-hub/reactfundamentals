import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentDataFetch from "./utils/useRestaurentDataFetch";
const MenuPage = () => {
  const {id} = useParams();
const menuData = useRestaurentDataFetch(id);
console.log(menuData,"MENUDATA")
  return !menuData ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h2> {menuData?.data?.cards[0]?.card?.card?.info?.name}- </h2>
        {menuData?.data?.cards[0]?.card?.card?.info?.city}
      </div>
      <div>
        cost for two -{" "}
        {menuData?.data?.cards[0]?.card?.card?.info?.costForTwo / 100}
      </div>
      <div>
        {menuData?.data?.cards[0]?.card?.card?.info?.cuisines?.map(
          (element) => (
            <div key={element}>.{element}&nbsp;</div>
          )
        )}
      </div>
      <h3>More menu data</h3>
      <div>
        <div className="menu">
          {menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (elem) => {
              return (
                <div className="menuMap" key={elem.card.info.id}>
                  <div>
                    <h4>Name - {elem.card.info.name}</h4>
                    <p> Description {elem.card.info.description}</p>
                    <h5>Price - {elem.card.info.price / 100}</h5>
                  </div>

                  <div>
                    <div>
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${elem?.card.info?.imageId}`}
                        alt="img"
                        width="150"
                        height="150"
                      />
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.imageId}`}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
