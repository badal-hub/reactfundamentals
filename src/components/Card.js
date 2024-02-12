import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserContext from "./utils/UserContext";

export const Card = () => {
  const [filterData, setFilterData] = useState([]);
  const [listOfData, setListOfData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [background, setBackground] = useState("white");
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    console.log("useEffect called");

    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("fetchData called");

    try {
      const dataFromApi = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=23.361178&lng=85.357228"
      );
      console.log("dataFromApi ", dataFromApi);

      const jsonData = await dataFromApi.json();
      console.log("jsonData ", jsonData?.data);

      setListOfData(
        jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setFilterData(
        jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onscrollHandler = () => {
    // setBackground("red");
    console.log("scollr called");
  };
  const { name, setUser } = useContext(UserContext);
  return filterData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className="flexItem"
      style={{ background: `${background}` }}
      onScroll={() => onscrollHandler()}
    >
      <div className="flex">
        <div className="m-4 ">
          <input
            className=" p-2 border border-black rounded"
            type="text"
            placeholder="search you restro name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-200 m-4 px-4 py-2 rounded-md"
            onClick={() => {
              const searchItems = listOfData.filter((element) =>
                element.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterData(searchItems);
            }}
          >
            search
          </button>
          <button
            className="bg-green-300 m-4 px-4 py-2 rounded-md"
            onClick={() => {
              const filterRestaurant = listOfData.filter(
                (element) => element.info.avgRating > 4
              );
              setFilterData(filterRestaurant);
            }}
          >
            Filter through rating 3+
          </button>
          <input
            value={name}
            className="border-black p-2"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterData &&
          filterData.map((element) => {
            return (
              <Link
                to={`/menu/${element?.info?.id}`}
                key={element?.info?.id}
                className="w-[250] m-4 bg-slate-400 rounded-md hover:bg-blue-200"
              >
                {element?.info?.isOpen ? (
                  <RestaurantCardWithPromoted restCard={element} />
                ) : (
                  <RestaurantCard restCard={element} />
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Card;
