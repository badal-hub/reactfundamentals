import { useParams } from "react-router-dom";
import { createContext, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import useRestaurentDataFetch from "./utils/useRestaurentDataFetch";
const MenuPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { id } = useParams();
  const menuData = useRestaurentDataFetch(id);
  console.log(menuData, "MENUDATA");
  const category =
    menuData?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (element) =>
        element?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return !menuData ? (
    <Shimmer />
  ) : (
    <div className="text-center ">
      <div>
        <h2 className="p-4 font-bold">
          Restro Name - {menuData?.data?.cards[2]?.card?.card?.info?.name}{" "}
        </h2>
        Address - {menuData?.data?.cards[2]?.card?.card?.info?.city}
      </div>
      <div>
        cost for two -{" "}
        {menuData?.data?.cards[2]?.card?.card?.info?.costForTwo / 100}
      </div>
      <div>
        {menuData?.data?.cards[2]?.card?.card?.info?.cuisines?.map(
          (element) => (
            <div key={element}>{element}&nbsp;</div>
          )
        )}
      </div>

      <div>
        {category?.map((c, index) => {
          console.log(c, "c");
          return (
            <div key={c.card.card.title}>
              <RestaurantCategory
                data={c.card.card}
                showItems={index === activeIndex ? true : false}
                setActiveIndex={()=>setActiveIndex(index)}
              />
            </div>
          );
        })}
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default MenuPage;